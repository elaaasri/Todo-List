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
#add-cancel-form-project-buttons {
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
#sidebar-form-container {
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
#sidebar-add-button {
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
#sidebar-add-button:hover,
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
#project-preview {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
#project-header-name {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
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
`, "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 80px;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Courier New\", Courier, monospace;\n}\n/* header styles : */\nheader {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  background-color: rgb(61, 61, 61);\n}\n/* main styles */\nmain {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 4;\n  grid-row: 2 / 2;\n}\n/* sidebar styles */\n#sidebar {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  gap: 80px;\n  width: 250px;\n}\n#bar-items {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 10px;\n  font-size: 20px;\n}\n/* add project styles */\n#project-container {\n  background-color: red;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n}\n#project-items > h1 {\n  font-size: 25px;\n}\n/* add project name container styles */\n#sidebar-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-bottom: 20px;\n}\n#add-cancel-form-project-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n#sidebar-project-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  padding-left: 5px;\n}\n#sidebar-form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n#project-name-input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#sidebar-add-button {\n  background-color: greenyellow;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#cancel-project-name-button {\n  background-color: red;\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#sidebar-add-button:hover,\n#cancel-project-name-button:hover {\n  background-color: white;\n  color: black;\n  cursor: pointer;\n}\n/* side bar styles  */\n#bar-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 20px;\n  font-size: 20px;\n}\n#add-project-button {\n  align-self: center;\n  width: 40px;\n  height: 40px;\n  background-color: greenyellow;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 100px;\n  font-size: 25px;\n}\n#add-project-button:hover {\n  background-color: white;\n}\n/* project task container styles */\n#project-preview {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n}\n#project-header-name {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border-radius: 5px;\n  background-color: rgb(0, 255, 225);\n}\n#add-task-button {\n  align-self: center;\n  width: 150px;\n  background-color: rgb(0, 255, 225);\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 15px;\n}\n#add-task-button:hover {\n  background-color: white;\n}\n\n/* form style */\n#form-task {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  gap: 8px;\n  background-color: rgb(141, 212, 224);\n  border-radius: 5px;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n#form-title,\n#form-details,\n#form-date {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  font-size: 13px;\n}\n#form-title > input,\n#form-details > input,\n#form-date > input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#form-date > input {\n  color: rgb(0, 217, 255);\n  font-size: 13px;\n}\n/* form submit styles */\n#form-submit {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding-top: 10px;\n}\n#form-submit > input {\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#form-submit > input:first-child {\n  background-color: rgb(84, 210, 84);\n}\n#form-submit > input:nth-child(2) {\n  cursor: pointer;\n  background-color: rgb(255, 48, 48);\n}\n#form-submit > input:nth-child(2):hover,\n#form-submit > input:first-child:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n/* task output styles */\n#default-task-output,\n#form-task-output {\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  background-color: rgb(192, 232, 237);\n  border: solid 3px rgb(0, 217, 255);\n  height: 50px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 10px;\n  padding-right: 10px;\n  align-items: center;\n}\n#task-output-details,\n#default-output-details {\n  font-size: 15px;\n}\n#task-output-date,\n#default-output-date {\n  border: solid 3px rgb(0, 217, 255);\n  border-radius: 5px;\n  font-size: 10px;\n  padding: 5px;\n}\n#check-title-div {\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n#task-output-title,\n#default-output-title {\n  font-weight: bold;\n}\n/* footer styles */\nfooter {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  background-color: rgb(61, 61, 61);\n}\n"],"sourceRoot":""}]);
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
// const newDefaultProject = new Project("Sport");
// const newDefaultTask = new Task("Gym", "Chest Workout, Cardio.", "Today");
// DOM form elements :
// const projectTaskContainer = document.getElementById(
//   "project-output-container"
// );
// const defaultProjectOutput = document.getElementById("default-project-output");
// let formTask = document.getElementById("form-task");
// let formTitle = formTask[0];
// let formDetails = formTask[1];
// let formDate = formTask[2];
// func to show default project name :
// function showDefaultProject() {
//   const projectItems = document.getElementById("sidebar-project-items");
//   const defaultProjectDiv = document.createElement("div");
//   defaultProjectDiv.id = "default-project-div";
//   defaultProjectDiv.textContent = newDefaultProject.name;
//   projectItems.appendChild(defaultProjectDiv);
// }
// showDefaultProject();

// event to display project :
// const projectName = document.getElementById("default-project-div");
// projectName.addEventListener("click", () => {
//   createDefaultProject();
//   createDefaultTask();
//   showTaskForm();
//   defaultCheckboxButtonStyles();
// });

// func to create project task :
// const createDefaultProject = () => {
//   defaultProjectOutput.style.cssText = "display: flex";
//   defaultProjectOutput.innerHTML = `
//       <span id="project-title"">${newDefaultProject.name}</span>
//       <button id="add-task-button">+ Add Task</button>
//   `;
// };
// // func to show default task container :
// const createDefaultTask = () => {
//   const defaultTaskOutput = document.getElementById("default-task-output");
//   defaultTaskOutput.style.cssText = "display: flex";
//   defaultTaskOutput.innerHTML = `
//         <div id="check-title-div">
//         <input id="default-checkbox-button" type="checkbox" />
//         <div id="default-output-title">${newDefaultTask.title}</div>
//         </div>
//         <div id="default-output-details">${newDefaultTask.description}</div>
//         <div id="default-output-date">${newDefaultTask.dueDate}</div>`;
// };
// func to show task form :
// function showTaskForm() {
//   const addTaskButton = document.getElementById("add-task-button");
//   addTaskButton.addEventListener("click", () => {
//     formTask.style.cssText = "display: flex";
//   });
// }
// func to shw form outputs :
// const showFormOutput = () => {
//   // return form submit if empty :
//   if (
//     formTitle.value === "" ||
//     formDetails.value === "" ||
//     formDate.value === ""
//   )
//     return;
//   // create new form output :
//   const formTaskOutput = document.createElement("div");
//   formTaskOutput.id = "form-task-output";
//   formTaskOutput.innerHTML = `
//       <div id="check-title-div">
//       <input id="checkbox-button" type="checkbox" />
//       <div id="task-output-title">${formTitle.value}</div>
//       </div>
//       <div id="task-output-details">${formDetails.value}</div>
//       <div id="task-output-date">${formDate.value}</div>`;
//   projectTaskContainer.appendChild(formTaskOutput);
//   cleanFormData();
//   checkboxButtonStyles();
// };
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
// const defaultCheckboxButtonStyles = () => {
//   // default output project DOM :
//   const defaultCheckbox = document.getElementById("default-checkbox-button");
//   const defaultTitle = document.getElementById("default-output-title");
//   const defaultDetails = document.getElementById("default-output-details");
//   const defaultDate = document.getElementById("default-output-date");
//   // func to style default elements :
//   const styleDefaultElements = () => {
//     if (defaultCheckbox.checked) {
//       defaultTitle.style.cssText = "text-decoration : line-through";
//       defaultDetails.style.cssText = "text-decoration : line-through";
//       defaultDate.style.cssText = "text-decoration : line-through";
//     } else {
//       defaultTitle.style.cssText = "text-decoration : none";
//       defaultDetails.style.cssText = "text-decoration : none";
//       defaultDate.style.cssText = "text-decoration : none";
//     }
//   };
//   // default button event :
//   defaultCheckbox.addEventListener("change", styleDefaultElements);
// };
// // func to style the task output when checkbox checked :
// function checkboxButtonStyles() {
//   const allCheckboxButton = document.querySelectorAll("#checkbox-button");
//   allCheckboxButton.forEach((checkboxBtn) => {
//     checkboxBtn.addEventListener("change", () => {
//       // task output DOM :
//       const parentElement = checkboxBtn.parentElement.parentElement;
//       const taskOutputTitle = parentElement.querySelector("#task-output-title");
//       const taskOutputDetails = parentElement.querySelector(
//         "#task-output-details"
//       );
//       const taskOutputDate = parentElement.querySelector("#task-output-date");
//       // condition to check if current the checkbox checked or not :
//       if (checkboxBtn.checked) {
//         taskOutputTitle.style.cssText = "text-decoration : line-through";
//         taskOutputDetails.style.cssText = "text-decoration : line-through";
//         taskOutputDate.style.cssText = "text-decoration : line-through";
//       } else {
//         taskOutputTitle.style.cssText = "text-decoration : none";
//         taskOutputDetails.style.cssText = "text-decoration : none";
//         taskOutputDate.style.cssText = "text-decoration : none";
//       }
//     });
//   });
// }

// new project name form DOM:
// const projectItems = document.getElementById("sidebar-project-items");
// const addProjectContainer = document.getElementById("add-new-project-form");
// const addProjectButton = document.getElementById("add-project-button");
// const projectNameInput = document.getElementById("project-name-input");
// const addProjectNameButton = document.getElementById("add-project-name-button");
// console.log(addProjectNameButton);
// event to show new project form :
// addProjectButton.addEventListener("click", showNewProjectFrom);
// function showNewProjectFrom() {
//   addProjectContainer.style.cssText = "display : flex";
// }
// event to create new project name :
// addProjectNameButton.addEventListener("click", function () {
//   createNewProjectName();
//   createSideBarElement();
// });

// DOM Elements :
// const projectTaskContainer = document.getElementById(
// "project-output-container"
// );
// DOM Form :
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
const addProjectButton = document.getElementById("add-project-button");
// create new projects :
const createNewProjectName = () => {
  const newProjectName = new _projects_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectNameInput.value);
  return newProjectName;
};
// create new tasks :
const createNewProjectTask = () => {
  const newProjectTask = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"](
    formTitle.value,
    formDetails.value,
    formDate.value
  );
  return newProjectTask;
};

const DOMElement = {
  storeNewDivElement: "",
  storeNewProjectOutput: "",
  updateProjectPreview(element) {
    projectHeaderName.textContent = element.target.textContent;
    projectHeaderName.style.cssText = "display : flex";
    addTaskButton.style.cssText = "display : block";
  },
  createSideBarElement() {
    const newProjectDiv = document.createElement("div");
    newProjectDiv.id = "new-project-div-item";
    newProjectDiv.textContent = createNewProjectName().getNewName();
    projectItems.appendChild(newProjectDiv);
    // this.storeNewDivElement = newProjectDiv;
  },
  createOutputElement() {
    const newProjectOutput = document.createElement("div");
    newProjectOutput.id = "new-project-output";
    newProjectOutput.innerHTML = `
      <span id="project-title">${this.storeNewDivElement.textContent}</span>
      <button id="add-task-button">+ Add Task</button>
      `;
    // projectTaskContainer.appendChild(newProjectOutput);
    projectTaskContainer.insertBefore(newProjectOutput, form);
    this.storeNewProjectOutput = newProjectOutput.firstElementChild;
  },
  // hideOtherElements() {
  //   const allSidebarProjectItems = document.querySelectorAll(
  //     "#new-project-div-item"
  //   );
  //   const allNewProjectOutput = document.querySelectorAll(
  //     "#new-project-output"
  //   );
  //   allSidebarProjectItems.forEach((project) => {
  //     project.addEventListener("click", () => {
  //       // console.log(project);
  //       // console.log(this.storeNewProjectOutput);
  //       console.log(this.storeNewDivElement);
  //       console.log(this.storeNewProjectOutput);
  //       if (project.textContent === this.storeNewProjectOutput.test) {
  //         this.storeNewProjectOutput.style.cssText = "display : flex";
  //       } else {
  //         this.storeNewProjectOutput.style.cssText = "display: none";
  //       }
  //     });
  //   });
  // },
};
const DOMForm = {
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
        <div id="task-output-title">${createNewProjectTask().getTitle()}</div>
        </div>
        <div id="task-output-details">${createNewProjectTask().getDetails()}</div>
        <div id="task-output-date">${createNewProjectTask().getDate()}</div>`;
    projectPreviewContainer.appendChild(formTaskOutput);
  },
  cleanFormData() {
    form.reset();
  },
};
// event click to show side bar form :
addProjectButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : flex";
});
// side bar form add event :
sidebarAddButton.addEventListener("click", function () {
  if (projectNameInput.value === "") return;
  DOMElement.createSideBarElement();
  sideBarElementAddEvent();
  projectNameInput.value = "";
});
// func that select new sidebar projects after creating them and add events : s
function sideBarElementAddEvent() {
  const allSidebarProjectItems = document.querySelectorAll(
    "#new-project-div-item"
  );
  allSidebarProjectItems.forEach((element) => {
    element.addEventListener("click", function (element) {
      DOMElement.updateProjectPreview(element);
    });
  });
}
// project preview add task button event :
addTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : flex";
});
// project preview form cancel button event :
formCancelTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : none";
});
// project preview form add button event :
formSubmitTaskButton.addEventListener("click", function () {
  DOMForm.showFormOutput();
  DOMForm.cleanFormData();
});


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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlB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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0s7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3Qvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vZGlzdC9zdHlsZS5jc3M/YjVjNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDgwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cbi8qIGhlYWRlciBzdHlsZXMgOiAqL1xuaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xufVxuLyogbWFpbiBzdHlsZXMgKi9cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBncmlkLXJvdzogMiAvIDI7XG59XG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMHB4O1xuICBnYXA6IDgwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbiNiYXItaXRlbXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyogYWRkIHByb2plY3Qgc3R5bGVzICovXG4jcHJvamVjdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbiNwcm9qZWN0LWl0ZW1zID4gaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4vKiBhZGQgcHJvamVjdCBuYW1lIGNvbnRhaW5lciBzdHlsZXMgKi9cbiNzaWRlYmFyLXByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiNhZGQtY2FuY2VsLWZvcm0tcHJvamVjdC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cbiNzaWRlYmFyLXByb2plY3QtaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiNzaWRlYmFyLWZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiNzaWRlYmFyLWFkZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNjYW5jZWwtcHJvamVjdC1uYW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzaWRlYmFyLWFkZC1idXR0b246aG92ZXIsXG4jY2FuY2VsLXByb2plY3QtbmFtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBzaWRlIGJhciBzdHlsZXMgICovXG4jYmFyLWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGdhcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI2FkZC1wcm9qZWN0LWJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4vKiBwcm9qZWN0IHRhc2sgY29udGFpbmVyIHN0eWxlcyAqL1xuI3Byb2plY3QtcHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiNwcm9qZWN0LWhlYWRlci1uYW1lIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcbn1cbiNhZGQtdGFzay1idXR0b24ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZm9ybSBzdHlsZSAqL1xuI2Zvcm0tdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMjEyLCAyMjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbn1cbiNmb3JtLXRpdGxlLFxuI2Zvcm0tZGV0YWlscyxcbiNmb3JtLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jZm9ybS10aXRsZSA+IGlucHV0LFxuI2Zvcm0tZGV0YWlscyA+IGlucHV0LFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgY29sb3I6IHJnYigwLCAyMTcsIDI1NSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi8qIGZvcm0gc3VibWl0IHN0eWxlcyAqL1xuI2Zvcm0tc3VibWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDIxMCwgODQpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xufVxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4vKiB0YXNrIG91dHB1dCBzdHlsZXMgKi9cbiNkZWZhdWx0LXRhc2stb3V0cHV0LFxuI2Zvcm0tdGFzay1vdXRwdXQge1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIzMiwgMjM3KTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3Rhc2stb3V0cHV0LWRldGFpbHMsXG4jZGVmYXVsdC1vdXRwdXQtZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiN0YXNrLW91dHB1dC1kYXRlLFxuI2RlZmF1bHQtb3V0cHV0LWRhdGUge1xuICBib3JkZXI6IHNvbGlkIDNweCByZ2IoMCwgMjE3LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuI2NoZWNrLXRpdGxlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAxMHB4O1xufVxuI3Rhc2stb3V0cHV0LXRpdGxlLFxuI2RlZmF1bHQtb3V0cHV0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vKiBmb290ZXIgc3R5bGVzICovXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAzIC8gNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsOENBQThDO0FBQ2hEO0FBQ0Esb0JBQW9CO0FBQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw4RUFBOEU7RUFDOUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtF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a0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUNBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0EsdUJBQXVCO0FBQ3ZCOztFQUVFLDhFQUE4RTtFQUM5RSxvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgODBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG4vKiBoZWFkZXIgc3R5bGVzIDogKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcXG59XFxuLyogbWFpbiBzdHlsZXMgKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMiAvIDI7XFxufVxcbi8qIHNpZGViYXIgc3R5bGVzICovXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdhcDogODBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuI2Jhci1pdGVtcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi8qIGFkZCBwcm9qZWN0IHN0eWxlcyAqL1xcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNwcm9qZWN0LWl0ZW1zID4gaDEge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4vKiBhZGQgcHJvamVjdCBuYW1lIGNvbnRhaW5lciBzdHlsZXMgKi9cXG4jc2lkZWJhci1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4jYWRkLWNhbmNlbC1mb3JtLXByb2plY3QtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbiNzaWRlYmFyLXByb2plY3QtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG4jc2lkZWJhci1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jc2lkZWJhci1hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNjYW5jZWwtcHJvamVjdC1uYW1lLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3NpZGViYXItYWRkLWJ1dHRvbjpob3ZlcixcXG4jY2FuY2VsLXByb2plY3QtbmFtZS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIHNpZGUgYmFyIHN0eWxlcyAgKi9cXG4jYmFyLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi8qIHByb2plY3QgdGFzayBjb250YWluZXIgc3R5bGVzICovXFxuI3Byb2plY3QtcHJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbiNwcm9qZWN0LWhlYWRlci1uYW1lIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDIyNSk7XFxufVxcbiNhZGQtdGFzay1idXR0b24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMjI1KTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDEsIDEsIDEsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIGZvcm0gc3R5bGUgKi9cXG4jZm9ybS10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBnYXA6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDIxMiwgMjI0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG59XFxuI2Zvcm0tdGl0bGUsXFxuI2Zvcm0tZGV0YWlscyxcXG4jZm9ybS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuI2Zvcm0tdGl0bGUgPiBpbnB1dCxcXG4jZm9ybS1kZXRhaWxzID4gaW5wdXQsXFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNmb3JtLWRhdGUgPiBpbnB1dCB7XFxuICBjb2xvcjogcmdiKDAsIDIxNywgMjU1KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLyogZm9ybSBzdWJtaXQgc3R5bGVzICovXFxuI2Zvcm0tc3VibWl0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMjEwLCA4NCk7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA0OCwgNDgpO1xcbn1cXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpudGgtY2hpbGQoMik6aG92ZXIsXFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6Zmlyc3QtY2hpbGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi8qIHRhc2sgb3V0cHV0IHN0eWxlcyAqL1xcbiNkZWZhdWx0LXRhc2stb3V0cHV0LFxcbiNmb3JtLXRhc2stb3V0cHV0IHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIzMiwgMjM3KTtcXG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAyMTcsIDI1NSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0YXNrLW91dHB1dC1kZXRhaWxzLFxcbiNkZWZhdWx0LW91dHB1dC1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuI3Rhc2stb3V0cHV0LWRhdGUsXFxuI2RlZmF1bHQtb3V0cHV0LWRhdGUge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDIxNywgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuI2NoZWNrLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jdGFzay1vdXRwdXQtdGl0bGUsXFxuI2RlZmF1bHQtb3V0cHV0LXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4vKiBmb290ZXIgc3R5bGVzICovXFxuZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjEsIDYxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0Q29uc3RydWN0b3IgZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuLy8gY29uc29sZS5sb2coUHJvamVjdENvbnN0cnVjdG9yKTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBnZXROZXdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cbiAgZ2V0RGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgfVxuICBnZXREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza3MuanNcIjtcblxuLy8gY3JlYXRlIG5ldyBkZWZhdWx0IHByb2plY3QgOlxuLy8gY29uc3QgbmV3RGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIlNwb3J0XCIpO1xuLy8gY29uc3QgbmV3RGVmYXVsdFRhc2sgPSBuZXcgVGFzayhcIkd5bVwiLCBcIkNoZXN0IFdvcmtvdXQsIENhcmRpby5cIiwgXCJUb2RheVwiKTtcbi8vIERPTSBmb3JtIGVsZW1lbnRzIDpcbi8vIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgIFwicHJvamVjdC1vdXRwdXQtY29udGFpbmVyXCJcbi8vICk7XG4vLyBjb25zdCBkZWZhdWx0UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdC1wcm9qZWN0LW91dHB1dFwiKTtcbi8vIGxldCBmb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuLy8gbGV0IGZvcm1UaXRsZSA9IGZvcm1UYXNrWzBdO1xuLy8gbGV0IGZvcm1EZXRhaWxzID0gZm9ybVRhc2tbMV07XG4vLyBsZXQgZm9ybURhdGUgPSBmb3JtVGFza1syXTtcbi8vIGZ1bmMgdG8gc2hvdyBkZWZhdWx0IHByb2plY3QgbmFtZSA6XG4vLyBmdW5jdGlvbiBzaG93RGVmYXVsdFByb2plY3QoKSB7XG4vLyAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhci1wcm9qZWN0LWl0ZW1zXCIpO1xuLy8gICBjb25zdCBkZWZhdWx0UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGRlZmF1bHRQcm9qZWN0RGl2LmlkID0gXCJkZWZhdWx0LXByb2plY3QtZGl2XCI7XG4vLyAgIGRlZmF1bHRQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gbmV3RGVmYXVsdFByb2plY3QubmFtZTtcbi8vICAgcHJvamVjdEl0ZW1zLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0RGl2KTtcbi8vIH1cbi8vIHNob3dEZWZhdWx0UHJvamVjdCgpO1xuXG4vLyBldmVudCB0byBkaXNwbGF5IHByb2plY3QgOlxuLy8gY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtcHJvamVjdC1kaXZcIik7XG4vLyBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuLy8gICBjcmVhdGVEZWZhdWx0VGFzaygpO1xuLy8gICBzaG93VGFza0Zvcm0oKTtcbi8vICAgZGVmYXVsdENoZWNrYm94QnV0dG9uU3R5bGVzKCk7XG4vLyB9KTtcblxuLy8gZnVuYyB0byBjcmVhdGUgcHJvamVjdCB0YXNrIDpcbi8vIGNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuLy8gICBkZWZhdWx0UHJvamVjdE91dHB1dC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgIGRlZmF1bHRQcm9qZWN0T3V0cHV0LmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxzcGFuIGlkPVwicHJvamVjdC10aXRsZVwiXCI+JHtuZXdEZWZhdWx0UHJvamVjdC5uYW1lfTwvc3Bhbj5cbi8vICAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4vLyAgIGA7XG4vLyB9O1xuLy8gLy8gZnVuYyB0byBzaG93IGRlZmF1bHQgdGFzayBjb250YWluZXIgOlxuLy8gY29uc3QgY3JlYXRlRGVmYXVsdFRhc2sgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGRlZmF1bHRUYXNrT3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0LXRhc2stb3V0cHV0XCIpO1xuLy8gICBkZWZhdWx0VGFza091dHB1dC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBmbGV4XCI7XG4vLyAgIGRlZmF1bHRUYXNrT3V0cHV0LmlubmVySFRNTCA9IGBcbi8vICAgICAgICAgPGRpdiBpZD1cImNoZWNrLXRpdGxlLWRpdlwiPlxuLy8gICAgICAgICA8aW5wdXQgaWQ9XCJkZWZhdWx0LWNoZWNrYm94LWJ1dHRvblwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJkZWZhdWx0LW91dHB1dC10aXRsZVwiPiR7bmV3RGVmYXVsdFRhc2sudGl0bGV9PC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8ZGl2IGlkPVwiZGVmYXVsdC1vdXRwdXQtZGV0YWlsc1wiPiR7bmV3RGVmYXVsdFRhc2suZGVzY3JpcHRpb259PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgaWQ9XCJkZWZhdWx0LW91dHB1dC1kYXRlXCI+JHtuZXdEZWZhdWx0VGFzay5kdWVEYXRlfTwvZGl2PmA7XG4vLyB9O1xuLy8gZnVuYyB0byBzaG93IHRhc2sgZm9ybSA6XG4vLyBmdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4vLyAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbi8vICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgIGZvcm1UYXNrLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGZsZXhcIjtcbi8vICAgfSk7XG4vLyB9XG4vLyBmdW5jIHRvIHNodyBmb3JtIG91dHB1dHMgOlxuLy8gY29uc3Qgc2hvd0Zvcm1PdXRwdXQgPSAoKSA9PiB7XG4vLyAgIC8vIHJldHVybiBmb3JtIHN1Ym1pdCBpZiBlbXB0eSA6XG4vLyAgIGlmIChcbi8vICAgICBmb3JtVGl0bGUudmFsdWUgPT09IFwiXCIgfHxcbi8vICAgICBmb3JtRGV0YWlscy52YWx1ZSA9PT0gXCJcIiB8fFxuLy8gICAgIGZvcm1EYXRlLnZhbHVlID09PSBcIlwiXG4vLyAgIClcbi8vICAgICByZXR1cm47XG4vLyAgIC8vIGNyZWF0ZSBuZXcgZm9ybSBvdXRwdXQgOlxuLy8gICBjb25zdCBmb3JtVGFza091dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGZvcm1UYXNrT3V0cHV0LmlkID0gXCJmb3JtLXRhc2stb3V0cHV0XCI7XG4vLyAgIGZvcm1UYXNrT3V0cHV0LmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxkaXYgaWQ9XCJjaGVjay10aXRsZS1kaXZcIj5cbi8vICAgICAgIDxpbnB1dCBpZD1cImNoZWNrYm94LWJ1dHRvblwiIHR5cGU9XCJjaGVja2JveFwiIC8+XG4vLyAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtdGl0bGVcIj4ke2Zvcm1UaXRsZS52YWx1ZX08L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRldGFpbHNcIj4ke2Zvcm1EZXRhaWxzLnZhbHVlfTwvZGl2PlxuLy8gICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRhdGVcIj4ke2Zvcm1EYXRlLnZhbHVlfTwvZGl2PmA7XG4vLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UYXNrT3V0cHV0KTtcbi8vICAgY2xlYW5Gb3JtRGF0YSgpO1xuLy8gICBjaGVja2JveEJ1dHRvblN0eWxlcygpO1xuLy8gfTtcbi8vIC8vIGNsZWFuIEZvcm0gRGF0YSA6XG4vLyBjb25zdCBjbGVhbkZvcm1EYXRhID0gKCkgPT4ge1xuLy8gICBmb3JtVGFzay5yZXNldCgpO1xuLy8gfTtcbi8vIGZvcm0gc3VibWl0IGV2ZW50IGZvciBzaG93aW5nIHRoZSB0aGUgZm9ybSBvdXRwdXQgIDpcbi8vIGNvbnN0IGFkZFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbi8vIGFkZFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1PdXRwdXQpO1xuLy8gZm9ybSBjYW5jZWwgYnV0dG9uIHRvIHJlbW92ZSBmb3JtIDpcbi8vIGNvbnN0IGNhbmNlbFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLXN1Ym1pdFwiKTtcbi8vIGNhbmNlbFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBmb3JtVGFzay5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OiBub25lXCI7XG4vLyB9KTtcblxuLy8gZnVuYyB0byBzdHlsZSBkZWZ1YWx0IGVsZW1lbnRzIDpcbi8vIGNvbnN0IGRlZmF1bHRDaGVja2JveEJ1dHRvblN0eWxlcyA9ICgpID0+IHtcbi8vICAgLy8gZGVmYXVsdCBvdXRwdXQgcHJvamVjdCBET00gOlxuLy8gICBjb25zdCBkZWZhdWx0Q2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtY2hlY2tib3gtYnV0dG9uXCIpO1xuLy8gICBjb25zdCBkZWZhdWx0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtb3V0cHV0LXRpdGxlXCIpO1xuLy8gICBjb25zdCBkZWZhdWx0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdC1vdXRwdXQtZGV0YWlsc1wiKTtcbi8vICAgY29uc3QgZGVmYXVsdERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZmF1bHQtb3V0cHV0LWRhdGVcIik7XG4vLyAgIC8vIGZ1bmMgdG8gc3R5bGUgZGVmYXVsdCBlbGVtZW50cyA6XG4vLyAgIGNvbnN0IHN0eWxlRGVmYXVsdEVsZW1lbnRzID0gKCkgPT4ge1xuLy8gICAgIGlmIChkZWZhdWx0Q2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgZGVmYXVsdFRpdGxlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaFwiO1xuLy8gICAgICAgZGVmYXVsdERldGFpbHMuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoXCI7XG4vLyAgICAgICBkZWZhdWx0RGF0ZS5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2hcIjtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZGVmYXVsdFRpdGxlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IG5vbmVcIjtcbi8vICAgICAgIGRlZmF1bHREZXRhaWxzLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IG5vbmVcIjtcbi8vICAgICAgIGRlZmF1bHREYXRlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IG5vbmVcIjtcbi8vICAgICB9XG4vLyAgIH07XG4vLyAgIC8vIGRlZmF1bHQgYnV0dG9uIGV2ZW50IDpcbi8vICAgZGVmYXVsdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc3R5bGVEZWZhdWx0RWxlbWVudHMpO1xuLy8gfTtcbi8vIC8vIGZ1bmMgdG8gc3R5bGUgdGhlIHRhc2sgb3V0cHV0IHdoZW4gY2hlY2tib3ggY2hlY2tlZCA6XG4vLyBmdW5jdGlvbiBjaGVja2JveEJ1dHRvblN0eWxlcygpIHtcbi8vICAgY29uc3QgYWxsQ2hlY2tib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NoZWNrYm94LWJ1dHRvblwiKTtcbi8vICAgYWxsQ2hlY2tib3hCdXR0b24uZm9yRWFjaCgoY2hlY2tib3hCdG4pID0+IHtcbi8vICAgICBjaGVja2JveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbi8vICAgICAgIC8vIHRhc2sgb3V0cHV0IERPTSA6XG4vLyAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gY2hlY2tib3hCdG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuLy8gICAgICAgY29uc3QgdGFza091dHB1dFRpdGxlID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stb3V0cHV0LXRpdGxlXCIpO1xuLy8gICAgICAgY29uc3QgdGFza091dHB1dERldGFpbHMgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4vLyAgICAgICAgIFwiI3Rhc2stb3V0cHV0LWRldGFpbHNcIlxuLy8gICAgICAgKTtcbi8vICAgICAgIGNvbnN0IHRhc2tPdXRwdXREYXRlID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stb3V0cHV0LWRhdGVcIik7XG4vLyAgICAgICAvLyBjb25kaXRpb24gdG8gY2hlY2sgaWYgY3VycmVudCB0aGUgY2hlY2tib3ggY2hlY2tlZCBvciBub3QgOlxuLy8gICAgICAgaWYgKGNoZWNrYm94QnRuLmNoZWNrZWQpIHtcbi8vICAgICAgICAgdGFza091dHB1dFRpdGxlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaFwiO1xuLy8gICAgICAgICB0YXNrT3V0cHV0RGV0YWlscy5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2hcIjtcbi8vICAgICAgICAgdGFza091dHB1dERhdGUuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoXCI7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICB0YXNrT3V0cHV0VGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwidGV4dC1kZWNvcmF0aW9uIDogbm9uZVwiO1xuLy8gICAgICAgICB0YXNrT3V0cHV0RGV0YWlscy5zdHlsZS5jc3NUZXh0ID0gXCJ0ZXh0LWRlY29yYXRpb24gOiBub25lXCI7XG4vLyAgICAgICAgIHRhc2tPdXRwdXREYXRlLnN0eWxlLmNzc1RleHQgPSBcInRleHQtZGVjb3JhdGlvbiA6IG5vbmVcIjtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIG5ldyBwcm9qZWN0IG5hbWUgZm9ybSBET006XG4vLyBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItcHJvamVjdC1pdGVtc1wiKTtcbi8vIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1uZXctcHJvamVjdC1mb3JtXCIpO1xuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy8gY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuLy8gY29uc3QgYWRkUHJvamVjdE5hbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LW5hbWUtYnV0dG9uXCIpO1xuLy8gY29uc29sZS5sb2coYWRkUHJvamVjdE5hbWVCdXR0b24pO1xuLy8gZXZlbnQgdG8gc2hvdyBuZXcgcHJvamVjdCBmb3JtIDpcbi8vIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXdQcm9qZWN0RnJvbSk7XG4vLyBmdW5jdGlvbiBzaG93TmV3UHJvamVjdEZyb20oKSB7XG4vLyAgIGFkZFByb2plY3RDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheSA6IGZsZXhcIjtcbi8vIH1cbi8vIGV2ZW50IHRvIGNyZWF0ZSBuZXcgcHJvamVjdCBuYW1lIDpcbi8vIGFkZFByb2plY3ROYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGNyZWF0ZU5ld1Byb2plY3ROYW1lKCk7XG4vLyAgIGNyZWF0ZVNpZGVCYXJFbGVtZW50KCk7XG4vLyB9KTtcblxuLy8gRE9NIEVsZW1lbnRzIDpcbi8vIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyBcInByb2plY3Qtb3V0cHV0LWNvbnRhaW5lclwiXG4vLyApO1xuLy8gRE9NIEZvcm0gOlxuY29uc3QgcHJvamVjdFByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtcHJldmlld1wiKTtcbmNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stYnV0dG9uXCIpO1xuY29uc3QgZm9ybVN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tc3VibWl0LXRhc2stYnV0dG9uXCIpO1xuY29uc3QgZm9ybUNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tY2FuY2VsLXRhc2stYnV0dG9uXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1maWVsZFwiKTtcbmNvbnN0IGZvcm1EZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWZpZWxkXCIpO1xuY29uc3QgZm9ybURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtZmllbGRcIik7XG5jb25zdCBzaWRlYmFyQWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWFkZC1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXItcHJvamVjdC1pdGVtc1wiKTtcbmNvbnN0IHNpZGViYXJGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyLWZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuLy8gY3JlYXRlIG5ldyBwcm9qZWN0cyA6XG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgcmV0dXJuIG5ld1Byb2plY3ROYW1lO1xufTtcbi8vIGNyZWF0ZSBuZXcgdGFza3MgOlxuY29uc3QgY3JlYXRlTmV3UHJvamVjdFRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RUYXNrID0gbmV3IFRhc2soXG4gICAgZm9ybVRpdGxlLnZhbHVlLFxuICAgIGZvcm1EZXRhaWxzLnZhbHVlLFxuICAgIGZvcm1EYXRlLnZhbHVlXG4gICk7XG4gIHJldHVybiBuZXdQcm9qZWN0VGFzaztcbn07XG5cbmNvbnN0IERPTUVsZW1lbnQgPSB7XG4gIHN0b3JlTmV3RGl2RWxlbWVudDogXCJcIixcbiAgc3RvcmVOZXdQcm9qZWN0T3V0cHV0OiBcIlwiLFxuICB1cGRhdGVQcm9qZWN0UHJldmlldyhlbGVtZW50KSB7XG4gICAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICBwcm9qZWN0SGVhZGVyTmFtZS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogZmxleFwiO1xuICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheSA6IGJsb2NrXCI7XG4gIH0sXG4gIGNyZWF0ZVNpZGVCYXJFbGVtZW50KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3REaXYuaWQgPSBcIm5ldy1wcm9qZWN0LWRpdi1pdGVtXCI7XG4gICAgbmV3UHJvamVjdERpdi50ZXh0Q29udGVudCA9IGNyZWF0ZU5ld1Byb2plY3ROYW1lKCkuZ2V0TmV3TmFtZSgpO1xuICAgIHByb2plY3RJdGVtcy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2KTtcbiAgICAvLyB0aGlzLnN0b3JlTmV3RGl2RWxlbWVudCA9IG5ld1Byb2plY3REaXY7XG4gIH0sXG4gIGNyZWF0ZU91dHB1dEVsZW1lbnQoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdE91dHB1dC5pZCA9IFwibmV3LXByb2plY3Qtb3V0cHV0XCI7XG4gICAgbmV3UHJvamVjdE91dHB1dC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3BhbiBpZD1cInByb2plY3QtdGl0bGVcIj4ke3RoaXMuc3RvcmVOZXdEaXZFbGVtZW50LnRleHRDb250ZW50fTwvc3Bhbj5cbiAgICAgIDxidXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIj4rIEFkZCBUYXNrPC9idXR0b24+XG4gICAgICBgO1xuICAgIC8vIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RPdXRwdXQpO1xuICAgIHByb2plY3RUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0T3V0cHV0LCBmb3JtKTtcbiAgICB0aGlzLnN0b3JlTmV3UHJvamVjdE91dHB1dCA9IG5ld1Byb2plY3RPdXRwdXQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIH0sXG4gIC8vIGhpZGVPdGhlckVsZW1lbnRzKCkge1xuICAvLyAgIGNvbnN0IGFsbFNpZGViYXJQcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAvLyAgICAgXCIjbmV3LXByb2plY3QtZGl2LWl0ZW1cIlxuICAvLyAgICk7XG4gIC8vICAgY29uc3QgYWxsTmV3UHJvamVjdE91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIC8vICAgICBcIiNuZXctcHJvamVjdC1vdXRwdXRcIlxuICAvLyAgICk7XG4gIC8vICAgYWxsU2lkZWJhclByb2plY3RJdGVtcy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIC8vICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0b3JlTmV3UHJvamVjdE91dHB1dCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmVOZXdEaXZFbGVtZW50KTtcbiAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5zdG9yZU5ld1Byb2plY3RPdXRwdXQpO1xuICAvLyAgICAgICBpZiAocHJvamVjdC50ZXh0Q29udGVudCA9PT0gdGhpcy5zdG9yZU5ld1Byb2plY3RPdXRwdXQudGVzdCkge1xuICAvLyAgICAgICAgIHRoaXMuc3RvcmVOZXdQcm9qZWN0T3V0cHV0LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXkgOiBmbGV4XCI7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgdGhpcy5zdG9yZU5ld1Byb2plY3RPdXRwdXQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfSxcbn07XG5jb25zdCBET01Gb3JtID0ge1xuICBzaG93Rm9ybU91dHB1dCgpIHtcbiAgICAvLyByZXR1cm4gZm9ybSBzdWJtaXQgaWYgZW1wdHkgOlxuICAgIGlmIChcbiAgICAgIGZvcm1UaXRsZS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgICAgZm9ybURldGFpbHMudmFsdWUgPT09IFwiXCIgfHxcbiAgICAgIGZvcm1EYXRlLnZhbHVlID09PSBcIlwiXG4gICAgKVxuICAgICAgcmV0dXJuO1xuICAgIC8vIGNyZWF0ZSBuZXcgZm9ybSBvdXRwdXQgOlxuICAgIGNvbnN0IGZvcm1UYXNrT3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGFza091dHB1dC5pZCA9IFwiZm9ybS10YXNrLW91dHB1dFwiO1xuICAgIGZvcm1UYXNrT3V0cHV0LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBpZD1cImNoZWNrLXRpdGxlLWRpdlwiPlxuICAgICAgICA8aW5wdXQgaWQ9XCJjaGVja2JveC1idXR0b25cIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtdGl0bGVcIj4ke2NyZWF0ZU5ld1Byb2plY3RUYXNrKCkuZ2V0VGl0bGUoKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtjcmVhdGVOZXdQcm9qZWN0VGFzaygpLmdldERldGFpbHMoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRhdGVcIj4ke2NyZWF0ZU5ld1Byb2plY3RUYXNrKCkuZ2V0RGF0ZSgpfTwvZGl2PmA7XG4gICAgcHJvamVjdFByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVRhc2tPdXRwdXQpO1xuICB9LFxuICBjbGVhbkZvcm1EYXRhKCkge1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSxcbn07XG4vLyBldmVudCBjbGljayB0byBzaG93IHNpZGUgYmFyIGZvcm0gOlxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyRm9ybUNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogZmxleFwiO1xufSk7XG4vLyBzaWRlIGJhciBmb3JtIGFkZCBldmVudCA6XG5zaWRlYmFyQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIERPTUVsZW1lbnQuY3JlYXRlU2lkZUJhckVsZW1lbnQoKTtcbiAgc2lkZUJhckVsZW1lbnRBZGRFdmVudCgpO1xuICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuLy8gZnVuYyB0aGF0IHNlbGVjdCBuZXcgc2lkZWJhciBwcm9qZWN0cyBhZnRlciBjcmVhdGluZyB0aGVtIGFuZCBhZGQgZXZlbnRzIDogc1xuZnVuY3Rpb24gc2lkZUJhckVsZW1lbnRBZGRFdmVudCgpIHtcbiAgY29uc3QgYWxsU2lkZWJhclByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIjbmV3LXByb2plY3QtZGl2LWl0ZW1cIlxuICApO1xuICBhbGxTaWRlYmFyUHJvamVjdEl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgRE9NRWxlbWVudC51cGRhdGVQcm9qZWN0UHJldmlldyhlbGVtZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG4vLyBwcm9qZWN0IHByZXZpZXcgYWRkIHRhc2sgYnV0dG9uIGV2ZW50IDpcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5IDogZmxleFwiO1xufSk7XG4vLyBwcm9qZWN0IHByZXZpZXcgZm9ybSBjYW5jZWwgYnV0dG9uIGV2ZW50IDpcbmZvcm1DYW5jZWxUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm0uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheSA6IG5vbmVcIjtcbn0pO1xuLy8gcHJvamVjdCBwcmV2aWV3IGZvcm0gYWRkIGJ1dHRvbiBldmVudCA6XG5mb3JtU3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBET01Gb3JtLnNob3dGb3JtT3V0cHV0KCk7XG4gIERPTUZvcm0uY2xlYW5Gb3JtRGF0YSgpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9kaXN0L3N0eWxlLmNzc1wiO1xuaW1wb3J0IG5ld1RvRG8gZnJvbSBcIi4vbmV3VG9Eb1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi91aS5qc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9