const newListComponent = document.getElementById("add-list-pop-up");
const addListButton = document.getElementById("add-list-button");
const cancelButton = document.getElementById("add-list-cancel-button");
const confirmButton = document.getElementById("add-list-confirm-button");

const lists = document.getElementById("lists");

let listNames = [];

addListButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    newListComponent.classList.remove("hidden"); // Show the pop-up component
});

cancelButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    newListComponent.classList.add("hidden"); // Hide the pop-up component
});

confirmButton.addEventListener("click", function() {
    listNames.push(document.getElementById("add-list-name").value); // Add the new list name to the array
    console.log(listNames); // Log the list names to the console
});