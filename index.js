const monthE1 = document.querySelector(".date h1");
const fulldaysE1 = document.querySelector(".date p");
const daysE1 = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastday = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstday = new Date(new Date().getFullYear(), monthInx, 1).getDay();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthE1.innerText = months[monthInx];
fulldaysE1.innerText = new Date().toDateString();

let days = "";

for (let i = firstday; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastday; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
}



daysE1.innerHTML = days;