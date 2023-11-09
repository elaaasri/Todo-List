import Task from "./tasks.js";
class Project {
  constructor(name) {
    this.name = name;
    this.taskArr = [];
  }
  getNewName() {
    return this.name;
  }
}

export default Project;
