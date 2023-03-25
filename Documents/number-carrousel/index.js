const body = document.querySelector("body");
const div = document.createElement("div");
body.append(div);
const arrOfDates = [];


function getDays(counter) {
  const date = new Date();
  let day = date.getDate() + counter;

  for (let i = 0; i < 3; i++) {
    if (arrOfDates.length === 0) {
      arrOfDates.push(day);
    } else {
      day += 1;
      arrOfDates.push(day);
    }
  }
  return arrOfDates;
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

function dates(num) {
  const arrOfDays = getDays(num);

  arrOfDays.forEach((day) => {
    const span = document.createElement("span");
    span.className = "day";
    span.textContent = day;

    div.append(span);
  });
}

dates(0);
createBtns();

const forwardButton = document.querySelector(".forward-button");

forwardButton.addEventListener("click", () => {
  for (let i = 0; i < arrOfDates.length; i++) {
    arrOfDates.shift();
  };
  let counter = 1;
  let arr = getDays(counter);
  dates(arr);
});
