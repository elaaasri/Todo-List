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
}
export default Storage;
