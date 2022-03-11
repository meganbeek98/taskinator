let buttonEl = document.querySelector("#save-task");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function() {
    let listItemEl = document.createElement("li");   // Creates a new task item.
    listItemEl.className = "task-item";              // Styles the new task item.
    listItemEl.textContent = "This is a new task."   // Adds the text.
    tasksToDoEl.appendChild(listItemEl);            // Appends this element to the task list.
};                                               // ( Append === inserts content to the end of already existing elements.)

buttonEl.addEventListener("click", createTaskHandler);
