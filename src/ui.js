import Project from "./projects.js";
import Task from "./tasks.js";

// create new default project :
const newDefaultProject = new Project("Sport");
const newDefaultTask = new Task(
  "Gym",
  "Chest Workout, Cardio.",
  "Today",
  "High"
);
// DOM form elements :
let formTask = document.getElementById("form-task");
let formTitle = formTask[0];
let formDetails = formTask[1];
let formDate = formTask[2];
// func to show default project name :
function showDefaultProject() {
  const projectItems = document.getElementById("sidebar-project-items");
  const defaultProjectDiv = document.createElement("div");
  defaultProjectDiv.id = "default-project-div";
  defaultProjectDiv.textContent = newDefaultProject.name;
  projectItems.appendChild(defaultProjectDiv);
}
showDefaultProject();

// event to display project :
const projectName = document.getElementById("default-project-div");
projectName.addEventListener("click", () => {
  createDefaultProject();
  createDefaultTask();
  showTaskForm();
});

// func to create project task :
const createDefaultProject = () => {
  const defaultProjectOutput = document.getElementById(
    "default-project-output"
  );
  defaultProjectOutput.style.cssText = "display: flex";

  defaultProjectOutput.innerHTML = `
      <span id="project-title"">${newDefaultProject.name}</span>
      <button id="add-task-button">+ Add Task</button>
  `;
};
// func to show default task container :
const createDefaultTask = () => {
  const defaultTaskOutput = document.getElementById("default-task-output");
  defaultTaskOutput.style.cssText = "display: flex";
  defaultTaskOutput.innerHTML = `
        <div id="check-title-div">
        <input type="checkbox" />
        <div id="task-output-tilte">${newDefaultTask.title}</div>
        </div>
        <div id="task-output-details">${newDefaultTask.description}</div>
        <div id="task-output-date">${newDefaultTask.dueDate}</div>`;
};
// func to show task form :
function showTaskForm() {
  const addTaskButton = document.getElementById("add-task-button");
  addTaskButton.addEventListener("click", () => {
    formTask.style.cssText = "display: flex";
  });
}
// func to shw form outputs :
const showFormOutput = () => {
  // return form submit if empty :
  if (
    formTitle.value === "" ||
    formDetails.value === "" ||
    formDate.value === ""
  )
    return;
  // create new form output :
  const projectTaskContainer = document.getElementById(
    "project-output-container"
  );
  const formTaskOutput = document.createElement("div");
  formTaskOutput.id = "form-task-output";
  formTaskOutput.innerHTML = `
      <div id="check-title-div">
      <input type="checkbox" />
      <div id="task-output-tilte">${formTitle.value}</div>
      </div>
      <div id="task-output-details">${formDetails.value}</div>
      <div id="task-output-date">${formDate.value}</div>`;
  projectTaskContainer.appendChild(formTaskOutput);
  cleanFormData();
};
// clean Form Data :
const cleanFormData = () => {
  formTask.reset();
};
// form submit event for showing the the form output  :
const addSubmitButton = document.querySelector('input[type="submit"]');
addSubmitButton.addEventListener("click", showFormOutput);
// form cancel button to remove form :
const cancelSubmitButton = document.getElementById("cancel-submit");
cancelSubmitButton.addEventListener("click", function () {
  formTask.style.cssText = "display: none";
});

// function displayFormOutput() {
//   // form elements  :
//   let formTask = document.getElementById("form-task");
//   let formTitle = formTask[0];
//   let formDetails = formTask[1];
//   let formDate = formTask[2];
//   if (
//     formTitle.value === "" ||
//     formDetails.value === "" ||
//     formDate.value === ""
//   )
//     return;
//   // display form outputs :
//   const createFormOutputElement = () => {
//     const projectTaskContainer = document.getElementById(
//       "project-task-container"
//     );
//     const taskOutputContainer = document.createElement("div");
//     taskOutputContainer.id = "task-output-container";
//     taskOutputContainer.innerHTML = `
//       <input type="checkbox" />
//       <div id="task-output-tilte">${formTitle.value}</div>
//       <div id="task-output-details">${formDetails.value}</div>
//       <div id="task-output-date">${formDate.value}</div>`;
//     projectTaskContainer.appendChild(taskOutputContainer);
//   };
//   createFormOutputElement();
//   // clean form :
//   const cleanFormData = () => {
//     formTask.reset();
//   };
//   cleanFormData();
// }
// // event call for add project button :
// const addProjectContainer = document.getElementById(
//   "add-project-name-container"
// );
// const addProjectButton = document.getElementById("add-project-button");
// const projectNameInput = document.getElementById("project-name-input");
// addProjectButton.addEventListener("click", addProjectName);

// function addProjectName() {
//   addProjectContainer.style.cssText = "display : flex";
//   if (projectNameInput.value === "") return;
//   const projectContainer = document.getElementById("project-container");
//   const newProject = new Project(projectNameInput.value);
//   const newProjectDiv = document.createElement("div");
//   newProjectDiv.id = "new-project-div";
//   newProjectDiv.textContent = newProject.name;
//   projectContainer.appendChild(newProjectDiv);
// }
// ########################################""
// function displayFormOutput() {
//   const getFormOutput = () => {
//     const formTask = document.getElementById("form-task");
//     const formTitleOutput = formTask[0].value;
//     const formDetailsOutput = formTask[1].value;
//     const formDateOutput = formTask[2].value;
//     if (
//       formTitleOutput === "" ||
//       formDetailsOutput === "" ||
//       formDateOutput === ""
//     )
//       return;
//     // formTask.style.cssText = "display: none";
//   };
//   getFormOutput();
//   const createFormOutputElement = () => {
//     const projectTaskContainer = document.getElementById(
//       "project-task-container"
//     );
//     const taskOutputContainer = document.createElement("div");
//     taskOutputContainer.id = "task-output-container";
//     // taskOutputContainer.style.cssText = "display: flex";
//     taskOutputContainer.innerHTML = `
//     <div id="task-output-container" style="display: none"></div>
//     <input type="checkbox" />
//     <div id="task-output-tilte">${formTitleOutput}</div>
//     <div id="task-output-details">${formDetailsOutput}</div>
//     <div id="task-output-date">${formDateOutput}</div>
//     <div id="task-output-priority">
//       <button>test</button>
//     </div>
//     </div>`;
//     projectTaskContainer.appendChild(taskOutputContainer);
//   };
//   createFormOutputElement();
// }

// function getFormOutput() {
//   const formTask = document.getElementById("form-task");
//   const formTitleOutput = formTask[0].value;
//   const formDetailsOutput = formTask[1].value;
//   const formDateOutput = formTask[2].value;

//   console.log(formTask);
//   console.log(formTitleOutput);
//   console.log(formDetailsOutput);
//   console.log(formDateOutput);
// }

// function getFormData() {
//   const formTask = document.getElementById("form-task");
//   const formTitleOutput = formTask[0].value;
//   const formDetailsOutput = formTask[1].value;
//   const formDateOutput = formTask[2].value;

//   // const priorityButtons = document.querySelectorAll(".priority-buttons");
//   // let chosenPriorityButton;
//   // priorityButtons.forEach((button) => {
//   //   button.addEventListener("click", function () {
//   //     chosenPriorityButton = this;
//   //   });
//   // });

//   console.log(formTitleOutput);
//   console.log(formDetailsOutput);
//   console.log(formDateOutput);
//   return {
//     formTitleOutput,
//     formDetailsOutput,
//     formDateOutput,
//   };
// }
//
// // func to create project task :
// function createFormTask() {
//   const projectTaskContainer = document.getElementById(
//     "project-task-container"
//   );
//   const formTask = document.createElement("form");
//   formTask.id = "form-task";
//   formTask.setAttribute("method", "dialog");
//   formTask.innerHTML = `
//           <div id="form-title">
//             <label>Title:</label>
//             <input type="text" placeholder="What To Do:" required />
//           </div>
//           <div id="form-details">
//             <label>Details(optional):</label>
//             <input placeholder="Description:" />
//           </div>
//           <div id="form-date">
//             <label>Date:</label>
//             <input type="date" required />
//           </div>
//           <div id="form-priority">
//             <label>Priority(optional): </label>
//             <div id="form-priority-buttons" required>
//               <input class="priority-buttons" type="button" value="Low" />
//               <input class="priority-buttons" type="button" value="Medium" />
//               <input class="priority-buttons" type="button" value="High" />
//             </div>
//           </div>
//           <div id="form-submit">
//             <input type="submit" value="Add" />
//             <input type="button" value="cancel" />
//           </div>`;
//   projectTaskContainer.appendChild(formTask);
//   createFormOutput();
// }
// event call for default project tasks :
// function editTasks() {
//   const defaultTaskButton = document.getElementById("add-task-button");
//   if (defaultTaskButton === null) return;
//   defaultTaskButton.addEventListener("click", createFormTask);
// }

// function createTaskOutputElement() {
//   const title = getFormOutput().formTitleOutput;
//   const details = getFormOutput().formDetailsOutput;
//   const date = getFormOutput().formDateOutput;

//   const projectTaskContainer = document.getElementById(
//     "project-task-container"
//   );
//   const taskOutputContainer = document.createElement("div");
//   taskOutputContainer.id = "task-output-container";
//   // taskOutputContainer.style.cssText = "display: flex";
//   taskOutputContainer.innerHTML = `
//   <div id="task-output-container" style="display: none"></div>
//   <input type="checkbox" />
//   <div id="task-output-tilte">${title}</div>
//   <div id="task-output-details">${details}</div>
//   <div id="task-output-date">${date}</div>
//   <div id="task-output-priority">
//     <button>test</button>
//   </div>
//   </div>`;
//   projectTaskContainer.appendChild(taskOutputContainer);
// }
