import Project from "./projects.js";
import Task from "./tasks.js";

// create new default project :
// const newDefaultProject = new Project("Sport");
// const newDefaultTask = new Task("Gym", "Chest Workout, Cardio.", "Today");
// DOM form elements :
// const projectTaskContainer = document.getElementById(
//   "project-output-container"
// );
// const defaultProjectOutput = document.getElementById("default-project-output");
// let formTask = document.getElementById("form-task");
// let formTitle = formTask[0];
// let formDetails = formTask[1];
// let formDate = formTask[2];
// func to show default project name :
// function showDefaultProject() {
//   const projectItems = document.getElementById("sidebar-project-items");
//   const defaultProjectDiv = document.createElement("div");
//   defaultProjectDiv.id = "default-project-div";
//   defaultProjectDiv.textContent = newDefaultProject.name;
//   projectItems.appendChild(defaultProjectDiv);
// }
// showDefaultProject();

// event to display project :
// const projectName = document.getElementById("default-project-div");
// projectName.addEventListener("click", () => {
//   createDefaultProject();
//   createDefaultTask();
//   showTaskForm();
//   defaultCheckboxButtonStyles();
// });

// func to create project task :
// const createDefaultProject = () => {
//   defaultProjectOutput.style.cssText = "display: flex";
//   defaultProjectOutput.innerHTML = `
//       <span id="project-title"">${newDefaultProject.name}</span>
//       <button id="add-task-button">+ Add Task</button>
//   `;
// };
// // func to show default task container :
// const createDefaultTask = () => {
//   const defaultTaskOutput = document.getElementById("default-task-output");
//   defaultTaskOutput.style.cssText = "display: flex";
//   defaultTaskOutput.innerHTML = `
//         <div id="check-title-div">
//         <input id="default-checkbox-button" type="checkbox" />
//         <div id="default-output-title">${newDefaultTask.title}</div>
//         </div>
//         <div id="default-output-details">${newDefaultTask.description}</div>
//         <div id="default-output-date">${newDefaultTask.dueDate}</div>`;
// };
// func to show task form :
// function showTaskForm() {
//   const addTaskButton = document.getElementById("add-task-button");
//   addTaskButton.addEventListener("click", () => {
//     formTask.style.cssText = "display: flex";
//   });
// }
// func to shw form outputs :
// const showFormOutput = () => {
//   // return form submit if empty :
//   if (
//     formTitle.value === "" ||
//     formDetails.value === "" ||
//     formDate.value === ""
//   )
//     return;
//   // create new form output :
//   const formTaskOutput = document.createElement("div");
//   formTaskOutput.id = "form-task-output";
//   formTaskOutput.innerHTML = `
//       <div id="check-title-div">
//       <input id="checkbox-button" type="checkbox" />
//       <div id="task-output-title">${formTitle.value}</div>
//       </div>
//       <div id="task-output-details">${formDetails.value}</div>
//       <div id="task-output-date">${formDate.value}</div>`;
//   projectTaskContainer.appendChild(formTaskOutput);
//   cleanFormData();
//   checkboxButtonStyles();
// };
// // clean Form Data :
// const cleanFormData = () => {
//   formTask.reset();
// };
// form submit event for showing the the form output  :
// const addSubmitButton = document.querySelector('input[type="submit"]');
// addSubmitButton.addEventListener("click", showFormOutput);
// form cancel button to remove form :
// const cancelSubmitButton = document.getElementById("cancel-submit");
// cancelSubmitButton.addEventListener("click", function () {
//   formTask.style.cssText = "display: none";
// });

// func to style defualt elements :
// const defaultCheckboxButtonStyles = () => {
//   // default output project DOM :
//   const defaultCheckbox = document.getElementById("default-checkbox-button");
//   const defaultTitle = document.getElementById("default-output-title");
//   const defaultDetails = document.getElementById("default-output-details");
//   const defaultDate = document.getElementById("default-output-date");
//   // func to style default elements :
//   const styleDefaultElements = () => {
//     if (defaultCheckbox.checked) {
//       defaultTitle.style.cssText = "text-decoration : line-through";
//       defaultDetails.style.cssText = "text-decoration : line-through";
//       defaultDate.style.cssText = "text-decoration : line-through";
//     } else {
//       defaultTitle.style.cssText = "text-decoration : none";
//       defaultDetails.style.cssText = "text-decoration : none";
//       defaultDate.style.cssText = "text-decoration : none";
//     }
//   };
//   // default button event :
//   defaultCheckbox.addEventListener("change", styleDefaultElements);
// };
// // func to style the task output when checkbox checked :
// function checkboxButtonStyles() {
//   const allCheckboxButton = document.querySelectorAll("#checkbox-button");
//   allCheckboxButton.forEach((checkboxBtn) => {
//     checkboxBtn.addEventListener("change", () => {
//       // task output DOM :
//       const parentElement = checkboxBtn.parentElement.parentElement;
//       const taskOutputTitle = parentElement.querySelector("#task-output-title");
//       const taskOutputDetails = parentElement.querySelector(
//         "#task-output-details"
//       );
//       const taskOutputDate = parentElement.querySelector("#task-output-date");
//       // condition to check if current the checkbox checked or not :
//       if (checkboxBtn.checked) {
//         taskOutputTitle.style.cssText = "text-decoration : line-through";
//         taskOutputDetails.style.cssText = "text-decoration : line-through";
//         taskOutputDate.style.cssText = "text-decoration : line-through";
//       } else {
//         taskOutputTitle.style.cssText = "text-decoration : none";
//         taskOutputDetails.style.cssText = "text-decoration : none";
//         taskOutputDate.style.cssText = "text-decoration : none";
//       }
//     });
//   });
// }

// new project name form DOM:
// const projectItems = document.getElementById("sidebar-project-items");
// const addProjectContainer = document.getElementById("add-new-project-form");
// const addProjectButton = document.getElementById("add-project-button");
// const projectNameInput = document.getElementById("project-name-input");
// const addProjectNameButton = document.getElementById("add-project-name-button");
// console.log(addProjectNameButton);
// event to show new project form :
// addProjectButton.addEventListener("click", showNewProjectFrom);
// function showNewProjectFrom() {
//   addProjectContainer.style.cssText = "display : flex";
// }
// event to create new project name :
// addProjectNameButton.addEventListener("click", function () {
//   createNewProjectName();
//   createSideBarElement();
// });

// DOM Elements :
// const projectTaskContainer = document.getElementById(
// "project-output-container"
// );
// DOM Form :
const projectPreviewContainer = document.getElementById("project-preview");
const projectHeaderName = document.getElementById("project-header-name");
const addTaskButton = document.getElementById("add-task-button");
const formSubmitTaskButton = document.getElementById("form-submit-task-button");
const formCancelTaskButton = document.getElementById("form-cancel-task-button");
const form = document.getElementById("form-task");
const formTitle = document.getElementById("title-field");
const formDetails = document.getElementById("details-field");
const formDate = document.getElementById("date-field");
const sidebarAddButton = document.getElementById("sidebar-add-button");
const projectItems = document.getElementById("sidebar-project-items");
const sidebarFormContainer = document.getElementById("sidebar-form-container");
const projectNameInput = document.getElementById("project-name-input");
const addProjectButton = document.getElementById("add-project-button");
// create new projects :
const createNewProjectName = () => {
  const newProjectName = new Project(projectNameInput.value);
  return newProjectName;
};
// create new tasks :
const createNewProjectTask = () => {
  const newProjectTask = new Task(
    formTitle.value,
    formDetails.value,
    formDate.value
  );
  return newProjectTask;
};

const DOMElement = {
  storeNewDivElement: "",
  storeNewProjectOutput: "",
  updateProjectPreview(element) {
    projectHeaderName.textContent = element.target.textContent;
    projectHeaderName.style.cssText = "display : flex";
    addTaskButton.style.cssText = "display : block";
  },
  createSideBarElement() {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.id = "new-project-div-item";
    newProjectDiv.textContent = createNewProjectName().getNewName();
    projectItems.appendChild(newProjectDiv);
    // this.storeNewDivElement = newProjectDiv;
  },
  createOutputElement() {
    const newProjectOutput = document.createElement("div");
    newProjectOutput.id = "new-project-output";
    newProjectOutput.innerHTML = `
      <span id="project-title">${this.storeNewDivElement.textContent}</span>
      <button id="add-task-button">+ Add Task</button>
      `;
    // projectTaskContainer.appendChild(newProjectOutput);
    projectTaskContainer.insertBefore(newProjectOutput, form);
    this.storeNewProjectOutput = newProjectOutput.firstElementChild;
  },
  // hideOtherElements() {
  //   const allSidebarProjectItems = document.querySelectorAll(
  //     "#new-project-div-item"
  //   );
  //   const allNewProjectOutput = document.querySelectorAll(
  //     "#new-project-output"
  //   );
  //   allSidebarProjectItems.forEach((project) => {
  //     project.addEventListener("click", () => {
  //       // console.log(project);
  //       // console.log(this.storeNewProjectOutput);
  //       console.log(this.storeNewDivElement);
  //       console.log(this.storeNewProjectOutput);
  //       if (project.textContent === this.storeNewProjectOutput.test) {
  //         this.storeNewProjectOutput.style.cssText = "display : flex";
  //       } else {
  //         this.storeNewProjectOutput.style.cssText = "display: none";
  //       }
  //     });
  //   });
  // },
};
const DOMForm = {
  showFormOutput() {
    // return form submit if empty :
    if (
      formTitle.value === "" ||
      formDetails.value === "" ||
      formDate.value === ""
    )
      return;
    // create new form output :
    const formTaskOutput = document.createElement("div");
    formTaskOutput.id = "form-task-output";
    formTaskOutput.innerHTML = `
        <div id="check-title-div">
        <input id="checkbox-button" type="checkbox" />
        <div id="task-output-title">${createNewProjectTask().getTitle()}</div>
        </div>
        <div id="task-output-details">${createNewProjectTask().getDetails()}</div>
        <div id="task-output-date">${createNewProjectTask().getDate()}</div>`;
    projectPreviewContainer.appendChild(formTaskOutput);
  },
  cleanFormData() {
    form.reset();
  },
};
// event click to show side bar form :
addProjectButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : flex";
});
// side bar form add event :
sidebarAddButton.addEventListener("click", function () {
  if (projectNameInput.value === "") return;
  DOMElement.createSideBarElement();
  sideBarElementAddEvent();
  projectNameInput.value = "";
});
// func that select new sidebar projects after creating them and add events : s
function sideBarElementAddEvent() {
  const allSidebarProjectItems = document.querySelectorAll(
    "#new-project-div-item"
  );
  allSidebarProjectItems.forEach((element) => {
    element.addEventListener("click", function (element) {
      DOMElement.updateProjectPreview(element);
    });
  });
}
// project preview add task button event :
addTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : flex";
});
// project preview form cancel button event :
formCancelTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : none";
});
// project preview form add button event :
formSubmitTaskButton.addEventListener("click", function () {
  DOMForm.showFormOutput();
  DOMForm.cleanFormData();
});
