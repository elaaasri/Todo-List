class Project {
  constructor(name) {
    this.name = name;
  }
}

class Tasks {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function addDefaultProject() {
  const defaultProject = new Project("Sport");
  return defaultProject;
}

function addDefaultProjectTasks() {
  const defaultProjectTasks = new Tasks(
    "Gym",
    "Doing Some Cardio",
    "Today",
    "High"
  );
  return defaultProjectTasks;
}

export default Project;
export { addDefaultProject, addDefaultProjectTasks };
