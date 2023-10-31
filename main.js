/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/style.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr 80px;
  grid-template-columns: repeat(3, 1fr);
  font-family: "Courier New", Courier, monospace;
}
/* header styles : */
header {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: rgb(61, 61, 61);
}
/* main styles */
main {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-column: 1 / 4;
  grid-row: 2 / 2;
}
/* sidebar styles */
#sidebar {
  background-color: grey;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 80px;
  width: 250px;
}
#bar-items {
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  font-size: 20px;
}
/* add project styles */
#project-container {
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
#project-items > h1 {
  font-size: 25px;
}
/* add project name container styles */
#sidebar-project-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
}
#add-project-name-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}
#sidebar-project-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-left: 5px;
}
#add-new-project-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#project-name-input {
  border: none;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
}
#add-project-name-button {
  background-color: greenyellow;
  border: none;
  height: 20px;
  border-radius: 3px;
  outline: none;
  width: 60px;
  font-size: 10px;
  font-weight: bold;
  color: white;
}
#cancel-project-name-button {
  background-color: red;
  border: none;
  height: 20px;
  border-radius: 3px;
  outline: none;
  width: 60px;
  font-size: 10px;
  font-weight: bold;
  color: white;
}
#add-project-name-button:hover,
#cancel-project-name-button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
/* side bar styles  */
#bar-items {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  font-size: 20px;
}
#add-project-button {
  align-self: center;
  width: 40px;
  height: 40px;
  background-color: greenyellow;
  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.4s ease;
  border-radius: 100px;
  font-size: 25px;
}
#add-project-button:hover {
  background-color: white;
}
/* project task container styles */
#project-output-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
}
#default-project-output {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-size: 40px;
}
#project-title {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 30px;
  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);
  border-radius: 5px;
  background-color: rgb(0, 255, 225);
}
#add-task-button {
  align-self: center;
  width: 150px;
  background-color: rgb(0, 255, 225);
  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);
  border: none;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease;
  border-radius: 15px;
}
#add-task-button:hover {
  background-color: white;
}

/* form style */
#form-task {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 8px;
  background-color: rgb(141, 212, 224);
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
#form-title,
#form-details,
#form-date {
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 13px;
}
#form-title > input,
#form-details > input,
#form-date > input {
  border: none;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px;
  outline: none;
}
#form-date > input {
  color: rgb(0, 217, 255);
  font-size: 13px;
}
/* form submit styles */
#form-submit {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 10px;
}
#form-submit > input {
  border: none;
  height: 20px;
  border-radius: 3px;
  outline: none;
  width: 60px;
  font-size: 10px;
  font-weight: bold;
  color: white;
}
#form-submit > input:first-child {
  background-color: rgb(84, 210, 84);
}
#form-submit > input:nth-child(2) {
  cursor: pointer;
  background-color: rgb(255, 48, 48);
}
#form-submit > input:nth-child(2):hover,
#form-submit > input:first-child:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}
/* task output styles */
#default-task-output,
#form-task-output {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: rgb(192, 232, 237);
  border: solid 3px rgb(0, 217, 255);
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
}
#task-output-details,
#default-output-details {
  font-size: 15px;
}
#task-output-date,
#default-output-date {
  border: solid 3px rgb(0, 217, 255);
  border-radius: 5px;
  font-size: 10px;
  padding: 5px;
}
#check-title-div {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
#task-output-title,
#default-output-title {
  font-weight: bold;
}
/* footer styles */
footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background-color: rgb(61, 61, 61);
}
`, "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,qCAAqC;EACrC,8CAA8C;AAChD;AACA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,8EAA8E;EAC9E,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iCAAiC;AACnC;AACA,gBAAgB;AAChB;EACE,aAAa;EACb,+BAA+B;EAC/B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;AACA,mBAAmB;AACnB;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;AACA,uBAAuB;AACvB;EACE,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA,sCAAsC;AACtC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;AACA;;EAEE,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;AACA,qBAAqB;AACrB;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,SAAS;EACT,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,sCAAsC;EACtC,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA,kCAAkC;AAClC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,kCAAkC;AACpC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kCAAkC;EAClC,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,sCAAsC;EACtC,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,mBAAmB;EACnB,QAAQ;EACR,oCAAoC;EACpC,kBAAkB;EAClB,8EAA8E;AAChF;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,eAAe;AACjB;AACA;;;EAGE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA,uBAAuB;AACvB;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kCAAkC;AACpC;AACA;EACE,eAAe;EACf,kCAAkC;AACpC;AACA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;AACA,uBAAuB;AACvB;;EAEE,8EAA8E;EAC9E,oCAAoC;EACpC,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;;EAEE,eAAe;AACjB;AACA;;EAEE,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;AACA;;EAEE,iBAAiB;AACnB;AACA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 80px;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Courier New\", Courier, monospace;\n}\n/* header styles : */\nheader {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  background-color: rgb(61, 61, 61);\n}\n/* main styles */\nmain {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 4;\n  grid-row: 2 / 2;\n}\n/* sidebar styles */\n#sidebar {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  gap: 80px;\n  width: 250px;\n}\n#bar-items {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 10px;\n  font-size: 20px;\n}\n/* add project styles */\n#project-container {\n  background-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n}\n#project-items > h1 {\n  font-size: 25px;\n}\n/* add project name container styles */\n#sidebar-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 20px;\n}\n#add-project-name-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n#sidebar-project-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  padding-left: 5px;\n}\n#add-new-project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n#project-name-input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#add-project-name-button {\n  background-color: greenyellow;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#cancel-project-name-button {\n  background-color: red;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#add-project-name-button:hover,\n#cancel-project-name-button:hover {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n}\n/* side bar styles  */\n#bar-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 20px;\n  font-size: 20px;\n}\n#add-project-button {\n  align-self: center;\n  width: 40px;\n  height: 40px;\n  background-color: greenyellow;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 100px;\n  font-size: 25px;\n}\n#add-project-button:hover {\n  background-color: white;\n}\n/* project task container styles */\n#project-output-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px;\n}\n#default-project-output {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  font-size: 40px;\n}\n#project-title {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  font-size: 30px;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border-radius: 5px;\n  background-color: rgb(0, 255, 225);\n}\n#add-task-button {\n  align-self: center;\n  width: 150px;\n  background-color: rgb(0, 255, 225);\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 15px;\n}\n#add-task-button:hover {\n  background-color: white;\n}\n\n/* form style */\n#form-task {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  gap: 8px;\n  background-color: rgb(141, 212, 224);\n  border-radius: 5px;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n#form-title,\n#form-details,\n#form-date {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  font-size: 13px;\n}\n#form-title > input,\n#form-details > input,\n#form-date > input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#form-date > input {\n  color: rgb(0, 217, 255);\n  font-size: 13px;\n}\n/* form submit styles */\n#form-submit {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding-top: 10px;\n}\n#form-submit > input {\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#form-submit > input:first-child {\n  background-color: rgb(84, 210, 84);\n}\n#form-submit > input:nth-child(2) {\n  cursor: pointer;\n  background-color: rgb(255, 48, 48);\n}\n#form-submit > input:nth-child(2):hover,\n#form-submit > input:first-child:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n/* task output styles */\n#default-task-output,\n#form-task-output {\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  background-color: rgb(192, 232, 237);\n  border: solid 3px rgb(0, 217, 255);\n  height: 50px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n}\n#task-output-details,\n#default-output-details {\n  font-size: 15px;\n}\n#task-output-date,\n#default-output-date {\n  border: solid 3px rgb(0, 217, 255);\n  border-radius: 5px;\n  font-size: 10px;\n  padding: 5px;\n}\n#check-title-div {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n#task-output-title,\n#default-output-title {\n  font-weight: bold;\n}\n/* footer styles */\nfooter {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  background-color: rgb(61, 61, 61);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./dist/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/newToDo.js":
/*!************************!*\
  !*** ./src/newToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


// console.log(ProjectConstructor);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
  }
  getNewName() {
    return this.name;
  }
}

// const zbe = new Project("zbe");
// console.log(zbe.name);
// zbe.getNewName("test");
// console.log(zbe.name);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/tasks.js");



// create new default project :
const newDefaultProject = new _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Sport");
const newDefaultTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Gym", "Chest Workout, Cardio.", "Today");
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
    const newProjectName = new _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectNameInput.value);
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
  console.log(undefined);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/style.css */ "./dist/style.css");
/* harmony import */ var _newToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDo */ "./src/newToDo.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");

// import ProjectConstructor, {
//   defaultProjects,
//   projectsList,
// } from "./projects.js";



// project module :
// console.log(projectsList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1B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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQzJCO0FBQ047O0FBRTFCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9kaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3Qvc3R5bGUuY3NzP2I1YzYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA4MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG4vKiBoZWFkZXIgc3R5bGVzIDogKi9cbmhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcbn1cbi8qIG1haW4gc3R5bGVzICovXG5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDIgLyAyO1xufVxuLyogc2lkZWJhciBzdHlsZXMgKi9cbiNzaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgZ2FwOiA4MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG4jYmFyLWl0ZW1zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi8qIGFkZCBwcm9qZWN0IHN0eWxlcyAqL1xuI3Byb2plY3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG4jcHJvamVjdC1pdGVtcyA+IGgxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLyogYWRkIHByb2plY3QgbmFtZSBjb250YWluZXIgc3R5bGVzICovXG4jc2lkZWJhci1wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4jYWRkLXByb2plY3QtbmFtZS1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cbiNzaWRlYmFyLXByb2plY3QtaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiNhZGQtbmV3LXByb2plY3QtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbiNwcm9qZWN0LW5hbWUtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jYWRkLXByb2plY3QtbmFtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNjYW5jZWwtcHJvamVjdC1uYW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbjpob3ZlcixcbiNjYW5jZWwtcHJvamVjdC1uYW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIHNpZGUgYmFyIHN0eWxlcyAgKi9cbiNiYXItaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jYWRkLXByb2plY3QtYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi8qIHByb2plY3QgdGFzayBjb250YWluZXIgc3R5bGVzICovXG4jcHJvamVjdC1vdXRwdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuI2RlZmF1bHQtcHJvamVjdC1vdXRwdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG59XG4jcHJvamVjdC10aXRsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcbn1cbiNhZGQtdGFzay1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZm9ybSBzdHlsZSAqL1xuI2Zvcm0tdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMjEyLCAyMjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbn1cbiNmb3JtLXRpdGxlLFxuI2Zvcm0tZGV0YWlscyxcbiNmb3JtLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jZm9ybS10aXRsZSA+IGlucHV0LFxuI2Zvcm0tZGV0YWlscyA+IGlucHV0LFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgY29sb3I6IHJnYigwLCAyMTcsIDI1NSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi8qIGZvcm0gc3VibWl0IHN0eWxlcyAqL1xuI2Zvcm0tc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDIxMCwgODQpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiB0YXNrIG91dHB1dCBzdHlsZXMgKi9cbiNkZWZhdWx0LXRhc2stb3V0cHV0LFxuI2Zvcm0tdGFzay1vdXRwdXQge1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIzMiwgMjM3KTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3Rhc2stb3V0cHV0LWRldGFpbHMsXG4jZGVmYXVsdC1vdXRwdXQtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiN0YXNrLW91dHB1dC1kYXRlLFxuI2RlZmF1bHQtb3V0cHV0LWRhdGUge1xuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMCwgMjE3LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuI2NoZWNrLXRpdGxlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xufVxuI3Rhc2stb3V0cHV0LXRpdGxlLFxuI2RlZmF1bHQtb3V0cHV0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBmb290ZXIgc3R5bGVzICovXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAzIC8gNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7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IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA4MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcbi8qIGhlYWRlciBzdHlsZXMgOiAqL1xcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xcbn1cXG4vKiBtYWluIHN0eWxlcyAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAyIC8gMjtcXG59XFxuLyogc2lkZWJhciBzdHlsZXMgKi9cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ2FwOiA4MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG4jYmFyLWl0ZW1zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLyogYWRkIHByb2plY3Qgc3R5bGVzICovXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuI3Byb2plY3QtaXRlbXMgPiBoMSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi8qIGFkZCBwcm9qZWN0IG5hbWUgY29udGFpbmVyIHN0eWxlcyAqL1xcbiNzaWRlYmFyLXByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4jc2lkZWJhci1wcm9qZWN0LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuI2FkZC1uZXctcHJvamVjdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY2FuY2VsLXByb2plY3QtbmFtZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsLXByb2plY3QtbmFtZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIHNpZGUgYmFyIHN0eWxlcyAgKi9cXG4jYmFyLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi8qIHByb2plY3QgdGFzayBjb250YWluZXIgc3R5bGVzICovXFxuI3Byb2plY3Qtb3V0cHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbiNkZWZhdWx0LXByb2plY3Qtb3V0cHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbiNwcm9qZWN0LXRpdGxlIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDIyNSk7XFxufVxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGZvcm0gc3R5bGUgKi9cXG4jZm9ybS10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBnYXA6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDIxMiwgMjI0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG59XFxuI2Zvcm0tdGl0bGUsXFxuI2Zvcm0tZGV0YWlscyxcXG4jZm9ybS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuI2Zvcm0tdGl0bGUgPiBpbnB1dCxcXG4jZm9ybS1kZXRhaWxzID4gaW5wdXQsXFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNmb3JtLWRhdGUgPiBpbnB1dCB7XFxuICBjb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLyogZm9ybSBzdWJtaXQgc3R5bGVzICovXFxuI2Zvcm0tc3VibWl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMjEwLCA4NCk7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xcbn1cXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpudGgtY2hpbGQoMik6aG92ZXIsXFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi8qIHRhc2sgb3V0cHV0IHN0eWxlcyAqL1xcbiNkZWZhdWx0LXRhc2stb3V0cHV0LFxcbiNmb3JtLXRhc2stb3V0cHV0IHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIzMiwgMjM3KTtcXG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAyMTcsIDI1NSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0YXNrLW91dHB1dC1kZXRhaWxzLFxcbiNkZWZhdWx0LW91dHB1dC1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuI3Rhc2stb3V0cHV0LWRhdGUsXFxuI2RlZmF1bHQtb3V0cHV0LWRhdGUge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuI2NoZWNrLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jdGFzay1vdXRwdXQtdGl0bGUsXFxuI2RlZmF1bHQtb3V0cHV0LXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiBmb290ZXIgc3R5bGVzICovXFxuZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0Q29uc3RydWN0b3IgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuLy8gY29uc29sZS5sb2coUHJvamVjdENvbnN0cnVjdG9yKTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBnZXROZXdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbn1cblxuLy8gY29uc3QgemJlID0gbmV3IFByb2plY3QoXCJ6YmVcIik7XG4vLyBjb25zb2xlLmxvZyh6YmUubmFtZSk7XG4vLyB6YmUuZ2V0TmV3TmFtZShcInRlc3RcIik7XG4vLyBjb25zb2xlLmxvZyh6YmUubmFtZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG4gIGdldERldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbi8vIGNyZWF0ZSBuZXcgZGVmYXVsdCBwcm9qZWN0IDpcbmNvbnN0IG5ld0RlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTcG9ydFwiKTtcbmNvbnN0IG5ld0RlZmF1bHRUYXNrID0gbmV3IFRhc2soXCJHeW1cIiwgXCJDaGVzdCBXb3Jrb3V0LCBDYXJkaW8uXCIsIFwiVG9kYXlcIik7XG4vLyBET00gZm9ybSBlbGVtZW50cyA6XG5jb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcInByb2plY3Qtb3V0cHV0LWNvbnRhaW5lclwiXG4pO1xuY29uc3QgZGVmYXVsdFByb2plY3RPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtcHJvamVjdC1vdXRwdXRcIik7XG4vLyBsZXQgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vIGxldCBmb3JtVGl0bGUgPSBmb3JtVGFza1swXTtcbi8vIGxldCBmb3JtRGV0YWlscyA9IGZvcm1UYXNrWzFdO1xuLy8gbGV0IGZvcm1EYXRlID0gZm9ybVRhc2tbMl07XG4vLyBmdW5jIHRvIHNob3cgZGVmYXVsdCBwcm9qZWN0IG5hbWUgOlxuZnVuY3Rpb24gc2hvd0RlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItcHJvamVjdC1pdGVtc1wiKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWZhdWx0UHJvamVjdERpdi5pZCA9IFwiZGVmYXVsdC1wcm9qZWN0LWRpdlwiO1xuICBkZWZhdWx0UHJvamVjdERpdi50ZXh0Q29udGVudCA9IG5ld0RlZmF1bHRQcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdERpdik7XG59XG5zaG93RGVmYXVsdFByb2plY3QoKTtcblxuLy8gZXZlbnQgdG8gZGlzcGxheSBwcm9qZWN0IDpcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LXByb2plY3QtZGl2XCIpO1xucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgY3JlYXRlRGVmYXVsdFRhc2soKTtcbiAgc2hvd1Rhc2tGb3JtKCk7XG4gIGRlZmF1bHRDaGVja2JveEJ1dHRvblN0eWxlcygpO1xufSk7XG5cbi8vIGZ1bmMgdG8gY3JlYXRlIHByb2plY3QgdGFzayA6XG5jb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgZGVmYXVsdFByb2plY3RPdXRwdXQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuICBkZWZhdWx0UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIlwiPiR7bmV3RGVmYXVsdFByb2plY3QubmFtZX08L3NwYW4+XG4gICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICBgO1xufTtcbi8vIGZ1bmMgdG8gc2hvdyBkZWZhdWx0IHRhc2sgY29udGFpbmVyIDpcbmNvbnN0IGNyZWF0ZURlZmF1bHRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0VGFza091dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdC10YXNrLW91dHB1dFwiKTtcbiAgZGVmYXVsdFRhc2tPdXRwdXQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuICBkZWZhdWx0VGFza091dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJjaGVjay10aXRsZS1kaXZcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiZGVmYXVsdC1jaGVja2JveC1idXR0b25cIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdC1vdXRwdXQtdGl0bGVcIj4ke25ld0RlZmF1bHRUYXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImRlZmF1bHQtb3V0cHV0LWRldGFpbHNcIj4ke25ld0RlZmF1bHRUYXNrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdC1vdXRwdXQtZGF0ZVwiPiR7bmV3RGVmYXVsdFRhc2suZHVlRGF0ZX08L2Rpdj5gO1xufTtcbi8vIGZ1bmMgdG8gc2hvdyB0YXNrIGZvcm0gOlxuLy8gZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKCkge1xuLy8gICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idXR0b25cIik7XG4vLyAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICBmb3JtVGFzay5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgIH0pO1xuLy8gfVxuLy8gZnVuYyB0byBzaHcgZm9ybSBvdXRwdXRzIDpcbmNvbnN0IHNob3dGb3JtT3V0cHV0ID0gKCkgPT4ge1xuICAvLyByZXR1cm4gZm9ybSBzdWJtaXQgaWYgZW1wdHkgOlxuICBpZiAoXG4gICAgZm9ybVRpdGxlLnZhbHVlID09PSBcIlwiIHx8XG4gICAgZm9ybURldGFpbHMudmFsdWUgPT09IFwiXCIgfHxcbiAgICBmb3JtRGF0ZS52YWx1ZSA9PT0gXCJcIlxuICApXG4gICAgcmV0dXJuO1xuICAvLyBjcmVhdGUgbmV3IGZvcm0gb3V0cHV0IDpcbiAgY29uc3QgZm9ybVRhc2tPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtVGFza091dHB1dC5pZCA9IFwiZm9ybS10YXNrLW91dHB1dFwiO1xuICBmb3JtVGFza091dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGlkPVwiY2hlY2stdGl0bGUtZGl2XCI+XG4gICAgICA8aW5wdXQgaWQ9XCJjaGVja2JveC1idXR0b25cIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXRpdGxlXCI+JHtmb3JtVGl0bGUudmFsdWV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtmb3JtRGV0YWlscy52YWx1ZX08L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kYXRlXCI+JHtmb3JtRGF0ZS52YWx1ZX08L2Rpdj5gO1xuICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGFza091dHB1dCk7XG4gIGNsZWFuRm9ybURhdGEoKTtcbiAgY2hlY2tib3hCdXR0b25TdHlsZXMoKTtcbn07XG4vLyAvLyBjbGVhbiBGb3JtIERhdGEgOlxuLy8gY29uc3QgY2xlYW5Gb3JtRGF0YSA9ICgpID0+IHtcbi8vICAgZm9ybVRhc2sucmVzZXQoKTtcbi8vIH07XG4vLyBmb3JtIHN1Ym1pdCBldmVudCBmb3Igc2hvd2luZyB0aGUgdGhlIGZvcm0gb3V0cHV0ICA6XG4vLyBjb25zdCBhZGRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XG4vLyBhZGRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtT3V0cHV0KTtcbi8vIGZvcm0gY2FuY2VsIGJ1dHRvbiB0byByZW1vdmUgZm9ybSA6XG4vLyBjb25zdCBjYW5jZWxTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1zdWJtaXRcIik7XG4vLyBjYW5jZWxTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgZm9ybVRhc2suc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuLy8gfSk7XG5cbi8vIGZ1bmMgdG8gc3R5bGUgZGVmdWFsdCBlbGVtZW50cyA6XG5jb25zdCBkZWZhdWx0Q2hlY2tib3hCdXR0b25TdHlsZXMgPSAoKSA9PiB7XG4gIC8vIGRlZmF1bHQgb3V0cHV0IHByb2plY3QgRE9NIDpcbiAgY29uc3QgZGVmYXVsdENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LWNoZWNrYm94LWJ1dHRvblwiKTtcbiAgY29uc3QgZGVmYXVsdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LW91dHB1dC10aXRsZVwiKTtcbiAgY29uc3QgZGVmYXVsdERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtb3V0cHV0LWRldGFpbHNcIik7XG4gIGNvbnN0IGRlZmF1bHREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LW91dHB1dC1kYXRlXCIpO1xuICAvLyBmdW5jIHRvIHN0eWxlIGRlZmF1bHQgZWxlbWVudHMgOlxuICBjb25zdCBzdHlsZURlZmF1bHRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBpZiAoZGVmYXVsdENoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGRlZmF1bHRUaXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2hcIjtcbiAgICAgIGRlZmF1bHREZXRhaWxzLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaFwiO1xuICAgICAgZGVmYXVsdERhdGUuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmF1bHRUaXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBub25lXCI7XG4gICAgICBkZWZhdWx0RGV0YWlscy5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBub25lXCI7XG4gICAgICBkZWZhdWx0RGF0ZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBub25lXCI7XG4gICAgfVxuICB9O1xuICAvLyBkZWZhdWx0IGJ1dHRvbiBldmVudCA6XG4gIGRlZmF1bHRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHN0eWxlRGVmYXVsdEVsZW1lbnRzKTtcbn07XG4vLyBmdW5jIHRvIHN0eWxlIHRoZSB0YXNrIG91dHB1dCB3aGVuIGNoZWNrYm94IGNoZWNrZWQgOlxuZnVuY3Rpb24gY2hlY2tib3hCdXR0b25TdHlsZXMoKSB7XG4gIGNvbnN0IGFsbENoZWNrYm94QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjaGVja2JveC1idXR0b25cIik7XG4gIGFsbENoZWNrYm94QnV0dG9uLmZvckVhY2goKGNoZWNrYm94QnRuKSA9PiB7XG4gICAgY2hlY2tib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAvLyB0YXNrIG91dHB1dCBET00gOlxuICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGNoZWNrYm94QnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHRhc2tPdXRwdXRUaXRsZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW91dHB1dC10aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRhc2tPdXRwdXREZXRhaWxzID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiN0YXNrLW91dHB1dC1kZXRhaWxzXCJcbiAgICAgICk7XG4gICAgICBjb25zdCB0YXNrT3V0cHV0RGF0ZSA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW91dHB1dC1kYXRlXCIpO1xuICAgICAgLy8gY29uZGl0aW9uIHRvIGNoZWNrIGlmIGN1cnJlbnQgdGhlIGNoZWNrYm94IGNoZWNrZWQgb3Igbm90IDpcbiAgICAgIGlmIChjaGVja2JveEJ0bi5jaGVja2VkKSB7XG4gICAgICAgIHRhc2tPdXRwdXRUaXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgdGFza091dHB1dERldGFpbHMuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoXCI7XG4gICAgICAgIHRhc2tPdXRwdXREYXRlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza091dHB1dFRpdGxlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IG5vbmVcIjtcbiAgICAgICAgdGFza091dHB1dERldGFpbHMuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbm9uZVwiO1xuICAgICAgICB0YXNrT3V0cHV0RGF0ZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBuZXcgcHJvamVjdCBuYW1lIGZvcm0gRE9NOlxuY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLXByb2plY3QtaXRlbXNcIik7XG5jb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtbmV3LXByb2plY3QtZm9ybVwiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGFkZFByb2plY3ROYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1uYW1lLWJ1dHRvblwiKTtcbi8vIGV2ZW50IHRvIHNob3cgbmV3IHByb2plY3QgZm9ybSA6XG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TmV3UHJvamVjdEZyb20pO1xuZnVuY3Rpb24gc2hvd05ld1Byb2plY3RGcm9tKCkge1xuICBhZGRQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXkgOiBmbGV4XCI7XG59XG4vLyBldmVudCB0byBjcmVhdGUgbmV3IHByb2plY3QgbmFtZSA6XG4vLyBhZGRQcm9qZWN0TmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBjcmVhdGVOZXdQcm9qZWN0TmFtZSgpO1xuLy8gICBjcmVhdGVTaWRlQmFyRWxlbWVudCgpO1xuLy8gfSk7XG5cbmNvbnN0IHByb2plY3RPYmogPSB7XG4gIGNyZWF0ZU5ld1Byb2plY3ROYW1lKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gbmV3IFByb2plY3QocHJvamVjdE5hbWVJbnB1dC52YWx1ZSk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3ROYW1lO1xuICB9LFxufTtcbi8vIERPTSBmb3JtIDpcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbmxldCBmb3JtVGl0bGUgPSBmb3JtWzBdO1xubGV0IGZvcm1EZXRhaWxzID0gZm9ybVsxXTtcbmxldCBmb3JtRGF0ZSA9IGZvcm1bMl07XG5cbmNvbnN0IERPTUVsZW1lbnQgPSB7XG4gIHN0b3JlTmV3RGl2RWxlbWVudDogXCJcIixcbiAgc3RvcmVOZXdQcm9qZWN0T3V0cHV0OiBcIlwiLFxuICBjcmVhdGVTaWRlQmFyRWxlbWVudCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0RGl2LmlkID0gXCJuZXctcHJvamVjdC1kaXYtaXRlbVwiO1xuICAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmNyZWF0ZU5ld1Byb2plY3ROYW1lKCkuZ2V0TmV3TmFtZSgpO1xuICAgIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcbiAgICB0aGlzLnN0b3JlTmV3RGl2RWxlbWVudCA9IG5ld1Byb2plY3REaXY7XG4gIH0sXG4gIGNyZWF0ZU91dHB1dEVsZW1lbnQoKSB7XG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgbmV3UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4gICAgbmV3UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgPHNwYW4gaWQ9XCJwcm9qZWN0LXRpdGxlXCI+JHt0aGlzLnN0b3JlTmV3RGl2RWxlbWVudC50ZXh0Q29udGVudH08L3NwYW4+XG4gICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbiAgICBgO1xuICAgIC8vIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPdXRwdXQpO1xuICAgIHByb2plY3RUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0T3V0cHV0LCBmb3JtKTtcbiAgICB0aGlzLnN0b3JlTmV3UHJvamVjdE91dHB1dCA9IG5ld1Byb2plY3RPdXRwdXQ7XG4gIH0sXG4gIC8vIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAvLyAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50IDpcbiAgLy8gICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIC8vICAgZm9ybS5pZCA9IFwiZm9ybS10YXNrXCI7XG4gIC8vICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIC8vICAgZm9ybS5tZXRob2QgPSBcImRpYWxvZ1wiO1xuICAvLyAgIC8vIENyZWF0ZSB0aGUgZGl2IGVsZW1lbnRzIGFuZCB0aGVpciBjb250ZW50IDpcbiAgLy8gICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIGZvcm1UaXRsZS5pZCA9IFwiZm9ybS10aXRsZVwiO1xuICAvLyAgIGZvcm1UaXRsZS5pbm5lckhUTUwgPSBgXG4gIC8vICAgPGxhYmVsPlRpdGxlOjwvbGFiZWw+XG4gIC8vICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IFRvIERvOlwiIHJlcXVpcmVkIC8+XG4gIC8vIGA7XG4gIC8vICAgY29uc3QgZm9ybURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyAgIGZvcm1EZXRhaWxzLmlkID0gXCJmb3JtLWRldGFpbHNcIjtcbiAgLy8gICBmb3JtRGV0YWlscy5pbm5lckhUTUwgPSBgXG4gIC8vICAgPGxhYmVsPkRldGFpbHMob3B0aW9uYWwpOjwvbGFiZWw+XG4gIC8vICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb246XCIgLz5cbiAgLy8gYDtcbiAgLy8gICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgZm9ybURhdGUuaWQgPSBcImZvcm0tZGF0ZVwiO1xuICAvLyAgIGZvcm1EYXRlLmlubmVySFRNTCA9IGBcbiAgLy8gICA8bGFiZWw+RGF0ZTo8L2xhYmVsPlxuICAvLyAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkIC8+XG4gIC8vIGA7XG4gIC8vICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgZm9ybVN1Ym1pdC5pZCA9IFwiZm9ybS1zdWJtaXRcIjtcbiAgLy8gICBmb3JtU3VibWl0LmlubmVySFRNTCA9IGBcbiAgLy8gICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgLy8gICA8aW5wdXQgaWQ9XCJjYW5jZWwtc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiY2FuY2VsXCIgLz5cbiAgLy8gYDtcbiAgLy8gICAvLyBhcHBlbmQgdGhlIGRpdiBlbGVtZW50cyB0byB0aGUgZm9ybSA6XG4gIC8vICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAvLyAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURldGFpbHMpO1xuICAvLyAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybURhdGUpO1xuICAvLyAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG4gIC8vICAgLy8gYXBwZW5kIHRoZSBmb3JtIHRoZSBjdXJyZW50IG5ldyBwcm9qZWN0IG91dHB1dCBlbGVtZW50IDpcbiAgLy8gICB0aGlzLnN0b3JlTmV3UHJvamVjdE91dHB1dC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgLy8gfSxcbiAgLy8gIyMjIyMjIyMjIyMjIyMjI1xuICAvLyBzaG93VGFza0Zvcm0oKSB7XG4gIC8vICAgY29uc3QgYWxsQWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbiAgLy8gICBhbGxBZGRUYXNrQnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gIC8vICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNyZWF0ZVRhc2tGb3JtKCksIHtcbiAgLy8gICAgICAgb25jZTogdHJ1ZSxcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9LFxuXG4gIC8vIHNob3dUYXNrRm9ybSgpIHtcbiAgLy8gICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4gIC8vICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmVUYXNrQnV0dG9uKTtcblxuICAvLyAgIHRoaXMuc3RvcmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gIC8vICAgICBcImNsaWNrXCIsXG4gIC8vICAgICAoKSA9PiB7XG4gIC8vICAgICAgIHRoaXMuY3JlYXRlVGFza0Zvcm0oKTtcblxuICAvLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0b3JlVGFza0J1dHRvbik7XG4gIC8vICAgICB9LFxuICAvLyAgICAgeyBvbmNlOiB0cnVlIH1cbiAgLy8gICApO1xuICAvLyB9LFxuICBzaG93VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgYWxsQWRkVGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBhbGxBZGRUYXNrQnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm0uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheSA6IGZsZXhcIjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBoaWRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgY2FuY2VsU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtc3VibWl0XCIpO1xuICAgIGNhbmNlbFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogbm9uZVwiO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIGZvcm0gc3VibWl0IGV2ZW50IGZvciBzaG93aW5nIHRoZSB0aGUgZm9ybSBvdXRwdXQgIDpcbiAgLy8gYWRkU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybU91dHB1dCk7XG4gIC8vIHN1Ym1pdEV2ZW50QnV0dG9uICgpIHtcbiAgLy8gICBjb25zdCBhZGRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XG4gIC8vICAgY29uc3RcbiAgLy8gfSxcbiAgc2hvd0Zvcm1PdXRwdXQoKSB7XG4gICAgLy8gcmV0dXJuIGZvcm0gc3VibWl0IGlmIGVtcHR5IDpcbiAgICBpZiAoXG4gICAgICBmb3JtVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgIGZvcm1EZXRhaWxzLnZhbHVlID09PSBcIlwiIHx8XG4gICAgICBmb3JtRGF0ZS52YWx1ZSA9PT0gXCJcIlxuICAgIClcbiAgICAgIHJldHVybjtcbiAgICAvLyBjcmVhdGUgbmV3IGZvcm0gb3V0cHV0IDpcbiAgICBjb25zdCBmb3JtVGFza091dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRhc2tPdXRwdXQuaWQgPSBcImZvcm0tdGFzay1vdXRwdXRcIjtcbiAgICBmb3JtVGFza091dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJjaGVjay10aXRsZS1kaXZcIj5cbiAgICAgICAgPGlucHV0IGlkPVwiY2hlY2tib3gtYnV0dG9uXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXRpdGxlXCI+JHtmb3JtVGl0bGUudmFsdWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7Zm9ybURldGFpbHMudmFsdWV9PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kYXRlXCI+JHtmb3JtRGF0ZS52YWx1ZX08L2Rpdj5gO1xuICAgIC8vIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UYXNrT3V0cHV0KTtcbiAgICAvLyB0aGlzLnN0b3JlTmV3UHJvamVjdE91dHB1dCA9IG5ld1Byb2plY3RPdXRwdXQ7XG4gICAgdGhpcy5zdG9yZU5ld1Byb2plY3RPdXRwdXQuYXBwZW5kQ2hpbGQoZm9ybVRhc2tPdXRwdXQpO1xuICAgIC8vIGNsZWFuRm9ybURhdGEoKTtcbiAgICAvLyBjaGVja2JveEJ1dHRvblN0eWxlcygpO1xuICB9LFxufTtcbmFkZFByb2plY3ROYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIERPTUVsZW1lbnQuY3JlYXRlU2lkZUJhckVsZW1lbnQoKTtcbiAgRE9NRWxlbWVudC5jcmVhdGVPdXRwdXRFbGVtZW50KCk7XG4gIERPTUVsZW1lbnQuc2hvd1Rhc2tGb3JtKCk7XG4gIERPTUVsZW1lbnQuaGlkZVRhc2tGb3JtKCk7XG4gIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xufSk7XG4vLyBmdW5jdGlvbiBzdWJtaXRGb3JtRXZlbnQoKSB7XG5jb25zdCBhZGRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XG5hZGRTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgRE9NRWxlbWVudC5zaG93Rm9ybU91dHB1dCgpO1xuICBjbGVhbkZvcm1EYXRhKCk7XG59KTtcbi8vIGNsZWFuIEZvcm0gRGF0YSA6XG5jb25zdCBjbGVhbkZvcm1EYXRhID0gKCkgPT4ge1xuICBmb3JtLnJlc2V0KCk7XG59O1xuLy8gfVxuLy8gIyMjIyMjIyMjIyMjIyMjIHNob3cgdGFzayBmb3JtIGZvciBvbmNlIGZvciBlYWNoIGFkZCB0YXNrIGJ1dHRvbiA6XG4vLyBzaG93VGFza0Zvcm0oKSB7XG4vLyAgIGNvbnN0IGFsbEFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhZGQtdGFzay1idXR0b25cIik7XG4vLyAgIGFsbEFkZFRhc2tCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNyZWF0ZVRhc2tGb3JtKCksIHtcbi8vICAgICAgIG9uY2U6IHRydWUsXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfSxcblxuLy8gZm9ybSBzdWJtaXQgZXZlbnQgZm9yIHNob3dpbmcgdGhlIHRoZSBmb3JtIG91dHB1dCAgOlxuLy8gY29uc3QgYWRkU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuLy8gYWRkU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybU91dHB1dCk7XG4vLyAvLyBmb3JtIGNhbmNlbCBidXR0b24gdG8gcmVtb3ZlIGZvcm0gOlxuLy8gY29uc3QgY2FuY2VsU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtc3VibWl0XCIpO1xuLy8gY2FuY2VsU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGZvcm1UYXNrLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbi8vIH0pO1xuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgV09SS0lORyBPTiBUQVNLIEZPUk0gOlxuXG4vLyBmdW5jdGlvbiBzaWRlQmFyRWxlbWVudEFkZEV2ZW50KG5ld1Byb2plY3REaXYpIHtcbi8vICAgLy8gbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKGNcbi8vICAgLy8gICBcImNsaWNrXCIsXG4vLyAgIC8vICAgKCkgPT4ge1xuLy8gICAvLyAgICAgLy8gRE9NRWxlbWVudC5jcmVhdGVPdXRwdXRFbGVtZW50KG5ld1Byb2plY3REaXYpO1xuLy8gICAvLyAgICAgRE9NRWxlbWVudC5zaG93VGFza0Zvcm0oKTtcbi8vICAgLy8gICAgIERPTUVsZW1lbnQuaGlkZU91dHB1dEVsZW1lbnRzKG5ld1Byb2plY3REaXYpO1xuLy8gICAvLyAgIH0sXG4vLyAgIC8vICAgeyBvbmNlOiB0cnVlIH1cbi8vICAgLy8gKTtcbi8vIH1cbi8vIHNpZGVCYXJFbGVtZW50QWRkRXZlbnQoKTtcbi8vIGZ1bmN0aW9uIGhpZGVPdGhlckVsZW1lbnRzKG5ld1Byb2plY3REaXYpIHtcbi8vICAgY29uc3QgYWxsTmV3UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3LXByb2plY3Qtb3V0cHV0XCIpO1xuLy8gICAvLyBsZXQgY3VycmVudFByb2plY3Q7XG4vLyAgIGFsbE5ld1Byb2plY3RPdXRwdXQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuLy8gICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIGlmIChwcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID09PSBuZXdQcm9qZWN0RGl2LnRleHRDb250ZW50KSB7XG4vLyAgICAgICAgIHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheSA6IGZsZXhcIjtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlU2lkZUJhckVsZW1lbnQoKSB7XG4vLyAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4vLyAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBuZXdQcm9qZWN0RGl2LmlkID0gXCJuZXctcHJvamVjdC1kaXYtaXRlbVwiO1xuLy8gICBuZXdQcm9qZWN0RGl2LnRleHRDb250ZW50ID1cbi8vICAgICBjcmVhdGVOZXdQcm9qZWN0TmFtZSgpLm5ld1Byb2plY3ROYW1lLmdldE5ld05hbWUoKTtcbi8vICAgcHJvamVjdEl0ZW1zLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuLy8gICBzaWRlQmFyRWxlbWVudEFkZEV2ZW50KCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNpZGVCYXJFbGVtZW50QWRkRXZlbnQoKSB7XG4vLyAgIGNvbnN0IGFsbFNpZGVCYXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3LXByb2plY3QtZGl2LWl0ZW1cIik7XG4vLyAgIGFsbFNpZGVCYXJFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgY3JlYXRlT3V0cHV0RWxlbWVudCgpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcbi8vIH1cbi8vIGZ1bmN0aW9uIGNyZWF0ZU91dHB1dEVsZW1lbnQoZWxlbWVudCkge1xuLy8gICBjb25zdCBuZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4vLyAgIG5ld1Byb2plY3RPdXRwdXQuaW5uZXJIVE1MID0gYFxuLy8gICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIj4ke1wic3RvcmVOZXdEaXZFbGVtZW50XCJ9PC9zcGFuPlxuLy8gICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuLy8gICBgO1xuLy8gICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3V0cHV0KTtcbi8vICAgLy8gY29uc3QgZXhpc3RlZFByb2plY3RPdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW91dHB1dFwiKTtcbi8vICAgLy8gaWYgKGV4aXN0ZWRQcm9qZWN0T3V0cHV0ICE9IG51bGwpIHtcbi8vICAgLy8gICBuZXdQcm9qZWN0T3V0cHV0LnJlbW92ZSgpO1xuLy8gICAvLyB9XG4vLyB9XG5cbi8vIGRpc3BsYXkgbmV3IHByb2plY3QgaXRlbSBlbGVtZW50IDpcbi8vIGZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0SXRlbSgpIHtcbi8vICAgaWYgKHByb2plY3ROYW1lSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcbi8vICAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIG5ld1Byb2plY3REaXYuaWQgPSBcIm5ldy1wcm9qZWN0LWRpdi1pdGVtXCI7XG4vLyAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPVxuLy8gICAgIGNyZWF0ZU5ld1Byb2plY3ROYW1lKCkubmV3UHJvamVjdE5hbWUuZ2V0TmV3TmFtZSgpO1xuLy8gICBwcm9qZWN0SXRlbXMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4vLyAgIC8vIHNob3dOZXdQcm9qZWN0TmFtZShuZXdQcm9qZWN0RGl2KTsgLy8gYmluZGluZyBuZXdQcm9qZWN0RGl2LlxuLy8gICBuZXdQcm9qZWN0c0RpdkV2ZW50KG5ld1Byb2plY3REaXYpO1xuLy8gfVxuLy8gY29uc3QgYWxsTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3LXByb2plY3Qtb3V0cHV0XCIpO1xuLy8gYWxsTmV3UHJvamVjdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7fSk7XG4vLyBjb25zdCBjcmVhdGVPdXRwdXRFbGVtZW50ID0gKG5ld1Byb2plY3REaXYpID0+IHtcbi8vICAgbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFxuLy8gICAgIFwiY2xpY2tcIixcbi8vICAgICBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBjb25zdCBuZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICAgIG5ld1Byb2plY3RPdXRwdXQuaWQgPSBcIm5ldy1wcm9qZWN0LW91dHB1dFwiO1xuLy8gICAgICAgbmV3UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4vLyAgICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIj4ke3RoaXMudGV4dENvbnRlbnR9PC9zcGFuPlxuLy8gICAgICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbi8vICAgICAgIGA7XG4vLyAgICAgICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3V0cHV0KTtcbi8vICAgICB9LFxuLy8gICAgIHsgb25jZTogdHJ1ZSB9XG4vLyAgICk7XG4vLyB9O1xuLy8gY29uc3QgbmV3UHJvamVjdHNEaXZFdmVudCA9ICgpID0+IHtcbi8vICAgY29uc3QgYWxsTmV3UHJvamVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI25ldy1wcm9qZWN0LWRpdi1pdGVtXCIpO1xuLy8gICBhbGxOZXdQcm9qZWN0RGl2cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd05ld1Byb2plY3RPdXRwdXQoZWxlbWVudCksIHtcbi8vICAgICAgIG9uY2U6IHRydWUsXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfTtcbi8vIGxldCBuZXdQcm9qZWN0T3V0cHV0ID0gbnVsbCAjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBmdW5jdGlvbiBuZXdQcm9qZWN0c0RpdkV2ZW50KG5ld1Byb2plY3REaXYpIHtcbi8vICAgY29uc29sZS5sb2cobmV3UHJvamVjdERpdik7XG4vLyAgIG5ld1Byb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcbi8vICAgICBcImNsaWNrXCIsXG4vLyAgICAgKCkgPT4gc2hvd05ld1Byb2plY3RPdXRwdXQobmV3UHJvamVjdERpdiksXG4vLyAgICAgeyBvbmNlOiB0cnVlIH1cbi8vICAgKTtcbi8vIH1cbi8vIGZ1bmN0aW9uIG5ld1Byb2plY3RzRGl2RXZlbnQobmV3UHJvamVjdERpdikge1xuLy8gICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TmV3UHJvamVjdE91dHB1dChuZXdQcm9qZWN0RGl2KSk7XG4vLyB9XG4vLyBmdW5jdGlvbiBzaG93TmV3UHJvamVjdE91dHB1dChuZXdQcm9qZWN0RGl2KSB7XG4vLyAgIGNvbnN0IG5ld1Byb2plY3RPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBuZXdQcm9qZWN0T3V0cHV0LmlkID0gXCJuZXctcHJvamVjdC1vdXRwdXRcIjtcbi8vICAgbmV3UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4vLyAgICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIj4ke25ld1Byb2plY3REaXYudGV4dENvbnRlbnR9PC9zcGFuPlxuLy8gICAgICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbi8vICAgICAgIGA7XG4vLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPdXRwdXQpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0T3V0cHV0KTtcbi8vICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdERpdik7XG4vLyAgIC8vIGlmIChuZXdQcm9qZWN0T3V0cHV0KSB7XG4vLyAgIC8vICAgbmV3UHJvamVjdE91dHB1dC5yZW1vdmUoKTtcbi8vICAgLy8gfVxuLy8gICAvLyBjb25zdCBhbGxOZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXctcHJvamVjdC1vdXRwdXRcIik7XG4vLyAgIC8vIGNvbnNvbGUubG9nKGFsbE5ld1Byb2plY3RPdXRwdXQpO1xuLy8gICAvLyBoaWRlT3RoZXJFbGVtZW50cyhuZXdQcm9qZWN0RGl2KTtcbi8vICAgLy8gaGlkZUFsbEVsZW1lbnRzKCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGhpZGVBbGxFbGVtZW50cygpIHtcbi8vICAgY29uc3QgYWxsTmV3UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3LXByb2plY3Qtb3V0cHV0XCIpO1xuLy8gICBhbGxOZXdQcm9qZWN0T3V0cHV0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHN0b3JlTmV3RGl2RWxlbWVudChuZXdQcm9qZWN0RGl2LCBuZXdQcm9qZWN0T3V0cHV0KSB7XG4vLyAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3REaXYpO1xuLy8gICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0T3V0cHV0LmZpcnN0RWxlbWVudENoaWxkKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaGlkZU90aGVyRWxlbWVudHMobmV3UHJvamVjdERpdikge1xuLy8gICBjb25zdCBhbGxOZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNuZXctcHJvamVjdC1vdXRwdXRcIik7XG4vLyAgIC8vIGxldCBjdXJyZW50UHJvamVjdDtcbi8vICAgYWxsTmV3UHJvamVjdE91dHB1dC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4vLyAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgaWYgKHByb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPT09IG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQpIHtcbi8vICAgICAgICAgcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogZmxleFwiO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCI7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBjb25zdCBhbGxOZXdQcm9qZWN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbmV3LXByb2plY3QtZGl2LWl0ZW1cIik7bmV3cHJvXG4vLyAvLyBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vIC8vICAgLy8gY29uc29sZS5sb2coXCJzdG9yZU5ld0RpdkVsZW1lbnRcIik7XG4vLyAvLyAgIGNvbnN0IG5ld1Byb2plY3RPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gLy8gICBuZXdQcm9qZWN0T3V0cHV0LmlkID0gXCJuZXctcHJvamVjdC1vdXRwdXRcIjtcbi8vIC8vICAgbmV3UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4vLyAvLyAgICAgICAgIDxzcGFuIGlkPVwicHJvamVjdC10aXRsZVwiPiR7dGhpcy50ZXh0Q29udGVudH08L3NwYW4+XG4vLyAvLyAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4vLyAvLyAgICAgICAgIGA7XG4vLyAvLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPdXRwdXQpO1xuLy8gLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza0NvbnRhaW5lci5jb250YWlucyhuZXdQcm9qZWN0T3V0cHV0KSk7XG4vLyAvLyAgIGlmIChwcm9qZWN0VGFza0NvbnRhaW5lci5jb250YWlucyhuZXdQcm9qZWN0T3V0cHV0KSkge1xuLy8gLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAvLyAgIH1cbi8vIC8vIH0pO1xuLy8gYWxsTmV3UHJvamVjdERpdnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgICBjb25zdCBuZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBuZXdQcm9qZWN0T3V0cHV0LmlkID0gXCJuZXctcHJvamVjdC1vdXRwdXRcIjtcbi8vICAgICBuZXdQcm9qZWN0T3V0cHV0LmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxzcGFuIGlkPVwicHJvamVjdC10aXRsZVwiPiR7dGhpcy50ZXh0Q29udGVudH08L3NwYW4+XG4vLyAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuLy8gICAgICAgYDtcbi8vICAgICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3V0cHV0KTtcbi8vICAgfSk7XG4vLyB9KTtcblxuZnVuY3Rpb24gc3RvcmVOZXdEaXZFbGVtZW50KCkge1xuICBjb25zdCBuZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4gIG5ld1Byb2plY3RPdXRwdXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIj4ke3RoaXMudGV4dENvbnRlbnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICBgO1xuICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0T3V0cHV0KTtcbn1cblxuLy8gc2hvdyBwcm9qZWN0IG5hbWUgOlxuLy8gbGV0IGVsZW1lbnRDcmVhdGVkID0gdHJ1ZTtcbi8vIGZ1bmN0aW9uIHNob3dOZXdQcm9qZWN0TmFtZShuZXdQcm9qZWN0RGl2KSB7XG4vLyAgIG5ld1Byb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIC8vIGNyZWF0ZU5ld1Byb2plY3RUYXNrKCk7XG4vLyAgICAgLy8gaGlkZU90aGVyRWxlbWVudHMoKTtcbi8vICAgICBpZiAoZWxlbWVudENyZWF0ZWQpIHtcbi8vICAgICAgIGNvbnN0IG5ld1Byb2plY3RPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4vLyAgICAgICBuZXdQcm9qZWN0T3V0cHV0LmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxzcGFuIGlkPVwicHJvamVjdC10aXRsZVwiPiR7dGhpcy50ZXh0Q29udGVudH08L3NwYW4+XG4vLyAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuLy8gICAgICAgYDtcbi8vICAgICAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPdXRwdXQpO1xuLy8gICAgIH1cbi8vICAgICBlbGVtZW50Q3JlYXRlZCA9IGZhbHNlO1xuLy8gICB9KTtcbi8vIH1cblxuY29uc3Qgc2hvd05ld1Byb2plY3ROYW1lID0gKCkgPT4ge307XG4vLyBjcmVhdGUgcHJvamVjdCB0YXNrIGVsZW1lbnQgOlxuY29uc3QgY3JlYXRlTmV3UHJvamVjdFRhc2sgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKHRoaXMpO1xuICBjb25zdCBuZXdQcm9qZWN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4gIG5ld1Byb2plY3RPdXRwdXQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIlwiPiR7XCJ5cnNcIn08L3NwYW4+XG4gICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4gICAgYDtcbiAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE91dHB1dCk7XG59O1xuXG4vLyBmdW5jdGlvbiBoaWRlT3RoZXJFbGVtZW50cygpIHtcbi8vICAgZGVmYXVsdFByb2plY3RPdXRwdXQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVOZXdOYW1lKG5ld05hbWUpIHtcbi8vICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbi8vICAgY29uc29sZS5sb2cobmV3UHJvamVjdE5hbWUpO1xuLy8gfVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCJcIlxuLy8gZnVuY3Rpb24gZGlzcGxheUZvcm1PdXRwdXQoKSB7XG4vLyAgIGNvbnN0IGdldEZvcm1PdXRwdXQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vICAgICBjb25zdCBmb3JtVGl0bGVPdXRwdXQgPSBmb3JtVGFza1swXS52YWx1ZTtcbi8vICAgICBjb25zdCBmb3JtRGV0YWlsc091dHB1dCA9IGZvcm1UYXNrWzFdLnZhbHVlO1xuLy8gICAgIGNvbnN0IGZvcm1EYXRlT3V0cHV0ID0gZm9ybVRhc2tbMl0udmFsdWU7XG4vLyAgICAgaWYgKFxuLy8gICAgICAgZm9ybVRpdGxlT3V0cHV0ID09PSBcIlwiIHx8XG4vLyAgICAgICBmb3JtRGV0YWlsc091dHB1dCA9PT0gXCJcIiB8fFxuLy8gICAgICAgZm9ybURhdGVPdXRwdXQgPT09IFwiXCJcbi8vICAgICApXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgLy8gZm9ybVRhc2suc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuLy8gICB9O1xuLy8gICBnZXRGb3JtT3V0cHV0KCk7XG4vLyAgIGNvbnN0IGNyZWF0ZUZvcm1PdXRwdXRFbGVtZW50ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcInByb2plY3QtdGFzay1jb250YWluZXJcIlxuLy8gICAgICk7XG4vLyAgICAgY29uc3QgdGFza091dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pZCA9IFwidGFzay1vdXRwdXQtY29udGFpbmVyXCI7XG4vLyAgICAgLy8gdGFza091dHB1dENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjwvZGl2PlxuLy8gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7Zm9ybVRpdGxlT3V0cHV0fTwvZGl2PlxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtmb3JtRGV0YWlsc091dHB1dH08L2Rpdj5cbi8vICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGF0ZVwiPiR7Zm9ybURhdGVPdXRwdXR9PC9kaXY+XG4vLyAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXByaW9yaXR5XCI+XG4vLyAgICAgICA8YnV0dG9uPnN0b3JlTmV3RGl2RWxlbWVudDwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PmA7XG4vLyAgICAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza091dHB1dENvbnRhaW5lcik7XG4vLyAgIH07XG4vLyAgIGNyZWF0ZUZvcm1PdXRwdXRFbGVtZW50KCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEZvcm1PdXRwdXQoKSB7XG4vLyAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4vLyAgIGNvbnN0IGZvcm1UaXRsZU91dHB1dCA9IGZvcm1UYXNrWzBdLnZhbHVlO1xuLy8gICBjb25zdCBmb3JtRGV0YWlsc091dHB1dCA9IGZvcm1UYXNrWzFdLnZhbHVlO1xuLy8gICBjb25zdCBmb3JtRGF0ZU91dHB1dCA9IGZvcm1UYXNrWzJdLnZhbHVlO1xuXG4vLyAgIGNvbnNvbGUubG9nKGZvcm1UYXNrKTtcbi8vICAgY29uc29sZS5sb2coZm9ybVRpdGxlT3V0cHV0KTtcbi8vICAgY29uc29sZS5sb2coZm9ybURldGFpbHNPdXRwdXQpO1xuLy8gICBjb25zb2xlLmxvZyhmb3JtRGF0ZU91dHB1dCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xuLy8gICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuLy8gICBjb25zdCBmb3JtVGl0bGVPdXRwdXQgPSBmb3JtVGFza1swXS52YWx1ZTtcbi8vICAgY29uc3QgZm9ybURldGFpbHNPdXRwdXQgPSBmb3JtVGFza1sxXS52YWx1ZTtcbi8vICAgY29uc3QgZm9ybURhdGVPdXRwdXQgPSBmb3JtVGFza1syXS52YWx1ZTtcblxuLy8gICAvLyBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LWJ1dHRvbnNcIik7XG4vLyAgIC8vIGxldCBjaG9zZW5Qcmlvcml0eUJ1dHRvbjtcbi8vICAgLy8gcHJpb3JpdHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICAvLyAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAvLyAgICAgY2hvc2VuUHJpb3JpdHlCdXR0b24gPSB0aGlzO1xuLy8gICAvLyAgIH0pO1xuLy8gICAvLyB9KTtcblxuLy8gICBjb25zb2xlLmxvZyhmb3JtVGl0bGVPdXRwdXQpO1xuLy8gICBjb25zb2xlLmxvZyhmb3JtRGV0YWlsc091dHB1dCk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRlT3V0cHV0KTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBmb3JtVGl0bGVPdXRwdXQsXG4vLyAgICAgZm9ybURldGFpbHNPdXRwdXQsXG4vLyAgICAgZm9ybURhdGVPdXRwdXQsXG4vLyAgIH07XG4vLyB9XG4vL1xuLy8gLy8gZnVuYyB0byBjcmVhdGUgcHJvamVjdCB0YXNrIDpcbi8vIGZ1bmN0aW9uIGNyZWF0ZUZvcm1UYXNrKCkge1xuLy8gICBjb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgIFwicHJvamVjdC10YXNrLWNvbnRhaW5lclwiXG4vLyAgICk7XG4vLyAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4vLyAgIGZvcm1UYXNrLmlkID0gXCJmb3JtLXRhc2tcIjtcbi8vICAgZm9ybVRhc2suc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuLy8gICBmb3JtVGFzay5pbm5lckhUTUwgPSBgXG4vLyAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tdGl0bGVcIj5cbi8vICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTo8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0IFRvIERvOlwiIHJlcXVpcmVkIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZGV0YWlsc1wiPlxuLy8gICAgICAgICAgICAgPGxhYmVsPkRldGFpbHMob3B0aW9uYWwpOjwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbjpcIiAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWRhdGVcIj5cbi8vICAgICAgICAgICAgIDxsYWJlbD5EYXRlOjwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiByZXF1aXJlZCAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLXByaW9yaXR5XCI+XG4vLyAgICAgICAgICAgICA8bGFiZWw+UHJpb3JpdHkob3B0aW9uYWwpOiA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tcHJpb3JpdHktYnV0dG9uc1wiIHJlcXVpcmVkPlxuLy8gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eS1idXR0b25zXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTG93XCIgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHktYnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIk1lZGl1bVwiIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5LWJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJIaWdoXCIgLz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLXN1Ym1pdFwiPlxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4vLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiY2FuY2VsXCIgLz5cbi8vICAgICAgICAgICA8L2Rpdj5gO1xuLy8gICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGFzayk7XG4vLyAgIGNyZWF0ZUZvcm1PdXRwdXQoKTtcbi8vIH1cbi8vIGV2ZW50IGNhbGwgZm9yIGRlZmF1bHQgcHJvamVjdCB0YXNrcyA6XG4vLyBmdW5jdGlvbiBlZGl0VGFza3MoKSB7XG4vLyAgIGNvbnN0IGRlZmF1bHRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1idXR0b25cIik7XG4vLyAgIGlmIChkZWZhdWx0VGFza0J1dHRvbiA9PT0gbnVsbCkgcmV0dXJuO1xuLy8gICBkZWZhdWx0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlRm9ybVRhc2spO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrT3V0cHV0RWxlbWVudCgpIHtcbi8vICAgY29uc3QgdGl0bGUgPSBnZXRGb3JtT3V0cHV0KCkuZm9ybVRpdGxlT3V0cHV0O1xuLy8gICBjb25zdCBkZXRhaWxzID0gZ2V0Rm9ybU91dHB1dCgpLmZvcm1EZXRhaWxzT3V0cHV0O1xuLy8gICBjb25zdCBkYXRlID0gZ2V0Rm9ybU91dHB1dCgpLmZvcm1EYXRlT3V0cHV0O1xuXG4vLyAgIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgXCJwcm9qZWN0LXRhc2stY29udGFpbmVyXCJcbi8vICAgKTtcbi8vICAgY29uc3QgdGFza091dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIHRhc2tPdXRwdXRDb250YWluZXIuaWQgPSBcInRhc2stb3V0cHV0LWNvbnRhaW5lclwiO1xuLy8gICAvLyB0YXNrT3V0cHV0Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXhcIjtcbi8vICAgdGFza091dHB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2Rpdj5cbi8vICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4vLyAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7dGl0bGV9PC9kaXY+XG4vLyAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtkZXRhaWxzfTwvZGl2PlxuLy8gICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbi8vICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXByaW9yaXR5XCI+XG4vLyAgICAgPGJ1dHRvbj5zdG9yZU5ld0RpdkVsZW1lbnQ8L2J1dHRvbj5cbi8vICAgPC9kaXY+XG4vLyAgIDwvZGl2PmA7XG4vLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPdXRwdXRDb250YWluZXIpO1xuLy8gfVxuXG4vLyBjb25zdCBjaGVja2JveEJ1dHRvblN0eWxlcyA9ICgpID0+IHtcbi8vICAgY29uc3QgY2hlY2tCb3hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94LWJ1dHRvblwiKTtcbi8vICAgY29uc3QgdGFza091dHB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW91dHB1dC10aXRsZVwiKTtcbi8vICAgY29uc3QgdGFza091dHB1dERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stb3V0cHV0LWRldGFpbHNcIik7XG4vLyAgIGNvbnN0IHRhc2tPdXRwdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW91dHB1dC1kYXRlXCIpO1xuXG4vLyAgIGNoZWNrQm94QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc3RvcmVOZXdEaXZFbGVtZW50KTtcbi8vICAgY29uc29sZS5sb2coY2hlY2tCb3hCdXR0b24pO1xuLy8gfTtcblxuLy8gZnVuY3Rpb24gZGlzcGxheUZvcm1PdXRwdXQoKSB7XG4vLyAgIC8vIGZvcm0gZWxlbWVudHMgIDpcbi8vICAgbGV0IGZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4vLyAgIGxldCBmb3JtVGl0bGUgPSBmb3JtVGFza1swXTtcbi8vICAgbGV0IGZvcm1EZXRhaWxzID0gZm9ybVRhc2tbMV07XG4vLyAgIGxldCBmb3JtRGF0ZSA9IGZvcm1UYXNrWzJdO1xuLy8gICBpZiAoXG4vLyAgICAgZm9ybVRpdGxlLnZhbHVlID09PSBcIlwiIHx8XG4vLyAgICAgZm9ybURldGFpbHMudmFsdWUgPT09IFwiXCIgfHxcbi8vICAgICBmb3JtRGF0ZS52YWx1ZSA9PT0gXCJcIlxuLy8gICApXG4vLyAgICAgcmV0dXJuO1xuLy8gICAvLyBkaXNwbGF5IGZvcm0gb3V0cHV0cyA6XG4vLyAgIGNvbnN0IGNyZWF0ZUZvcm1PdXRwdXRFbGVtZW50ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcInByb2plY3QtdGFzay1jb250YWluZXJcIlxuLy8gICAgICk7XG4vLyAgICAgY29uc3QgdGFza091dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pZCA9IFwidGFzay1vdXRwdXQtY29udGFpbmVyXCI7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7Zm9ybVRpdGxlLnZhbHVlfTwvZGl2PlxuLy8gICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRldGFpbHNcIj4ke2Zvcm1EZXRhaWxzLnZhbHVlfTwvZGl2PlxuLy8gICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRhdGVcIj4ke2Zvcm1EYXRlLnZhbHVlfTwvZGl2PmA7XG4vLyAgICAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza091dHB1dENvbnRhaW5lcik7XG4vLyAgIH07XG4vLyAgIGNyZWF0ZUZvcm1PdXRwdXRFbGVtZW50KCk7XG4vLyAgIC8vIGNsZWFuIGZvcm0gOlxuLy8gICBjb25zdCBjbGVhbkZvcm1EYXRhID0gKCkgPT4ge1xuLy8gICAgIGZvcm1UYXNrLnJlc2V0KCk7XG4vLyAgIH07XG4vLyAgIGNsZWFuRm9ybURhdGEoKTtcbi8vIH1cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Rpc3Qvc3R5bGUuY3NzXCI7XG4vLyBpbXBvcnQgUHJvamVjdENvbnN0cnVjdG9yLCB7XG4vLyAgIGRlZmF1bHRQcm9qZWN0cyxcbi8vICAgcHJvamVjdHNMaXN0LFxuLy8gfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IG5ld1RvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi91aS5qc1wiO1xuXG4vLyBwcm9qZWN0IG1vZHVsZSA6XG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0c0xpc3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9