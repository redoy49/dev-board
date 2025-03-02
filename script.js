const completedBtns = document.querySelectorAll("#completed-btn");

const taskNumber = document.getElementById("task-number");
const doneNumber = document.getElementById("done-number");

const changeText = document.getElementById("change-text");

const title = document.getElementById("title").innerText;

const activityContainer = document.getElementById("activity-container");

let count = 0;

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (event) {
    alert("Board Update Successfully");
    event.target.disabled = true;

    // second alert
    count = count + 1;
    if(count === 6) {
      alert('Congratlation');
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

    // current time
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
    // const todayTime = date.toTimeString().split(" ")[0]; // "11:22:29"
    p.innerText = `You have Complete The Task ${title} at ${realTime}`;
  });
}

// Activity Log
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    activityContainer.innerHTML = "";
  });

// Discover something
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "page/blog.html";
});

// Show today date
const date = new Date();
const todayDate = date.toDateString(); // "Sun Mar 02 2025"

const ajkerDate = document.getElementById("ajker-date");
ajkerDate.innerText = todayDate;
console.log(ajkerDate.innerText);

// Change Background Color
document.getElementById("change-color").addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const changeColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = changeColor;
});


