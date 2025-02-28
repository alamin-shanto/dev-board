// background colour

const colors = ["green", "blue", "purple", "red", "orange", "yellow"];
let index = 0;

function changeBgColor() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

// date

const [week, month, day, year] = new Date().toDateString().split(" ");
document.getElementById("week_day").textContent = week;
document.getElementById("date").textContent = `${month} ${day} ${year}`;

// clear history button
