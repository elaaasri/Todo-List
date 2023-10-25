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
#project-items {
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  font-size: 20px;
}
/* add project styles */
#project-container {
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
#project-items > h1 {
  font-size: 25px;
}
/* add project name container styles */
#add-project-name-container {
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
  background-color: greenyellow;
}
#add-task-button {
  align-self: center;
  width: 150px;
  background-color: greenyellow;
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
#form-priority {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 95%;
  font-size: 13px;
}

#form-priority-buttons {
  width: 100%;
  display: flex;
  gap: 20px;
}
#form-priority-buttons > input {
  border: none;
  height: 20px;
  font-size: 12px;
  border-radius: 5px;
  outline: none;
  width: 60px;
  font-weight: bold;
}
#form-priority-buttons > input:first-child {
  border: 1px green solid;
  color: green;
}
#form-priority-buttons > input:first-child:hover,
#form-priority-buttons > input:first-child:focus {
  cursor: pointer;
  background-color: green;
  color: white;
}
#form-priority-buttons > input:nth-child(2) {
  border: 1px yellow solid;
  color: yellow;
}
#form-priority-buttons > input:nth-child(2):hover,
#form-priority-buttons > input:nth-child(2):focus {
  cursor: pointer;
  background-color: yellow;
  color: white;
}
#form-priority-buttons > input:nth-child(3) {
  border: 1px red solid;
  color: red;
}
#form-priority-buttons > input:nth-child(3):hover,
#form-priority-buttons > input:nth-child(3):focus {
  cursor: pointer;
  background-color: red;
  color: white;
}
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
  border: solid 3px rgb(0, 217, 255);
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
}
#task-output-details {
  font-size: 15px;
}
#task-output-date {
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
#task-output-tilte {
  font-weight: bold;
}
/* footer styles */
footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background-color: rgb(61, 61, 61);
}
`, "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 80px;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Courier New\", Courier, monospace;\n}\n/* header styles : */\nheader {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  background-color: rgb(61, 61, 61);\n}\n/* main styles */\nmain {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 4;\n  grid-row: 2 / 2;\n}\n/* sidebar styles */\n#sidebar {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  gap: 80px;\n  width: 250px;\n}\n#project-items {\n  /* background-color: green; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 10px;\n  font-size: 20px;\n}\n/* add project styles */\n#project-container {\n  /* background-color: red; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n}\n#project-items > h1 {\n  font-size: 25px;\n}\n/* add project name container styles */\n#add-project-name-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 20px;\n}\n#add-project-name-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n#project-name-input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#add-project-name-button {\n  background-color: greenyellow;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#cancel-project-name-button {\n  background-color: red;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#add-project-name-button:hover,\n#cancel-project-name-button:hover {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n}\n/* side bar styles  */\n#bar-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 20px;\n  font-size: 20px;\n}\n#add-project-button {\n  align-self: center;\n  width: 40px;\n  height: 40px;\n  background-color: greenyellow;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 100px;\n  font-size: 25px;\n}\n#add-project-button:hover {\n  background-color: white;\n}\n/* project task container styles */\n#project-output-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px;\n}\n#default-project-output {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  font-size: 40px;\n}\n#project-title {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  font-size: 30px;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border-radius: 5px;\n  background-color: greenyellow;\n}\n#add-task-button {\n  align-self: center;\n  width: 150px;\n  background-color: greenyellow;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 15px;\n}\n#add-task-button:hover {\n  background-color: white;\n}\n\n/* form style */\n#form-task {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  gap: 8px;\n  background-color: rgb(141, 212, 224);\n  border-radius: 5px;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n#form-title,\n#form-details,\n#form-date {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  font-size: 13px;\n}\n#form-title > input,\n#form-details > input,\n#form-date > input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#form-date > input {\n  color: rgb(0, 217, 255);\n  font-size: 13px;\n}\n#form-priority {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  width: 95%;\n  font-size: 13px;\n}\n\n#form-priority-buttons {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n}\n#form-priority-buttons > input {\n  border: none;\n  height: 20px;\n  font-size: 12px;\n  border-radius: 5px;\n  outline: none;\n  width: 60px;\n  font-weight: bold;\n}\n#form-priority-buttons > input:first-child {\n  border: 1px green solid;\n  color: green;\n}\n#form-priority-buttons > input:first-child:hover,\n#form-priority-buttons > input:first-child:focus {\n  cursor: pointer;\n  background-color: green;\n  color: white;\n}\n#form-priority-buttons > input:nth-child(2) {\n  border: 1px yellow solid;\n  color: yellow;\n}\n#form-priority-buttons > input:nth-child(2):hover,\n#form-priority-buttons > input:nth-child(2):focus {\n  cursor: pointer;\n  background-color: yellow;\n  color: white;\n}\n#form-priority-buttons > input:nth-child(3) {\n  border: 1px red solid;\n  color: red;\n}\n#form-priority-buttons > input:nth-child(3):hover,\n#form-priority-buttons > input:nth-child(3):focus {\n  cursor: pointer;\n  background-color: red;\n  color: white;\n}\n#form-submit {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding-top: 10px;\n}\n#form-submit > input {\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#form-submit > input:first-child {\n  background-color: rgb(84, 210, 84);\n}\n#form-submit > input:nth-child(2) {\n  cursor: pointer;\n  background-color: rgb(255, 48, 48);\n}\n#form-submit > input:nth-child(2):hover,\n#form-submit > input:first-child:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n/* task output styles */\n#default-task-output,\n#form-task-output {\n  border: solid 3px rgb(0, 217, 255);\n  height: 50px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n}\n#task-output-details {\n  font-size: 15px;\n}\n#task-output-date {\n  border: solid 3px rgb(0, 217, 255);\n  border-radius: 5px;\n  font-size: 10px;\n  padding: 5px;\n}\n#check-title-div {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n#task-output-tilte {\n  font-weight: bold;\n}\n/* footer styles */\nfooter {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  background-color: rgb(61, 61, 61);\n}\n"],"sourceRoot":""}]);
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
}
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
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
const newDefaultTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"](
  "Gym",
  "Chest Workout, Cardio.",
  "Today",
  "High"
);
// DOM form elements :
let formTask = document.getElementById("form-task");
let formTitle = formTask[0];
let formDetails = formTask[1];
let formDate = formTask[2];
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
});

// func to create project task :
const createDefaultProject = () => {
  const defaultProjectOutput = document.getElementById(
    "default-project-output"
  );
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
        <input type="checkbox" />
        <div id="task-output-tilte">${newDefaultTask.title}</div>
        </div>
        <div id="task-output-details">${newDefaultTask.description}</div>
        <div id="task-output-date">${newDefaultTask.dueDate}</div>`;
};
// func to show task form :
function showTaskForm() {
  const addTaskButton = document.getElementById("add-task-button");
  addTaskButton.addEventListener("click", () => {
    formTask.style.cssText = "display: flex";
  });
}
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
  const projectTaskContainer = document.getElementById(
    "project-output-container"
  );
  const formTaskOutput = document.createElement("div");
  formTaskOutput.id = "form-task-output";
  formTaskOutput.innerHTML = `
      <div id="check-title-div">
      <input type="checkbox" />
      <div id="task-output-tilte">${formTitle.value}</div>
      </div>
      <div id="task-output-details">${formDetails.value}</div>
      <div id="task-output-date">${formDate.value}</div>`;
  projectTaskContainer.appendChild(formTaskOutput);
  cleanFormData();
};
// clean Form Data :
const cleanFormData = () => {
  formTask.reset();
};
// form submit event for showing the the form output  :
const addSubmitButton = document.querySelector('input[type="submit"]');
addSubmitButton.addEventListener("click", showFormOutput);
// form cancel button to remove form :
const cancelSubmitButton = document.getElementById("cancel-submit");
cancelSubmitButton.addEventListener("click", function () {
  formTask.style.cssText = "display: none";
});

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
// // event call for add project button :
// const addProjectContainer = document.getElementById(
//   "add-project-name-container"
// );
// const addProjectButton = document.getElementById("add-project-button");
// const projectNameInput = document.getElementById("project-name-input");
// addProjectButton.addEventListener("click", addProjectName);

// function addProjectName() {
//   addProjectContainer.style.cssText = "display : flex";
//   if (projectNameInput.value === "") return;
//   const projectContainer = document.getElementById("project-container");
//   const newProject = new Project(projectNameInput.value);
//   const newProjectDiv = document.createElement("div");
//   newProjectDiv.id = "new-project-div";
//   newProjectDiv.textContent = newProject.name;
//   projectContainer.appendChild(newProjectDiv);
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
//       <button>test</button>
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
//     <button>test</button>
//   </div>
//   </div>`;
//   projectTaskContainer.appendChild(taskOutputContainer);
// }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekMscUNBQXFDLFFBQVE7QUFDN0Msa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDclNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQzJCO0FBQ047O0FBRTFCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9kaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3Qvc3R5bGUuY3NzP2I1YzYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmV3VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmciA4MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG4vKiBoZWFkZXIgc3R5bGVzIDogKi9cbmhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcbn1cbi8qIG1haW4gc3R5bGVzICovXG5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDIgLyAyO1xufVxuLyogc2lkZWJhciBzdHlsZXMgKi9cbiNzaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgZ2FwOiA4MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG4jcHJvamVjdC1pdGVtcyB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4vKiBhZGQgcHJvamVjdCBzdHlsZXMgKi9cbiNwcm9qZWN0LWNvbnRhaW5lciB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuI3Byb2plY3QtaXRlbXMgPiBoMSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi8qIGFkZCBwcm9qZWN0IG5hbWUgY29udGFpbmVyIHN0eWxlcyAqL1xuI2FkZC1wcm9qZWN0LW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNhZGQtcHJvamVjdC1uYW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2NhbmNlbC1wcm9qZWN0LW5hbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2FkZC1wcm9qZWN0LW5hbWUtYnV0dG9uOmhvdmVyLFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyogc2lkZSBiYXIgc3R5bGVzICAqL1xuI2Jhci1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNhZGQtcHJvamVjdC1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgxLCAxLCAxLCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLyogcHJvamVjdCB0YXNrIGNvbnRhaW5lciBzdHlsZXMgKi9cbiNwcm9qZWN0LW91dHB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4jZGVmYXVsdC1wcm9qZWN0LW91dHB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiNwcm9qZWN0LXRpdGxlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cbiNhZGQtdGFzay1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4jYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi8qIGZvcm0gc3R5bGUgKi9cbiNmb3JtLXRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDIxMiwgMjI0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG59XG4jZm9ybS10aXRsZSxcbiNmb3JtLWRldGFpbHMsXG4jZm9ybS1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI2Zvcm0tdGl0bGUgPiBpbnB1dCxcbiNmb3JtLWRldGFpbHMgPiBpbnB1dCxcbiNmb3JtLWRhdGUgPiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNmb3JtLWRhdGUgPiBpbnB1dCB7XG4gIGNvbG9yOiByZ2IoMCwgMjE3LCAyNTUpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jZm9ybS1wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jZm9ybS1wcmlvcml0eS1idXR0b25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbn1cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpmaXJzdC1jaGlsZDpob3ZlcixcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpmaXJzdC1jaGlsZDpmb2N1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMikge1xuICBib3JkZXI6IDFweCB5ZWxsb3cgc29saWQ7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgyKTpmb2N1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBjb2xvcjogd2hpdGU7XG59XG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xuICBjb2xvcjogcmVkO1xufVxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgzKTpob3ZlcixcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMyk6Zm9jdXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2Zvcm0tc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDIxMCwgODQpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiB0YXNrIG91dHB1dCBzdHlsZXMgKi9cbiNkZWZhdWx0LXRhc2stb3V0cHV0LFxuI2Zvcm0tdGFzay1vdXRwdXQge1xuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMCwgMjE3LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jdGFzay1vdXRwdXQtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiN0YXNrLW91dHB1dC1kYXRlIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbiNjaGVjay10aXRsZS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTBweDtcbn1cbiN0YXNrLW91dHB1dC10aWx0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLyogZm9vdGVyIHN0eWxlcyAqL1xuZm9vdGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBncmlkLXJvdzogMyAvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhDQUE4QztBQUNoRDtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQSx1QkFBdUI7QUFDdkI7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0Esc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qs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QTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUNBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0EsdUJBQXVCO0FBQ3ZCOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDgwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLyogaGVhZGVyIHN0eWxlcyA6ICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XFxufVxcbi8qIG1haW4gc3R5bGVzICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDIgLyAyO1xcbn1cXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDgwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbiNwcm9qZWN0LWl0ZW1zIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLyogYWRkIHByb2plY3Qgc3R5bGVzICovXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuI3Byb2plY3QtaXRlbXMgPiBoMSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi8qIGFkZCBwcm9qZWN0IG5hbWUgY29udGFpbmVyIHN0eWxlcyAqL1xcbiNhZGQtcHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtbmFtZS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jYWRkLXByb2plY3QtbmFtZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jYWRkLXByb2plY3QtbmFtZS1idXR0b246aG92ZXIsXFxuI2NhbmNlbC1wcm9qZWN0LW5hbWUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBzaWRlIGJhciBzdHlsZXMgICovXFxuI2Jhci1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgxLCAxLCAxLCAwLjUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4vKiBwcm9qZWN0IHRhc2sgY29udGFpbmVyIHN0eWxlcyAqL1xcbiNwcm9qZWN0LW91dHB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4jZGVmYXVsdC1wcm9qZWN0LW91dHB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG4jcHJvamVjdC10aXRsZSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuI2FkZC10YXNrLWJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGZvcm0gc3R5bGUgKi9cXG4jZm9ybS10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBnYXA6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDIxMiwgMjI0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG59XFxuI2Zvcm0tdGl0bGUsXFxuI2Zvcm0tZGV0YWlscyxcXG4jZm9ybS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuI2Zvcm0tdGl0bGUgPiBpbnB1dCxcXG4jZm9ybS1kZXRhaWxzID4gaW5wdXQsXFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNmb3JtLWRhdGUgPiBpbnB1dCB7XFxuICBjb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuI2Zvcm0tcHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpmaXJzdC1jaGlsZDpob3ZlcixcXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyOiAxcHggeWVsbG93IHNvbGlkO1xcbiAgY29sb3I6IHllbGxvdztcXG59XFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgyKTpob3ZlcixcXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgzKSB7XFxuICBib3JkZXI6IDFweCByZWQgc29saWQ7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmhvdmVyLFxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMyk6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jZm9ybS1zdWJtaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4jZm9ybS1zdWJtaXQgPiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAyMTAsIDg0KTtcXG59XFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ4LCA0OCk7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0Om50aC1jaGlsZCgyKTpob3ZlcixcXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpmaXJzdC1jaGlsZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLyogdGFzayBvdXRwdXQgc3R5bGVzICovXFxuI2RlZmF1bHQtdGFzay1vdXRwdXQsXFxuI2Zvcm0tdGFzay1vdXRwdXQge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3Rhc2stb3V0cHV0LWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4jdGFzay1vdXRwdXQtZGF0ZSB7XFxuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMCwgMjE3LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4jY2hlY2stdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDEwcHg7XFxufVxcbiN0YXNrLW91dHB1dC10aWx0ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLyogZm9vdGVyIHN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHJvamVjdENvbnN0cnVjdG9yIGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbi8vIGNvbnNvbGUubG9nKFByb2plY3RDb25zdHJ1Y3Rvcik7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcblxuLy8gY3JlYXRlIG5ldyBkZWZhdWx0IHByb2plY3QgOlxuY29uc3QgbmV3RGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIlNwb3J0XCIpO1xuY29uc3QgbmV3RGVmYXVsdFRhc2sgPSBuZXcgVGFzayhcbiAgXCJHeW1cIixcbiAgXCJDaGVzdCBXb3Jrb3V0LCBDYXJkaW8uXCIsXG4gIFwiVG9kYXlcIixcbiAgXCJIaWdoXCJcbik7XG4vLyBET00gZm9ybSBlbGVtZW50cyA6XG5sZXQgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbmxldCBmb3JtVGl0bGUgPSBmb3JtVGFza1swXTtcbmxldCBmb3JtRGV0YWlscyA9IGZvcm1UYXNrWzFdO1xubGV0IGZvcm1EYXRlID0gZm9ybVRhc2tbMl07XG4vLyBmdW5jIHRvIHNob3cgZGVmYXVsdCBwcm9qZWN0IG5hbWUgOlxuZnVuY3Rpb24gc2hvd0RlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItcHJvamVjdC1pdGVtc1wiKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWZhdWx0UHJvamVjdERpdi5pZCA9IFwiZGVmYXVsdC1wcm9qZWN0LWRpdlwiO1xuICBkZWZhdWx0UHJvamVjdERpdi50ZXh0Q29udGVudCA9IG5ld0RlZmF1bHRQcm9qZWN0Lm5hbWU7XG4gIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdERpdik7XG59XG5zaG93RGVmYXVsdFByb2plY3QoKTtcblxuLy8gZXZlbnQgdG8gZGlzcGxheSBwcm9qZWN0IDpcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LXByb2plY3QtZGl2XCIpO1xucHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbiAgY3JlYXRlRGVmYXVsdFRhc2soKTtcbiAgc2hvd1Rhc2tGb3JtKCk7XG59KTtcblxuLy8gZnVuYyB0byBjcmVhdGUgcHJvamVjdCB0YXNrIDpcbmNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZGVmYXVsdC1wcm9qZWN0LW91dHB1dFwiXG4gICk7XG4gIGRlZmF1bHRQcm9qZWN0T3V0cHV0LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXhcIjtcblxuICBkZWZhdWx0UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIlwiPiR7bmV3RGVmYXVsdFByb2plY3QubmFtZX08L3NwYW4+XG4gICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCI+KyBBZGQgVGFzazwvYnV0dG9uPlxuICBgO1xufTtcbi8vIGZ1bmMgdG8gc2hvdyBkZWZhdWx0IHRhc2sgY29udGFpbmVyIDpcbmNvbnN0IGNyZWF0ZURlZmF1bHRUYXNrID0gKCkgPT4ge1xuICBjb25zdCBkZWZhdWx0VGFza091dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdC10YXNrLW91dHB1dFwiKTtcbiAgZGVmYXVsdFRhc2tPdXRwdXQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuICBkZWZhdWx0VGFza091dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJjaGVjay10aXRsZS1kaXZcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7bmV3RGVmYXVsdFRhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7bmV3RGVmYXVsdFRhc2suZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kYXRlXCI+JHtuZXdEZWZhdWx0VGFzay5kdWVEYXRlfTwvZGl2PmA7XG59O1xuLy8gZnVuYyB0byBzaG93IHRhc2sgZm9ybSA6XG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1UYXNrLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXhcIjtcbiAgfSk7XG59XG4vLyBmdW5jIHRvIHNodyBmb3JtIG91dHB1dHMgOlxuY29uc3Qgc2hvd0Zvcm1PdXRwdXQgPSAoKSA9PiB7XG4gIC8vIHJldHVybiBmb3JtIHN1Ym1pdCBpZiBlbXB0eSA6XG4gIGlmIChcbiAgICBmb3JtVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcbiAgICBmb3JtRGV0YWlscy52YWx1ZSA9PT0gXCJcIiB8fFxuICAgIGZvcm1EYXRlLnZhbHVlID09PSBcIlwiXG4gIClcbiAgICByZXR1cm47XG4gIC8vIGNyZWF0ZSBuZXcgZm9ybSBvdXRwdXQgOlxuICBjb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicHJvamVjdC1vdXRwdXQtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgZm9ybVRhc2tPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtVGFza091dHB1dC5pZCA9IFwiZm9ybS10YXNrLW91dHB1dFwiO1xuICBmb3JtVGFza091dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGlkPVwiY2hlY2stdGl0bGUtZGl2XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7Zm9ybVRpdGxlLnZhbHVlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7Zm9ybURldGFpbHMudmFsdWV9PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGF0ZVwiPiR7Zm9ybURhdGUudmFsdWV9PC9kaXY+YDtcbiAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRhc2tPdXRwdXQpO1xuICBjbGVhbkZvcm1EYXRhKCk7XG59O1xuLy8gY2xlYW4gRm9ybSBEYXRhIDpcbmNvbnN0IGNsZWFuRm9ybURhdGEgPSAoKSA9PiB7XG4gIGZvcm1UYXNrLnJlc2V0KCk7XG59O1xuLy8gZm9ybSBzdWJtaXQgZXZlbnQgZm9yIHNob3dpbmcgdGhlIHRoZSBmb3JtIG91dHB1dCAgOlxuY29uc3QgYWRkU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuYWRkU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybU91dHB1dCk7XG4vLyBmb3JtIGNhbmNlbCBidXR0b24gdG8gcmVtb3ZlIGZvcm0gOlxuY29uc3QgY2FuY2VsU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtc3VibWl0XCIpO1xuY2FuY2VsU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1UYXNrLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbn0pO1xuXG4vLyBmdW5jdGlvbiBkaXNwbGF5Rm9ybU91dHB1dCgpIHtcbi8vICAgLy8gZm9ybSBlbGVtZW50cyAgOlxuLy8gICBsZXQgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vICAgbGV0IGZvcm1UaXRsZSA9IGZvcm1UYXNrWzBdO1xuLy8gICBsZXQgZm9ybURldGFpbHMgPSBmb3JtVGFza1sxXTtcbi8vICAgbGV0IGZvcm1EYXRlID0gZm9ybVRhc2tbMl07XG4vLyAgIGlmIChcbi8vICAgICBmb3JtVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcbi8vICAgICBmb3JtRGV0YWlscy52YWx1ZSA9PT0gXCJcIiB8fFxuLy8gICAgIGZvcm1EYXRlLnZhbHVlID09PSBcIlwiXG4vLyAgIClcbi8vICAgICByZXR1cm47XG4vLyAgIC8vIGRpc3BsYXkgZm9ybSBvdXRwdXRzIDpcbi8vICAgY29uc3QgY3JlYXRlRm9ybU91dHB1dEVsZW1lbnQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgcHJvamVjdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAgIFwicHJvamVjdC10YXNrLWNvbnRhaW5lclwiXG4vLyAgICAgKTtcbi8vICAgICBjb25zdCB0YXNrT3V0cHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICB0YXNrT3V0cHV0Q29udGFpbmVyLmlkID0gXCJ0YXNrLW91dHB1dC1jb250YWluZXJcIjtcbi8vICAgICB0YXNrT3V0cHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuLy8gICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXRpbHRlXCI+JHtmb3JtVGl0bGUudmFsdWV9PC9kaXY+XG4vLyAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7Zm9ybURldGFpbHMudmFsdWV9PC9kaXY+XG4vLyAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGF0ZVwiPiR7Zm9ybURhdGUudmFsdWV9PC9kaXY+YDtcbi8vICAgICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3V0cHV0Q29udGFpbmVyKTtcbi8vICAgfTtcbi8vICAgY3JlYXRlRm9ybU91dHB1dEVsZW1lbnQoKTtcbi8vICAgLy8gY2xlYW4gZm9ybSA6XG4vLyAgIGNvbnN0IGNsZWFuRm9ybURhdGEgPSAoKSA9PiB7XG4vLyAgICAgZm9ybVRhc2sucmVzZXQoKTtcbi8vICAgfTtcbi8vICAgY2xlYW5Gb3JtRGF0YSgpO1xuLy8gfVxuLy8gLy8gZXZlbnQgY2FsbCBmb3IgYWRkIHByb2plY3QgYnV0dG9uIDpcbi8vIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgXCJhZGQtcHJvamVjdC1uYW1lLWNvbnRhaW5lclwiXG4vLyApO1xuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy8gY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuLy8gYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdE5hbWUpO1xuXG4vLyBmdW5jdGlvbiBhZGRQcm9qZWN0TmFtZSgpIHtcbi8vICAgYWRkUHJvamVjdENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogZmxleFwiO1xuLy8gICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuO1xuLy8gICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbi8vICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuLy8gICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgbmV3UHJvamVjdERpdi5pZCA9IFwibmV3LXByb2plY3QtZGl2XCI7XG4vLyAgIG5ld1Byb2plY3REaXYudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0Lm5hbWU7XG4vLyAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4vLyB9XG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCJcIlxuLy8gZnVuY3Rpb24gZGlzcGxheUZvcm1PdXRwdXQoKSB7XG4vLyAgIGNvbnN0IGdldEZvcm1PdXRwdXQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vICAgICBjb25zdCBmb3JtVGl0bGVPdXRwdXQgPSBmb3JtVGFza1swXS52YWx1ZTtcbi8vICAgICBjb25zdCBmb3JtRGV0YWlsc091dHB1dCA9IGZvcm1UYXNrWzFdLnZhbHVlO1xuLy8gICAgIGNvbnN0IGZvcm1EYXRlT3V0cHV0ID0gZm9ybVRhc2tbMl0udmFsdWU7XG4vLyAgICAgaWYgKFxuLy8gICAgICAgZm9ybVRpdGxlT3V0cHV0ID09PSBcIlwiIHx8XG4vLyAgICAgICBmb3JtRGV0YWlsc091dHB1dCA9PT0gXCJcIiB8fFxuLy8gICAgICAgZm9ybURhdGVPdXRwdXQgPT09IFwiXCJcbi8vICAgICApXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgLy8gZm9ybVRhc2suc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuLy8gICB9O1xuLy8gICBnZXRGb3JtT3V0cHV0KCk7XG4vLyAgIGNvbnN0IGNyZWF0ZUZvcm1PdXRwdXRFbGVtZW50ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcInByb2plY3QtdGFzay1jb250YWluZXJcIlxuLy8gICAgICk7XG4vLyAgICAgY29uc3QgdGFza091dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pZCA9IFwidGFzay1vdXRwdXQtY29udGFpbmVyXCI7XG4vLyAgICAgLy8gdGFza091dHB1dENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgICAgdGFza091dHB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4vLyAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjwvZGl2PlxuLy8gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC10aWx0ZVwiPiR7Zm9ybVRpdGxlT3V0cHV0fTwvZGl2PlxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtmb3JtRGV0YWlsc091dHB1dH08L2Rpdj5cbi8vICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGF0ZVwiPiR7Zm9ybURhdGVPdXRwdXR9PC9kaXY+XG4vLyAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXByaW9yaXR5XCI+XG4vLyAgICAgICA8YnV0dG9uPnRlc3Q8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5gO1xuLy8gICAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPdXRwdXRDb250YWluZXIpO1xuLy8gICB9O1xuLy8gICBjcmVhdGVGb3JtT3V0cHV0RWxlbWVudCgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRGb3JtT3V0cHV0KCkge1xuLy8gICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuLy8gICBjb25zdCBmb3JtVGl0bGVPdXRwdXQgPSBmb3JtVGFza1swXS52YWx1ZTtcbi8vICAgY29uc3QgZm9ybURldGFpbHNPdXRwdXQgPSBmb3JtVGFza1sxXS52YWx1ZTtcbi8vICAgY29uc3QgZm9ybURhdGVPdXRwdXQgPSBmb3JtVGFza1syXS52YWx1ZTtcblxuLy8gICBjb25zb2xlLmxvZyhmb3JtVGFzayk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1UaXRsZU91dHB1dCk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EZXRhaWxzT3V0cHV0KTtcbi8vICAgY29uc29sZS5sb2coZm9ybURhdGVPdXRwdXQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcbi8vICAgY29uc3QgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vICAgY29uc3QgZm9ybVRpdGxlT3V0cHV0ID0gZm9ybVRhc2tbMF0udmFsdWU7XG4vLyAgIGNvbnN0IGZvcm1EZXRhaWxzT3V0cHV0ID0gZm9ybVRhc2tbMV0udmFsdWU7XG4vLyAgIGNvbnN0IGZvcm1EYXRlT3V0cHV0ID0gZm9ybVRhc2tbMl0udmFsdWU7XG5cbi8vICAgLy8gY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eS1idXR0b25zXCIpO1xuLy8gICAvLyBsZXQgY2hvc2VuUHJpb3JpdHlCdXR0b247XG4vLyAgIC8vIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbi8vICAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgLy8gICAgIGNob3NlblByaW9yaXR5QnV0dG9uID0gdGhpcztcbi8vICAgLy8gICB9KTtcbi8vICAgLy8gfSk7XG5cbi8vICAgY29uc29sZS5sb2coZm9ybVRpdGxlT3V0cHV0KTtcbi8vICAgY29uc29sZS5sb2coZm9ybURldGFpbHNPdXRwdXQpO1xuLy8gICBjb25zb2xlLmxvZyhmb3JtRGF0ZU91dHB1dCk7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgZm9ybVRpdGxlT3V0cHV0LFxuLy8gICAgIGZvcm1EZXRhaWxzT3V0cHV0LFxuLy8gICAgIGZvcm1EYXRlT3V0cHV0LFxuLy8gICB9O1xuLy8gfVxuLy9cbi8vIC8vIGZ1bmMgdG8gY3JlYXRlIHByb2plY3QgdGFzayA6XG4vLyBmdW5jdGlvbiBjcmVhdGVGb3JtVGFzaygpIHtcbi8vICAgY29uc3QgcHJvamVjdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICBcInByb2plY3QtdGFzay1jb250YWluZXJcIlxuLy8gICApO1xuLy8gICBjb25zdCBmb3JtVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuLy8gICBmb3JtVGFzay5pZCA9IFwiZm9ybS10YXNrXCI7XG4vLyAgIGZvcm1UYXNrLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImRpYWxvZ1wiKTtcbi8vICAgZm9ybVRhc2suaW5uZXJIVE1MID0gYFxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLXRpdGxlXCI+XG4vLyAgICAgICAgICAgICA8bGFiZWw+VGl0bGU6PC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiV2hhdCBUbyBEbzpcIiByZXF1aXJlZCAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWRldGFpbHNcIj5cbi8vICAgICAgICAgICAgIDxsYWJlbD5EZXRhaWxzKG9wdGlvbmFsKTo8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb246XCIgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1kYXRlXCI+XG4vLyAgICAgICAgICAgICA8bGFiZWw+RGF0ZTo8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgcmVxdWlyZWQgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1wcmlvcml0eVwiPlxuLy8gICAgICAgICAgICAgPGxhYmVsPlByaW9yaXR5KG9wdGlvbmFsKTogPC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLXByaW9yaXR5LWJ1dHRvbnNcIiByZXF1aXJlZD5cbi8vICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHktYnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkxvd1wiIC8+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5LWJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJNZWRpdW1cIiAvPlxuLy8gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eS1idXR0b25zXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiSGlnaFwiIC8+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1zdWJtaXRcIj5cbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiAvPlxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImNhbmNlbFwiIC8+XG4vLyAgICAgICAgICAgPC9kaXY+YDtcbi8vICAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRhc2spO1xuLy8gICBjcmVhdGVGb3JtT3V0cHV0KCk7XG4vLyB9XG4vLyBldmVudCBjYWxsIGZvciBkZWZhdWx0IHByb2plY3QgdGFza3MgOlxuLy8gZnVuY3Rpb24gZWRpdFRhc2tzKCkge1xuLy8gICBjb25zdCBkZWZhdWx0VGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuLy8gICBpZiAoZGVmYXVsdFRhc2tCdXR0b24gPT09IG51bGwpIHJldHVybjtcbi8vICAgZGVmYXVsdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUZvcm1UYXNrKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlVGFza091dHB1dEVsZW1lbnQoKSB7XG4vLyAgIGNvbnN0IHRpdGxlID0gZ2V0Rm9ybU91dHB1dCgpLmZvcm1UaXRsZU91dHB1dDtcbi8vICAgY29uc3QgZGV0YWlscyA9IGdldEZvcm1PdXRwdXQoKS5mb3JtRGV0YWlsc091dHB1dDtcbi8vICAgY29uc3QgZGF0ZSA9IGdldEZvcm1PdXRwdXQoKS5mb3JtRGF0ZU91dHB1dDtcblxuLy8gICBjb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgIFwicHJvamVjdC10YXNrLWNvbnRhaW5lclwiXG4vLyAgICk7XG4vLyAgIGNvbnN0IHRhc2tPdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICB0YXNrT3V0cHV0Q29udGFpbmVyLmlkID0gXCJ0YXNrLW91dHB1dC1jb250YWluZXJcIjtcbi8vICAgLy8gdGFza091dHB1dENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgIHRhc2tPdXRwdXRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuLy8gICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PC9kaXY+XG4vLyAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuLy8gICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtdGlsdGVcIj4ke3RpdGxlfTwvZGl2PlxuLy8gICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7ZGV0YWlsc308L2Rpdj5cbi8vICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRhdGVcIj4ke2RhdGV9PC9kaXY+XG4vLyAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1wcmlvcml0eVwiPlxuLy8gICAgIDxidXR0b24+dGVzdDwvYnV0dG9uPlxuLy8gICA8L2Rpdj5cbi8vICAgPC9kaXY+YDtcbi8vICAgcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza091dHB1dENvbnRhaW5lcik7XG4vLyB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9kaXN0L3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IFByb2plY3RDb25zdHJ1Y3Rvciwge1xuLy8gICBkZWZhdWx0UHJvamVjdHMsXG4vLyAgIHByb2plY3RzTGlzdCxcbi8vIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCBuZXdUb0RvIGZyb20gXCIuL25ld1RvRG9cIjtcbmltcG9ydCBET00gZnJvbSBcIi4vdWkuanNcIjtcblxuLy8gcHJvamVjdCBtb2R1bGUgOlxuLy8gY29uc29sZS5sb2cocHJvamVjdHNMaXN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==