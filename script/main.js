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
let completedButtons = 0;
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

  // when all 6 button completed give this alert

  completedButtons++;
  if (completedButtons === 6) {
    alert("Congrats! All tasks completed");
  }

  // get cards h4 & add in the log

  let cardTitle =
    button.parentElement.parentElement.parentElement.querySelector(
      "h4"
    ).innerText;

  let time = new Date().toLocaleTimeString();

  document.getElementById(
    "activityLog"
  ).innerHTML += `<p class="my-3"> You have completed the task <b> ${cardTitle} </b> at ${time} </p>`;
}

// clear history button

function clearHistory() {
  document.getElementById("activityLog").innerHTML = "";
}
