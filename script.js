const completedBtns = document.querySelectorAll("#completed-btn");

const taskNumber = document.getElementById("task-number");
const doneNumber = document.getElementById("done-number");

const changeText = document.getElementById("change-text");

const title = document.getElementById("title").innerText;

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", function (event) {
    alert("Board Update Successfully");
    event.target.disabled = true;

    let convertTaskNumber = parseInt(taskNumber.innerText);
    let convertDoneNumber = parseInt(doneNumber.innerText);

    taskNumber.innerText = convertTaskNumber - 1;
    doneNumber.innerText = convertDoneNumber + 1;
    
    changeText.innerText = `You have Complete The Task ${title} at 12:48:15 PM`;
  });
}
