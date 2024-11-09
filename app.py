from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from uuid import getnode as get_mac

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mop_zone.db'
db = SQLAlchemy(app)

class Mop(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Zone(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    macaddress = db.Column(db.String(50))

class MopZone(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idMop = db.Column(db.Integer, db.ForeignKey('mop.id'))
    idZone = db.Column(db.Integer, db.ForeignKey('zone.id'))

# Endpoint per aggiungere una nuova entry in MopZone
@app.route('/add-mopzone', methods=['POST'])
def add_mopzone():
    data = request.json
    id_mop = data.get('idMop')
    id_zone = data.get('idZone')

    # Ottieni il MAC address del dispositivo
    mac = get_mac()
    mac_address_str = ':'.join([format((mac >> elements) & 0xff, '02x') for elements in range(0, 8*6, 8)][::-1])
    
    print(f"MAC Address del dispositivo: {mac_address_str}")        
    # Verifica se il MAC address esiste nella tabella Zone
    zone = Zone.query.filter_by(macaddress=mac_address_str).first()

    if zone:
        # Se il MAC address è trovato, inserisci nella tabella MopZone
        new_entry = MopZone(idMop=id_mop, idZone=zone.id)
        db.session.add(new_entry)
        db.session.commit()
        return jsonify({"message": "Entry added to MopZone", "idZone": zone.id}), 201
    else:
        return jsonify({"message": "MAC address not found in Zone table"}), 404

# Endpoint per ottenere tutte le entry in MopZone
@app.route('/mopzones', methods=['GET'])
def get_mopzones():
    mopzones = MopZone.query.all()  # Ottieni tutte le entry dalla tabella MopZone
    result = []
    for mopzone in mopzones:
        result.append({"id": mopzone.id, "idMop": mopzone.idMop, "idZone": mopzone.idZone})
    return jsonify(result)

# Endpoint per visualizzare la pagina delle MopZone
@app.route('/view-mopzones', methods=['GET'])
def view_mopzones():
    mopzones = MopZone.query.all()  # Ottieni tutte le entry dalla tabella MopZone
    return render_template('mopzones.html', mopzones=mopzones)

# Endpoint per aggiungere una nuova zona
@app.route('/add-zone', methods=['POST'])
def add_zone():
    data = request.json
    macaddress = data.get('macaddress')  # Assume che la zona venga identificata da un MAC address

    # Crea una nuova zona
    new_zone = Zone(macaddress=macaddress)
    db.session.add(new_zone)
    db.session.commit()

    return jsonify({"message": "Zone added"}), 201

# Serve la homepage con il QR scanner
@app.route('/')
def index():
    return render_template('index.html')  # Serve la pagina HTML del QR scanner

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Crea mop_zone.db e le tabelle
    app.run(debug=True)
