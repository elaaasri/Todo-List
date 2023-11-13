import { addDays, format } from "date-fns";
import Project from "./projects.js";
import Task from "./tasks.js";

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

// set Due Date to one week from the date :
const setDueDate = () => {
  const formDateValue = formDate.value;
  if (formDateValue === "") return;
  const date = new Date(formDateValue);
  const addOneWeek = addDays(date, 7);
  const dueDate = format(addOneWeek, "yyyy-MM-dd");
  return dueDate;
};
// declare variables :
const allProjects = [];
let selectedProject = null;
// create new project :
function addNewProject() {
  const project = new Project(projectNameInput.value);
  allProjects.push(project);
  return project;
}
// create new project task :
function addNewtask() {
  const newTask = new Task(formTitle.value, formDetails.value, setDueDate());
  selectedProject.taskArr.push(newTask);
  return newTask;
}
// DOM Elements :
const DOMElement = {
  updateProjectPreview(projectName) {
    projectHeaderName.textContent = projectName.textContent;
    projectHeaderName.style.cssText = "display : flex";
    addTaskButton.style.cssText = "display : block";
  },
  createSideBarElement() {
    // fix the same name input :
    if (projectNameInput.value === "") return;
    for (const project of allProjects) {
      if (projectNameInput.value === project.name) {
        alert("this project already exist!");
        return;
      }
    }
    // create new project element :
    const newProjectDiv = document.createElement("div");
    const projectDeletebutton = document.createElement("button");
    const sidebarProjectName = document.createElement("span");
    const projectNameValue = projectNameInput.value;
    sidebarProjectName.setAttribute("data-value", projectNameValue);
    newProjectDiv.className = "sidebar-project";
    sidebarProjectName.className = "project-name";
    projectDeletebutton.textContent = "x";
    projectDeletebutton.className = "delete-project-button";
    sidebarProjectName.textContent = projectNameValue;
    newProjectDiv.appendChild(sidebarProjectName);
    newProjectDiv.appendChild(projectDeletebutton);
    projectItems.appendChild(newProjectDiv);
    this.sideBarElementEvent(sidebarProjectName);
    this.deleteSideBarElement(projectDeletebutton);
  },
  deleteSideBarElement(projectDeletebutton) {
    const parentElement = projectDeletebutton.parentElement;
    const projectName = projectDeletebutton.previousElementSibling.textContent;
    projectDeletebutton.onclick = () => {
      parentElement.remove();
      this.hideAllTasks();
      projectHeaderName.style.cssText = "display: none";
      addTaskButton.style.cssText = "display: none";
      form.style.cssText = "display: none";
      const index = allProjects.findIndex(
        (project) => project.name === projectName
      );
      if (index != -1) {
        allProjects.splice(index, 1);
      }
    };
  },
  hideAllTasks() {
    const allTasks = document.querySelectorAll("#form-task-output");
    allTasks.forEach((task) => {
      task.style.cssText = "display: none";
    });
  },
  // side bar elements event :
  sideBarElementEvent(sidebarProjectName) {
    const projectName = sidebarProjectName.textContent;
    sidebarProjectName.onclick = () => {
      this.updateProjectPreview(sidebarProjectName);
      form.style.cssText = "display : none";
      getSelectedProject(projectName);
      this.hideTaskElements();
    };
  },
  hideTaskElements() {
    const allTasks = document.querySelectorAll("#form-task-output");
    allTasks.forEach((task) => {
      const projectDataValue = task.getAttribute("data-value");
      if (selectedProject.name === projectDataValue) {
        task.style.cssText = "display: flex";
      } else {
        task.style.cssText = "display: none";
      }
    });
  },
};
const DOMForm = {
  addTaskElement() {
    // fix required inputs :
    if (
      formTitle.value === "" ||
      formDetails.value === "" ||
      formDate.value === ""
    )
      return;
    // create task elements :
    const formTaskOutput = document.createElement("div");
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "X";
    deleteTaskButton.id = "delete-task-button";
    formTaskOutput.setAttribute("data-value", selectedProject.getNewName());
    selectedProject.taskArr.forEach((task) => {
      formTaskOutput.id = "form-task-output";
      formTaskOutput.innerHTML = `
          <div id="check-title-div">
          <input id="checkbox-button" type="checkbox"/>
          <div id="task-output-title">${task.getTitle()}</div>
          </div>
          <div id="task-output-details">${task.getDetails()}</div>
          <div id="task-output-date">${task.getDate()}</div>`;
      formTaskOutput.appendChild(deleteTaskButton);
      projectPreviewContainer.appendChild(formTaskOutput);
      const checkboxButton = formTaskOutput.firstElementChild.firstElementChild;
      const taskTitle = checkboxButton.nextElementSibling;
      const taskDescription =
        formTaskOutput.firstElementChild.nextElementSibling;
      const taskDetails = taskDescription.nextElementSibling;
      this.deleteTask(deleteTaskButton, task);
      this.taskCheckbox(
        checkboxButton,
        taskTitle,
        taskDescription,
        taskDetails
      );
      console.log(allProjects);

      this.cleanFormData();
    });
  },
  // delete task button event :
  deleteTask(deleteTaskButton, task) {
    const taskElement = deleteTaskButton.parentElement;
    deleteTaskButton.onclick = function () {
      taskElement.remove();
      const index = selectedProject.taskArr.findIndex(
        (selectedProjectTask) => selectedProjectTask === task
      );
      if (index != -1) {
        selectedProject.taskArr.splice(index, 1);
      }
    };
  },
  // checkbox event :
  taskCheckbox(checkboxButton, taskTitle, taskDescription, taskDetails) {
    checkboxButton.onclick = function () {
      if (this.checked) {
        taskTitle.style.cssText = "text-decoration : line-through";
        taskDescription.style.cssText = "text-decoration : line-through";
        taskDetails.style.cssText = "text-decoration : line-through";
      } else {
        taskTitle.style.cssText = "text-decoration : none";
        taskDescription.style.cssText = "text-decoration : none";
        taskDetails.style.cssText = "text-decoration : none";
      }
    };
  },
  // reset form after submiting :
  cleanFormData() {
    form.reset();
  },
};
// comparing the sidebar project name with the project name in allprojects arr and returning it :
function getSelectedProject(projectName) {
  selectedProject = allProjects.find((project) => project.name === projectName);
}
// event click to show side bar form :
addProjectButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : flex";
});
// event click for side bar submit button :
sidebarAddButton.addEventListener("click", function () {
  DOMElement.createSideBarElement();
  addNewProject();
  projectNameInput.value = "";
});
// form submit event :
formSubmitTaskButton.addEventListener("click", function () {
  addNewtask();
  DOMForm.addTaskElement();
});
// project preview add task button event :
addTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : flex";
});
// project preview form cancel button event :
formCancelTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : none";
});
