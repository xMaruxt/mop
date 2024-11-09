const main = document.querySelector('main.content .scans-ct');
/*const data = [
  {
    "id": 1,
    "mop_id": "MOP001",
    "router_id": "R4",
    "scanner_id": "S2",
    "data": "2024/11/09-08:12"
  },
  {
    "id": 2,
    "mop_id": "MOP002",
    "router_id": "R1",
    "scanner_id": "S3",
    "data": "2024/11/09-09:45"
  },
  {
    "id": 3,
    "mop_id": "MOP003",
    "router_id": "R7",
    "scanner_id": "S5",
    "data": "2024/11/08-13:21"
  },
  {
    "id": 4,
    "mop_id": "MOP004",
    "router_id": "R2",
    "scanner_id": "S4",
    "data": "2024/11/09-11:30"
  },
  {
    "id": 5,
    "mop_id": "MOP005",
    "router_id": "R6",
    "scanner_id": "S1",
    "data": "2024/11/09-10:05"
  },
  {
    "id": 6,
    "mop_id": "MOP006",
    "router_id": "R3",
    "scanner_id": "S2",
    "data": "2024/11/08-08:17"
  },
  {
    "id": 7,
    "mop_id": "MOP007",
    "router_id": "R9",
    "scanner_id": "S5",
    "data": "2024/11/09-14:48"
  },
  {
    "id": 8,
    "mop_id": "MOP008",
    "router_id": "R5",
    "scanner_id": "S1",
    "data": "2024/11/09-15:12"
  },
  {
    "id": 9,
    "mop_id": "MOP009",
    "router_id": "R2",
    "scanner_id": "S4",
    "data": "2024/11/08-09:36"
  },
  {
    "id": 10,
    "mop_id": "MOP010",
    "router_id": "R4",
    "scanner_id": "S3",
    "data": "2024/11/09-17:25"
  },
  {
    "id": 11,
    "mop_id": "MOP011",
    "router_id": "R1",
    "scanner_id": "S2",
    "data": "2024/11/09-13:09"
  },
  {
    "id": 12,
    "mop_id": "MOP012",
    "router_id": "R6",
    "scanner_id": "S5",
    "data": "2024/11/09-12:46"
  },
  {
    "id": 13,
    "mop_id": "MOP013",
    "router_id": "R8",
    "scanner_id": "S1",
    "data": "2024/11/09-18:30"
  },
  {
    "id": 14,
    "mop_id": "MOP014",
    "router_id": "R3",
    "scanner_id": "S4",
    "data": "2024/11/08-14:59"
  },
  {
    "id": 15,
    "mop_id": "MOP015",
    "router_id": "R7",
    "scanner_id": "S2",
    "data": "2024/11/09-16:17"
  },
  {
    "id": 16,
    "mop_id": "MOP016",
    "router_id": "R5",
    "scanner_id": "S3",
    "data": "2024/11/09-07:41"
  },
  {
    "id": 17,
    "mop_id": "MOP017",
    "router_id": "R9",
    "scanner_id": "S5",
    "data": "2024/11/08-15:33"
  },
  {
    "id": 18,
    "mop_id": "MOP018",
    "router_id": "R2",
    "scanner_id": "S1",
    "data": "2024/11/09-19:05"
  },
  {
    "id": 19,
    "mop_id": "MOP019",
    "router_id": "R4",
    "scanner_id": "S4",
    "data": "2024/11/09-20:18"
  },
  {
    "id": 20,
    "mop_id": "MOP020",
    "router_id": "R1",
    "scanner_id": "S2",
    "data": "2024/11/09-11:57"
  },
  {
    "id": 21,
    "mop_id": "MOP001",
    "router_id": "R4",
    "scanner_id": "S2",
    "data": "2024/11/07-08:12"
  },
  {
    "id": 22,
    "mop_id": "MOP002",
    "router_id": "R1",
    "scanner_id": "S3",
    "data": "2024/11/07-09:45"
  },
  {
    "id": 23,
    "mop_id": "MOP003",
    "router_id": "R7",
    "scanner_id": "S5",
    "data": "2024/11/07-13:21"
  },
  {
    "id": 24,
    "mop_id": "MOP004",
    "router_id": "R2",
    "scanner_id": "S4",
    "data": "2024/11/07-11:30"
  },
  {
    "id": 25,
    "mop_id": "MOP005",
    "router_id": "R6",
    "scanner_id": "S1",
    "data": "2024/11/07-10:05"
  },
  {
    "id": 26,
    "mop_id": "MOP006",
    "router_id": "R3",
    "scanner_id": "S2",
    "data": "2024/11/07-08:17"
  },
  {
    "id": 27,
    "mop_id": "MOP007",
    "router_id": "R9",
    "scanner_id": "S5",
    "data": "2024/11/07-14:48"
  },
  {
    "id": 28,
    "mop_id": "MOP008",
    "router_id": "R5",
    "scanner_id": "S1",
    "data": "2024/11/07-15:12"
  },
  {
    "id": 29,
    "mop_id": "MOP009",
    "router_id": "R2",
    "scanner_id": "S4",
    "data": "2024/11/07-09:36"
  },
  {
    "id": 30,
    "mop_id": "MOP010",
    "router_id": "R4",
    "scanner_id": "S3",
    "data": "2024/11/07-17:25"
  },
  {
    "id": 31,
    "mop_id": "MOP011",
    "router_id": "R1",
    "scanner_id": "S2",
    "data": "2024/11/07-13:09"
  },
  {
    "id": 32,
    "mop_id": "MOP012",
    "router_id": "R6",
    "scanner_id": "S5",
    "data": "2024/11/07-12:46"
  },
  {
    "id": 33,
    "mop_id": "MOP013",
    "router_id": "R8",
    "scanner_id": "S1",
    "data": "2024/11/07-18:30"
  },
  {
    "id": 34,
    "mop_id": "MOP014",
    "router_id": "R3",
    "scanner_id": "S4",
    "data": "2024/11/07-14:59"
  },
  {
    "id": 35,
    "mop_id": "MOP015",
    "router_id": "R7",
    "scanner_id": "S2",
    "data": "2024/11/07-16:17"
  },
  {
    "id": 36,
    "mop_id": "MOP016",
    "router_id": "R5",
    "scanner_id": "S3",
    "data": "2024/11/07-07:41"
  },
  {
    "id": 37,
    "mop_id": "MOP017",
    "router_id": "R9",
    "scanner_id": "S5",
    "data": "2024/11/07-15:33"
  },
  {
    "id": 38,
    "mop_id": "MOP018",
    "router_id": "R2",
    "scanner_id": "S1",
    "data": "2024/11/07-19:12"
  },
  {
    "id": 39,
    "mop_id": "MOP019",
    "router_id": "R6",
    "scanner_id": "S3",
    "data": "2024/11/07-10:58"
  },
  {
    "id": 40,
    "mop_id": "MOP020",
    "router_id": "R8",
    "scanner_id": "S2",
    "data": "2024/11/07-09:23"
  }  
];*/

// VARIABLES -------------------------------------------------------------------------------------------------------

const hospitalZones = {
  "R1": "Reception",
  "R2": "Emergency Room",
  "R3": "Radiology",
  "R4": "Pediatrics",
  "R5": "Surgery",
  "R6": "Cardiology",
  "R7": "Dermatology",
  "R8": "Neurology",
  "R9": "Oncology"
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
});

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
console.log(missingMops);*/

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
