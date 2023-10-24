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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  font-size: 20px;
}
/* footer styles */
footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  background-color: rgb(61, 61, 61);
}
/* project task container styles */
#project-task-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
}
#project-item {
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
#task-output-container {
  border: solid 3px rgb(0, 217, 255);
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;EACjC,qCAAqC;EACrC,8CAA8C;AAChD;AACA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,8EAA8E;EAC9E,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iCAAiC;AACnC;AACA,gBAAgB;AAChB;EACE,aAAa;EACb,+BAA+B;EAC/B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;AACA,mBAAmB;AACnB;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,SAAS;EACT,eAAe;AACjB;AACA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;AACA,kCAAkC;AAClC;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;EAC7B,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,sCAAsC;EACtC,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,mBAAmB;EACnB,QAAQ;EACR,oCAAoC;EACpC,kBAAkB;EAClB,8EAA8E;AAChF;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,eAAe;AACjB;AACA;;;EAGE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;AACX;AACA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,aAAa;AACf;AACA;;EAEE,eAAe;EACf,wBAAwB;EACxB,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,UAAU;AACZ;AACA;;EAEE,eAAe;EACf,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,kCAAkC;AACpC;AACA;EACE,eAAe;EACf,kCAAkC;AACpC;AACA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;AACA,uBAAuB;AACvB;EACE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 70px 1fr 80px;\n  grid-template-columns: repeat(3, 1fr);\n  font-family: \"Courier New\", Courier, monospace;\n}\n/* header styles : */\nheader {\n  grid-column: 1 / 4;\n  grid-row: 1 / 2;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  background-color: rgb(61, 61, 61);\n}\n/* main styles */\nmain {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 4;\n  grid-row: 2 / 2;\n}\n/* sidebar styles */\n#sidebar {\n  background-color: grey;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  gap: 80px;\n  width: 250px;\n}\n#bar-items {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 20px;\n  font-size: 20px;\n}\n/* footer styles */\nfooter {\n  grid-column: 1 / 4;\n  grid-row: 3 / 4;\n  background-color: rgb(61, 61, 61);\n}\n/* project task container styles */\n#project-task-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px;\n}\n#project-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  font-size: 40px;\n}\n#project-title {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n  font-size: 30px;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border-radius: 5px;\n  background-color: greenyellow;\n}\n#add-task-button {\n  align-self: center;\n  width: 150px;\n  background-color: greenyellow;\n  box-shadow: 0 2px 5px rgba(1, 1, 1, 0.5);\n  border: none;\n  font-weight: bold;\n  padding: 10px;\n  cursor: pointer;\n  transition: background-color 0.4s ease;\n  border-radius: 15px;\n}\n#add-task-button:hover {\n  background-color: white;\n}\n\n/* form style */\n#form-task {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  gap: 8px;\n  background-color: rgb(141, 212, 224);\n  border-radius: 5px;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n#form-title,\n#form-details,\n#form-date {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  font-size: 13px;\n}\n#form-title > input,\n#form-details > input,\n#form-date > input {\n  border: none;\n  height: 30px;\n  padding-left: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n#form-date > input {\n  color: rgb(0, 217, 255);\n  font-size: 13px;\n}\n#form-priority {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  width: 95%;\n  font-size: 13px;\n}\n\n#form-priority-buttons {\n  width: 100%;\n  display: flex;\n  gap: 20px;\n}\n#form-priority-buttons > input {\n  border: none;\n  height: 20px;\n  font-size: 12px;\n  border-radius: 5px;\n  outline: none;\n  width: 60px;\n  font-weight: bold;\n}\n#form-priority-buttons > input:first-child {\n  border: 1px green solid;\n  color: green;\n}\n#form-priority-buttons > input:first-child:hover,\n#form-priority-buttons > input:first-child:focus {\n  cursor: pointer;\n  background-color: green;\n  color: white;\n}\n#form-priority-buttons > input:nth-child(2) {\n  border: 1px yellow solid;\n  color: yellow;\n}\n#form-priority-buttons > input:nth-child(2):hover,\n#form-priority-buttons > input:nth-child(2):focus {\n  cursor: pointer;\n  background-color: yellow;\n  color: white;\n}\n#form-priority-buttons > input:nth-child(3) {\n  border: 1px red solid;\n  color: red;\n}\n#form-priority-buttons > input:nth-child(3):hover,\n#form-priority-buttons > input:nth-child(3):focus {\n  cursor: pointer;\n  background-color: red;\n  color: white;\n}\n#form-submit {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  padding-top: 10px;\n}\n#form-submit > input {\n  border: none;\n  height: 20px;\n  border-radius: 3px;\n  outline: none;\n  width: 60px;\n  font-size: 10px;\n  font-weight: bold;\n  color: white;\n}\n#form-submit > input:first-child {\n  background-color: rgb(84, 210, 84);\n}\n#form-submit > input:nth-child(2) {\n  cursor: pointer;\n  background-color: rgb(255, 48, 48);\n}\n#form-submit > input:nth-child(2):hover,\n#form-submit > input:first-child:hover {\n  cursor: pointer;\n  background-color: white;\n  color: black;\n}\n/* task output styles */\n#task-output-container {\n  border: solid 3px rgb(0, 217, 255);\n  height: 50px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   addDefaultProject: () => (/* binding */ addDefaultProject),
/* harmony export */   addDefaultProjectTasks: () => (/* binding */ addDefaultProjectTasks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);



/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


console.log((0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addDefaultProject)(), (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addDefaultProjectTasks)());

function showDefaultProject() {
  const projectContainer = document.getElementById("project-container");
  const defaultProjectDiv = document.createElement("div");
  defaultProjectDiv.id = "default-project-div";
  defaultProjectDiv.textContent = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addDefaultProject)().name;
  projectContainer.appendChild(defaultProjectDiv);
}
showDefaultProject();

// func to create project task :
function createTaskContainer() {
  const projectItem = document.getElementById("project-item");
  projectItem.innerHTML = `
      <span id="project-title"">${(0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.addDefaultProject)().name}</span>
      <button id="add-task-button">+ Add Task</button>
  `;
  showTaskForm();
}
// event call for default project name :
const defaultProjectDiv = document.getElementById("default-project-div");
defaultProjectDiv.addEventListener("click", createTaskContainer);

// func to show task form :
function showTaskForm() {
  const addTaskButton = document.getElementById("add-task-button");
  addTaskButton.addEventListener("click", () => {
    const formTask = document.getElementById("form-task");
    formTask.style.cssText = "display: flex";
  });
}

// form submit event for showing the the form output  :
const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("click", displayFormOutput);

function displayFormOutput() {
  // form elements  :
  let formTask = document.getElementById("form-task");
  let formTitle = formTask[0];
  let formDetails = formTask[1];
  let formDate = formTask[2];
  if (
    formTitle.value === "" ||
    formDetails.value === "" ||
    formDate.value === ""
  )
    return;
  // display form outputs :
  const createFormOutputElement = () => {
    const projectTaskContainer = document.getElementById(
      "project-task-container"
    );
    const taskOutputContainer = document.createElement("div");
    taskOutputContainer.id = "task-output-container";
    taskOutputContainer.innerHTML = `
      <input type="checkbox" />
      <div id="task-output-tilte">${formTitle.value}</div>
      <div id="task-output-details">${formDetails.value}</div>
      <div id="task-output-date">${formDate.value}</div>`;
    projectTaskContainer.appendChild(taskOutputContainer);
  };
  createFormOutputElement();
  // clean form :
  const cleanFormData = () => {
    formTask.reset();
  };
  cleanFormData();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZ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UTtBQUM3QyxrQ0FBa0MsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0TkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDMkI7QUFDTjs7QUFFMUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL2Rpc3Qvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vZGlzdC9zdHlsZS5jc3M/YjVjNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uZXdUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnIgODBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuLyogaGVhZGVyIHN0eWxlcyA6ICovXG5oZWFkZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XG59XG4vKiBtYWluIHN0eWxlcyAqL1xubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGdyaWQtcm93OiAyIC8gMjtcbn1cbi8qIHNpZGViYXIgc3R5bGVzICovXG4jc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGdhcDogODBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuI2Jhci1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi8qIGZvb3RlciBzdHlsZXMgKi9cbmZvb3RlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XG59XG4vKiBwcm9qZWN0IHRhc2sgY29udGFpbmVyIHN0eWxlcyAqL1xuI3Byb2plY3QtdGFzay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4jcHJvamVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuI3Byb2plY3QtdGl0bGUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgxLCAxLCAxLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuI2FkZC10YXNrLWJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZm9ybSBzdHlsZSAqL1xuI2Zvcm0tdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMjEyLCAyMjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcbn1cbiNmb3JtLXRpdGxlLFxuI2Zvcm0tZGV0YWlscyxcbiNmb3JtLWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4jZm9ybS10aXRsZSA+IGlucHV0LFxuI2Zvcm0tZGV0YWlscyA+IGlucHV0LFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcbiAgY29sb3I6IHJnYigwLCAyMTcsIDI1NSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNmb3JtLXByaW9yaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuICB3aWR0aDogOTUlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xufVxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXI6IDFweCBncmVlbiBzb2xpZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0OmZpcnN0LWNoaWxkOmhvdmVyLFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0OmZpcnN0LWNoaWxkOmZvY3VzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgyKSB7XG4gIGJvcmRlcjogMXB4IHllbGxvdyBzb2xpZDtcbiAgY29sb3I6IHllbGxvdztcbn1cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMik6aG92ZXIsXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmZvY3VzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMykge1xuICBib3JkZXI6IDFweCByZWQgc29saWQ7XG4gIGNvbG9yOiByZWQ7XG59XG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDMpOmhvdmVyLFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgzKTpmb2N1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG4jZm9ybS1zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4jZm9ybS1zdWJtaXQgPiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA2MHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMjEwLCA4NCk7XG59XG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpudGgtY2hpbGQoMikge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDQ4LCA0OCk7XG59XG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpudGgtY2hpbGQoMik6aG92ZXIsXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpmaXJzdC1jaGlsZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi8qIHRhc2sgb3V0cHV0IHN0eWxlcyAqL1xuI3Rhc2stb3V0cHV0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAyMTcsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLDhDQUE4QztBQUNoRDtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBQ0Esa0NBQWtDO0FBQ2xDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsOEVBQThFO0FBQ2hGO0FBQ0E7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBOztFQUVFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBLHVCQUF1QjtBQUN2QjtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyIDgwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuLyogaGVhZGVyIHN0eWxlcyA6ICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XFxufVxcbi8qIG1haW4gc3R5bGVzICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZ3JpZC1yb3c6IDIgLyAyO1xcbn1cXG4vKiBzaWRlYmFyIHN0eWxlcyAqL1xcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBnYXA6IDgwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbiNiYXItaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLyogZm9vdGVyIHN0eWxlcyAqL1xcbmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDYxLCA2MSk7XFxufVxcbi8qIHByb2plY3QgdGFzayBjb250YWluZXIgc3R5bGVzICovXFxuI3Byb2plY3QtdGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4jcHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbiNwcm9qZWN0LXRpdGxlIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG4jYWRkLXRhc2stYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMSwgMSwgMSwgMC41KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogZm9ybSBzdHlsZSAqL1xcbiNmb3JtLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGdhcDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MSwgMjEyLCAyMjQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xcbn1cXG4jZm9ybS10aXRsZSxcXG4jZm9ybS1kZXRhaWxzLFxcbiNmb3JtLWRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTUlO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4jZm9ybS10aXRsZSA+IGlucHV0LFxcbiNmb3JtLWRldGFpbHMgPiBpbnB1dCxcXG4jZm9ybS1kYXRlID4gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2Zvcm0tZGF0ZSA+IGlucHV0IHtcXG4gIGNvbG9yOiByZ2IoMCwgMjE3LCAyNTUpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4jZm9ybS1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXI6IDFweCBncmVlbiBzb2xpZDtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0OmZpcnN0LWNoaWxkOmhvdmVyLFxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgyKSB7XFxuICBib3JkZXI6IDFweCB5ZWxsb3cgc29saWQ7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMik6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jZm9ybS1wcmlvcml0eS1idXR0b25zID4gaW5wdXQ6bnRoLWNoaWxkKDMpIHtcXG4gIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbiNmb3JtLXByaW9yaXR5LWJ1dHRvbnMgPiBpbnB1dDpudGgtY2hpbGQoMyk6aG92ZXIsXFxuI2Zvcm0tcHJpb3JpdHktYnV0dG9ucyA+IGlucHV0Om50aC1jaGlsZCgzKTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNmb3JtLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDIxMCwgODQpO1xcbn1cXG4jZm9ybS1zdWJtaXQgPiBpbnB1dDpudGgtY2hpbGQoMikge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNDgsIDQ4KTtcXG59XFxuI2Zvcm0tc3VibWl0ID4gaW5wdXQ6bnRoLWNoaWxkKDIpOmhvdmVyLFxcbiNmb3JtLXN1Ym1pdCA+IGlucHV0OmZpcnN0LWNoaWxkOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4vKiB0YXNrIG91dHB1dCBzdHlsZXMgKi9cXG4jdGFzay1vdXRwdXQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAyMTcsIDI1NSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3RDb25zdHJ1Y3RvciBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG4vLyBjb25zb2xlLmxvZyhQcm9qZWN0Q29uc3RydWN0b3IpO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG59XG5cbmNsYXNzIFRhc2tzIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRGVmYXVsdFByb2plY3QoKSB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJTcG9ydFwiKTtcbiAgcmV0dXJuIGRlZmF1bHRQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBhZGREZWZhdWx0UHJvamVjdFRhc2tzKCkge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdFRhc2tzID0gbmV3IFRhc2tzKFxuICAgIFwiR3ltXCIsXG4gICAgXCJEb2luZyBTb21lIENhcmRpb1wiLFxuICAgIFwiVG9kYXlcIixcbiAgICBcIkhpZ2hcIlxuICApO1xuICByZXR1cm4gZGVmYXVsdFByb2plY3RUYXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbmV4cG9ydCB7IGFkZERlZmF1bHRQcm9qZWN0LCBhZGREZWZhdWx0UHJvamVjdFRhc2tzIH07XG4iLCJpbXBvcnQgUHJvamVjdCwge1xuICBhZGREZWZhdWx0UHJvamVjdCxcbiAgYWRkRGVmYXVsdFByb2plY3RUYXNrcyxcbn0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc29sZS5sb2coYWRkRGVmYXVsdFByb2plY3QoKSwgYWRkRGVmYXVsdFByb2plY3RUYXNrcygpKTtcblxuZnVuY3Rpb24gc2hvd0RlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZGVmYXVsdFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWZhdWx0UHJvamVjdERpdi5pZCA9IFwiZGVmYXVsdC1wcm9qZWN0LWRpdlwiO1xuICBkZWZhdWx0UHJvamVjdERpdi50ZXh0Q29udGVudCA9IGFkZERlZmF1bHRQcm9qZWN0KCkubmFtZTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWZhdWx0UHJvamVjdERpdik7XG59XG5zaG93RGVmYXVsdFByb2plY3QoKTtcblxuLy8gZnVuYyB0byBjcmVhdGUgcHJvamVjdCB0YXNrIDpcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIoKSB7XG4gIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gIHByb2plY3RJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxzcGFuIGlkPVwicHJvamVjdC10aXRsZVwiXCI+JHthZGREZWZhdWx0UHJvamVjdCgpLm5hbWV9PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiPisgQWRkIFRhc2s8L2J1dHRvbj5cbiAgYDtcbiAgc2hvd1Rhc2tGb3JtKCk7XG59XG4vLyBldmVudCBjYWxsIGZvciBkZWZhdWx0IHByb2plY3QgbmFtZSA6XG5jb25zdCBkZWZhdWx0UHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdC1wcm9qZWN0LWRpdlwiKTtcbmRlZmF1bHRQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrQ29udGFpbmVyKTtcblxuLy8gZnVuYyB0byBzaG93IHRhc2sgZm9ybSA6XG5mdW5jdGlvbiBzaG93VGFza0Zvcm0oKSB7XG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4gICAgZm9ybVRhc2suc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuICB9KTtcbn1cblxuLy8gZm9ybSBzdWJtaXQgZXZlbnQgZm9yIHNob3dpbmcgdGhlIHRoZSBmb3JtIG91dHB1dCAgOlxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5Rm9ybU91dHB1dCk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtT3V0cHV0KCkge1xuICAvLyBmb3JtIGVsZW1lbnRzICA6XG4gIGxldCBmb3JtVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrXCIpO1xuICBsZXQgZm9ybVRpdGxlID0gZm9ybVRhc2tbMF07XG4gIGxldCBmb3JtRGV0YWlscyA9IGZvcm1UYXNrWzFdO1xuICBsZXQgZm9ybURhdGUgPSBmb3JtVGFza1syXTtcbiAgaWYgKFxuICAgIGZvcm1UaXRsZS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgIGZvcm1EZXRhaWxzLnZhbHVlID09PSBcIlwiIHx8XG4gICAgZm9ybURhdGUudmFsdWUgPT09IFwiXCJcbiAgKVxuICAgIHJldHVybjtcbiAgLy8gZGlzcGxheSBmb3JtIG91dHB1dHMgOlxuICBjb25zdCBjcmVhdGVGb3JtT3V0cHV0RWxlbWVudCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJwcm9qZWN0LXRhc2stY29udGFpbmVyXCJcbiAgICApO1xuICAgIGNvbnN0IHRhc2tPdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPdXRwdXRDb250YWluZXIuaWQgPSBcInRhc2stb3V0cHV0LWNvbnRhaW5lclwiO1xuICAgIHRhc2tPdXRwdXRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtdGlsdGVcIj4ke2Zvcm1UaXRsZS52YWx1ZX08L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kZXRhaWxzXCI+JHtmb3JtRGV0YWlscy52YWx1ZX08L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kYXRlXCI+JHtmb3JtRGF0ZS52YWx1ZX08L2Rpdj5gO1xuICAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPdXRwdXRDb250YWluZXIpO1xuICB9O1xuICBjcmVhdGVGb3JtT3V0cHV0RWxlbWVudCgpO1xuICAvLyBjbGVhbiBmb3JtIDpcbiAgY29uc3QgY2xlYW5Gb3JtRGF0YSA9ICgpID0+IHtcbiAgICBmb3JtVGFzay5yZXNldCgpO1xuICB9O1xuICBjbGVhbkZvcm1EYXRhKCk7XG59XG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlGb3JtT3V0cHV0KCkge1xuLy8gICBjb25zdCBnZXRGb3JtT3V0cHV0ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4vLyAgICAgY29uc3QgZm9ybVRpdGxlT3V0cHV0ID0gZm9ybVRhc2tbMF0udmFsdWU7XG4vLyAgICAgY29uc3QgZm9ybURldGFpbHNPdXRwdXQgPSBmb3JtVGFza1sxXS52YWx1ZTtcbi8vICAgICBjb25zdCBmb3JtRGF0ZU91dHB1dCA9IGZvcm1UYXNrWzJdLnZhbHVlO1xuLy8gICAgIGlmIChcbi8vICAgICAgIGZvcm1UaXRsZU91dHB1dCA9PT0gXCJcIiB8fFxuLy8gICAgICAgZm9ybURldGFpbHNPdXRwdXQgPT09IFwiXCIgfHxcbi8vICAgICAgIGZvcm1EYXRlT3V0cHV0ID09PSBcIlwiXG4vLyAgICAgKVxuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIC8vIGZvcm1UYXNrLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IG5vbmVcIjtcbi8vICAgfTtcbi8vICAgZ2V0Rm9ybU91dHB1dCgpO1xuLy8gICBjb25zdCBjcmVhdGVGb3JtT3V0cHV0RWxlbWVudCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgICAgXCJwcm9qZWN0LXRhc2stY29udGFpbmVyXCJcbi8vICAgICApO1xuLy8gICAgIGNvbnN0IHRhc2tPdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHRhc2tPdXRwdXRDb250YWluZXIuaWQgPSBcInRhc2stb3V0cHV0LWNvbnRhaW5lclwiO1xuLy8gICAgIC8vIHRhc2tPdXRwdXRDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuLy8gICAgIHRhc2tPdXRwdXRDb250YWluZXIuaW5uZXJIVE1MID0gYFxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj48L2Rpdj5cbi8vICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtdGlsdGVcIj4ke2Zvcm1UaXRsZU91dHB1dH08L2Rpdj5cbi8vICAgICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtZGV0YWlsc1wiPiR7Zm9ybURldGFpbHNPdXRwdXR9PC9kaXY+XG4vLyAgICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRhdGVcIj4ke2Zvcm1EYXRlT3V0cHV0fTwvZGl2PlxuLy8gICAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1wcmlvcml0eVwiPlxuLy8gICAgICAgPGJ1dHRvbj50ZXN0PC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+YDtcbi8vICAgICBwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3V0cHV0Q29udGFpbmVyKTtcbi8vICAgfTtcbi8vICAgY3JlYXRlRm9ybU91dHB1dEVsZW1lbnQoKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0Rm9ybU91dHB1dCgpIHtcbi8vICAgY29uc3QgZm9ybVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFza1wiKTtcbi8vICAgY29uc3QgZm9ybVRpdGxlT3V0cHV0ID0gZm9ybVRhc2tbMF0udmFsdWU7XG4vLyAgIGNvbnN0IGZvcm1EZXRhaWxzT3V0cHV0ID0gZm9ybVRhc2tbMV0udmFsdWU7XG4vLyAgIGNvbnN0IGZvcm1EYXRlT3V0cHV0ID0gZm9ybVRhc2tbMl0udmFsdWU7XG5cbi8vICAgY29uc29sZS5sb2coZm9ybVRhc2spO1xuLy8gICBjb25zb2xlLmxvZyhmb3JtVGl0bGVPdXRwdXQpO1xuLy8gICBjb25zb2xlLmxvZyhmb3JtRGV0YWlsc091dHB1dCk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRlT3V0cHV0KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0Rm9ybURhdGEoKSB7XG4vLyAgIGNvbnN0IGZvcm1UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2tcIik7XG4vLyAgIGNvbnN0IGZvcm1UaXRsZU91dHB1dCA9IGZvcm1UYXNrWzBdLnZhbHVlO1xuLy8gICBjb25zdCBmb3JtRGV0YWlsc091dHB1dCA9IGZvcm1UYXNrWzFdLnZhbHVlO1xuLy8gICBjb25zdCBmb3JtRGF0ZU91dHB1dCA9IGZvcm1UYXNrWzJdLnZhbHVlO1xuXG4vLyAgIC8vIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uc1wiKTtcbi8vICAgLy8gbGV0IGNob3NlblByaW9yaXR5QnV0dG9uO1xuLy8gICAvLyBwcmlvcml0eUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4vLyAgIC8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIC8vICAgICBjaG9zZW5Qcmlvcml0eUJ1dHRvbiA9IHRoaXM7XG4vLyAgIC8vICAgfSk7XG4vLyAgIC8vIH0pO1xuXG4vLyAgIGNvbnNvbGUubG9nKGZvcm1UaXRsZU91dHB1dCk7XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EZXRhaWxzT3V0cHV0KTtcbi8vICAgY29uc29sZS5sb2coZm9ybURhdGVPdXRwdXQpO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIGZvcm1UaXRsZU91dHB1dCxcbi8vICAgICBmb3JtRGV0YWlsc091dHB1dCxcbi8vICAgICBmb3JtRGF0ZU91dHB1dCxcbi8vICAgfTtcbi8vIH1cbi8vXG4vLyAvLyBmdW5jIHRvIGNyZWF0ZSBwcm9qZWN0IHRhc2sgOlxuLy8gZnVuY3Rpb24gY3JlYXRlRm9ybVRhc2soKSB7XG4vLyAgIGNvbnN0IHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgXCJwcm9qZWN0LXRhc2stY29udGFpbmVyXCJcbi8vICAgKTtcbi8vICAgY29uc3QgZm9ybVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbi8vICAgZm9ybVRhc2suaWQgPSBcImZvcm0tdGFza1wiO1xuLy8gICBmb3JtVGFzay5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG4vLyAgIGZvcm1UYXNrLmlubmVySFRNTCA9IGBcbi8vICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS10aXRsZVwiPlxuLy8gICAgICAgICAgICAgPGxhYmVsPlRpdGxlOjwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQgVG8gRG86XCIgcmVxdWlyZWQgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1kZXRhaWxzXCI+XG4vLyAgICAgICAgICAgICA8bGFiZWw+RGV0YWlscyhvcHRpb25hbCk6PC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uOlwiIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tZGF0ZVwiPlxuLy8gICAgICAgICAgICAgPGxhYmVsPkRhdGU6PC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkIC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tcHJpb3JpdHlcIj5cbi8vICAgICAgICAgICAgIDxsYWJlbD5Qcmlvcml0eShvcHRpb25hbCk6IDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1wcmlvcml0eS1idXR0b25zXCIgcmVxdWlyZWQ+XG4vLyAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInByaW9yaXR5LWJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJMb3dcIiAvPlxuLy8gICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcmlvcml0eS1idXR0b25zXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTWVkaXVtXCIgLz5cbi8vICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicHJpb3JpdHktYnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkhpZ2hcIiAvPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBpZD1cImZvcm0tc3VibWl0XCI+XG4vLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgLz5cbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJjYW5jZWxcIiAvPlxuLy8gICAgICAgICAgIDwvZGl2PmA7XG4vLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1UYXNrKTtcbi8vICAgY3JlYXRlRm9ybU91dHB1dCgpO1xuLy8gfVxuLy8gZXZlbnQgY2FsbCBmb3IgZGVmYXVsdCBwcm9qZWN0IHRhc2tzIDpcbi8vIGZ1bmN0aW9uIGVkaXRUYXNrcygpIHtcbi8vICAgY29uc3QgZGVmYXVsdFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWJ1dHRvblwiKTtcbi8vICAgaWYgKGRlZmF1bHRUYXNrQnV0dG9uID09PSBudWxsKSByZXR1cm47XG4vLyAgIGRlZmF1bHRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVGb3JtVGFzayk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVRhc2tPdXRwdXRFbGVtZW50KCkge1xuLy8gICBjb25zdCB0aXRsZSA9IGdldEZvcm1PdXRwdXQoKS5mb3JtVGl0bGVPdXRwdXQ7XG4vLyAgIGNvbnN0IGRldGFpbHMgPSBnZXRGb3JtT3V0cHV0KCkuZm9ybURldGFpbHNPdXRwdXQ7XG4vLyAgIGNvbnN0IGRhdGUgPSBnZXRGb3JtT3V0cHV0KCkuZm9ybURhdGVPdXRwdXQ7XG5cbi8vICAgY29uc3QgcHJvamVjdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICBcInByb2plY3QtdGFzay1jb250YWluZXJcIlxuLy8gICApO1xuLy8gICBjb25zdCB0YXNrT3V0cHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgdGFza091dHB1dENvbnRhaW5lci5pZCA9IFwidGFzay1vdXRwdXQtY29udGFpbmVyXCI7XG4vLyAgIC8vIHRhc2tPdXRwdXRDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogZmxleFwiO1xuLy8gICB0YXNrT3V0cHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbi8vICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiPjwvZGl2PlxuLy8gICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbi8vICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LXRpbHRlXCI+JHt0aXRsZX08L2Rpdj5cbi8vICAgPGRpdiBpZD1cInRhc2stb3V0cHV0LWRldGFpbHNcIj4ke2RldGFpbHN9PC9kaXY+XG4vLyAgIDxkaXYgaWQ9XCJ0YXNrLW91dHB1dC1kYXRlXCI+JHtkYXRlfTwvZGl2PlxuLy8gICA8ZGl2IGlkPVwidGFzay1vdXRwdXQtcHJpb3JpdHlcIj5cbi8vICAgICA8YnV0dG9uPnRlc3Q8L2J1dHRvbj5cbi8vICAgPC9kaXY+XG4vLyAgIDwvZGl2PmA7XG4vLyAgIHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPdXRwdXRDb250YWluZXIpO1xuLy8gfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vZGlzdC9zdHlsZS5jc3NcIjtcbi8vIGltcG9ydCBQcm9qZWN0Q29uc3RydWN0b3IsIHtcbi8vICAgZGVmYXVsdFByb2plY3RzLFxuLy8gICBwcm9qZWN0c0xpc3QsXG4vLyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgbmV3VG9EbyBmcm9tIFwiLi9uZXdUb0RvXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL3VpLmpzXCI7XG5cbi8vIHByb2plY3QgbW9kdWxlIDpcbi8vIGNvbnNvbGUubG9nKHByb2plY3RzTGlzdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=