const body = document.querySelector("body");
const div = document.createElement("div");
body.append(div);

function getDays(counter) {
  const date = new Date();
  let day = date.getDate();
  const dates = [];

  for (let i = 0; i < counter; i++) {
    if (dates.length === 0) {
      dates.push(day);
    } else {
      day += 1;
      dates.push(day);
    }
  }
  return dates;
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

function dates() {
  const arrOfDays = getDays(3);

  arrOfDays.forEach((day) => {
    const span = document.createElement("span");
    span.className = "day";
    span.textContent = day;

    div.append(span);
  });
}

dates();
createBtns();
