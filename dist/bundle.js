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

section#main-section {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: #fefae3;
  background-color: #8d7b66;
}
section#main-section form#run-coords {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
section#main-section form#run-coords .input-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
section#main-section form#run-coords .input-container input {
  width: 55px;
  border: none;
  border-radius: 5px;
  background-color: #fefae3;
}
section#main-section form#run-coords button {
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  background-color: #befff5;
  font-weight: 900;
}
section#main-section .previous-path {
  display: flex;
  justify-content: center;
  align-items: center;
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

img.knight-piece {
  position: absolute;
  z-index: 1;
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
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAgBA;EACI,aAAA;EACA,YAAA;EACA,yBAfM;EAgBN,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAVc;EAWd,gCAVe;EAWf,kBAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,qCAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,SAAA;EACA,cA7CM;EA8CN,yBAxCS;AA2Bb;AAeI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;AAbR;AAeQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAbZ;AAeY;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBA9DN;AAiDV;AAiBQ;EACI,0BAAA;EACA,kBAAA;EACA,yBAhEA;EAiEA,gBAAA;AAfZ;AAmBI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAjBR;;AAqBA;EACI,aAAA;EACA,YAAA;EACA,yBApFM;EAqFN,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,UAAA;EACA,iCAAA;EACA,yBAAA;EACA,kBAAA;AAlBJ;AAqBQ;EACI,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,mBAAA;AAnBZ;AAsBQ;EACI,aAAA;EACA,kCAAA;EACA,qBAAA;EACA,mBAAA;AApBZ;AAwBI;EACI,aAAA;EACA,kCAAA;EACA,qCAAA;EACA,yBAAA;EACA,kBAAA;AAtBR;AAwBQ;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAtBZ;AAwBY;EACI,yBA3HN;AAqGV;AAwBY;EACI,yBA5HF;AAsGd;AAyBY;EAEI,8CAAA;AAxBhB;AA2BY;EACI,yBApIH;AA2Gb;;AA+BA;EACI,kBAAA;EACA,UAAA;AA5BJ;;AA+BA;EACI,aAAA;EACA,kCAAA;EACA,+BAAA;EACA,WAAA;EACA,UAAA;EACA,wBAAA;AA5BJ;AA8BI;EACI,aAAA;AA5BR;AA8BQ;EACI,qBAAA;AA5BZ;AA8BQ;EACI,uBAAA;AA5BZ;AA8BQ;EACI,yBAAA;AA5BZ;AA8BQ;EACI,2BAAA;AA5BZ;AA+BQ;EACI,yBAvKG;EAwKH,kBAAA;EACA,iCAAA;AA7BZ;AA+BY;EAEI,QAAA;EACA,YAAA;AA9BhB;AAgCY;EAEI,SAAA;EACA,WAAA;AA/BhB","sourcesContent":["@import \"./reset.css\";\n// Onest font\n@import url(\"https://fonts.googleapis.com/css2?family=Onest:wght@500&display=swap\");\n\n$main-bg: #fefae3;\n$light-square: $main-bg;\n$dark-square: #d4a469;\n$valid-drop: #00cd34;\n$marker-color: #000000;\n$go-button: #befff5;\n$section-bg: #8d7b66;\n\n// fonts\n$main-font-color: #b17036;\n$main-font-family: \"Onest\", sans-serif;\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: $main-bg;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: $main-font-color;\n    font-family: $main-font-family;\n    position: relative;\n}\n\n#content {\n    height: 100%;\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n    transition: opacity 500ms ease-in-out;\n}\n\nsection#main-section {\n    width: 100%;\n    height: auto;\n    padding: 10px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 20px;\n    color: $light-square;\n    background-color: $section-bg;\n\n    form#run-coords {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n\n        .input-container {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n\n            input {\n                width: 55px;\n                border: none;\n                border-radius: 5px;\n                background-color: $light-square;\n            }\n        }\n\n        button {\n            padding: 5px 20px 5px 20px;\n            border-radius: 5px;\n            background-color: $go-button;\n            font-weight: 900;\n        }\n    }\n\n    .previous-path {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n}\n\n.board-container {\n    height: 700px;\n    width: 700px;\n    background-color: $main-bg;\n    display: grid;\n    grid-template-rows: 0.5fr 8fr 0.5fr;\n    grid-template-columns: 0.5fr 8fr 0.5fr;\n    opacity: 0;\n    transition: opacity 1500ms linear;\n    border: 5px solid $dark-square;\n    border-radius: 5px;\n\n    .coordinates {\n        &.letters {\n            display: grid;\n            grid-template-columns: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n\n        &.numbers {\n            display: grid;\n            grid-template-rows: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n    }\n\n    .chess-board {\n        display: grid;\n        grid-template-rows: repeat(8, 1fr);\n        grid-template-columns: repeat(8, 1fr);\n        border: 3px solid $dark-square;\n        border-radius: 5px;\n\n        .square {\n            border-radius: 2px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            &.light {\n                background-color: $light-square;\n            }\n            &.dark {\n                background-color: $dark-square;\n            }\n\n            &.dark,\n            &.light {\n                transition: background-color 100ms ease-in-out;\n            }\n\n            &.valid-drop {\n                background-color: $valid-drop;\n            }\n        }\n    }\n}\n\nimg.knight-piece {\n    position: absolute;\n    z-index: 1;\n}\n\n.destination-marker {\n    display: grid;\n    grid-template-columns: 5fr 1fr 5fr;\n    grid-template-rows: 5fr 1fr 5fr;\n    height: 75%;\n    width: 75%;\n    transform: rotate(45deg);\n\n    .section {\n        display: flex;\n\n        &.top {\n            align-items: flex-end;\n        }\n        &.bottom {\n            align-items: flex-start;\n        }\n        &.left {\n            justify-content: flex-end;\n        }\n        &.right {\n            justify-content: flex-start;\n        }\n\n        .leg {\n            background-color: $marker-color;\n            border-radius: 5px;\n            transition: all 150ms ease-in-out;\n\n            &.left,\n            &.right {\n                width: 0;\n                height: 100%;\n            }\n            &.top,\n            &.bottom {\n                height: 0;\n                width: 100%;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   Coords: () => (/* binding */ Coords),
/* harmony export */   DestMarker: () => (/* binding */ DestMarker),
/* harmony export */   DraggableKnight: () => (/* binding */ DraggableKnight),
/* harmony export */   Load: () => (/* binding */ Load)
/* harmony export */ });
/* harmony import */ var _Images_knight_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/knight.svg */ "./src/Images/knight.svg");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/createElement.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.ts");



var Load = /** @class */ (function () {
    function Load() {
    }
    Load.defaultUI = function () {
        var content = document.querySelector("#content");
        content.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.mainSection());
        content.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.boardContainer());
    };
    return Load;
}());

var Coords = /** @class */ (function () {
    function Coords() {
    }
    Coords.updateInputValue = function () {
        var startInput = document.querySelector("input#start-coord");
        var destInput = document.querySelector("input#destination-coord");
        var start = Coords.getStartString();
        var dest = Coords.getDestString();
        startInput.value = start;
        dest ? (destInput.value = dest) : (destInput.value = "");
    };
    // prettier-ignore
    Coords.updateLocationFromInput = function (className, inputValue) {
        var squares = Coords.getAllSquares();
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
        var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
        var firstLetter = inputField.value[0]
            ? inputField.value[0].toUpperCase()
            : "";
        var secondLetter = inputField.value[1]
            ? inputField.value[1]
            : "";
        if (!letters.includes(firstLetter)) {
            inputField.value = "";
            return;
        }
        if (!numbers.includes(secondLetter)) {
            inputField.value = firstLetter;
            return;
        }
        if (inputField.value.length > 2) {
            inputField.value = inputField.value.slice(0, 2);
            return;
        }
        // prettier-ignore
        var startInput = document.querySelector("input#start-coord");
        // prettier-ignore
        var destInput = document.querySelector("input#destination-coord");
        if (e.target === startInput && e.target.value === destInput.value) {
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
    };
    Coords.getStart = function () {
        return Coords.getCoords("start-location");
    };
    Coords.getStartString = function () {
        return Coords.getStringCoords("start-location");
    };
    Coords.getDest = function () {
        return Coords.getCoords("destination");
    };
    Coords.getDestString = function () {
        return Coords.getStringCoords("destination");
    };
    Coords.getCoords = function (targetClass) {
        var squares = Coords.getAllSquares();
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
    Coords.getStringCoords = function (targetClass) {
        var coords = Coords.getCoords(targetClass);
        var letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        if (!coords) {
            return null;
        }
        return "".concat(letters[coords[0]]).concat(coords[1]);
    };
    Coords.getAllSquares = function () {
        return document.querySelectorAll(".square");
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
    // prettier-ignore
    DestMarker.setDestination = function (e, parentElement) {
        if (parentElement === void 0) { parentElement = null; }
        var locations = document.querySelectorAll(".chess-board .square");
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
        parentElement !== null && parentElement !== void 0 ? parentElement : document.querySelector(".chess-board").firstElementChild;
        var knightImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
            class: "knight-piece",
            src: _Images_knight_svg__WEBPACK_IMPORTED_MODULE_0__,
            draggable: "false",
        });
        knightImage.onmouseup = function (e) { return _this.setClick(e); };
        knightImage.onmousedown = function (e) { return _this.setClick(e); };
        // make sure there is only one location with the start location class
        this.removeGlobalClassName("start-location", ".square");
        parentElement.classList.add("start-location");
        parentElement.appendChild(knightImage);
    };
    DraggableKnight.prototype.setClick = function (e) {
        var knight = document.querySelector(".knight-piece");
        // set the mouseDown property if mousedown or mouseup on knight
        // dragKnight changes location of the knight piece based on the cursor position
        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            document.body.addEventListener("mousemove", this.dragKnight);
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
        document.querySelector(".knight-piece").remove();
        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        var originalStartPoint = document.querySelector(".start-location");
        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        var chessBoard = document.querySelector(".chess-board");
        if (!this.isWithinElement(e, chessBoard)) {
            new DraggableKnight(originalStartPoint);
            return;
        }
        var locations = document.querySelectorAll(".square");
        locations.forEach(function (location) {
            if (_this.isWithinElement(e, location)) {
                if (_this.isValidDropLoc(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight to the specified square
                    new DraggableKnight(location);
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
        var squares = document.querySelectorAll(".square");
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
    Build.mainSection = function () {
        return ((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", { id: "main-section" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", { id: "run-coords" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container start" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "start-coord", tc: "Start:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "start-coord", type: "text", name: "start-coord",
            evl: { "input": _controller__WEBPACK_IMPORTED_MODULE_0__.Coords.validateInput } })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container destination" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "destination-coord", tc: "Destination:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "destination-coord", type: "text", name: "destination-coord",
            evl: { "input": _controller__WEBPACK_IMPORTED_MODULE_0__.Coords.validateInput } })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", { class: "run-coords", tc: "GO" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "previous-path" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { class: "path", tc: "Shortest path from A1 to B3 is 1 move" }))));
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
var chessBoard = document.querySelector(".chess-board");
var firstChild = chessBoard.firstElementChild;
var lastChild = chessBoard.lastElementChild;
new _controller__WEBPACK_IMPORTED_MODULE_1__.DraggableKnight(firstChild);
lastChild.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.destinationMarker());
lastChild.classList.add("destination");
_controller__WEBPACK_IMPORTED_MODULE_1__.DestMarker.animateDestinationMarker();
_controller__WEBPACK_IMPORTED_MODULE_1__.Coords.updateInputValue();
setTimeout(function () {
    var boardContainer = document.querySelector(".board-container");
    boardContainer.style.opacity = "1";
}, 0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsa0JBQWtCLENBQUUsQ0FBQztJQUNoRCxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDdkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvc3R5bGUvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9zdHlsZS9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvc3R5bGUvaW5kZXguc2Nzcz83ZWI5Iiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9jcmVhdGVFbGVtZW50LnRzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9uZXN0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjYjE3MDM2O1xuICBmb250LWZhbWlseTogXCJPbmVzdFwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5zZWN0aW9uI21haW4tc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDIwcHg7XG4gIGNvbG9yOiAjZmVmYWUzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ3YjY2O1xufVxuc2VjdGlvbiNtYWluLXNlY3Rpb24gZm9ybSNydW4tY29vcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiBmb3JtI3J1bi1jb29yZHMgLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIGZvcm0jcnVuLWNvb3JkcyAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDU1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xufVxuc2VjdGlvbiNtYWluLXNlY3Rpb24gZm9ybSNydW4tY29vcmRzIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWZmZjU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiAucHJldmlvdXMtcGF0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDcwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDhmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA4ZnIgMC41ZnI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwMG1zIGxpbmVhcjtcbiAgYm9yZGVyOiA1cHggc29saWQgI2Q0YTQ2OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY29vcmRpbmF0ZXMubGV0dGVycyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNvb3JkaW5hdGVzLm51bWJlcnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkNGE0Njk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS5saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRhNDY5O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS5kYXJrLCAuYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmxpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUudmFsaWQtZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNkMzQ7XG59XG5cbmltZy5rbmlnaHQtcGllY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kZXN0aW5hdGlvbi1tYXJrZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgNWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgNWZyO1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDc1JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLnRvcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24uYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnLmxlZnQsIC5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy5yaWdodCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcudG9wLCAuZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcuYm90dG9tIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBZk07RUFnQk4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQVZjO0VBV2QsZ0NBVmU7RUFXZixrQkFBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQWJKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxjQTdDTTtFQThDTix5QkF4Q1M7QUEyQmI7QUFlSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiWjtBQWVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTlETjtBQWlEVjtBQWlCUTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFoRUE7RUFpRUEsZ0JBQUE7QUFmWjtBQW1CSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakJSOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBcEZNO0VBcUZOLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWxCSjtBQXFCUTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFuQlo7QUFzQlE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBcEJaO0FBd0JJO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBdEJSO0FBd0JRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXRCWjtBQXdCWTtFQUNJLHlCQTNITjtBQXFHVjtBQXdCWTtFQUNJLHlCQTVIRjtBQXNHZDtBQXlCWTtFQUVJLDhDQUFBO0FBeEJoQjtBQTJCWTtFQUNJLHlCQXBJSDtBQTJHYjs7QUErQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBNUJKO0FBOEJJO0VBQ0ksYUFBQTtBQTVCUjtBQThCUTtFQUNJLHFCQUFBO0FBNUJaO0FBOEJRO0VBQ0ksdUJBQUE7QUE1Qlo7QUE4QlE7RUFDSSx5QkFBQTtBQTVCWjtBQThCUTtFQUNJLDJCQUFBO0FBNUJaO0FBK0JRO0VBQ0kseUJBdktHO0VBd0tILGtCQUFBO0VBQ0EsaUNBQUE7QUE3Qlo7QUErQlk7RUFFSSxRQUFBO0VBQ0EsWUFBQTtBQTlCaEI7QUFnQ1k7RUFFSSxTQUFBO0VBQ0EsV0FBQTtBQS9CaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9yZXNldC5jc3NcXFwiO1xcbi8vIE9uZXN0IGZvbnRcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbmVzdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kbWFpbi1iZzogI2ZlZmFlMztcXG4kbGlnaHQtc3F1YXJlOiAkbWFpbi1iZztcXG4kZGFyay1zcXVhcmU6ICNkNGE0Njk7XFxuJHZhbGlkLWRyb3A6ICMwMGNkMzQ7XFxuJG1hcmtlci1jb2xvcjogIzAwMDAwMDtcXG4kZ28tYnV0dG9uOiAjYmVmZmY1O1xcbiRzZWN0aW9uLWJnOiAjOGQ3YjY2O1xcblxcbi8vIGZvbnRzXFxuJG1haW4tZm9udC1jb2xvcjogI2IxNzAzNjtcXG4kbWFpbi1mb250LWZhbWlseTogXFxcIk9uZXN0XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iZztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udC1mYW1pbHk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbnNlY3Rpb24jbWFpbi1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWJnO1xcblxcbiAgICBmb3JtI3J1bi1jb29yZHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvLWJ1dHRvbjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wcmV2aW91cy1wYXRoIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgOGZyIDAuNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDhmciAwLjVmcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTAwbXMgbGluZWFyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAkZGFyay1zcXVhcmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLmNvb3JkaW5hdGVzIHtcXG4gICAgICAgICYubGV0dGVycyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5udW1iZXJzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNoZXNzLWJvYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRkYXJrLXNxdWFyZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAgIC5zcXVhcmUge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgJi5saWdodCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICYuZGFyayB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXNxdWFyZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi5kYXJrLFxcbiAgICAgICAgICAgICYubGlnaHQge1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLnZhbGlkLWRyb3Age1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsaWQtZHJvcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuaW1nLmtuaWdodC1waWVjZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmRlc3RpbmF0aW9uLW1hcmtlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmciA1ZnI7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFxuICAgIC5zZWN0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICAmLnRvcCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5ib3R0b20ge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5sZWZ0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5yaWdodCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxlZyB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hcmtlci1jb2xvcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICAgICAgICAgICYubGVmdCxcXG4gICAgICAgICAgICAmLnJpZ2h0IHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJi50b3AsXFxuICAgICAgICAgICAgJi5ib3R0b20ge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiBjb2xvcjogaW5oZXJpdDsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQga25pZ2h0IGZyb20gXCIuL0ltYWdlcy9rbmlnaHQuc3ZnXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IEJ1aWxkIH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgTG9hZCB7XG4gICAgc3RhdGljIGRlZmF1bHRVSSgpIHtcbiAgICAgICAgY29uc3QgY29udGVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikhO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoQnVpbGQubWFpblNlY3Rpb24oKSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoQnVpbGQuYm9hcmRDb250YWluZXIoKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vcmRzIHtcbiAgICBzdGF0aWMgdXBkYXRlSW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjc3RhcnQtY29vcmRcIikhO1xuXG4gICAgICAgIGNvbnN0IGRlc3RJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImlucHV0I2Rlc3RpbmF0aW9uLWNvb3JkXCIsXG4gICAgICAgICkhO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0OiBzdHJpbmcgPSBDb29yZHMuZ2V0U3RhcnRTdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGVzdDogc3RyaW5nIHwgbnVsbCA9IENvb3Jkcy5nZXREZXN0U3RyaW5nKCk7XG5cbiAgICAgICAgc3RhcnRJbnB1dC52YWx1ZSA9IHN0YXJ0O1xuICAgICAgICBkZXN0ID8gKGRlc3RJbnB1dC52YWx1ZSA9IGRlc3QpIDogKGRlc3RJbnB1dC52YWx1ZSA9IFwiXCIpO1xuICAgIH1cblxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyB1cGRhdGVMb2NhdGlvbkZyb21JbnB1dChjbGFzc05hbWU6IHN0cmluZywgaW5wdXRWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBDb29yZHMuZ2V0QWxsU3F1YXJlcygpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUNoaWxkKHNxdWFyZS5maXJzdEVsZW1lbnRDaGlsZCEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY29vcmROdW1zOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IGxldHRlcnMgPSBbbnVsbCwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbiAgICAgICAgY29vcmROdW1zID0gYCR7bGV0dGVycy5pbmRleE9mKGlucHV0VmFsdWVbMF0pfS0ke2lucHV0VmFsdWVbMV19YDtcblxuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5nZXRBdHRyaWJ1dGUoXCJjb29yZFwiKSA9PT0gY29vcmROdW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJzdGFydC1sb2NhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQoc3F1YXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gXCJkZXN0aW5hdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBEZXN0TWFya2VyLnNldERlc3RpbmF0aW9uKGUsIHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5wdXRJc1ZhbGlkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWUubGVuZ3RoIDw9IDI7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSW5wdXQoZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlucHV0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICBjb25zdCBudW1iZXJzID0gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIl07XG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyOiBzdHJpbmcgPSBpbnB1dEZpZWxkLnZhbHVlWzBdXG4gICAgICAgICAgICA/IGlucHV0RmllbGQudmFsdWVbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICBjb25zdCBzZWNvbmRMZXR0ZXI6IHN0cmluZyA9IGlucHV0RmllbGQudmFsdWVbMV1cbiAgICAgICAgICAgID8gaW5wdXRGaWVsZC52YWx1ZVsxXVxuICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIGlmICghbGV0dGVycy5pbmNsdWRlcyhmaXJzdExldHRlcikpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFudW1iZXJzLmluY2x1ZGVzKHNlY29uZExldHRlcikpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBmaXJzdExldHRlcjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3N0YXJ0LWNvb3JkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgZGVzdElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkZXN0aW5hdGlvbi1jb29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcblxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHN0YXJ0SW5wdXQgJiYgZS50YXJnZXQudmFsdWUgPT09IGRlc3RJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5zbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZGVzdElucHV0ICYmIGUudGFyZ2V0LnZhbHVlID09PSBzdGFydElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb3Jkcy5pbnB1dElzVmFsaWQoc3RhcnRJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgIENvb3Jkcy51cGRhdGVMb2NhdGlvbkZyb21JbnB1dChcInN0YXJ0LWxvY2F0aW9uXCIsIHN0YXJ0SW5wdXQudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvb3Jkcy5pbnB1dElzVmFsaWQoZGVzdElucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgQ29vcmRzLnVwZGF0ZUxvY2F0aW9uRnJvbUlucHV0KFwiZGVzdGluYXRpb25cIiwgZGVzdElucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGFydCgpOiBudW1iZXJbXSB8IGFueSB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0Q29vcmRzKFwic3RhcnQtbG9jYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXJ0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0U3RyaW5nQ29vcmRzKFwic3RhcnQtbG9jYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlc3QoKTogbnVtYmVyW10gfCBhbnkge1xuICAgICAgICByZXR1cm4gQ29vcmRzLmdldENvb3JkcyhcImRlc3RpbmF0aW9uXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXN0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0U3RyaW5nQ29vcmRzKFwiZGVzdGluYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb3Jkcyh0YXJnZXRDbGFzczogc3RyaW5nKTogbnVtYmVyW10gfCBhbnkge1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gQ29vcmRzLmdldEFsbFNxdWFyZXMoKTtcblxuICAgICAgICBsZXQgY29vcmRzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnModGFyZ2V0Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRBdHRyOiBzdHJpbmcgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKFwiY29vcmRcIikhO1xuICAgICAgICAgICAgICAgIGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGNvb3JkQXR0ci5zcGxpdChcIi1cIilbMF0pLFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRBdHRyLnNwbGl0KFwiLVwiKVsxXSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RyaW5nQ29vcmRzKHRhcmdldENsYXNzOiBzdHJpbmcpOiBzdHJpbmcgfCBhbnkge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBDb29yZHMuZ2V0Q29vcmRzKHRhcmdldENsYXNzKTtcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtudWxsLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xldHRlcnNbY29vcmRzWzBdXX0ke2Nvb3Jkc1sxXX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxTcXVhcmVzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlc3RNYXJrZXIge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBhbmltYXRlRGVzdGluYXRpb25NYXJrZXIoKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZWdcIikhO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTmFtZSA9PT0gXCJsZWcgdG9wXCIgfHwgbm9kZS5jbGFzc05hbWUgPT09IFwibGVnIGJvdHRvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgc2V0RGVzdGluYXRpb24oZTogYW55LCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgXCIuY2hlc3MtYm9hcmQgLnNxdWFyZVwiLFxuICAgICAgICApO1xuXG4gICAgICAgIGxvY2F0aW9ucy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwia25pZ2h0LWxvY2F0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXN0aW5hdGlvblwiKSkge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVzdGluYXRpb25cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUNoaWxkKHNxdWFyZS5maXJzdENoaWxkISk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcGFyZW50RWxlbWVudCA/IHBhcmVudEVsZW1lbnQgOiBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGRvIG5vdCBhbGxvdyBwbGFjaW5nIHRoZSBtYXJrZXIgb24gdG9wIG9mIHRoZSBzdGFydCBwb2ludCB3aGVyZSB0aGUga25pZ2h0IHBpZWNlIGlzIGxvY2F0ZWRcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXJ0LWxvY2F0aW9uXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVzdGluYXRpb24uY2xhc3NMaXN0LmFkZChcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChCdWlsZC5kZXN0aW5hdGlvbk1hcmtlcigpKTtcbiAgICAgICAgRGVzdE1hcmtlci5hbmltYXRlRGVzdGluYXRpb25NYXJrZXIoKTtcblxuICAgICAgICBDb29yZHMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUtuaWdodCB7XG4gICAgbW91c2VEb3duOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50RWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXQocGFyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgaW5pdChwYXJlbnRFbGVtZW50OiBhbnkgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPz9cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlc3MtYm9hcmRcIikhLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGNvbnN0IGtuaWdodEltYWdlID0gY3JlYXRlKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImtuaWdodC1waWVjZVwiLFxuICAgICAgICAgICAgc3JjOiBrbmlnaHQsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAga25pZ2h0SW1hZ2Uub25tb3VzZXVwID0gKGUpID0+IHRoaXMuc2V0Q2xpY2soZSk7XG4gICAgICAgIGtuaWdodEltYWdlLm9ubW91c2Vkb3duID0gKGUpID0+IHRoaXMuc2V0Q2xpY2soZSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGlzIG9ubHkgb25lIGxvY2F0aW9uIHdpdGggdGhlIHN0YXJ0IGxvY2F0aW9uIGNsYXNzXG4gICAgICAgIHRoaXMucmVtb3ZlR2xvYmFsQ2xhc3NOYW1lKFwic3RhcnQtbG9jYXRpb25cIiwgXCIuc3F1YXJlXCIpO1xuICAgICAgICBwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzdGFydC1sb2NhdGlvblwiKTtcblxuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGtuaWdodEltYWdlKTtcbiAgICB9XG5cbiAgICBzZXRDbGljayhlOiBhbnkpIHtcbiAgICAgICAgY29uc3Qga25pZ2h0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25pZ2h0LXBpZWNlXCIpITtcblxuICAgICAgICAvLyBzZXQgdGhlIG1vdXNlRG93biBwcm9wZXJ0eSBpZiBtb3VzZWRvd24gb3IgbW91c2V1cCBvbiBrbmlnaHRcbiAgICAgICAgLy8gZHJhZ0tuaWdodCBjaGFuZ2VzIGxvY2F0aW9uIG9mIHRoZSBrbmlnaHQgcGllY2UgYmFzZWQgb24gdGhlIGN1cnNvciBwb3NpdGlvblxuXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIGtuaWdodC5zdHlsZS5jdXJzb3IgPSBcImdyYWJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmRyYWdLbmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlS25pZ2h0KGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuZHJhZ0tuaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmFnS25pZ2h0ID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBsZXQga25pZ2h0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25pZ2h0LXBpZWNlXCIpITtcbiAgICAgICAgY29uc3QgY2hlc3NCb2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZXNzLWJvYXJkXCIpITtcblxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV2l0aGluRWxlbWVudChlLCBjaGVzc0JvYXJkKSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZXNzIHBpZWNlIGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBjaGVzcyBib2FyZFxuICAgICAgICAgICAgICAgIGtuaWdodC5zdHlsZS50b3AgPSBgJHtlLmNsaWVudFkgLSBrbmlnaHQub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG4gICAgICAgICAgICAgICAga25pZ2h0LnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFggLSBrbmlnaHQub2Zmc2V0V2lkdGggLyAyfXB4YDtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyU3F1YXJlKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVzcyBwaWVjZSBoYXMgdHJhdmVsZWQgb3V0IG9mIGJvdW5kcyBvZiB0aGUgY2hlc3MgYm9hcmRcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGtuaWdodC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlS25pZ2h0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHBsYWNlS25pZ2h0KGU6IGFueSkge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGtuaWdodCBmcm9tIHRoZSBET01cbiAgICAgICAgLy8gYSBuZXcga25pZ2h0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGNoZXNzIGJvYXJkIHdoZW4gYSBuZXcgRHJhZ2dhYmxlS25pZ2h0IG9iamVjdCBpcyBpbml0aWFsaXplZFxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rbmlnaHQtcGllY2VcIikgYXMgSFRNTEVsZW1lbnQpLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIG9yaWdpbmFsU3RhcnRQb2ludCBpcyB3aGVyZSB0aGUga25pZ2h0IHdpbGwgYmUgYXBwZW5kZWQgaWYgaXRzIG5vdCBpbiBhIHZhbGlkIHNwb3QgdXBvbiBwbGFjZW1lbnRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTdGFydFBvaW50OiBIVE1MRWxlbWVudCA9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWxvY2F0aW9uXCIpITtcblxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIGtuaWdodCBoYXMgdHJhdmVsZWQgb3V0IG9mIGJvdW5kcyBvZiB0aGUgY2hlc3MgYm9hcmRcbiAgICAgICAgLy8gaWYgaXQgaXMgb3V0IG9mIGJvdW5kcywgYXBwZW5kIGEgbmV3IGtuaWdodCB0byB0aGUgb3JpZ2luYWxTdGFydFBvaW50XG4gICAgICAgIGNvbnN0IGNoZXNzQm9hcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVzcy1ib2FyZFwiKSE7XG4gICAgICAgIGlmICghdGhpcy5pc1dpdGhpbkVsZW1lbnQoZSwgY2hlc3NCb2FyZCkpIHtcbiAgICAgICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQob3JpZ2luYWxTdGFydFBvaW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG5cbiAgICAgICAgbG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1dpdGhpbkVsZW1lbnQoZSwgbG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZERyb3BMb2MobG9jYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGtuaWdodCBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgc3BlY2lmaWVkIHNxdWFyZSBBTkQgaXMgb24gYSB2YWxpZCBkcm9wIHBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIHNwZWNpZmllZCBzcXVhcmVcbiAgICAgICAgICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIENvb3Jkcy51cGRhdGVJbnB1dFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBrbmlnaHQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHNwZWNpZmllZCBzcXVhcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGlzIE5PVCBpbiBhIHZhbGlkIGxvY2F0aW9uIChjYW4ndCBkcm9wIG9uIHRoZSBkZXN0aW5hdGlvbiBwb2ludClcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGEgbmV3IGtuaWdodCB0byB0aGUgb3JpZ2luYWwgc3RhcnQgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgbmV3IERyYWdnYWJsZUtuaWdodChvcmlnaW5hbFN0YXJ0UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBDb29yZHMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1dpdGhpbkVsZW1lbnQoZTogYW55LCBlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYm91bmRpbmdSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBlLmNsaWVudFggPj0gYm91bmRpbmdSZWN0LmxlZnQgJiZcbiAgICAgICAgICAgIGUuY2xpZW50WCA8PSBib3VuZGluZ1JlY3QucmlnaHQgJiZcbiAgICAgICAgICAgIGUuY2xpZW50WSA+PSBib3VuZGluZ1JlY3QudG9wICYmXG4gICAgICAgICAgICBlLmNsaWVudFkgPD0gYm91bmRpbmdSZWN0LmJvdHRvbVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbW92ZUdsb2JhbENsYXNzTmFtZSh0b1JlbW92ZTogc3RyaW5nLCBxU2VsZWN0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxU2VsZWN0KTtcblxuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUodG9SZW1vdmUpO1xuICAgICAgICAgICAgdGhpcy5yZXNldExvY0JHKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzVmFsaWREcm9wTG9jKGxvY2F0aW9uOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWxvY2F0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcImRlc3RpbmF0aW9uXCIpO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodERyb3BMb2Moc3F1YXJlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyb3BcIik7XG4gICAgfVxuXG4gICAgcmVzZXRMb2NCRyhzcXVhcmU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtZHJvcFwiKTtcbiAgICB9XG5cbiAgICBob3ZlclNxdWFyZShlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVcIik7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1dpdGhpbkVsZW1lbnQoZSwgc3F1YXJlKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWREcm9wTG9jKHNxdWFyZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHREcm9wTG9jKHNxdWFyZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVzZXRMb2NCRyhzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbnRlcmZhY2UgRVZMIHtcbiAgICBba2V5OiBzdHJpbmddOiBFdmVudExpc3RlbmVyO1xufVxuXG5pbnRlcmZhY2UgQXR0cmlidXRlcyB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgRVZMO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW46IEFycmF5PEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChrZXkgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgY29uc3QgdXNlckNsYXNzZXM6IHN0cmluZ1tdID0gKGF0dHJpYnV0ZXMuY2xhc3MgYXMgc3RyaW5nKS5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udXNlckNsYXNzZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJldmxcIiAmJiB0eXBlb2YgYXR0cmlidXRlcy5ldmwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnRLZXkgaW4gYXR0cmlidXRlcy5ldmwpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRLZXksIGF0dHJpYnV0ZXMuZXZsW2V2ZW50S2V5XSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwidGNcIikge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXNba2V5XSBhcyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSBhcyBzdHJpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IERlc3RNYXJrZXIsIENvb3JkcyB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgY3JlYXRlIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgQnVpbGQge1xuICAgIHN0YXRpYyBib2FyZENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZW1wdHktc3BhY2VcIiB9KSxcbiAgICAgICAgICAgICAgICBCdWlsZC5sZXR0ZXJDb29yZHMoKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJlbXB0eS1yb3dcIiB9KSxcbiAgICAgICAgICAgICAgICBCdWlsZC5udW1iZXJDb29yZHMoKSxcbiAgICAgICAgICAgICAgICBCdWlsZC5jaGVzc0JvYXJkKCksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZW1wdHktc3BhY2VcIiB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBsZXR0ZXJDb29yZHMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBsZXR0ZXJzOiBzdHJpbmdbXSA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgbGV0dGVyQ29vcmRzOiBIVE1MRWxlbWVudCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNvb3JkaW5hdGVzIGxldHRlcnNcIiB9KTtcbiAgICAgICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgbGV0dGVycykge1xuICAgICAgICAgICAgbGV0dGVyQ29vcmRzLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImxldHRlci1jb29yZFwiLCB0YzogYCR7bGV0dGVyfWAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxldHRlckNvb3JkcztcbiAgICB9XG5cbiAgICBzdGF0aWMgbnVtYmVyQ29vcmRzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGNvbnN0IG51bWJlckNvb3JkczogSFRNTEVsZW1lbnQgPSBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJjb29yZGluYXRlcyBudW1iZXJzXCIgfSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgICAgICBudW1iZXJDb29yZHMuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibnVtYmVyLWNvb3JkXCIsIHRjOiBgJHtpLnRvU3RyaW5nKCl9YCB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyQ29vcmRzO1xuICAgIH1cblxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBjaGVzc0JvYXJkKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgYm9hcmQ6IEhUTUxFbGVtZW50ID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiY2hlc3MtYm9hcmRcIiB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNxdWFyZSBsaWdodFwiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGRhcmtcIiwgY29vcmQ6IGAke2p9LSR7aX1gIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGRhcmtcIiwgY29vcmQ6IGAke2p9LSR7aX1gIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNxdWFyZSBsaWdodFwiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uczogSFRNTENvbGxlY3Rpb24gPSBib2FyZC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGxvY2F0aW9ucy5pdGVtKGkpO1xuICAgICAgICAgICAgc3F1YXJlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRGVzdE1hcmtlci5zZXREZXN0aW5hdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgc3RhdGljIGRlc3RpbmF0aW9uTWFya2VyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImRlc3RpbmF0aW9uLW1hcmtlclwiIH0sXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvblwiIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb24gdG9wXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibGVnIHRvcFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiBsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibGVnIGxlZnRcIiB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvblwiIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb24gcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgcmlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvblwiIH0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb24gYm90dG9tXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibGVnIGJvdHRvbVwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgbWFpblNlY3Rpb24oKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY3JlYXRlKFwic2VjdGlvblwiLCB7IGlkOiBcIm1haW4tc2VjdGlvblwiIH0sIFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImZvcm1cIiwgeyBpZDogXCJydW4tY29vcmRzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtY29udGFpbmVyIHN0YXJ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImxhYmVsXCIsIHsgZm9yOiBcInN0YXJ0LWNvb3JkXCIsIHRjOiBcIlN0YXJ0OlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiaW5wdXRcIiwgeyBpZDogXCJzdGFydC1jb29yZFwiLCB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJzdGFydC1jb29yZFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmw6IHsgXCJpbnB1dFwiOiBDb29yZHMudmFsaWRhdGVJbnB1dCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0LWNvbnRhaW5lciBkZXN0aW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJsYWJlbFwiLCB7IGZvcjogXCJkZXN0aW5hdGlvbi1jb29yZFwiLCB0YzogXCJEZXN0aW5hdGlvbjpcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IFwiZGVzdGluYXRpb24tY29vcmRcIiwgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiZGVzdGluYXRpb24tY29vcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmw6IHsgXCJpbnB1dFwiOiBDb29yZHMudmFsaWRhdGVJbnB1dCB9IH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImJ1dHRvblwiLCB7IGNsYXNzOiBcInJ1bi1jb29yZHNcIiwgdGM6IFwiR09cIiB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInByZXZpb3VzLXBhdGhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJzcGFuXCIsIHsgY2xhc3M6IFwicGF0aFwiLCB0YzogXCJTaG9ydGVzdCBwYXRoIGZyb20gQTEgdG8gQjMgaXMgMSBtb3ZlXCIgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IExvYWQsIERyYWdnYWJsZUtuaWdodCwgQ29vcmRzLCBEZXN0TWFya2VyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tIFwiLi92aWV3XCI7XG5cbkxvYWQuZGVmYXVsdFVJKCk7XG5cbmNvbnN0IGNoZXNzQm9hcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVzcy1ib2FyZFwiKSE7XG5jb25zdCBmaXJzdENoaWxkID0gY2hlc3NCb2FyZC5maXJzdEVsZW1lbnRDaGlsZCE7XG5jb25zdCBsYXN0Q2hpbGQgPSBjaGVzc0JvYXJkLmxhc3RFbGVtZW50Q2hpbGQhO1xubmV3IERyYWdnYWJsZUtuaWdodChmaXJzdENoaWxkKTtcbmxhc3RDaGlsZC5hcHBlbmRDaGlsZChCdWlsZC5kZXN0aW5hdGlvbk1hcmtlcigpKTtcbmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiZGVzdGluYXRpb25cIik7XG5EZXN0TWFya2VyLmFuaW1hdGVEZXN0aW5hdGlvbk1hcmtlcigpO1xuXG5Db29yZHMudXBkYXRlSW5wdXRWYWx1ZSgpO1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lcjogSFRNTEVsZW1lbnQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWNvbnRhaW5lclwiKSE7XG4gICAgYm9hcmRDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xufSwgMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=