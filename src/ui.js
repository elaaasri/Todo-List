import Project from "./projects.js";
import Task from "./tasks.js";
import Storage from "./storage.js";
import { addDays, format } from "date-fns";
// DOM :
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
const projectsHeaderDiv = document.getElementById("sidebar-project-headear");
const addProjectButton = document.getElementById("add-project-button");
const cancelProjectNameButton = document.getElementById(
  "cancel-project-name-button"
);
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
  if (
    formTitle.value === "" ||
    formDetails.value === "" ||
    formDate.value === ""
  )
    return;
  const newTask = new Task(formTitle.value, formDetails.value, setDueDate());
  selectedProject.taskArr.push(newTask);
  return newTask;
}
// getting selected project by comparing the project name with projects names in allProjects array :
const getSelectedProject = (projectName) => {
  selectedProject = allProjects.find((project) => project.name === projectName);
  return selectedProject;
};
// UI Elements :
const UI = {
  updateProjectPreview: function (projectName) {
    projectHeaderName.textContent = projectName.textContent;
    projectHeaderName.style.cssText = "display : flex";
    addTaskButton.style.cssText = "display : block";
  },
  createSideBarElement: function (projectName) {
    // create new project element :
    const newProjectDiv = document.createElement("div");
    const sidebarProjectName = document.createElement("span");
    const projectDeletebutton = document.createElement("img");
    const projectIcon = document.createElement("img");
    projectDeletebutton.className = "delete-project-button";
    projectDeletebutton.setAttribute("src", "images/delete-icon.png");
    projectIcon.id = "project-icon";
    projectIcon.setAttribute("src", "images/project.png");
    sidebarProjectName.setAttribute("data-value", projectName);
    newProjectDiv.className = "sidebar-project";
    sidebarProjectName.className = "project-name";
    sidebarProjectName.textContent = projectName;
    newProjectDiv.appendChild(projectIcon);
    newProjectDiv.appendChild(sidebarProjectName);
    newProjectDiv.appendChild(projectDeletebutton);
    projectItems.appendChild(newProjectDiv);
    this.deleteSideBarElement(projectDeletebutton);
    this.sideBarElementEvent(sidebarProjectName);
  },
  deleteSideBarElement: function (projectDeletebutton) {
    const parentElement = projectDeletebutton.parentElement;
    const projectName = projectDeletebutton.previousElementSibling.textContent;
    const deleteCurrentProject = () => {
      const projectIndex = allProjects.findIndex(
        (project) => project.name === projectName
      );
      if (projectIndex != -1) {
        allProjects.splice(projectIndex, 1);
      }
    };
    const deleteCurrentProjectTasks = () => {
      const allTasks = document.querySelectorAll("#form-task-output");
      allTasks.forEach((task) => {
        const projectDataValue = task.getAttribute("data-value");
        if (selectedProject.name === projectDataValue) {
          task.remove();
        }
      });
    };
    projectDeletebutton.onclick = () => {
      getSelectedProject(projectName);
      parentElement.remove();
      this.showCurrentProjectTasks();
      projectHeaderName.style.cssText = "display: none";
      addTaskButton.style.cssText = "display: none";
      form.style.cssText = "display: none";
      deleteCurrentProject();
      deleteCurrentProjectTasks();
      Storage.deleteCurrentStorageProject(projectName);
    };
  },
  // side bar elements event :
  sideBarElementEvent: function (sidebarProjectName) {
    const projectName = sidebarProjectName.textContent;
    sidebarProjectName.onclick = () => {
      this.updateProjectPreview(sidebarProjectName);
      form.style.cssText = "display : none";
      getSelectedProject(projectName);
      this.showCurrentProjectTasks();
    };
  },
  // show task elements wih the same data-value :
  showCurrentProjectTasks: function () {
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
  // form UI :
  addTaskElement: function () {
    // create task elements :
    const formTaskOutput = document.createElement("div");
    const deleteTaskButton = document.createElement("img");
    deleteTaskButton.setAttribute("src", "images/delete-icon.png");
    deleteTaskButton.id = "delete-task-button";
    formTaskOutput.setAttribute("data-value", selectedProject.name);
    selectedProject.taskArr.forEach((task) => {
      formTaskOutput.id = "form-task-output";
      formTaskOutput.innerHTML = `
              <div id="check-title-div">
              <input id="checkbox-button" type="checkbox"/>
              <div id="task-output-title">${task.title}</div>
              </div>
              <div id="task-output-details">${task.description}</div>
              <div id="task-output-date">${task.dueDate}</div>`;
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
      this.cleanFormData();
    });
  },
  // delete task button event :
  deleteTask: function (deleteTaskButton, task) {
    const taskElement = deleteTaskButton.parentElement;
    const deleteCurrentTask = () => {
      const taskIndex = selectedProject.taskArr.findIndex(
        (selectedProjectTask) => selectedProjectTask === task
      );
      if (taskIndex != -1) {
        selectedProject.taskArr.splice(taskIndex, 1);
      }
    };
    deleteTaskButton.onclick = function () {
      // getSelectedProject(projectName);
      taskElement.remove();
      Storage.deleteCurrentStorageTasks(task);
      deleteCurrentTask();
    };
  },
  // checkbox event :
  taskCheckbox: function (
    checkboxButton,
    taskTitle,
    taskDescription,
    taskDetails
  ) {
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
  cleanFormData: function () {
    form.reset();
  },
};
// event click to show side bar form :
projectsHeaderDiv.addEventListener("click", function () {
  sidebarFormContainer.style.display =
    sidebarFormContainer.style.display === "none" ? "flex" : "none";
});
addProjectButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : flex";
});
// event click for side bar submit button :
sidebarAddButton.addEventListener("click", function () {
  const projectName = projectNameInput.value;
  //  fix the same name input :
  if (projectNameInput.value === "") return;
  for (const project of allProjects) {
    if (projectNameInput.value === project.name) {
      alert("this project already exist!");
      return;
    }
  }
  UI.createSideBarElement(projectName);
  addNewProject(projectName);
  projectNameInput.value = "";
  Storage.setAllProjects(allProjects);
});
// event click to hide side bar form :
cancelProjectNameButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : none";
});
// form submit event :
formSubmitTaskButton.addEventListener("click", function () {
  addNewtask();
  if (
    formTitle.value === "" ||
    formDetails.value === "" ||
    formDate.value === ""
  )
    return;
  UI.addTaskElement();
  Storage.setAllProjects(allProjects);
});
// project preview add task button event :
addTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : flex";
});
// project preview form cancel button event :
formCancelTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : none";
});
// fix the bug if there's no data in local storage :
if (!localStorage.getItem("allProjects")) {
  Storage.setAllProjects(allProjects);
} else {
  Storage.getAllProjects();
}
// storage UI Elements :
const storageUI = {
  storageProjects: Storage.getAllProjects(),
  displayStorage: function () {
    this.storageProjects.forEach((project) => {
      const projectName = project.name;
      allProjects.push(project);
      getSelectedProject(projectName);
      UI.createSideBarElement(projectName);
      UI.addTaskElement();
      this.hideAllTasks();
    });
  },
  hideAllTasks: function () {
    const allTasks = document.querySelectorAll("#form-task-output");
    allTasks.forEach((task) => {
      task.style.cssText = "display: none";
    });
  },
};
storageUI.displayStorage();
