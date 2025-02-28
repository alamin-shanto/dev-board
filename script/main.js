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

// addcount & subcount

function updateCount(event) {
  alert("Board updated successfully");
  let addCount = document.getElementById("addCount");
  let convertedAddCount = parseInt(addCount.innerText);

  let subCount = document.getElementById("subCount");
  let convertedSubCount = parseInt(subCount.innerText);

  addCount.innerText = convertedAddCount + 1;
  subCount.innerText = convertedSubCount - 1;

  let button = event.target;
  button.disabled = true;

  button.classList.add(
    "bg-gray-400",
    "cursor-not-allowed",
    "pointer-events-none"
  );
}

// clear history button
