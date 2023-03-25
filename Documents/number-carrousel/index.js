const body = document.querySelector("body");
const div = document.createElement("div");
body.append(div);
const allDaysDiv = document.createElement("all-days");
div.append(allDaysDiv);
const days = [];
let counter = 0;

function getDays(counter) {
  const date = new Date();
  let day = date.getDate() + counter;

  for (let i = 0; i < 3; i++) {
    if (days.length === 0) {
      days.push(day);
    } else {
      day += 1;
      days.push(day);
    }
  }
  return days;
}

function createBtns() {
  const backBtn = document.createElement("button");
  backBtn.className = "back-button";
  backBtn.textContent = "<";
  const forwardBtn = document.createElement("button");
  forwardBtn.className = "forward-button";
  forwardBtn.textContent = ">";
  div.append(backBtn, forwardBtn);
  div.prepend(backBtn);
}

function renderDates(num) {
  const allDays = getDays(num);

  allDays.forEach((day) => {
    const span = document.createElement("span");
    span.textContent = day;
    span.className = "day";

    allDaysDiv.append(span);
  });
}

renderDates(counter);
createBtns();

const forwardButton = document.querySelector(".forward-button");
forwardButton.addEventListener("click", () => {
  for (let i = 0; i < days.length; ) {
    days.shift();
  }
  document.querySelectorAll(".day").forEach((date) => {
    date.remove();
  });

  renderDates(counter + 1);
  counter++;
});

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", () => {
  for (let i = 0; i < days.length; ) {
    days.shift();
  }
  document.querySelectorAll(".day").forEach((date) => {
    date.remove();
  });

  renderDates(counter - 1);
  counter--;
});
