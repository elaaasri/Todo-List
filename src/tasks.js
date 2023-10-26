class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
  checkboxChecked() {
    console.log("checked");
    // let readStatusButton = this;
    // if (readStatusButton.textContent === "Read") {
    //   readStatusButton.textContent = "Not Read";
    //   readStatusButton.style.cssText = "background-color: red";
    // } else {
    //   readStatusButton.textContent = "Read";
    //   readStatusButton.style.cssText = "background-color: greenyellow";
    // }
  }
}
export default Task;
