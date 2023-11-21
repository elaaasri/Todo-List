// class Storage {
//   static setLocalStorage(allProjects) {
//     localStorage.setItem("allStorageProjects", JSON.stringify(allProjects));
//   }
//   static setStorageElements() {
//     const allStorageProjects = JSON.parse(
//       localStorage.getItem("allStorageProjects")
//     );
//     console.log(typeof allStorageProjects);

//     allStorageProjects.forEach((project) => {
//       const projectName = project.name;
//       // console.log(project);
//       // console.log(project.name);
//       // console.log(project.taskArr);
//       // if (project.name === "") return;
//       console.log(projectName);
//       this.setStorageSideBarElements(projectName);
//     });
//   }
//   static setStorageSideBarElements(projectName) {
//     const projectItems = document.getElementById("sidebar-project-items");
//     const newProjectDiv = document.createElement("div");
//     const projectDeletebutton = document.createElement("button");
//     const sidebarProjectName = document.createElement("span");
//     newProjectDiv.className = "sidebar-project";
//     sidebarProjectName.className = "project-name";
//     projectDeletebutton.textContent = "x";
//     projectDeletebutton.className = "delete-project-button";
//     sidebarProjectName.textContent = projectName;
//     newProjectDiv.appendChild(sidebarProjectName);
//     newProjectDiv.appendChild(projectDeletebutton);
//     projectItems.appendChild(newProjectDiv);
//     this.sideBarElementEvent(sidebarProjectName);

//     // this.updateProjectPreview(projectName);
//   }
//   static sideBarElementEvent(sidebarProjectName) {
//     const form = document.getElementById("form-task");

//     const projectName = sidebarProjectName.textContent;
//     sidebarProjectName.onclick = () => {
//       console.log("aeazeaze");
//       // this.updateProjectPreview(sidebarProjectName);
//       form.style.cssText = "display : flex";
//       // getSelectedProject(projectName);
//       // this.hideTaskElements();
//     };
//   }
//   static updateProjectPreview(projectName) {
//     const projectHeaderName = document.getElementById("project-header-name");
//     // const projectHeaderName
//     projectHeaderName.textContent = projectName;
//     // projectHeaderName.style.cssText = "display : flex";
//     // addTaskButton.style.cssText = "display : block";
//   }
// }

// export default Storage;
