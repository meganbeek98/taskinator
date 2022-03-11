let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function(event) {

    event.preventDefault();

    let listItemEl = document.createElement("li");   // Creates a new task item.
    listItemEl.className = "task-item";              // Styles the new task item.
    listItemEl.textContent = "This is a new task.";   // Adds the text.
    tasksToDoEl.appendChild(listItemEl);          // Appends this element to the task list. // ( Append === inserts content to the end of already existing elements. 
};

formEl.addEventListener("submit", createTaskHandler);
