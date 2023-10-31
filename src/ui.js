import Project from "./projects.js";
import Task from "./tasks.js";

// create new default project :
const newDefaultProject = new Project("Sport");
const newDefaultTask = new Task("Gym", "Chest Workout, Cardio.", "Today");
// DOM form elements :
const projectTaskContainer = document.getElementById(
  "project-output-container"
);
const defaultProjectOutput = document.getElementById("default-project-output");
// let formTask = document.getElementById("form-task");
// let formTitle = formTask[0];
// let formDetails = formTask[1];
// let formDate = formTask[2];
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
  defaultCheckboxButtonStyles();
});

// func to create project task :
const createDefaultProject = () => {
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
        <input id="default-checkbox-button" type="checkbox" />
        <div id="default-output-title">${newDefaultTask.title}</div>
        </div>
        <div id="default-output-details">${newDefaultTask.description}</div>
        <div id="default-output-date">${newDefaultTask.dueDate}</div>`;
};
// func to show task form :
// function showTaskForm() {
//   const addTaskButton = document.getElementById("add-task-button");
//   addTaskButton.addEventListener("click", () => {
//     formTask.style.cssText = "display: flex";
//   });
// }
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
  const formTaskOutput = document.createElement("div");
  formTaskOutput.id = "form-task-output";
  formTaskOutput.innerHTML = `
      <div id="check-title-div">
      <input id="checkbox-button" type="checkbox" />
      <div id="task-output-title">${formTitle.value}</div>
      </div>
      <div id="task-output-details">${formDetails.value}</div>
      <div id="task-output-date">${formDate.value}</div>`;
  projectTaskContainer.appendChild(formTaskOutput);
  cleanFormData();
  checkboxButtonStyles();
};
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
const defaultCheckboxButtonStyles = () => {
  // default output project DOM :
  const defaultCheckbox = document.getElementById("default-checkbox-button");
  const defaultTitle = document.getElementById("default-output-title");
  const defaultDetails = document.getElementById("default-output-details");
  const defaultDate = document.getElementById("default-output-date");
  // func to style default elements :
  const styleDefaultElements = () => {
    if (defaultCheckbox.checked) {
      defaultTitle.style.cssText = "text-decoration : line-through";
      defaultDetails.style.cssText = "text-decoration : line-through";
      defaultDate.style.cssText = "text-decoration : line-through";
    } else {
      defaultTitle.style.cssText = "text-decoration : none";
      defaultDetails.style.cssText = "text-decoration : none";
      defaultDate.style.cssText = "text-decoration : none";
    }
  };
  // default button event :
  defaultCheckbox.addEventListener("change", styleDefaultElements);
};
// func to style the task output when checkbox checked :
function checkboxButtonStyles() {
  const allCheckboxButton = document.querySelectorAll("#checkbox-button");
  allCheckboxButton.forEach((checkboxBtn) => {
    checkboxBtn.addEventListener("change", () => {
      // task output DOM :
      const parentElement = checkboxBtn.parentElement.parentElement;
      const taskOutputTitle = parentElement.querySelector("#task-output-title");
      const taskOutputDetails = parentElement.querySelector(
        "#task-output-details"
      );
      const taskOutputDate = parentElement.querySelector("#task-output-date");
      // condition to check if current the checkbox checked or not :
      if (checkboxBtn.checked) {
        taskOutputTitle.style.cssText = "text-decoration : line-through";
        taskOutputDetails.style.cssText = "text-decoration : line-through";
        taskOutputDate.style.cssText = "text-decoration : line-through";
      } else {
        taskOutputTitle.style.cssText = "text-decoration : none";
        taskOutputDetails.style.cssText = "text-decoration : none";
        taskOutputDate.style.cssText = "text-decoration : none";
      }
    });
  });
}

// new project name form DOM:
const projectItems = document.getElementById("sidebar-project-items");
const addProjectContainer = document.getElementById("add-new-project-form");
const addProjectButton = document.getElementById("add-project-button");
const projectNameInput = document.getElementById("project-name-input");
const addProjectNameButton = document.getElementById("add-project-name-button");
// event to show new project form :
addProjectButton.addEventListener("click", showNewProjectFrom);
function showNewProjectFrom() {
  addProjectContainer.style.cssText = "display : flex";
}
// event to create new project name :
// addProjectNameButton.addEventListener("click", function () {
//   createNewProjectName();
//   createSideBarElement();
// });

const projectObj = {
  createNewProjectName() {
    const newProjectName = new Project(projectNameInput.value);
    return newProjectName;
  },
};
// DOM form :
const form = document.getElementById("form-task");
let formTitle = form[0];
let formDetails = form[1];
let formDate = form[2];

const DOMElement = {
  storeNewDivElement: "",
  storeNewProjectOutput: "",
  createSideBarElement() {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.id = "new-project-div-item";
    newProjectDiv.textContent = projectObj.createNewProjectName().getNewName();
    projectItems.appendChild(newProjectDiv);
    this.storeNewDivElement = newProjectDiv;
  },
  createOutputElement() {
    // const form = document.getElementById("form-task");
    if (projectNameInput.value === "") return;
    const newProjectOutput = document.createElement("div");
    newProjectOutput.id = "new-project-output";
    newProjectOutput.innerHTML = `
    <span id="project-title">${this.storeNewDivElement.textContent}</span>
    <button id="add-task-button">+ Add Task</button>
    `;
    // projectTaskContainer.appendChild(newProjectOutput);
    projectTaskContainer.insertBefore(newProjectOutput, form);
    this.storeNewProjectOutput = newProjectOutput;
  },
  // createTaskForm() {
  //   // Create the form element :
  //   const form = document.createElement("form");
  //   form.id = "form-task";
  //   form.style.display = "flex";
  //   form.method = "dialog";
  //   // Create the div elements and their content :
  //   const formTitle = document.createElement("div");
  //   formTitle.id = "form-title";
  //   formTitle.innerHTML = `
  //   <label>Title:</label>
  //   <input type="text" placeholder="What To Do:" required />
  // `;
  //   const formDetails = document.createElement("div");
  //   formDetails.id = "form-details";
  //   formDetails.innerHTML = `
  //   <label>Details(optional):</label>
  //   <input placeholder="Description:" />
  // `;
  //   const formDate = document.createElement("div");
  //   formDate.id = "form-date";
  //   formDate.innerHTML = `
  //   <label>Date:</label>
  //   <input type="date" required />
  // `;
  //   const formSubmit = document.createElement("div");
  //   formSubmit.id = "form-submit";
  //   formSubmit.innerHTML = `
  //   <input type="submit" value="Add" />
  //   <input id="cancel-submit" type="button" value="cancel" />
  // `;
  //   // append the div elements to the form :
  //   form.appendChild(formTitle);
  //   form.appendChild(formDetails);
  //   form.appendChild(formDate);
  //   form.appendChild(formSubmit);
  //   // append the form the current new project output element :
  //   this.storeNewProjectOutput.appendChild(form);
  // },
  // ################
  // showTaskForm() {
  //   const allAddTaskButtons = document.querySelectorAll("#add-task-button");
  //   allAddTaskButtons.forEach((element) => {
  //     element.addEventListener("click", () => this.createTaskForm(), {
  //       once: true,
  //     });
  //   });
  // },

  // showTaskForm() {
  //   const form = document.getElementById("form-task");
  //   const addTaskButton = document.getElementById("add-task-button");
  //   console.log(this.storeTaskButton);

  //   this.storeTaskButton.addEventListener(
  //     "click",
  //     () => {
  //       this.createTaskForm();

  //       console.log(this.storeTaskButton);
  //     },
  //     { once: true }
  //   );
  // },
  showTaskForm() {
    const allAddTaskButtons = document.querySelectorAll("#add-task-button");
    allAddTaskButtons.forEach((element) => {
      element.addEventListener("click", function () {
        form.style.cssText = "display : flex";
      });
    });
  },
  hideTaskForm() {
    const cancelSubmitButton = document.getElementById("cancel-submit");
    cancelSubmitButton.addEventListener("click", function () {
      form.style.cssText = "display : none";
    });
  },

  // form submit event for showing the the form output  :
  // addSubmitButton.addEventListener("click", showFormOutput);
  // submitEventButton () {
  //   const addSubmitButton = document.querySelector('input[type="submit"]');
  //   const
  // },
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
        <div id="task-output-title">${formTitle.value}</div>
        </div>
        <div id="task-output-details">${formDetails.value}</div>
        <div id="task-output-date">${formDate.value}</div>`;
    // projectTaskContainer.appendChild(formTaskOutput);
    // this.storeNewProjectOutput = newProjectOutput;
    this.storeNewProjectOutput.appendChild(formTaskOutput);
    // cleanFormData();
    // checkboxButtonStyles();
  },
};
addProjectNameButton.addEventListener("click", function () {
  if (projectNameInput.value === "") return;
  DOMElement.createSideBarElement();
  DOMElement.createOutputElement();
  DOMElement.showTaskForm();
  DOMElement.hideTaskForm();
  projectNameInput.value = "";
});
// function submitFormEvent() {
const addSubmitButton = document.querySelector('input[type="submit"]');
addSubmitButton.addEventListener("click", function () {
  DOMElement.showFormOutput();
  cleanFormData();
});
// clean Form Data :
const cleanFormData = () => {
  form.reset();
};
// }
// ############### show task form for once for each add task button :
// showTaskForm() {
//   const allAddTaskButtons = document.querySelectorAll("#add-task-button");
//   allAddTaskButtons.forEach((element) => {
//     element.addEventListener("click", () => this.createTaskForm(), {
//       once: true,
//     });
//   });
// },

// form submit event for showing the the form output  :
// const addSubmitButton = document.querySelector('input[type="submit"]');
// addSubmitButton.addEventListener("click", showFormOutput);
// // form cancel button to remove form :
// const cancelSubmitButton = document.getElementById("cancel-submit");
// cancelSubmitButton.addEventListener("click", function () {
//   formTask.style.cssText = "display: none";
// });

// ########################### WORKING ON TASK FORM :

// function sideBarElementAddEvent(newProjectDiv) {
//   // newProjectDiv.addEventListener(c
//   //   "click",
//   //   () => {
//   //     // DOMElement.createOutputElement(newProjectDiv);
//   //     DOMElement.showTaskForm();
//   //     DOMElement.hideOutputElements(newProjectDiv);
//   //   },
//   //   { once: true }
//   // );
// }
// sideBarElementAddEvent();
// function hideOtherElements(newProjectDiv) {
//   const allNewProjectOutput = document.querySelectorAll("#new-project-output");
//   // let currentProject;
//   allNewProjectOutput.forEach((project) => {
//     project.addEventListener("click", function () {
//       if (project.firstElementChild.textContent === newProjectDiv.textContent) {
//         project.style.cssText = "display : flex";
//       } else {
//         project.style.cssText = "display: none";
//       }
//     });
//   });
// }

// function createSideBarElement() {
//   if (projectNameInput.value === "") return;
//   const newProjectDiv = document.createElement("div");
//   newProjectDiv.id = "new-project-div-item";
//   newProjectDiv.textContent =
//     createNewProjectName().newProjectName.getNewName();
//   projectItems.appendChild(newProjectDiv);
//   sideBarElementAddEvent();
// }

// function sideBarElementAddEvent() {
//   const allSideBarElements = document.querySelectorAll("#new-project-div-item");
//   allSideBarElements.forEach((element) => {
//     element.addEventListener("click", function () {
//       createOutputElement();
//     });
//   });
// }
// function createOutputElement(element) {
//   const newProjectOutput = document.createElement("div");
//   newProjectOutput.id = "new-project-output";
//   newProjectOutput.innerHTML = `
//   <span id="project-title">${"storeNewDivElement"}</span>
//   <button id="add-task-button">+ Add Task</button>
//   `;
//   projectTaskContainer.appendChild(newProjectOutput);
//   // const existedProjectOutput = document.getElementById("new-project-output");
//   // if (existedProjectOutput != null) {
//   //   newProjectOutput.remove();
//   // }
// }

// display new project item element :
// function displayNewProjectItem() {
//   if (projectNameInput.value === "") return;
//   const newProjectDiv = document.createElement("div");
//   newProjectDiv.id = "new-project-div-item";
//   newProjectDiv.textContent =
//     createNewProjectName().newProjectName.getNewName();
//   projectItems.appendChild(newProjectDiv);
//   // showNewProjectName(newProjectDiv); // binding newProjectDiv.
//   newProjectsDivEvent(newProjectDiv);
// }
// const allNewProject = document.querySelectorAll("#new-project-output");
// allNewProject.forEach((element) => {});
// const createOutputElement = (newProjectDiv) => {
//   newProjectDiv.addEventListener(
//     "click",
//     function () {
//       const newProjectOutput = document.createElement("div");
//       newProjectOutput.id = "new-project-output";
//       newProjectOutput.innerHTML = `
//       <span id="project-title">${this.textContent}</span>
//       <button id="add-task-button">+ Add Task</button>
//       `;
//       projectTaskContainer.appendChild(newProjectOutput);
//     },
//     { once: true }
//   );
// };
// const newProjectsDivEvent = () => {
//   const allNewProjectDivs = document.querySelectorAll("#new-project-div-item");
//   allNewProjectDivs.forEach((element) => {
//     element.addEventListener("click", () => showNewProjectOutput(element), {
//       once: true,
//     });
//   });
// };
// let newProjectOutput = null ###################
// function newProjectsDivEvent(newProjectDiv) {
//   console.log(newProjectDiv);
//   newProjectDiv.addEventListener(
//     "click",
//     () => showNewProjectOutput(newProjectDiv),
//     { once: true }
//   );
// }
// function newProjectsDivEvent(newProjectDiv) {
//   newProjectDiv.addEventListener("click", showNewProjectOutput(newProjectDiv));
// }
// function showNewProjectOutput(newProjectDiv) {
//   const newProjectOutput = document.createElement("div");
//   newProjectOutput.id = "new-project-output";
//   newProjectOutput.innerHTML = `
//       <span id="project-title">${newProjectDiv.textContent}</span>
//       <button id="add-task-button">+ Add Task</button>
//       `;
//   projectTaskContainer.appendChild(newProjectOutput);
//   // console.log(newProjectOutput);
//   // console.log(newProjectDiv);
//   // if (newProjectOutput) {
//   //   newProjectOutput.remove();
//   // }
//   // const allNewProjectOutput = document.querySelectorAll("#new-project-output");
//   // console.log(allNewProjectOutput);
//   // hideOtherElements(newProjectDiv);
//   // hideAllElements();
// }

// function hideAllElements() {
//   const allNewProjectOutput = document.querySelectorAll("#new-project-output");
//   allNewProjectOutput.forEach((element) => {
//     element.style.cssText = "display: none";
//   });
// }

// function storeNewDivElement(newProjectDiv, newProjectOutput) {
//   console.log(newProjectDiv);
//   console.log(newProjectOutput.firstElementChild);
// }

// function hideOtherElements(newProjectDiv) {
//   const allNewProjectOutput = document.querySelectorAll("#new-project-output");
//   // let currentProject;
//   allNewProjectOutput.forEach((project) => {
//     project.addEventListener("click", function () {
//       if (project.firstElementChild.textContent === newProjectDiv.textContent) {
//         project.style.cssText = "display : flex";
//       } else {
//         project.style.cssText = "display: none";
//       }
//     });
//   });
// }

// const allNewProjectDivs = document.querySelectorAll("#new-project-div-item");newpro
// // newProjectDiv.addEventListener("click", function (event) {
// //   // console.log("storeNewDivElement");
// //   const newProjectOutput = document.createElement("div");
// //   newProjectOutput.id = "new-project-output";
// //   newProjectOutput.innerHTML = `
// //         <span id="project-title">${this.textContent}</span>
// //         <button id="add-task-button">+ Add Task</button>
// //         `;
// //   projectTaskContainer.appendChild(newProjectOutput);
// //   console.log(projectTaskContainer.contains(newProjectOutput));
// //   if (projectTaskContainer.contains(newProjectOutput)) {
// //     event.preventDefault();
// //   }
// // });
// allNewProjectDivs.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     const newProjectOutput = document.createElement("div");
//     newProjectOutput.id = "new-project-output";
//     newProjectOutput.innerHTML = `
//       <span id="project-title">${this.textContent}</span>
//       <button id="add-task-button">+ Add Task</button>
//       `;
//     projectTaskContainer.appendChild(newProjectOutput);
//   });
// });

function storeNewDivElement() {
  const newProjectOutput = document.createElement("div");
  newProjectOutput.id = "new-project-output";
  newProjectOutput.innerHTML = `
        <span id="project-title">${this.textContent}</span>
        <button id="add-task-button">+ Add Task</button>
        `;
  projectTaskContainer.appendChild(newProjectOutput);
}

// show project name :
// let elementCreated = true;
// function showNewProjectName(newProjectDiv) {
//   newProjectDiv.addEventListener("click", function (event) {
//     // createNewProjectTask();
//     // hideOtherElements();
//     if (elementCreated) {
//       const newProjectOutput = document.createElement("div");
//       newProjectOutput.id = "new-project-output";
//       newProjectOutput.innerHTML = `
//       <span id="project-title">${this.textContent}</span>
//       <button id="add-task-button">+ Add Task</button>
//       `;
//       projectTaskContainer.appendChild(newProjectOutput);
//     }
//     elementCreated = false;
//   });
// }

const showNewProjectName = () => {};
// create project task element :
const createNewProjectTask = () => {
  console.log(this);
  const newProjectOutput = document.createElement("div");
  newProjectOutput.id = "new-project-output";
  newProjectOutput.innerHTML = `
        <span id="project-title"">${"yrs"}</span>
        <button id="add-task-button">+ Add Task</button>
    `;
  projectTaskContainer.appendChild(newProjectOutput);
};

// function hideOtherElements() {
//   defaultProjectOutput.style.cssText = "display: none";
// }

// function createNewName(newName) {
//   const newProjectName = new Project(projectNameInput.value);
//   console.log(newProjectName);
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
//       <button>storeNewDivElement</button>
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
//     <button>storeNewDivElement</button>
//   </div>
//   </div>`;
//   projectTaskContainer.appendChild(taskOutputContainer);
// }

// const checkboxButtonStyles = () => {
//   const checkBoxButton = document.getElementById("checkbox-button");
//   const taskOutputTitle = document.getElementById("task-output-title");
//   const taskOutputDetails = document.getElementById("task-output-details");
//   const taskOutputDate = document.getElementById("task-output-date");

//   checkBoxButton.addEventListener("change", storeNewDivElement);
//   console.log(checkBoxButton);
// };

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
// ############################
