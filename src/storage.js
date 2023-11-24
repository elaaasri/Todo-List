class Storage {
  constructor(storageProjects) {
    this.storageProjects = storageProjects;
  }
  // set allProjects array to local storage :
  static setAllProjects = (projects) => {
    localStorage.setItem("allProjects", JSON.stringify(projects));
  };
  // get local storage :
  static getAllProjects = () => {
    this.storageProjects = JSON.parse(localStorage.getItem("allProjects"));
    return this.storageProjects;
  };
  // delete storage project :
  static deleteCurrentStorageProject(projectName) {
    const projects = this.getAllProjects();
    const projectIndex = projects.findIndex(
      (project) => project.name === projectName
    );
    if (projectIndex !== -1) {
      this.storageProjects.splice(projectIndex, 1);
      this.setAllProjects(this.storageProjects);
    }
  }
  // delete storage tasks :
  static deleteCurrentStorageTasks(task) {
    const projects = this.getAllProjects();
    projects.forEach((project) => {
      const taskIndex = project.taskArr.findIndex(
        (projectTask) => JSON.stringify(projectTask) === JSON.stringify(task)
      );
      if (taskIndex !== -1) {
        project.taskArr.splice(taskIndex, 1);
        this.setAllProjects(this.storageProjects);
      }
    });
  }
}
export default Storage;
