let nairaValue = document.getElementById("naira-value");

const dollarValue = document.getElementById("dollar-value");
const poundsValue = document.getElementById("pounds-value");
const euroValue = document.getElementById("euro-value");

const dateToday = document.getElementById("date-today");
const timeToday = document.getElementById("time-today");

let setMeridien;

nairaValue.addEventListener("input", function () {
  dollarValue.textContent = (nairaValue.value / 498).toFixed(3);
  poundsValue.textContent = (nairaValue.value / 695).toFixed(3);
  euroValue.textContent = (nairaValue.value / 585).toFixed(3);
});

dateToday.textContent = `Buy Rate as at 23/07/2021`;
