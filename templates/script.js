const main = document.querySelector('main.content .scans-ct');

// VARIABLES -------------------------------------------------------------------------------------------------------

const hospitalZones = {
  "1": "Reception",
  "2": "Emergency Room",
  "3": "Radiology",
  "4": "Pediatrics",
  "5": "Surgery",
  "6": "Cardiology",
  "7": "Dermatology",
  "8": "Neurology",
  "9": "Oncology"
};


data.forEach(item => {
  const routerZone = hospitalZones[item.router_id] || "Unknown Zone";
  item.clean_router_id = routerZone;
});


/*data.forEach(scan => {
  let row = document.createElement('div');
  row.classList.add('row');
  row.setAttribute('data-id', scan.mop_id);

  row.innerHTML = `
    <p>${scan.id}</p>
    <p>${scan.mop_id}</p>
    <p>(${scan.router_id}) ${scan.clean_router_id}</p>
    <p>${scan.scanner_id}</p>
    <p>${scan.data}</p>
  `;
  
  main.appendChild(row);
});*/

function findMopsNotToday(data) {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0].replace(/-/g, '/');
  const todayMops = data.filter(item => item.data.startsWith(todayString)).map(item => item.mop_id);

  const result = data.filter(item => {
    const date = item.data.split('-')[0];
    return date !== todayString && !todayMops.includes(item.mop_id);
  });

  return result.map(item => item);
}

const missingMops = findMopsNotToday(data);
console.log(missingMops);

function manageLostItemSwitch() {
  const toggle = document.getElementById("toggle");
  const status = document.getElementById("status");

  toggle.addEventListener("change", () => {
    console.log("Toggle switched. Status:", toggle.checked ? "ON" : "OFF");
    status.textContent = toggle.checked ? "ON" : "OFF";

    main.classList.toggle('whos-missing');
    missingMops.forEach(el => {
      let thisel = document.querySelector(`[data-id="${el.mop_id}"]`);
      thisel.classList.add("not-me");
    });
  });
}

function makeThemGreen() {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0].replace(/-/g, '/');
  const todayMops = data.filter(item => item.data.startsWith(todayString)).map(item => item);

  todayMops.forEach(element => {
    let thisel = document.querySelector(`[data-id="${element.mop_id}"]`);
    thisel.classList.add("green");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  manageLostItemSwitch();
  makeThemGreen();
});
