const completedBtns = document.querySelectorAll("#completed-btn");
const taskNumber = document.getElementById("task-number");
const doneNumber = document.getElementById("done-number");
const activityContainer = document.getElementById("activity-container");

const changeText = document.getElementById("change-text");
const title = document.getElementById("title").innerText;
let count = 0;

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (event) {
    alert("Board Update Successfully");
    event.target.disabled = true;

    count = count + 1;
    if(count === 6) {
      alert('Congrates! You have completed all the current task');
    }

    let convertTaskNumber = parseInt(taskNumber.innerText);
    let convertDoneNumber = parseInt(doneNumber.innerText);

    taskNumber.innerText = convertTaskNumber - 1;
    doneNumber.innerText = convertDoneNumber + 1;

    const p = document.createElement("p");
    p.classList.add("activity-log");
    activityContainer.appendChild(p);

    const buttonContainer = event.target.parentElement;
    const buttonMainContainer = buttonContainer.parentElement;
    const title = buttonMainContainer.querySelector("h2").innerText;

    const date = new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const amOrPm = hour < 12 ? "AM" : "PM";

    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour = hour - 12;
    }

    const realTime = `${hour}:${minute}:${second} ${amOrPm}`;
    p.innerText = `You have Complete The Task ${title} at ${realTime}`;
  });
}

document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    activityContainer.innerHTML = "";
  });

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "page/blog.html";
});

const date = new Date();
const todayDate = date.toDateString();

const ajkerDate = document.getElementById("ajker-date");
ajkerDate.innerText = todayDate;

document.getElementById("change-color").addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const changeColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = changeColor;
});


