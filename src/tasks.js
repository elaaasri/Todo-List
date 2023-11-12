class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
  getTitle() {
    return this.title;
  }
  getDetails() {
    return this.description;
  }
  getDate() {
    return this.dueDate;
  }
  removeTask() {
    const formTaskOutput = this.removeBtn.parentElement;
    formTaskOutput.remove();
  }
}
export default Task;
