const completedBtns = document.querySelectorAll("#completed-btn");

const taskNumber = document.getElementById("task-number");
const doneNumber = document.getElementById("done-number");

const changeText = document.getElementById("change-text");

const title = document.getElementById("title").innerText;

const activityContainer = document.getElementById("activity-container");

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (event) {
    alert("Board Update Successfully");
    event.target.disabled = true;

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
    p.innerText = `You have Complete The Task ${title} at 12:48:15 PM`;
  });
}

// Activity Log
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    activityContainer.innerHTML = "";
  });
