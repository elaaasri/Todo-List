import Project, {
  addDefaultProject,
  addDefaultProjectTasks,
} from "./projects.js";

console.log(addDefaultProject(), addDefaultProjectTasks());

function showDefaultProject() {
  const projectContainer = document.getElementById("project-container");
  const defaultProjectDiv = document.createElement("div");
  defaultProjectDiv.id = "default-project-div";
  defaultProjectDiv.textContent = addDefaultProject().name;
  projectContainer.appendChild(defaultProjectDiv);
}
showDefaultProject();

// func to create project task :
function createTaskContainer() {
  const projectItem = document.getElementById("project-item");
  projectItem.innerHTML = `
      <span id="project-title"">${addDefaultProject().name}</span>
      <button id="add-task-button">+ Add Task</button>
  `;
  editTasks();
}
// event call for default project name :
const defaultProjectDiv = document.getElementById("default-project-div");
defaultProjectDiv.addEventListener("click", createTaskContainer);

// // func to create project task :
function createFormTask() {
  const projectTaskContainer = document.getElementById(
    "project-task-container"
  );
  const formTask = document.createElement("form");
  formTask.id = "form-task";
  formTask.setAttribute("method", "dialog");
  formTask.innerHTML = `
          <div id="form-title">
            <label>Title:</label>
            <input type="text" placeholder="What To Do:" required />
          </div>
          <div id="form-details">
            <label>Details(optional):</label>
            <input placeholder="Description:" />
          </div>
          <div id="form-date">
            <label>Date:</label>
            <input type="date" required />
          </div>
          <div id="form-priority">
            <label>Priority(optional): </label>
            <div id="form-priority-buttons" required>
              <input type="button" value="Low" />
              <input type="button" value="Medium" />
              <input type="button" value="High" />
            </div>
          </div>
          <div id="form-submit">
            <input type="submit" value="Add" />
            <input type="button" value="cancel" />
          </div>`;
  projectTaskContainer.appendChild(formTask);
}
// event call for default project tasks :
function editTasks() {
  const defaultTaskButton = document.getElementById("add-task-button");
  if (defaultTaskButton === null) return;
  defaultTaskButton.addEventListener("click", createFormTask);
}
// event call for form submit :
// function getFormTasks() {
//   const submitButton = document.querySelector(
//     'input[type="submit"][value="Add"]'
//   );

//   console.log(submitButton);
// }

const testButton = document.getElementById("test");

function testFunc() {
  const submitButton = document.querySelector(
    'input[type="submit"][value="Add"]'
  );
  console.log(submitButton);
}
testButton.addEventListener("click", testFunc);

// <!-- <form id="form-task">
// <div id="form-title">
//   <label>Title:</label>
//   <input type="text" placeholder="What To Do:" autofocus required />
// </div>
// <div id="form-details">
//   <label>Details(optional):</label>
//   <input placeholder="Description:" />
// </div>
// <div id="form-date">
//   <label>Date:</label>
//   <input type="date" required />
// </div>
// <div id="form-priority">
//   <label>Priority: </label>
//   <div id="form-priority-buttons">
//     <input type="button" value="Low" />
//     <input type="button" value="Medium" />
//     <input type="button" value="High" />
//   </div>
// </div>
// <div id="form-submit">
//   <input type="submit" value="Add" />
//   <input type="button" value="cancel" />
// </div>
// </form> -->
