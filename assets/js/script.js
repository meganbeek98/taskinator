let pageContentEl = document.querySelector("#page-content");
let taskIdCounter = 0;
let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");


let taskFormHandler = function(event) {
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Check input values
  if (!taskNameInput || !taskTypeInput) {
      alert("You need to fill out the task form!");
      return false;
    }
    formEl.reset();

  // package up data as an object
  let taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

let createTaskEl = function (taskDataObj) {
  // create list item
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //Add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create div to hold task info and add to list item
  let taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

  // Increase task counter for next unique id
  taskIdCounter++;
  

  let createTaskActions = function(taskId) {
        // create container to hold elements
        let actionContainerEl = document.createElement("div");
        actionContainerEl.className = "task-actions";

        // create edit button
        let editButtonEl = document.createElement("button");
        editButtonEl.textContent = "Edit";
        editButtonEl.className = "btn edit-btn";
        editButtonEl.setAttribute("data-task-id", taskId);
        actionContainerEl.appendChild(editButtonEl);    // appendChild

        // create delete button
        let deleteButtonEl = document.createElement("button");
        deleteButtonEl.textContent = "Delete";
        deleteButtonEl.className = "btn delete-btn";
        deleteButtonEl.setAttribute("data-task-id", taskId);
        actionContainerEl.appendChild(deleteButtonEl);  // appendChild
        
        // create change status dropdown
        let statusSelectEl = document.createElement("select");
        statusSelectEl.setAttribute("name", "status-change");
        statusSelectEl.setAttribute("data-task-id", taskId);
        statusSelectEl.className = "select-status";
        actionContainerEl.appendChild(statusSelectEl);  //appendChild

        // create status options
        let statusChoices = ["To Do", "In Progress", "Completed"];

        for (let i = 0; i < statusChoices.length; i++) {
            // Create option element
            let statusOptionEl = document.createdElement("option");
            statusOptionEl.setAttribute("value", statusChoices[i]);
            statusOptionEl.textContent = statusChoices[i];
            // append to select
            statusSelectEl.appendChild(statusOptionEl);
            
        }
        
        return actionContainerEl;

    };

};


let taskButtonHandler = function(event) {
    // get target element from event
    let targetEl = event.target;
  
    // edit button was clicked
    if (targetEl.matches(".edit-btn")) {
      let taskId = targetEl.getAttribute("data-task-id");
      editTask(taskId);
    } 
    // delete button was clicked
    else if (targetEl.matches(".delete-btn")) {
      let taskId = targetEl.getAttribute("data-task-id");
      deleteTask(taskId);
    }
};

let deleteTask = function(taskId) {
    console.log(taskId);
    // find task list element with taskId value and remove it
    let taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
};

// Create a new task
formEl.addEventListener("submit", taskFormHandler);

// For edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// For changing the status
// pageContentEl.addEventListener("change", taskStatusChangeHandler);
