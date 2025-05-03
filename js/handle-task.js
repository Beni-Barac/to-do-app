const taskDescription = document.getElementById("add-task-description");
const addTaskButton = document.getElementById("add-task-button");

const task = document.querySelector(".task");
const taskList = document.getElementById("task-list-component");

loadListState(); // Load the saved state of the task list from local storage

addTaskButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const clone = task.cloneNode(true);
    clone.querySelector(".task-description").innerText = taskDescription.value;
    taskList.appendChild(clone);
    taskDescription.value = ""; // Clear the input field
    saveListState(); // Save the current state of the task list to local storage
});

taskList.addEventListener("click", function (parent) {
    if(parent.target.classList.contains("remove-task-button")) {
        const taskToRemove = parent.target.closest(".task");
        taskToRemove.remove();
    }
    saveListState(); // Save the current state of the task list to local storage
});

function saveListState() {
    localStorage.setItem("savedList", taskList.innerHTML);
}

function loadListState() {
    const savedList = localStorage.getItem("savedList");
    if (savedList) {
        taskList.innerHTML = savedList;
    }
}