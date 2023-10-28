/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Onest:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  width: 100vw;
  background-color: #fefae3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b17036;
  font-family: "Onest", sans-serif;
  position: relative;
}

#content {
  height: 100%;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}

form {
  width: 100%;
  height: 175px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #fefae3;
  background-color: #8d7b66;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
}
form .input-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
form .input-container input {
  width: 55px;
  border: none;
  border-radius: 5px;
  background-color: #fefae3;
  font-weight: 900;
}
form .previous-path {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 2;
}
form button {
  grid-column: span 2;
  width: 90%;
  border-radius: 5px;
  background-color: #00ff7b;
  font-weight: 900;
  transition: background-color 120ms ease-in-out;
}
form button:hover {
  background-color: #00e66f;
}
form button:active {
  background-color: #00cc62;
}

.board-container {
  height: 700px;
  width: 700px;
  background-color: #fefae3;
  display: grid;
  grid-template-rows: 0.5fr 8fr 0.5fr;
  grid-template-columns: 0.5fr 8fr 0.5fr;
  opacity: 0;
  transition: opacity 1500ms linear;
  border: 5px solid #d4a469;
  border-radius: 5px;
}
.board-container .coordinates.letters {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
}
.board-container .coordinates.numbers {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
}
.board-container .chess-board {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  border: 3px solid #d4a469;
  border-radius: 5px;
}
.board-container .chess-board .square {
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.board-container .chess-board .square.light {
  background-color: #fefae3;
}
.board-container .chess-board .square.dark {
  background-color: #d4a469;
}
.board-container .chess-board .square.dark, .board-container .chess-board .square.light {
  transition: background-color 100ms ease-in-out;
}
.board-container .chess-board .square.valid-drop {
  background-color: #00cd34;
}
.board-container .chess-board .square .marker {
  color: green;
  font-weight: 900;
}

img.knight-piece {
  position: absolute;
  z-index: 100;
  transition: transform 250ms linear;
}

.marker {
  cursor: default;
}

.destination-marker {
  display: grid;
  grid-template-columns: 5fr 1fr 5fr;
  grid-template-rows: 5fr 1fr 5fr;
  height: 75%;
  width: 75%;
  transform: rotate(45deg);
}
.destination-marker .section {
  display: flex;
}
.destination-marker .section.top {
  align-items: flex-end;
}
.destination-marker .section.bottom {
  align-items: flex-start;
}
.destination-marker .section.left {
  justify-content: flex-end;
}
.destination-marker .section.right {
  justify-content: flex-start;
}
.destination-marker .section .leg {
  background-color: #000000;
  border-radius: 5px;
  transition: all 150ms ease-in-out;
}
.destination-marker .section .leg.left, .destination-marker .section .leg.right {
  width: 0;
  height: 100%;
}
.destination-marker .section .leg.top, .destination-marker .section .leg.bottom {
  height: 0;
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAgBA;EACI,aAAA;EACA,YAAA;EACA,yBAfM;EAgBN,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAVc;EAWd,gCAVe;EAWf,kBAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,qCAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAzCM;EA0CN,yBApCS;EAqCT,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,SAAA;EACA,qBAAA;AAbJ;AAeI;EACI,aAAA;EACA,mBAAA;EACA,QAAA;AAbR;AAeQ;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBA1DF;EA2DE,gBAAA;AAbZ;AAiBI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAfR;AAkBI;EACI,mBAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAtES;EAuET,gBAAA;EACA,8CAAA;AAhBR;AAkBQ;EACI,yBAAA;AAhBZ;AAmBQ;EACI,yBAAA;AAjBZ;;AAsBA;EACI,aAAA;EACA,YAAA;EACA,yBA5FM;EA6FN,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,UAAA;EACA,iCAAA;EACA,yBAAA;EACA,kBAAA;AAnBJ;AAsBQ;EACI,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,mBAAA;AApBZ;AAuBQ;EACI,aAAA;EACA,kCAAA;EACA,qBAAA;EACA,mBAAA;AArBZ;AAyBI;EACI,aAAA;EACA,kCAAA;EACA,qCAAA;EACA,yBAAA;EACA,kBAAA;AAvBR;AAyBQ;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAvBZ;AAyBY;EACI,yBAnIN;AA4GV;AAyBY;EACI,yBApIF;AA6Gd;AA0BY;EAEI,8CAAA;AAzBhB;AA4BY;EACI,yBA5IH;AAkHb;AA6BY;EACI,YAAA;EACA,gBAAA;AA3BhB;;AAiCA;EACI,kBAAA;EACA,YAAA;EACA,kCAAA;AA9BJ;;AAiCA;EACI,eAAA;AA9BJ;;AAiCA;EACI,aAAA;EACA,kCAAA;EACA,+BAAA;EACA,WAAA;EACA,UAAA;EACA,wBAAA;AA9BJ;AAgCI;EACI,aAAA;AA9BR;AAgCQ;EACI,qBAAA;AA9BZ;AAgCQ;EACI,uBAAA;AA9BZ;AAgCQ;EACI,yBAAA;AA9BZ;AAgCQ;EACI,2BAAA;AA9BZ;AAiCQ;EACI,yBAzLG;EA0LH,kBAAA;EACA,iCAAA;AA/BZ;AAiCY;EAEI,QAAA;EACA,YAAA;AAhChB;AAkCY;EAEI,SAAA;EACA,WAAA;AAjChB","sourcesContent":["@import \"./reset.css\";\n// Onest font\n@import url(\"https://fonts.googleapis.com/css2?family=Onest:wght@500&display=swap\");\n\n$main-bg: #fefae3;\n$light-square: $main-bg;\n$dark-square: #d4a469;\n$valid-drop: #00cd34;\n$marker-color: #000000;\n$animate-button: #00ff7b;\n$section-bg: #8d7b66;\n\n// fonts\n$main-font-color: #b17036;\n$main-font-family: \"Onest\", sans-serif;\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: $main-bg;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: $main-font-color;\n    font-family: $main-font-family;\n    position: relative;\n}\n\n#content {\n    height: 100%;\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n    transition: opacity 500ms ease-in-out;\n}\n\nform {\n    width: 100%;\n    height: 175px;\n    padding: 10px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    color: $light-square;\n    background-color: $section-bg;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n\n    .input-container {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n\n        input {\n            width: 55px;\n            border: none;\n            border-radius: 5px;\n            background-color: $light-square;\n            font-weight: 900;\n        }\n    }\n\n    .previous-path {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        grid-column: span 2;\n    }\n\n    button {\n        grid-column: span 2;\n        width: 90%;\n        border-radius: 5px;\n        background-color: $animate-button;\n        font-weight: 900;\n        transition: background-color 120ms ease-in-out;\n\n        &:hover {\n            background-color: darken($animate-button, 5);\n        }\n\n        &:active {\n            background-color: darken($animate-button, 10);\n        }\n    }\n}\n\n.board-container {\n    height: 700px;\n    width: 700px;\n    background-color: $main-bg;\n    display: grid;\n    grid-template-rows: 0.5fr 8fr 0.5fr;\n    grid-template-columns: 0.5fr 8fr 0.5fr;\n    opacity: 0;\n    transition: opacity 1500ms linear;\n    border: 5px solid $dark-square;\n    border-radius: 5px;\n\n    .coordinates {\n        &.letters {\n            display: grid;\n            grid-template-columns: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n\n        &.numbers {\n            display: grid;\n            grid-template-rows: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n    }\n\n    .chess-board {\n        display: grid;\n        grid-template-rows: repeat(8, 1fr);\n        grid-template-columns: repeat(8, 1fr);\n        border: 3px solid $dark-square;\n        border-radius: 5px;\n\n        .square {\n            border-radius: 2px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            &.light {\n                background-color: $light-square;\n            }\n            &.dark {\n                background-color: $dark-square;\n            }\n\n            &.dark,\n            &.light {\n                transition: background-color 100ms ease-in-out;\n            }\n\n            &.valid-drop {\n                background-color: $valid-drop;\n            }\n\n            .marker {\n                color: green;\n                font-weight: 900;\n            }\n        }\n    }\n}\n\nimg.knight-piece {\n    position: absolute;\n    z-index: 100;\n    transition: transform 250ms linear;\n}\n\n.marker {\n    cursor: default;\n}\n\n.destination-marker {\n    display: grid;\n    grid-template-columns: 5fr 1fr 5fr;\n    grid-template-rows: 5fr 1fr 5fr;\n    height: 75%;\n    width: 75%;\n    transform: rotate(45deg);\n\n    .section {\n        display: flex;\n\n        &.top {\n            align-items: flex-end;\n        }\n        &.bottom {\n            align-items: flex-start;\n        }\n        &.left {\n            justify-content: flex-end;\n        }\n        &.right {\n            justify-content: flex-start;\n        }\n\n        .leg {\n            background-color: $marker-color;\n            border-radius: 5px;\n            transition: all 150ms ease-in-out;\n\n            &.left,\n            &.right {\n                width: 0;\n                height: 100%;\n            }\n            &.top,\n            &.bottom {\n                height: 0;\n                width: 100%;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    background-color: inherit;
    /* color: inherit; */
    border: none;
}

li {
    list-style-type: none;
}

textarea {
    resize: none;
    outline: none;
}

input {
    outline: none;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: inherit;
    height: 35px;
}
`, "",{"version":3,"sources":["webpack://./src/style/reset.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;AAChB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: inherit;\n    /* color: inherit; */\n    border: none;\n}\n\nli {\n    list-style-type: none;\n}\n\ntextarea {\n    resize: none;\n    outline: none;\n}\n\ninput {\n    outline: none;\n    border-radius: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n    background-color: inherit;\n    height: 35px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animate: () => (/* binding */ Animate),
/* harmony export */   Coords: () => (/* binding */ Coords),
/* harmony export */   DOM: () => (/* binding */ DOM),
/* harmony export */   DestMarker: () => (/* binding */ DestMarker),
/* harmony export */   DraggableKnight: () => (/* binding */ DraggableKnight),
/* harmony export */   Load: () => (/* binding */ Load)
/* harmony export */ });
/* harmony import */ var _Images_knight_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/knight.svg */ "./src/Images/knight.svg");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/model.ts");




var DOM = /** @class */ (function () {
    function DOM() {
    }
    DOM.getKnight = function () {
        return document.querySelector(".knight-piece");
    };
    DOM.getChessboard = function () {
        return document.querySelector(".chess-board");
    };
    DOM.getMarker = function () {
        return document.querySelector(".marker");
    };
    DOM.getAllMarkers = function () {
        return document.querySelectorAll(".marker");
    };
    DOM.getStartLocationSquare = function () {
        return document.querySelector(".start-location");
    };
    DOM.getDestLocationSquare = function () {
        return document.querySelector(".destination");
    };
    DOM.getFirstSquare = function () {
        return document.querySelector(".square");
    };
    DOM.getAllSquares = function () {
        return document.querySelectorAll(".square");
    };
    DOM.getStartCoordInput = function () {
        return document.querySelector("input#start-coord");
    };
    DOM.getDestCoordInput = function () {
        return document.querySelector("input#destination-coord");
    };
    DOM.getGoButton = function () {
        return document.querySelector("button.run-coords");
    };
    DOM.getPathDesc = function () {
        return document.querySelector(".path-desc");
    };
    DOM.getPathCoords = function () {
        return document.querySelector(".path-coords");
    };
    return DOM;
}());

var Load = /** @class */ (function () {
    function Load() {
    }
    Load.defaultUI = function () {
        var content = document.querySelector("#content");
        content.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.mainForm());
        content.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.boardContainer());
    };
    return Load;
}());

var Animate = /** @class */ (function () {
    function Animate() {
    }
    Animate.moveAlongPath = function (e) {
        e.preventDefault();
        var startCoords = Coords.getStart();
        var destCoords = Coords.getDest();
        if (!startCoords || !destCoords) {
            return;
        }
        var path = (0,_model__WEBPACK_IMPORTED_MODULE_3__.shortestPath)(startCoords, destCoords);
        var dCoords = [];
        for (var i = 0; i < path.length - 1; i++) {
            var x = path[i][0];
            var y = path[i][1];
            var nx = path[i + 1][0];
            var ny = path[i + 1][1];
            var dx = nx - x;
            var dy = ny - y;
            dCoords.push([dx, dy]);
        }
        Animate.transitionDCoords(dCoords, path);
    };
    Animate.transitionDCoords = function (dCoords, path, i) {
        if (i === void 0) { i = 1; }
        if (!dCoords.length) {
            Coords.updateInputValue();
            return;
        }
        // if first iteration, append a start marker to the knight position before movement
        var startPosition;
        if (i === 1) {
            startPosition = Animate.getKnightPosition();
        }
        var _a = dCoords.shift(), dx = _a[0], dy = _a[1];
        var knight = document.querySelector(".knight-piece");
        var originalTransitionDuration = Animate.getKnightTransitionTime();
        var square = document.querySelector(".square");
        var squareSize = square.getBoundingClientRect().height;
        var xTranslate = dx * squareSize;
        var yTranslate = dy * squareSize;
        new Promise(function (resolve) {
            resolve(null);
        })
            // traverse the x axis
            .then(function () {
            return new Promise(function (resolve) {
                Animate.modifyTransitionDuration(dx, originalTransitionDuration, knight);
                knight.style.transform = "translate(".concat(xTranslate, "px)");
                resolve(null);
            });
        })
            // wait until the transition is done
            .then(function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(null);
                }, Animate.getKnightTransitionTime());
            });
        })
            // traverse the y axis
            .then(function () {
            return new Promise(function (resolve) {
                Animate.modifyTransitionDuration(dy, originalTransitionDuration, knight);
                knight.style.transform = "translate(".concat(xTranslate, "px, ").concat(yTranslate, "px)");
                resolve(null);
            });
        })
            // wait until the transition is done
            .then(function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(null);
                }, Animate.getKnightTransitionTime());
            });
        })
            // reset the position by removing and adding a new knight
            // otherwise the absolute position never updates from the original start position
            .then(function () {
            var newKnightPosition = Animate.getKnightPosition();
            knight.remove();
            // first iteration
            if (startPosition) {
                startPosition.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "marker", tc: "start" }));
            }
            // last iteration
            if (!dCoords.length) {
                newKnightPosition.removeChild(newKnightPosition.firstElementChild);
                newKnightPosition.classList.remove("destination");
            }
            else {
                newKnightPosition.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "marker", tc: "".concat(i) }));
            }
            new DraggableKnight(newKnightPosition);
            Animate.transitionDCoords(dCoords, path, i + 1);
        });
    };
    Animate.clearPreviousMarkers = function () {
        var markers = document.querySelectorAll(".marker");
        markers.forEach(function (marker) {
            marker.remove();
        });
    };
    // keep the movement speed the same when moving 1 square or 2 squares
    Animate.modifyTransitionDuration = function (dCoord, originalDuration, knight) {
        knight.style.transitionDuration = "".concat(originalDuration * Math.abs(dCoord), "ms");
    };
    Animate.getKnightTransitionTime = function () {
        var knight = DOM.getKnight();
        var transitionDuration = window.getComputedStyle(knight).transitionDuration;
        return parseFloat(transitionDuration) * 1000;
    };
    // knight is absolutely positioned.  knight.parentElement won't work to get the new position
    Animate.getKnightPosition = function () {
        var knight = DOM.getKnight();
        var kPosition = knight.getBoundingClientRect();
        var squares = DOM.getAllSquares();
        var targetSquare;
        squares.forEach(function (square) {
            var sPosition = square.getBoundingClientRect();
            if (kPosition.top > sPosition.top &&
                kPosition.bottom < sPosition.bottom &&
                kPosition.left > sPosition.left &&
                kPosition.right < sPosition.right) {
                targetSquare = square;
            }
        });
        return targetSquare;
    };
    Animate.updateMessage = function () {
        var path = Coords.getShortestPath();
        if (!path) {
            return;
        }
        var pathDesc = DOM.getPathDesc();
        var pathCoords = DOM.getPathCoords();
        var steps = path.length - 1;
        // prettier-ignore
        var descText = "The shortest path from ".concat(Coords.getLetterCoords(path[0]), " to ").concat(Coords.getLetterCoords(path[path.length - 1]), " is ").concat(steps, " steps");
        var coordText = "";
        for (var i = 0; i < path.length; i++) {
            var letterCoord = Coords.getLetterCoords(path[i]);
            if (i === path.length - 1) {
                coordText += "".concat(letterCoord);
            }
            else {
                coordText += "".concat(letterCoord, " > ");
            }
        }
        pathDesc.textContent = descText;
        pathCoords.textContent = coordText;
    };
    return Animate;
}());

var Coords = /** @class */ (function () {
    function Coords() {
    }
    Coords.updateInputValue = function () {
        var startInput = DOM.getStartCoordInput();
        var destInput = DOM.getDestCoordInput();
        var start = Coords.getStartString();
        var dest = Coords.getDestString();
        startInput.value = start;
        dest ? (destInput.value = dest) : (destInput.value = "");
    };
    Coords.updateLocationFromInput = function (className, inputValue) {
        var squares = DOM.getAllSquares();
        squares.forEach(function (square) {
            if (square.classList.contains(className)) {
                square.classList.remove(className);
                square.removeChild(square.firstElementChild);
            }
        });
        var coordNums;
        var letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        coordNums = "".concat(letters.indexOf(inputValue[0]), "-").concat(inputValue[1]);
        squares.forEach(function (square) {
            if (square.getAttribute("coord") === coordNums) {
                if (className === "start-location") {
                    new DraggableKnight(square);
                }
                if (className === "destination") {
                    var e = null;
                    DestMarker.setDestination(e, square);
                }
            }
        });
    };
    Coords.inputIsValid = function (value) {
        return value.length > 0 && value.length <= 2;
    };
    Coords.validateInput = function (e) {
        var inputField = e.target;
        var firstLetter = inputField.value[0]
            ? inputField.value[0].toUpperCase()
            : "";
        var secondLetter = inputField.value[1]
            ? inputField.value[1]
            : "";
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
        if (!letters.includes(firstLetter)) {
            inputField.value = "";
            return;
        }
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
        if (!numbers.includes(secondLetter)) {
            inputField.value = firstLetter;
            return;
        }
        if (inputField.value.length > 2) {
            inputField.value = inputField.value.slice(0, 2);
            return;
        }
        var startInput = DOM.getStartCoordInput();
        var destInput = DOM.getDestCoordInput();
        if (inputField === startInput && e.target.value === destInput.value) {
            e.target.value = e.target.value.slice(0, 1);
            return;
        }
        if (e.target === destInput && e.target.value === startInput.value) {
            e.target.value = e.target.value.slice(0, 1);
            return;
        }
        if (Coords.inputIsValid(startInput.value)) {
            Coords.updateLocationFromInput("start-location", startInput.value);
        }
        if (Coords.inputIsValid(destInput.value)) {
            Coords.updateLocationFromInput("destination", destInput.value);
        }
        if (Coords.inputIsValid(startInput.value) &&
            Coords.inputIsValid(destInput.value)) {
            var path = (0,_model__WEBPACK_IMPORTED_MODULE_3__.shortestPath)(Coords.getStart(), Coords.getDest());
            Animate.updateMessage();
        }
    };
    Coords.getStart = function () {
        return Coords.getCoords("start-location");
    };
    Coords.getStartString = function () {
        var coords = Coords.getStart();
        return Coords.getLetterCoords(coords);
    };
    Coords.getDest = function () {
        return Coords.getCoords("destination");
    };
    Coords.getDestString = function () {
        var coords = Coords.getDest();
        return Coords.getLetterCoords(coords);
    };
    Coords.getCoords = function (targetClass) {
        var squares = DOM.getAllSquares();
        var coords = null;
        squares.forEach(function (square) {
            if (square.classList.contains(targetClass)) {
                var coordAttr = square.getAttribute("coord");
                coords = [
                    Number(coordAttr.split("-")[0]),
                    Number(coordAttr.split("-")[1]),
                ];
            }
        });
        return coords;
    };
    Coords.getLetterCoords = function (coords) {
        var letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        if (!coords) {
            return null;
        }
        return "".concat(letters[coords[0]]).concat(coords[1]);
    };
    Coords.getShortestPath = function () {
        var startCoord = Coords.getStart();
        var destCoord = Coords.getDest();
        if (!startCoord || !destCoord) {
            return null;
        }
        return (0,_model__WEBPACK_IMPORTED_MODULE_3__.shortestPath)(startCoord, destCoord);
    };
    return Coords;
}());

var DestMarker = /** @class */ (function () {
    function DestMarker() {
    }
    // prettier-ignore
    DestMarker.animateDestinationMarker = function () {
        setTimeout(function () {
            var nodes = document.querySelectorAll(".leg");
            nodes.forEach(function (node) {
                if (node.className === "leg top" || node.className === "leg bottom") {
                    node.style.height = "100%";
                }
                else {
                    node.style.width = "100%";
                }
            });
        }, 0);
    };
    DestMarker.setDestination = function (e, parentElement) {
        if (parentElement === void 0) { parentElement = null; }
        Animate.clearPreviousMarkers();
        var locations = DOM.getAllSquares();
        locations.forEach(function (square) {
            if (square.classList.contains("knight-location")) {
                return;
            }
            if (square.classList.contains("destination")) {
                square.classList.remove("destination");
                square.removeChild(square.firstChild);
            }
        });
        var destination = parentElement ? parentElement : e.currentTarget;
        // do not allow placing the marker on top of the start point where the knight piece is located
        if (destination.classList.contains("start-location")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.destinationMarker());
        DestMarker.animateDestinationMarker();
        Coords.updateInputValue();
        Animate.updateMessage();
    };
    return DestMarker;
}());

var DraggableKnight = /** @class */ (function () {
    function DraggableKnight(parentElement) {
        var _this = this;
        if (parentElement === void 0) { parentElement = null; }
        this.dragKnight = function (e) {
            var knight = document.querySelector(".knight-piece");
            var chessBoard = document.querySelector(".chess-board");
            if (_this.mouseDown) {
                if (_this.isWithinElement(e, chessBoard)) {
                    // chess piece is within the bounds of the chess board
                    knight.style.top = "".concat(e.clientY - knight.offsetHeight / 2, "px");
                    knight.style.left = "".concat(e.clientX - knight.offsetWidth / 2, "px");
                    _this.hoverSquare(e);
                }
                else {
                    // chess piece has traveled out of bounds of the chess board
                    _this.mouseDown = false;
                    knight.style.cursor = "default";
                    _this.placeKnight(e);
                }
            }
        };
        this.mouseDown = false;
        this.init(parentElement);
    }
    DraggableKnight.prototype.init = function (parentElement) {
        var _this = this;
        if (parentElement === void 0) { parentElement = null; }
        if (parentElement === null) {
            parentElement =
                document.querySelector(".chess-board").firstElementChild;
        }
        var knightImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
            class: "knight-piece",
            src: _Images_knight_svg__WEBPACK_IMPORTED_MODULE_0__,
            draggable: "false",
        });
        knightImage.onmouseup = function (e) { return _this.setClick(e); };
        knightImage.onmousedown = function (e) { return _this.setClick(e); };
        knightImage.onclick = function () { return Animate.clearPreviousMarkers(); };
        // make sure there is only one location with the start location class
        this.removeGlobalClassName("start-location", ".square");
        parentElement.classList.add("start-location");
        parentElement.appendChild(knightImage);
    };
    DraggableKnight.prototype.setClick = function (e) {
        var knight = DOM.getKnight();
        // set the mouseDown property if mousedown or mouseup on knight
        // dragKnight changes location of the knight piece based on the cursor position
        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            document.body.addEventListener("mousemove", this.dragKnight);
            Animate.clearPreviousMarkers();
        }
        if (e.type === "mouseup") {
            this.mouseDown = false;
            knight.style.cursor = "default";
            this.placeKnight(e);
            document.body.removeEventListener("mousemove", this.dragKnight);
        }
    };
    DraggableKnight.prototype.placeKnight = function (e) {
        var _this = this;
        // remove the knight from the DOM
        // a new knight will be appended to the chess board when a new DraggableKnight object is initialized
        DOM.getKnight().remove();
        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        // const originalStartPoint: HTMLElement =
        //     document.querySelector(".start-location")!;
        var originalStartPoint = DOM.getStartLocationSquare();
        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        var chessBoard = DOM.getChessboard();
        if (!this.isWithinElement(e, chessBoard)) {
            new DraggableKnight(originalStartPoint);
            return;
        }
        var locations = DOM.getAllSquares();
        locations.forEach(function (location) {
            if (_this.isWithinElement(e, location)) {
                if (_this.isValidDropLoc(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight to the specified square
                    new DraggableKnight(location);
                    Animate.updateMessage();
                    Coords.updateInputValue();
                    return;
                }
                else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight to the original start point
                    new DraggableKnight(originalStartPoint);
                    Coords.updateInputValue();
                    return;
                }
            }
        });
    };
    DraggableKnight.prototype.isWithinElement = function (e, el) {
        var boundingRect = el.getBoundingClientRect();
        return (e.clientX >= boundingRect.left &&
            e.clientX <= boundingRect.right &&
            e.clientY >= boundingRect.top &&
            e.clientY <= boundingRect.bottom);
    };
    DraggableKnight.prototype.removeGlobalClassName = function (toRemove, qSelect) {
        var _this = this;
        var squares = document.querySelectorAll(qSelect);
        squares.forEach(function (square) {
            square.classList.remove(toRemove);
            _this.resetLocBG(square);
        });
    };
    DraggableKnight.prototype.isValidDropLoc = function (location) {
        return !location.classList.contains("destination");
    };
    DraggableKnight.prototype.highlightDropLoc = function (square) {
        square.classList.add("valid-drop");
    };
    DraggableKnight.prototype.resetLocBG = function (square) {
        square.classList.remove("valid-drop");
    };
    DraggableKnight.prototype.hoverSquare = function (e) {
        var _this = this;
        var squares = DOM.getAllSquares();
        squares.forEach(function (square) {
            if (_this.isWithinElement(e, square)) {
                if (_this.isValidDropLoc(square)) {
                    _this.highlightDropLoc(square);
                    return;
                }
            }
            _this.resetLocBG(square);
        });
    };
    return DraggableKnight;
}());



/***/ }),

/***/ "./src/createElement.ts":
/*!******************************!*\
  !*** ./src/createElement.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement(type, attributes) {
    var _a;
    if (attributes === void 0) { attributes = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var element = document.createElement(type);
    for (var key in attributes) {
        if (key === "class") {
            var userClasses = attributes.class.split(" ");
            (_a = element.classList).add.apply(_a, userClasses);
        }
        else if (key === "evl" && typeof attributes.evl === "object") {
            for (var eventKey in attributes.evl) {
                element.addEventListener(eventKey, attributes.evl[eventKey]);
            }
        }
        else if (key === "tc") {
            element.textContent = attributes[key];
        }
        else {
            element.setAttribute(key, attributes[key]);
        }
    }
    for (var _b = 0, children_1 = children; _b < children_1.length; _b++) {
        var child = children_1[_b];
        element.appendChild(child);
    }
    return element;
}


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queue: () => (/* binding */ Queue),
/* harmony export */   shortestPath: () => (/* binding */ shortestPath)
/* harmony export */ });
// prettier-ignore
function shortestPath(start, dest) {
    var moves = [
        [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]
    ];
    var queue = new Queue(start);
    var pathMap = {};
    var visited = new Set();
    while (queue.size) {
        var currCoord = queue.dequeue();
        var x = currCoord[0], y = currCoord[1];
        if (x === dest[0] && y === dest[1]) {
            return getPath(pathMap, start, dest);
        }
        for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
            var move = moves_1[_i];
            var dx = move[0], dy = move[1];
            var nx = x + dx;
            var ny = y + dy;
            if (isValid([nx, ny])) {
                if (!visited.has([nx, ny].toString())) {
                    visited.add([nx, ny].toString());
                    queue.enqueue([nx, ny]);
                    pathMap[[nx, ny].toString()] = [x, y];
                }
            }
        }
    }
    return null;
}
function getPath(pathMap, start, dest) {
    var path = [dest];
    var curr = dest.toString();
    while (curr !== start.toString()) {
        path.unshift(pathMap[curr]);
        curr = pathMap[curr].toString();
    }
    return path;
}
function isValid(coord) {
    var x = coord[0], y = coord[1];
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}
var Queue = /** @class */ (function () {
    function Queue(coord) {
        if (coord === void 0) { coord = null; }
        this.items = {};
        this.rear = 0;
        this.front = 0;
        this.size = 0;
        this.init(coord);
    }
    Queue.prototype.init = function (coord) {
        if (coord === void 0) { coord = null; }
        if (coord) {
            this.enqueue(coord);
        }
    };
    Queue.prototype.enqueue = function (coord) {
        this.items[this.rear] = coord;
        this.rear++;
        this.size++;
    };
    Queue.prototype.dequeue = function () {
        if (this.size) {
            var coord = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            this.size--;
            return coord;
        }
    };
    return Queue;
}());



/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Build: () => (/* binding */ Build)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.ts");


var Build = /** @class */ (function () {
    function Build() {
    }
    Build.boardContainer = function () {
        return (
        // prettier-ignore
        (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "board-container" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "empty-space" }), Build.letterCoords(), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "empty-row" }), Build.numberCoords(), Build.chessBoard(), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "empty-space" })));
    };
    Build.letterCoords = function () {
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
        // prettier-ignore
        var letterCoords = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "coordinates letters" });
        for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
            var letter = letters_1[_i];
            letterCoords.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "letter-coord", tc: "".concat(letter) }));
        }
        return letterCoords;
    };
    Build.numberCoords = function () {
        // prettier-ignore
        var numberCoords = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "coordinates numbers" });
        for (var i = 1; i <= 8; i++) {
            numberCoords.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "number-coord", tc: "".concat(i.toString()) }));
        }
        return numberCoords;
    };
    // prettier-ignore
    Build.chessBoard = function () {
        var board = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "chess-board" });
        for (var i = 1; i <= 8; i++) {
            for (var j = 1; j <= 8; j++) {
                if (i % 2 === 0) {
                    if (j % 2 === 0) {
                        board.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "square light", coord: "".concat(j, "-").concat(i) }));
                    }
                    else {
                        board.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "square dark", coord: "".concat(j, "-").concat(i) }));
                    }
                }
                else {
                    if (j % 2 === 0) {
                        board.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "square dark", coord: "".concat(j, "-").concat(i) }));
                    }
                    else {
                        board.appendChild((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "square light", coord: "".concat(j, "-").concat(i) }));
                    }
                }
            }
        }
        var locations = board.children;
        for (var i = 0; i < locations.length; i++) {
            var square = locations.item(i);
            square === null || square === void 0 ? void 0 : square.addEventListener("click", _controller__WEBPACK_IMPORTED_MODULE_0__.DestMarker.setDestination);
        }
        return board;
    };
    // prettier-ignore
    Build.destinationMarker = function () {
        return ((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "destination-marker" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section top" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg top" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section left" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg left" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section right" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg right" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section bottom" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg bottom" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" })));
    };
    // prettier-ignore
    Build.mainForm = function () {
        return ((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", { id: "run-coords" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container start" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "start-coord", tc: "Start:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "start-coord", type: "text", name: "start-coord", spellcheck: "false",
            evl: { "input": _controller__WEBPACK_IMPORTED_MODULE_0__.Coords.validateInput } })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container destination" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "destination-coord", tc: "Destination:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "destination-coord", type: "text", name: "destination-coord", spellcheck: "false",
            evl: { "input": _controller__WEBPACK_IMPORTED_MODULE_0__.Coords.validateInput } })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "previous-path" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { class: "path-desc", tc: "" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { class: "path-coords", tc: "" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", { class: "run-coords", tc: "ANIMATE",
            evl: { "click": _controller__WEBPACK_IMPORTED_MODULE_0__.Animate.moveAlongPath } })));
    };
    return Build;
}());



/***/ }),

/***/ "./src/Images/knight.svg":
/*!*******************************!*\
  !*** ./src/Images/knight.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caee2f05191e9049fe98.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.ts");



_controller__WEBPACK_IMPORTED_MODULE_1__.Load.defaultUI();
var chessBoard = _controller__WEBPACK_IMPORTED_MODULE_1__.DOM.getChessboard();
var startPosition = chessBoard.children[0];
var destPosition = chessBoard.children[63];
new _controller__WEBPACK_IMPORTED_MODULE_1__.DraggableKnight(startPosition);
destPosition.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.destinationMarker());
destPosition.classList.add("destination");
_controller__WEBPACK_IMPORTED_MODULE_1__.DestMarker.animateDestinationMarker();
_controller__WEBPACK_IMPORTED_MODULE_1__.Coords.updateInputValue();
_controller__WEBPACK_IMPORTED_MODULE_1__.Animate.updateMessage();
window.addEventListener("load", function () {
    var boardContainer = document.querySelector(".board-container");
    boardContainer.style.opacity = "1";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNZO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLHNGQUFpQztBQUMzRCw0SEFBNEg7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxP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Oi8vYmFzZTEvLi9zcmMvc3R5bGUvcmVzZXQuY3NzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy92aWV3LnRzIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbmVzdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2IxNzAzNjtcbiAgZm9udC1mYW1pbHk6IFwiT25lc3RcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE3NXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmVmYWUzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ3YjY2O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbmZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuZm9ybSAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDU1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuZm9ybSAucHJldmlvdXMtcGF0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuZm9ybSBidXR0b24ge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmN2I7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTIwbXMgZWFzZS1pbi1vdXQ7XG59XG5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGU2NmY7XG59XG5mb3JtIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzYyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDhmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA4ZnIgMC41ZnI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwMG1zIGxpbmVhcjtcbiAgYm9yZGVyOiA1cHggc29saWQgI2Q0YTQ2OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY29vcmRpbmF0ZXMubGV0dGVycyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNvb3JkaW5hdGVzLm51bWJlcnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkNGE0Njk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS5saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhNDY5O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS5kYXJrLCAuYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmxpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUudmFsaWQtZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNkMzQ7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlIC5tYXJrZXIge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmltZy5rbmlnaHQtcGllY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGxpbmVhcjtcbn1cblxuLm1hcmtlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmRlc3RpbmF0aW9uLW1hcmtlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciA1ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmciA1ZnI7XG4gIGhlaWdodDogNzUlO1xuICB3aWR0aDogNzUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24udG9wIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbi5ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcubGVmdCwgLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnLnJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy50b3AsIC5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy5ib3R0b20ge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFmTTtFQWdCTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBVmM7RUFXZCxnQ0FWZTtFQVdmLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBekNNO0VBMENOLHlCQXBDUztFQXFDVCxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQWJKO0FBZUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBYlI7QUFlUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkExREY7RUEyREUsZ0JBQUE7QUFiWjtBQWlCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkF0RVM7RUF1RVQsZ0JBQUE7RUFDQSw4Q0FBQTtBQWhCUjtBQWtCUTtFQUNJLHlCQUFBO0FBaEJaO0FBbUJRO0VBQ0kseUJBQUE7QUFqQlo7O0FBc0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkE1Rk07RUE2Rk4sYUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbkJKO0FBc0JRO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQXBCWjtBQXVCUTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFyQlo7QUF5Qkk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUF2QlI7QUF5QlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJaO0FBeUJZO0VBQ0kseUJBbklOO0FBNEdWO0FBeUJZO0VBQ0kseUJBcElGO0FBNkdkO0FBMEJZO0VBRUksOENBQUE7QUF6QmhCO0FBNEJZO0VBQ0kseUJBNUlIO0FBa0hiO0FBNkJZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBM0JoQjs7QUFpQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQTlCSjs7QUFpQ0E7RUFDSSxlQUFBO0FBOUJKOztBQWlDQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQTlCSjtBQWdDSTtFQUNJLGFBQUE7QUE5QlI7QUFnQ1E7RUFDSSxxQkFBQTtBQTlCWjtBQWdDUTtFQUNJLHVCQUFBO0FBOUJaO0FBZ0NRO0VBQ0kseUJBQUE7QUE5Qlo7QUFnQ1E7RUFDSSwyQkFBQTtBQTlCWjtBQWlDUTtFQUNJLHlCQXpMRztFQTBMSCxrQkFBQTtFQUNBLGlDQUFBO0FBL0JaO0FBaUNZO0VBRUksUUFBQTtFQUNBLFlBQUE7QUFoQ2hCO0FBa0NZO0VBRUksU0FBQTtFQUNBLFdBQUE7QUFqQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vcmVzZXQuY3NzXFxcIjtcXG4vLyBPbmVzdCBmb250XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T25lc3Q6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuJG1haW4tYmc6ICNmZWZhZTM7XFxuJGxpZ2h0LXNxdWFyZTogJG1haW4tYmc7XFxuJGRhcmstc3F1YXJlOiAjZDRhNDY5O1xcbiR2YWxpZC1kcm9wOiAjMDBjZDM0O1xcbiRtYXJrZXItY29sb3I6ICMwMDAwMDA7XFxuJGFuaW1hdGUtYnV0dG9uOiAjMDBmZjdiO1xcbiRzZWN0aW9uLWJnOiAjOGQ3YjY2O1xcblxcbi8vIGZvbnRzXFxuJG1haW4tZm9udC1jb2xvcjogI2IxNzAzNjtcXG4kbWFpbi1mb250LWZhbWlseTogXFxcIk9uZXN0XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iZztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udC1mYW1pbHk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNzVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogJGxpZ2h0LXNxdWFyZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tYmc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA4cHg7XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgd2lkdGg6IDU1cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtc3F1YXJlO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByZXZpb3VzLXBhdGgge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhbmltYXRlLWJ1dHRvbjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEyMG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhbmltYXRlLWJ1dHRvbiwgNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhbmltYXRlLWJ1dHRvbiwgMTApO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDcwMHB4O1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJnO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDhmciAwLjVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA4ZnIgMC41ZnI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwMG1zIGxpbmVhcjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgJGRhcmstc3F1YXJlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC5jb29yZGluYXRlcyB7XFxuICAgICAgICAmLmxldHRlcnMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYubnVtYmVycyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jaGVzcy1ib2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkZGFyay1zcXVhcmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICAgICAuc3F1YXJlIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICAgICYubGlnaHQge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtc3F1YXJlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmLmRhcmsge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1zcXVhcmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYuZGFyayxcXG4gICAgICAgICAgICAmLmxpZ2h0IHtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi52YWxpZC1kcm9wIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZhbGlkLWRyb3A7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5tYXJrZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmltZy5rbmlnaHQtcGllY2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGxpbmVhcjtcXG59XFxuXFxuLm1hcmtlciB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmRlc3RpbmF0aW9uLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmciA1ZnI7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFxuICAgIC5zZWN0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmLnRvcCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5ib3R0b20ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5sZWZ0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5yaWdodCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxlZyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hcmtlci1jb2xvcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgICAgICYubGVmdCxcXG4gICAgICAgICAgICAmLnJpZ2h0IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJi50b3AsXFxuICAgICAgICAgICAgJi5ib3R0b20ge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQga25pZ2h0IGZyb20gXCIuL0ltYWdlcy9rbmlnaHQuc3ZnXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgc2hvcnRlc3RQYXRoIH0gZnJvbSBcIi4vbW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIERPTSB7XG4gICAgc3RhdGljIGdldEtuaWdodCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtuaWdodC1waWVjZVwiKSE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENoZXNzYm9hcmQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVzcy1ib2FyZFwiKSE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldE1hcmtlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hcmtlclwiKSE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbE1hcmtlcnMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXJrZXJcIikhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGFydExvY2F0aW9uU3F1YXJlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtbG9jYXRpb25cIikhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXN0TG9jYXRpb25TcXVhcmUoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzdGluYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEZpcnN0U3F1YXJlKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3F1YXJlXCIpITtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsU3F1YXJlcygpOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNxdWFyZVwiKSE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXJ0Q29vcmRJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNzdGFydC1jb29yZFwiKSE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlc3RDb29yZElucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2Rlc3RpbmF0aW9uLWNvb3JkXCIpITtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0R29CdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5ydW4tY29vcmRzXCIpITtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGF0aERlc2MoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXRoLWRlc2NcIikhO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXRoQ29vcmRzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGF0aC1jb29yZHNcIikhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWQge1xuICAgIHN0YXRpYyBkZWZhdWx0VUkoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpITtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLm1haW5Gb3JtKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmJvYXJkQ29udGFpbmVyKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGUge1xuICAgIHN0YXRpYyBtb3ZlQWxvbmdQYXRoKGU6IGFueSk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRDb29yZHM6IG51bWJlcltdID0gQ29vcmRzLmdldFN0YXJ0KCk7XG4gICAgICAgIGNvbnN0IGRlc3RDb29yZHM6IG51bWJlcltdID0gQ29vcmRzLmdldERlc3QoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0Q29vcmRzIHx8ICFkZXN0Q29vcmRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXRoOiBudW1iZXJbXVtdID0gc2hvcnRlc3RQYXRoKHN0YXJ0Q29vcmRzLCBkZXN0Q29vcmRzKTtcbiAgICAgICAgY29uc3QgZENvb3JkczogbnVtYmVyW11bXSB8IGFueSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwYXRoW2ldWzBdO1xuICAgICAgICAgICAgY29uc3QgeSA9IHBhdGhbaV1bMV07XG5cbiAgICAgICAgICAgIGNvbnN0IG54ID0gcGF0aFtpICsgMV1bMF07XG4gICAgICAgICAgICBjb25zdCBueSA9IHBhdGhbaSArIDFdWzFdO1xuXG4gICAgICAgICAgICBjb25zdCBkeCA9IG54IC0geDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gbnkgLSB5O1xuICAgICAgICAgICAgZENvb3Jkcy5wdXNoKFtkeCwgZHldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEFuaW1hdGUudHJhbnNpdGlvbkRDb29yZHMoZENvb3JkcywgcGF0aCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRyYW5zaXRpb25EQ29vcmRzKFxuICAgICAgICBkQ29vcmRzOiBudW1iZXJbXVtdIHwgYW55LFxuICAgICAgICBwYXRoOiBudW1iZXJbXVtdLFxuICAgICAgICBpOiBudW1iZXIgPSAxLFxuICAgICk6IGFueSB7XG4gICAgICAgIGlmICghZENvb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIENvb3Jkcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBmaXJzdCBpdGVyYXRpb24sIGFwcGVuZCBhIHN0YXJ0IG1hcmtlciB0byB0aGUga25pZ2h0IHBvc2l0aW9uIGJlZm9yZSBtb3ZlbWVudFxuICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbjogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gQW5pbWF0ZS5nZXRLbmlnaHRQb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBkQ29vcmRzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGtuaWdodDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtuaWdodC1waWVjZVwiKSE7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHJhbnNpdGlvbkR1cmF0aW9uID0gQW5pbWF0ZS5nZXRLbmlnaHRUcmFuc2l0aW9uVGltZSgpO1xuICAgICAgICBjb25zdCBzcXVhcmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcXVhcmVcIikhO1xuICAgICAgICBjb25zdCBzcXVhcmVTaXplID0gc3F1YXJlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgY29uc3QgeFRyYW5zbGF0ZSA9IGR4ICogc3F1YXJlU2l6ZTtcbiAgICAgICAgY29uc3QgeVRyYW5zbGF0ZSA9IGR5ICogc3F1YXJlU2l6ZTtcblxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIHRyYXZlcnNlIHRoZSB4IGF4aXNcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQW5pbWF0ZS5tb2RpZnlUcmFuc2l0aW9uRHVyYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAga25pZ2h0LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3hUcmFuc2xhdGV9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIEFuaW1hdGUuZ2V0S25pZ2h0VHJhbnNpdGlvblRpbWUoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyB0cmF2ZXJzZSB0aGUgeSBheGlzXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFuaW1hdGUubW9kaWZ5VHJhbnNpdGlvbkR1cmF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtuaWdodCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAga25pZ2h0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4VHJhbnNsYXRlfXB4LCAke3lUcmFuc2xhdGV9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIEFuaW1hdGUuZ2V0S25pZ2h0VHJhbnNpdGlvblRpbWUoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyByZXNldCB0aGUgcG9zaXRpb24gYnkgcmVtb3ZpbmcgYW5kIGFkZGluZyBhIG5ldyBrbmlnaHRcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSB0aGUgYWJzb2x1dGUgcG9zaXRpb24gbmV2ZXIgdXBkYXRlcyBmcm9tIHRoZSBvcmlnaW5hbCBzdGFydCBwb3NpdGlvblxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0tuaWdodFBvc2l0aW9uID0gQW5pbWF0ZS5nZXRLbmlnaHRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIGtuaWdodC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIC8vIGZpcnN0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24uYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJtYXJrZXJcIiwgdGM6IFwic3RhcnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBsYXN0IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgIGlmICghZENvb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3S25pZ2h0UG9zaXRpb24ucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdLbmlnaHRQb3NpdGlvbi5maXJzdEVsZW1lbnRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3S25pZ2h0UG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0tuaWdodFBvc2l0aW9uLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibWFya2VyXCIsIHRjOiBgJHtpfWAgfSksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChuZXdLbmlnaHRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgQW5pbWF0ZS50cmFuc2l0aW9uRENvb3JkcyhkQ29vcmRzLCBwYXRoLCBpICsgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJQcmV2aW91c01hcmtlcnMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcmtlcnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFya2VyXCIpITtcbiAgICAgICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8ga2VlcCB0aGUgbW92ZW1lbnQgc3BlZWQgdGhlIHNhbWUgd2hlbiBtb3ZpbmcgMSBzcXVhcmUgb3IgMiBzcXVhcmVzXG4gICAgc3RhdGljIG1vZGlmeVRyYW5zaXRpb25EdXJhdGlvbihcbiAgICAgICAgZENvb3JkOiBudW1iZXIsXG4gICAgICAgIG9yaWdpbmFsRHVyYXRpb246IG51bWJlcixcbiAgICAgICAga25pZ2h0OiBIVE1MRWxlbWVudCxcbiAgICApOiB2b2lkIHtcbiAgICAgICAga25pZ2h0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke1xuICAgICAgICAgICAgb3JpZ2luYWxEdXJhdGlvbiAqIE1hdGguYWJzKGRDb29yZClcbiAgICAgICAgfW1zYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0S25pZ2h0VHJhbnNpdGlvblRpbWUoKTogbnVtYmVyIHwgYW55IHtcbiAgICAgICAgY29uc3Qga25pZ2h0ID0gRE9NLmdldEtuaWdodCgpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb246IHN0cmluZyA9XG4gICAgICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShrbmlnaHQpLnRyYW5zaXRpb25EdXJhdGlvbjtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICogMTAwMDtcbiAgICB9XG5cbiAgICAvLyBrbmlnaHQgaXMgYWJzb2x1dGVseSBwb3NpdGlvbmVkLiAga25pZ2h0LnBhcmVudEVsZW1lbnQgd29uJ3Qgd29yayB0byBnZXQgdGhlIG5ldyBwb3NpdGlvblxuICAgIHN0YXRpYyBnZXRLbmlnaHRQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3Qga25pZ2h0ID0gRE9NLmdldEtuaWdodCgpO1xuICAgICAgICBjb25zdCBrUG9zaXRpb24gPSBrbmlnaHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IERPTS5nZXRBbGxTcXVhcmVzKCk7XG4gICAgICAgIGxldCB0YXJnZXRTcXVhcmU6IEhUTUxFbGVtZW50IHwgYW55O1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc1Bvc2l0aW9uID0gc3F1YXJlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGtQb3NpdGlvbi50b3AgPiBzUG9zaXRpb24udG9wICYmXG4gICAgICAgICAgICAgICAga1Bvc2l0aW9uLmJvdHRvbSA8IHNQb3NpdGlvbi5ib3R0b20gJiZcbiAgICAgICAgICAgICAgICBrUG9zaXRpb24ubGVmdCA+IHNQb3NpdGlvbi5sZWZ0ICYmXG4gICAgICAgICAgICAgICAga1Bvc2l0aW9uLnJpZ2h0IDwgc1Bvc2l0aW9uLnJpZ2h0XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXRTcXVhcmU7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZU1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBDb29yZHMuZ2V0U2hvcnRlc3RQYXRoKCk7XG4gICAgICAgIGlmICghcGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aERlc2MgPSBET00uZ2V0UGF0aERlc2MoKTtcbiAgICAgICAgY29uc3QgcGF0aENvb3JkcyA9IERPTS5nZXRQYXRoQ29vcmRzKCk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gcGF0aC5sZW5ndGggLSAxO1xuXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBkZXNjVGV4dCA9IFxuICAgICAgICAgICAgYFRoZSBzaG9ydGVzdCBwYXRoIGZyb20gJHtDb29yZHMuZ2V0TGV0dGVyQ29vcmRzKHBhdGhbMF0pfSB0byAke0Nvb3Jkcy5nZXRMZXR0ZXJDb29yZHMocGF0aFtwYXRoLmxlbmd0aCAtIDFdKX0gaXMgJHtzdGVwc30gc3RlcHNgO1xuXG4gICAgICAgIGxldCBjb29yZFRleHQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlckNvb3JkID0gQ29vcmRzLmdldExldHRlckNvb3JkcyhwYXRoW2ldKTtcbiAgICAgICAgICAgIGlmIChpID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBjb29yZFRleHQgKz0gYCR7bGV0dGVyQ29vcmR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29vcmRUZXh0ICs9IGAke2xldHRlckNvb3JkfSA+IGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXRoRGVzYy50ZXh0Q29udGVudCA9IGRlc2NUZXh0O1xuICAgICAgICBwYXRoQ29vcmRzLnRleHRDb250ZW50ID0gY29vcmRUZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb3JkcyB7XG4gICAgc3RhdGljIHVwZGF0ZUlucHV0VmFsdWUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBET00uZ2V0U3RhcnRDb29yZElucHV0KCk7XG4gICAgICAgIGNvbnN0IGRlc3RJbnB1dCA9IERPTS5nZXREZXN0Q29vcmRJbnB1dCgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSBDb29yZHMuZ2V0U3RhcnRTdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGVzdDogc3RyaW5nIHwgbnVsbCA9IENvb3Jkcy5nZXREZXN0U3RyaW5nKCk7XG5cbiAgICAgICAgc3RhcnRJbnB1dC52YWx1ZSA9IHN0YXJ0O1xuICAgICAgICBkZXN0ID8gKGRlc3RJbnB1dC52YWx1ZSA9IGRlc3QpIDogKGRlc3RJbnB1dC52YWx1ZSA9IFwiXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVMb2NhdGlvbkZyb21JbnB1dChcbiAgICAgICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgICAgIGlucHV0VmFsdWU6IHN0cmluZyxcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IERPTS5nZXRBbGxTcXVhcmVzKCk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmZpcnN0RWxlbWVudENoaWxkISk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb29yZE51bXM6IHN0cmluZztcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtudWxsLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICBjb29yZE51bXMgPSBgJHtsZXR0ZXJzLmluZGV4T2YoaW5wdXRWYWx1ZVswXSl9LSR7aW5wdXRWYWx1ZVsxXX1gO1xuXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmdldEF0dHJpYnV0ZShcImNvb3JkXCIpID09PSBjb29yZE51bXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcInN0YXJ0LWxvY2F0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChzcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBcImRlc3RpbmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIERlc3RNYXJrZXIuc2V0RGVzdGluYXRpb24oZSwgc3F1YXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnB1dElzVmFsaWQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCAmJiB2YWx1ZS5sZW5ndGggPD0gMjtcbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsaWRhdGVJbnB1dChlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBmaXJzdExldHRlcjogc3RyaW5nID0gaW5wdXRGaWVsZC52YWx1ZVswXVxuICAgICAgICAgICAgPyBpbnB1dEZpZWxkLnZhbHVlWzBdLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgY29uc3Qgc2Vjb25kTGV0dGVyOiBzdHJpbmcgPSBpbnB1dEZpZWxkLnZhbHVlWzFdXG4gICAgICAgICAgICA/IGlucHV0RmllbGQudmFsdWVbMV1cbiAgICAgICAgICAgIDogXCJcIjtcblxuICAgICAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIl07XG4gICAgICAgIGlmICghbGV0dGVycy5pbmNsdWRlcyhmaXJzdExldHRlcikpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbnVtYmVycyA9IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCJdO1xuICAgICAgICBpZiAoIW51bWJlcnMuaW5jbHVkZXMoc2Vjb25kTGV0dGVyKSkge1xuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IGZpcnN0TGV0dGVyO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0RmllbGQudmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IGlucHV0RmllbGQudmFsdWUuc2xpY2UoMCwgMik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydElucHV0ID0gRE9NLmdldFN0YXJ0Q29vcmRJbnB1dCgpO1xuICAgICAgICBjb25zdCBkZXN0SW5wdXQgPSBET00uZ2V0RGVzdENvb3JkSW5wdXQoKTtcblxuICAgICAgICBpZiAoaW5wdXRGaWVsZCA9PT0gc3RhcnRJbnB1dCAmJiBlLnRhcmdldC52YWx1ZSA9PT0gZGVzdElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkZXN0SW5wdXQgJiYgZS50YXJnZXQudmFsdWUgPT09IHN0YXJ0SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29vcmRzLmlucHV0SXNWYWxpZChzdGFydElucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgQ29vcmRzLnVwZGF0ZUxvY2F0aW9uRnJvbUlucHV0KFwic3RhcnQtbG9jYXRpb25cIiwgc3RhcnRJbnB1dC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29vcmRzLmlucHV0SXNWYWxpZChkZXN0SW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICBDb29yZHMudXBkYXRlTG9jYXRpb25Gcm9tSW5wdXQoXCJkZXN0aW5hdGlvblwiLCBkZXN0SW5wdXQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgQ29vcmRzLmlucHV0SXNWYWxpZChzdGFydElucHV0LnZhbHVlKSAmJlxuICAgICAgICAgICAgQ29vcmRzLmlucHV0SXNWYWxpZChkZXN0SW5wdXQudmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHNob3J0ZXN0UGF0aChDb29yZHMuZ2V0U3RhcnQoKSwgQ29vcmRzLmdldERlc3QoKSk7XG4gICAgICAgICAgICBBbmltYXRlLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGFydCgpOiBudW1iZXJbXSB8IGFueSB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0Q29vcmRzKFwic3RhcnQtbG9jYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXJ0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IENvb3Jkcy5nZXRTdGFydCgpO1xuICAgICAgICByZXR1cm4gQ29vcmRzLmdldExldHRlckNvb3Jkcyhjb29yZHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXN0KCk6IG51bWJlcltdIHwgYW55IHtcbiAgICAgICAgcmV0dXJuIENvb3Jkcy5nZXRDb29yZHMoXCJkZXN0aW5hdGlvblwiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RGVzdFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBDb29yZHMuZ2V0RGVzdCgpO1xuICAgICAgICByZXR1cm4gQ29vcmRzLmdldExldHRlckNvb3Jkcyhjb29yZHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDb29yZHModGFyZ2V0Q2xhc3M6IHN0cmluZyk6IG51bWJlcltdIHwgYW55IHtcbiAgICAgICAgY29uc3Qgc3F1YXJlcyA9IERPTS5nZXRBbGxTcXVhcmVzKCk7XG5cbiAgICAgICAgbGV0IGNvb3JkczogbnVtYmVyW10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKHRhcmdldENsYXNzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkQXR0cjogc3RyaW5nID0gc3F1YXJlLmdldEF0dHJpYnV0ZShcImNvb3JkXCIpITtcbiAgICAgICAgICAgICAgICBjb29yZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIE51bWJlcihjb29yZEF0dHIuc3BsaXQoXCItXCIpWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGNvb3JkQXR0ci5zcGxpdChcIi1cIilbMV0pLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldExldHRlckNvb3Jkcyhjb29yZHM6IG51bWJlcltdKTogc3RyaW5nIHwgYW55IHtcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtudWxsLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xldHRlcnNbY29vcmRzWzBdXX0ke2Nvb3Jkc1sxXX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTaG9ydGVzdFBhdGgoKTogbnVtYmVyW11bXSB8IGFueSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29vcmQgPSBDb29yZHMuZ2V0U3RhcnQoKTtcbiAgICAgICAgY29uc3QgZGVzdENvb3JkID0gQ29vcmRzLmdldERlc3QoKTtcblxuICAgICAgICBpZiAoIXN0YXJ0Q29vcmQgfHwgIWRlc3RDb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hvcnRlc3RQYXRoKHN0YXJ0Q29vcmQsIGRlc3RDb29yZCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVzdE1hcmtlciB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgc3RhdGljIGFuaW1hdGVEZXN0aW5hdGlvbk1hcmtlcigpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZ1wiKSE7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NOYW1lID09PSBcImxlZyB0b3BcIiB8fCBub2RlLmNsYXNzTmFtZSA9PT0gXCJsZWcgYm90dG9tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZXN0aW5hdGlvbihcbiAgICAgICAgZTogYW55LFxuICAgICAgICBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsLFxuICAgICk6IHZvaWQge1xuICAgICAgICBBbmltYXRlLmNsZWFyUHJldmlvdXNNYXJrZXJzKCk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gRE9NLmdldEFsbFNxdWFyZXMoKTtcblxuICAgICAgICBsb2NhdGlvbnMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcImtuaWdodC1sb2NhdGlvblwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVzdGluYXRpb25cIikpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVDaGlsZChzcXVhcmUuZmlyc3RDaGlsZCEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHBhcmVudEVsZW1lbnQgPyBwYXJlbnRFbGVtZW50IDogZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAvLyBkbyBub3QgYWxsb3cgcGxhY2luZyB0aGUgbWFya2VyIG9uIHRvcCBvZiB0aGUgc3RhcnQgcG9pbnQgd2hlcmUgdGhlIGtuaWdodCBwaWVjZSBpcyBsb2NhdGVkXG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzdGFydC1sb2NhdGlvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdGluYXRpb24uY2xhc3NMaXN0LmFkZChcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChCdWlsZC5kZXN0aW5hdGlvbk1hcmtlcigpKTtcbiAgICAgICAgRGVzdE1hcmtlci5hbmltYXRlRGVzdGluYXRpb25NYXJrZXIoKTtcbiAgICAgICAgQ29vcmRzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgICAgQW5pbWF0ZS51cGRhdGVNZXNzYWdlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlS25pZ2h0IHtcbiAgICBtb3VzZURvd246IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRFbGVtZW50OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdChwYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpbml0KHBhcmVudEVsZW1lbnQ6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQgPVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlc3MtYm9hcmRcIikhLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga25pZ2h0SW1hZ2UgPSBjcmVhdGUoXCJpbWdcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwia25pZ2h0LXBpZWNlXCIsXG4gICAgICAgICAgICBzcmM6IGtuaWdodCxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogXCJmYWxzZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBrbmlnaHRJbWFnZS5vbm1vdXNldXAgPSAoZSkgPT4gdGhpcy5zZXRDbGljayhlKTtcbiAgICAgICAga25pZ2h0SW1hZ2Uub25tb3VzZWRvd24gPSAoZSkgPT4gdGhpcy5zZXRDbGljayhlKTtcbiAgICAgICAga25pZ2h0SW1hZ2Uub25jbGljayA9ICgpID0+IEFuaW1hdGUuY2xlYXJQcmV2aW91c01hcmtlcnMoKTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUgaXMgb25seSBvbmUgbG9jYXRpb24gd2l0aCB0aGUgc3RhcnQgbG9jYXRpb24gY2xhc3NcbiAgICAgICAgdGhpcy5yZW1vdmVHbG9iYWxDbGFzc05hbWUoXCJzdGFydC1sb2NhdGlvblwiLCBcIi5zcXVhcmVcIik7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN0YXJ0LWxvY2F0aW9uXCIpO1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGtuaWdodEltYWdlKTtcbiAgICB9XG5cbiAgICBzZXRDbGljayhlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qga25pZ2h0ID0gRE9NLmdldEtuaWdodCgpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgbW91c2VEb3duIHByb3BlcnR5IGlmIG1vdXNlZG93biBvciBtb3VzZXVwIG9uIGtuaWdodFxuICAgICAgICAvLyBkcmFnS25pZ2h0IGNoYW5nZXMgbG9jYXRpb24gb2YgdGhlIGtuaWdodCBwaWVjZSBiYXNlZCBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uXG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuICAgICAgICAgICAga25pZ2h0LnN0eWxlLmN1cnNvciA9IFwiZ3JhYlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuZHJhZ0tuaWdodCk7XG4gICAgICAgICAgICBBbmltYXRlLmNsZWFyUHJldmlvdXNNYXJrZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIGtuaWdodC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgIHRoaXMucGxhY2VLbmlnaHQoZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5kcmFnS25pZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYWdLbmlnaHQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGxldCBrbmlnaHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rbmlnaHQtcGllY2VcIikhO1xuICAgICAgICBjb25zdCBjaGVzc0JvYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlc3MtYm9hcmRcIikhO1xuXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIGNoZXNzQm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlc3MgcGllY2UgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG4gICAgICAgICAgICAgICAga25pZ2h0LnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WSAtIGtuaWdodC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcbiAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WCAtIGtuaWdodC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJTcXVhcmUoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNoZXNzIHBpZWNlIGhhcyB0cmF2ZWxlZCBvdXQgb2YgYm91bmRzIG9mIHRoZSBjaGVzcyBib2FyZFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAga25pZ2h0LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VLbmlnaHQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcGxhY2VLbmlnaHQoZTogYW55KSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUga25pZ2h0IGZyb20gdGhlIERPTVxuICAgICAgICAvLyBhIG5ldyBrbmlnaHQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgY2hlc3MgYm9hcmQgd2hlbiBhIG5ldyBEcmFnZ2FibGVLbmlnaHQgb2JqZWN0IGlzIGluaXRpYWxpemVkXG4gICAgICAgIERPTS5nZXRLbmlnaHQoKS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBvcmlnaW5hbFN0YXJ0UG9pbnQgaXMgd2hlcmUgdGhlIGtuaWdodCB3aWxsIGJlIGFwcGVuZGVkIGlmIGl0cyBub3QgaW4gYSB2YWxpZCBzcG90IHVwb24gcGxhY2VtZW50XG4gICAgICAgIC8vIGNvbnN0IG9yaWdpbmFsU3RhcnRQb2ludDogSFRNTEVsZW1lbnQgPVxuICAgICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1sb2NhdGlvblwiKSE7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU3RhcnRQb2ludCA9IERPTS5nZXRTdGFydExvY2F0aW9uU3F1YXJlKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBrbmlnaHQgaGFzIHRyYXZlbGVkIG91dCBvZiBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG4gICAgICAgIC8vIGlmIGl0IGlzIG91dCBvZiBib3VuZHMsIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIG9yaWdpbmFsU3RhcnRQb2ludFxuICAgICAgICBjb25zdCBjaGVzc0JvYXJkID0gRE9NLmdldENoZXNzYm9hcmQoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzV2l0aGluRWxlbWVudChlLCBjaGVzc0JvYXJkKSkge1xuICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChvcmlnaW5hbFN0YXJ0UG9pbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gRE9NLmdldEFsbFNxdWFyZXMoKTtcbiAgICAgICAgbG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1dpdGhpbkVsZW1lbnQoZSwgbG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZERyb3BMb2MobG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGtuaWdodCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgc3BlY2lmaWVkIHNxdWFyZSBBTkQgaXMgb24gYSB2YWxpZCBkcm9wIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIHNwZWNpZmllZCBzcXVhcmVcbiAgICAgICAgICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIEFuaW1hdGUudXBkYXRlTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICBDb29yZHMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ga25pZ2h0IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBzcGVjaWZpZWQgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpcyBOT1QgaW4gYSB2YWxpZCBsb2NhdGlvbiAoY2FuJ3QgZHJvcCBvbiB0aGUgZGVzdGluYXRpb24gcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIG9yaWdpbmFsIHN0YXJ0IHBvaW50XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQob3JpZ2luYWxTdGFydFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgQ29vcmRzLnVwZGF0ZUlucHV0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNXaXRoaW5FbGVtZW50KGU6IGFueSwgZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZS5jbGllbnRYID49IGJvdW5kaW5nUmVjdC5sZWZ0ICYmXG4gICAgICAgICAgICBlLmNsaWVudFggPD0gYm91bmRpbmdSZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICBlLmNsaWVudFkgPj0gYm91bmRpbmdSZWN0LnRvcCAmJlxuICAgICAgICAgICAgZS5jbGllbnRZIDw9IGJvdW5kaW5nUmVjdC5ib3R0b21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVHbG9iYWxDbGFzc05hbWUodG9SZW1vdmU6IHN0cmluZywgcVNlbGVjdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocVNlbGVjdCk7XG5cbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKHRvUmVtb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRMb2NCRyhzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRHJvcExvYyhsb2NhdGlvbjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFsb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXN0aW5hdGlvblwiKTtcbiAgICB9XG5cbiAgICBoaWdobGlnaHREcm9wTG9jKHNxdWFyZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcm9wXCIpO1xuICAgIH1cblxuICAgIHJlc2V0TG9jQkcoc3F1YXJlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyb3BcIik7XG4gICAgfVxuXG4gICAgaG92ZXJTcXVhcmUoZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBET00uZ2V0QWxsU3F1YXJlcygpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIHNxdWFyZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRHJvcExvYyhzcXVhcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RHJvcExvYyhzcXVhcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0TG9jQkcoc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW50ZXJmYWNlIEVWTCB7XG4gICAgW2tleTogc3RyaW5nXTogRXZlbnRMaXN0ZW5lcjtcbn1cblxuaW50ZXJmYWNlIEF0dHJpYnV0ZXMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IEVWTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuOiBBcnJheTxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDbGFzc2VzOiBzdHJpbmdbXSA9IChhdHRyaWJ1dGVzLmNsYXNzIGFzIHN0cmluZykuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnVzZXJDbGFzc2VzKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiZXZsXCIgJiYgdHlwZW9mIGF0dHJpYnV0ZXMuZXZsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50S2V5IGluIGF0dHJpYnV0ZXMuZXZsKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50S2V5LCBhdHRyaWJ1dGVzLmV2bFtldmVudEtleV0gYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInRjXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCIvLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVzdFBhdGgoc3RhcnQ6IG51bWJlcltdLCBkZXN0OiBudW1iZXJbXSk6IG51bWJlcltdW10gfCBhbnkge1xuICAgIGNvbnN0IG1vdmVzOiBudW1iZXJbXVtdID0gW1xuICAgICAgICBbMSwgMl0sIFsxLCAtMl0sIFstMSwgMl0sIFstMSwgLTJdLCBbMiwgMV0sIFsyLCAtMV0sIFstMiwgMV0sIFstMiwgLTFdXG4gICAgXVxuXG4gICAgY29uc3QgcXVldWUgPSBuZXcgUXVldWUoc3RhcnQpO1xuICAgIGNvbnN0IHBhdGhNYXA6IGFueSA9IHt9XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcblxuICAgIHdoaWxlIChxdWV1ZS5zaXplKSB7XG4gICAgICAgIGNvbnN0IGN1cnJDb29yZCA9IHF1ZXVlLmRlcXVldWUoKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gY3VyckNvb3JkO1xuXG4gICAgICAgIGlmICh4ID09PSBkZXN0WzBdICYmIHkgPT09IGRlc3RbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRQYXRoKHBhdGhNYXAsIHN0YXJ0LCBkZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgbW92ZSBvZiBtb3Zlcykge1xuICAgICAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBtb3ZlO1xuICAgICAgICAgICAgY29uc3QgbnggPSB4ICsgZHg7XG4gICAgICAgICAgICBjb25zdCBueSA9IHkgKyBkeTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzVmFsaWQoW254LCBueV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhbbngsIG55XS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChbbngsIG55XS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShbbngsIG55XSk7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhNYXBbW254LCBueV0udG9TdHJpbmcoKV0gPSBbeCwgeV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgocGF0aE1hcDogYW55LCBzdGFydDogbnVtYmVyW10sIGRlc3Q6IG51bWJlcltdKTogbnVtYmVyW11bXSB7XG4gICAgY29uc3QgcGF0aCA9IFtkZXN0XTtcbiAgICBsZXQgY3VyciA9IGRlc3QudG9TdHJpbmcoKTtcblxuICAgIHdoaWxlIChjdXJyICE9PSBzdGFydC50b1N0cmluZygpKSB7XG4gICAgICAgIHBhdGgudW5zaGlmdChwYXRoTWFwW2N1cnJdKTtcbiAgICAgICAgY3VyciA9IHBhdGhNYXBbY3Vycl0udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChjb29yZDogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZDtcbiAgICByZXR1cm4geCA+PSAxICYmIHggPD0gOCAmJiB5ID49IDEgJiYgeSA8PSA4O1xufVxuXG5leHBvcnQgY2xhc3MgUXVldWUge1xuICAgIGl0ZW1zOiBbc3RyaW5nOiBudW1iZXJbXV0gfCBhbnk7XG4gICAgcmVhcjogbnVtYmVyO1xuICAgIGZyb250OiBudW1iZXI7XG4gICAgc2l6ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29vcmQ6IG51bWJlcltdIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLnJlYXIgPSAwO1xuICAgICAgICB0aGlzLmZyb250ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5pbml0KGNvb3JkKTtcbiAgICB9XG5cbiAgICBpbml0KGNvb3JkOiBudW1iZXJbXSB8IG51bGwgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmIChjb29yZCkge1xuICAgICAgICAgICAgdGhpcy5lbnF1ZXVlKGNvb3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVucXVldWUoY29vcmQ6IG51bWJlcltdIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zW3RoaXMucmVhcl0gPSBjb29yZDtcbiAgICAgICAgdGhpcy5yZWFyKys7XG4gICAgICAgIHRoaXMuc2l6ZSsrO1xuICAgIH1cblxuICAgIGRlcXVldWUoKTogbnVtYmVyW10gfCBhbnkge1xuICAgICAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZCA9IHRoaXMuaXRlbXNbdGhpcy5mcm9udF07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pdGVtc1t0aGlzLmZyb250XTtcbiAgICAgICAgICAgIHRoaXMuZnJvbnQrKztcbiAgICAgICAgICAgIHRoaXMuc2l6ZS0tO1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGVzdE1hcmtlciwgQ29vcmRzLCBBbmltYXRlIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBjcmVhdGUgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBCdWlsZCB7XG4gICAgc3RhdGljIGJvYXJkQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJlbXB0eS1zcGFjZVwiIH0pLFxuICAgICAgICAgICAgICAgIEJ1aWxkLmxldHRlckNvb3JkcygpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImVtcHR5LXJvd1wiIH0pLFxuICAgICAgICAgICAgICAgIEJ1aWxkLm51bWJlckNvb3JkcygpLFxuICAgICAgICAgICAgICAgIEJ1aWxkLmNoZXNzQm9hcmQoKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJlbXB0eS1zcGFjZVwiIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxldHRlckNvb3JkcygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGxldHRlcnM6IHN0cmluZ1tdID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIl07XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBsZXR0ZXJDb29yZHM6IEhUTUxFbGVtZW50ID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29vcmRpbmF0ZXMgbGV0dGVyc1wiIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBsZXR0ZXJzKSB7XG4gICAgICAgICAgICBsZXR0ZXJDb29yZHMuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibGV0dGVyLWNvb3JkXCIsIHRjOiBgJHtsZXR0ZXJ9YCB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGV0dGVyQ29vcmRzO1xuICAgIH1cblxuICAgIHN0YXRpYyBudW1iZXJDb29yZHMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgbnVtYmVyQ29vcmRzOiBIVE1MRWxlbWVudCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNvb3JkaW5hdGVzIG51bWJlcnNcIiB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIG51bWJlckNvb3Jkcy5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJudW1iZXItY29vcmRcIiwgdGM6IGAke2kudG9TdHJpbmcoKX1gIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJDb29yZHM7XG4gICAgfVxuXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgc3RhdGljIGNoZXNzQm9hcmQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBib2FyZDogSFRNTEVsZW1lbnQgPSBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJjaGVzcy1ib2FyZFwiIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gODsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGxpZ2h0XCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgZGFya1wiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgZGFya1wiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGxpZ2h0XCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zOiBIVE1MQ29sbGVjdGlvbiA9IGJvYXJkLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gbG9jYXRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgICBzcXVhcmU/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBEZXN0TWFya2VyLnNldERlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgZGVzdGluYXRpb25NYXJrZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGVzdGluYXRpb24tbWFya2VyXCIgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiB0b3BcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgdG9wXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uIGxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgbGVmdFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiByaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImxlZyByaWdodFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiBib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgYm90dG9tXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBtYWluRm9ybSgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjcmVhdGUoXCJmb3JtXCIsIHsgaWQ6IFwicnVuLWNvb3Jkc1wiIH0sXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtY29udGFpbmVyIHN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwibGFiZWxcIiwgeyBmb3I6IFwic3RhcnQtY29vcmRcIiwgdGM6IFwiU3RhcnQ6XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IFwic3RhcnQtY29vcmRcIiwgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwic3RhcnQtY29vcmRcIiwgc3BlbGxjaGVjazogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZsOiB7IFwiaW5wdXRcIjogQ29vcmRzLnZhbGlkYXRlSW5wdXQgfSB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtY29udGFpbmVyIGRlc3RpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwibGFiZWxcIiwgeyBmb3I6IFwiZGVzdGluYXRpb24tY29vcmRcIiwgdGM6IFwiRGVzdGluYXRpb246XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IFwiZGVzdGluYXRpb24tY29vcmRcIiwgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZGVzdGluYXRpb24tY29vcmRcIiwgc3BlbGxjaGVjazogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZsOiB7IFwiaW5wdXRcIjogQ29vcmRzLnZhbGlkYXRlSW5wdXQgfSB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwicHJldmlvdXMtcGF0aFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcInNwYW5cIiwgeyBjbGFzczogXCJwYXRoLWRlc2NcIiwgdGM6IFwiXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcInNwYW5cIiwgeyBjbGFzczogXCJwYXRoLWNvb3Jkc1wiLCB0YzogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImJ1dHRvblwiLCB7IGNsYXNzOiBcInJ1bi1jb29yZHNcIiwgdGM6IFwiQU5JTUFURVwiLFxuICAgICAgICAgICAgICAgICAgICBldmw6IHsgXCJjbGlja1wiOiBBbmltYXRlLm1vdmVBbG9uZ1BhdGggfX0pLFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9pbmRleC5zY3NzXCI7XG5pbXBvcnQge1xuICAgIERPTSxcbiAgICBMb2FkLFxuICAgIERyYWdnYWJsZUtuaWdodCxcbiAgICBDb29yZHMsXG4gICAgRGVzdE1hcmtlcixcbiAgICBBbmltYXRlLFxufSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gXCIuL3ZpZXdcIjtcblxuTG9hZC5kZWZhdWx0VUkoKTtcblxuY29uc3QgY2hlc3NCb2FyZCA9IERPTS5nZXRDaGVzc2JvYXJkKCk7XG5jb25zdCBzdGFydFBvc2l0aW9uID0gY2hlc3NCb2FyZC5jaGlsZHJlblswXSE7XG5jb25zdCBkZXN0UG9zaXRpb24gPSBjaGVzc0JvYXJkLmNoaWxkcmVuWzYzXSE7XG5uZXcgRHJhZ2dhYmxlS25pZ2h0KHN0YXJ0UG9zaXRpb24pO1xuZGVzdFBvc2l0aW9uLmFwcGVuZENoaWxkKEJ1aWxkLmRlc3RpbmF0aW9uTWFya2VyKCkpO1xuZGVzdFBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXN0aW5hdGlvblwiKTtcbkRlc3RNYXJrZXIuYW5pbWF0ZURlc3RpbmF0aW9uTWFya2VyKCk7XG5Db29yZHMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuQW5pbWF0ZS51cGRhdGVNZXNzYWdlKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXI6IEhUTUxFbGVtZW50ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIikhO1xuICAgIGJvYXJkQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9