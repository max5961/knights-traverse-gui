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
    Coords.updateGUI = function () {
        var startInput = document.querySelector("input#start-coord");
        var destInput = document.querySelector("input#destination-coord");
        var start = Coords.getStartString();
        var dest = Coords.getDestString();
        console.log(start, dest);
        startInput.value = start;
        dest ? (destInput.textContent = dest) : (destInput.textContent = "");
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
        var nodes = document.querySelectorAll(".leg");
        nodes.forEach(function (node) {
            if (node.className === "leg top" || node.className === "leg bottom") {
                node.style.height = "100%";
            }
            else {
                node.style.width = "100%";
            }
        });
    };
    DestMarker.setDestination = function (e) {
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
        var destination = e.currentTarget;
        // do not allow placing the marker on top of the start point where the knight piece is located
        if (destination.classList.contains("start-location")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.destinationMarker());
        setTimeout(function () {
            DestMarker.animateDestinationMarker();
        });
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
                    return;
                }
                else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight to the original start point
                    new DraggableKnight(originalStartPoint);
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
        new _controller__WEBPACK_IMPORTED_MODULE_0__.DraggableKnight(board.firstElementChild);
        return board;
    };
    // prettier-ignore
    Build.destinationMarker = function () {
        return ((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "destination-marker" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section top" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg top" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section left" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg left" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section right" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg right" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section bottom" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "leg bottom" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "section" })));
    };
    // prettier-ignore
    Build.mainSection = function () {
        return ((0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", { id: "main-section" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", { id: "run-coords" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container start" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "start-coord", tc: "Start:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "start-coord", type: "text", name: "start-coord" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "input-container destination" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", { for: "destination-coord", tc: "Destination:" }), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", { id: "destination-coord", type: "text", name: "destination-coord" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", { class: "run-coords", tc: "GO" })), (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { class: "previous-path" }, (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { class: "path", tc: "Shortest path from A1 to B3 is 1 move" }))));
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


_controller__WEBPACK_IMPORTED_MODULE_1__.Load.defaultUI();
setTimeout(function () {
    // prettier-ignore
    var boardContainer = document.querySelector(".board-container");
    boardContainer.style.opacity = "1";
}, 0);
setTimeout(function () {
    _controller__WEBPACK_IMPORTED_MODULE_1__.Coords.updateGUI();
}, 0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDZ0I7QUFFNUMsNkNBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVqQixVQUFVLENBQUM7SUFDUCxrQkFBa0I7SUFDbEIsSUFBTSxjQUFjLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUUsQ0FBQztJQUNoRixjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDdkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRU4sVUFBVSxDQUFDO0lBQ1AsK0NBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzdlYjkiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T25lc3Q6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNiMTcwMzY7XG4gIGZvbnQtZmFtaWx5OiBcIk9uZXN0XCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbiAgY29sb3I6ICNmZWZhZTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDdiNjY7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiBmb3JtI3J1bi1jb29yZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIGZvcm0jcnVuLWNvb3JkcyAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuc2VjdGlvbiNtYWluLXNlY3Rpb24gZm9ybSNydW4tY29vcmRzIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogNTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiBmb3JtI3J1bi1jb29yZHMgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlZmZmNTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIC5wcmV2aW91cy1wYXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDcwMHB4O1xuICB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgOGZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDhmciAwLjVmcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTAwbXMgbGluZWFyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZDRhNDY5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jb29yZGluYXRlcy5sZXR0ZXJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY29vcmRpbmF0ZXMubnVtYmVycyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Q0YTQ2OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMztcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUuZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGE0Njk7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmRhcmssIC5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUubGlnaHQge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS52YWxpZC1kcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2QzNDtcbn1cblxuaW1nLmtuaWdodC1waWVjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRlc3RpbmF0aW9uLW1hcmtlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciA1ZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmciA1ZnI7XG4gIGhlaWdodDogNzUlO1xuICB3aWR0aDogNzUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24udG9wIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbi5ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcubGVmdCwgLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnLnJpZ2h0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy50b3AsIC5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy5ib3R0b20ge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFmTTtFQWdCTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBVmM7RUFXZCxnQ0FWZTtFQVdmLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBN0NNO0VBOENOLHlCQXhDUztBQTJCYjtBQWVJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWJaO0FBZVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBOUROO0FBaURWO0FBaUJRO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQWhFQTtFQWlFQSxnQkFBQTtBQWZaO0FBbUJJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqQlI7O0FBcUJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFwRk07RUFxRk4sYUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbEJKO0FBcUJRO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQW5CWjtBQXNCUTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFwQlo7QUF3Qkk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUF0QlI7QUF3QlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdEJaO0FBd0JZO0VBQ0kseUJBM0hOO0FBcUdWO0FBd0JZO0VBQ0kseUJBNUhGO0FBc0dkO0FBeUJZO0VBRUksOENBQUE7QUF4QmhCO0FBMkJZO0VBQ0kseUJBcElIO0FBMkdiOztBQStCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQTVCSjs7QUErQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUE1Qko7QUE4Qkk7RUFDSSxhQUFBO0FBNUJSO0FBOEJRO0VBQ0kscUJBQUE7QUE1Qlo7QUE4QlE7RUFDSSx1QkFBQTtBQTVCWjtBQThCUTtFQUNJLHlCQUFBO0FBNUJaO0FBOEJRO0VBQ0ksMkJBQUE7QUE1Qlo7QUErQlE7RUFDSSx5QkF2S0c7RUF3S0gsa0JBQUE7RUFDQSxpQ0FBQTtBQTdCWjtBQStCWTtFQUVJLFFBQUE7RUFDQSxZQUFBO0FBOUJoQjtBQWdDWTtFQUVJLFNBQUE7RUFDQSxXQUFBO0FBL0JoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3Jlc2V0LmNzc1xcXCI7XFxuLy8gT25lc3QgZm9udFxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9uZXN0OndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiRtYWluLWJnOiAjZmVmYWUzO1xcbiRsaWdodC1zcXVhcmU6ICRtYWluLWJnO1xcbiRkYXJrLXNxdWFyZTogI2Q0YTQ2OTtcXG4kdmFsaWQtZHJvcDogIzAwY2QzNDtcXG4kbWFya2VyLWNvbG9yOiAjMDAwMDAwO1xcbiRnby1idXR0b246ICNiZWZmZjU7XFxuJHNlY3Rpb24tYmc6ICM4ZDdiNjY7XFxuXFxuLy8gZm9udHNcXG4kbWFpbi1mb250LWNvbG9yOiAjYjE3MDM2O1xcbiRtYWluLWZvbnQtZmFtaWx5OiBcXFwiT25lc3RcXFwiLCBzYW5zLXNlcmlmO1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICRtYWluLWZvbnQtY29sb3I7XFxuICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250LWZhbWlseTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuc2VjdGlvbiNtYWluLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBjb2xvcjogJGxpZ2h0LXNxdWFyZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3Rpb24tYmc7XFxuXFxuICAgIGZvcm0jcnVuLWNvb3JkcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXNxdWFyZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ28tYnV0dG9uO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnByZXZpb3VzLXBhdGgge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iZztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA4ZnIgMC41ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgOGZyIDAuNWZyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MDBtcyBsaW5lYXI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICRkYXJrLXNxdWFyZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAuY29vcmRpbmF0ZXMge1xcbiAgICAgICAgJi5sZXR0ZXJzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLm51bWJlcnMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY2hlc3MtYm9hcmQge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGRhcmstc3F1YXJlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAgICAgLnNxdWFyZSB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICAmLmxpZ2h0IHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXNxdWFyZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJi5kYXJrIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstc3F1YXJlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLmRhcmssXFxuICAgICAgICAgICAgJi5saWdodCB7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYudmFsaWQtZHJvcCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2YWxpZC1kcm9wO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5pbWcua25pZ2h0LXBpZWNlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZGVzdGluYXRpb24tbWFya2VyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyIDVmcjtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXG4gICAgLnNlY3Rpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgICYudG9wIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgICAgICAmLmJvdHRvbSB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuICAgICAgICAmLmxlZnQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgICAgICAmLnJpZ2h0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGVnIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFya2VyLWNvbG9yO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgICAgICAgICAgJi5sZWZ0LFxcbiAgICAgICAgICAgICYucmlnaHQge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmLnRvcCxcXG4gICAgICAgICAgICAmLmJvdHRvbSB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIC8qIGNvbG9yOiBpbmhlcml0OyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIGNvbG9yOiBpbmhlcml0OyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBrbmlnaHQgZnJvbSBcIi4vSW1hZ2VzL2tuaWdodC5zdmdcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgYXMgY3JlYXRlIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgQnVpbGQgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBMb2FkIHtcbiAgICBzdGF0aWMgZGVmYXVsdFVJKCkge1xuICAgICAgICBjb25zdCBjb250ZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSE7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChCdWlsZC5tYWluU2VjdGlvbigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChCdWlsZC5ib2FyZENvbnRhaW5lcigpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yZHMge1xuICAgIHN0YXRpYyB1cGRhdGVHVUkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3N0YXJ0LWNvb3JkXCIpITtcblxuICAgICAgICBjb25zdCBkZXN0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJpbnB1dCNkZXN0aW5hdGlvbi1jb29yZFwiLFxuICAgICAgICApITtcblxuICAgICAgICBjb25zdCBzdGFydDogc3RyaW5nID0gQ29vcmRzLmdldFN0YXJ0U3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRlc3Q6IHN0cmluZyB8IG51bGwgPSBDb29yZHMuZ2V0RGVzdFN0cmluZygpO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGFydCwgZGVzdCk7XG5cbiAgICAgICAgc3RhcnRJbnB1dC52YWx1ZSA9IHN0YXJ0O1xuICAgICAgICBkZXN0ID8gKGRlc3RJbnB1dC50ZXh0Q29udGVudCA9IGRlc3QpIDogKGRlc3RJbnB1dC50ZXh0Q29udGVudCA9IFwiXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGFydCgpOiBudW1iZXJbXSB8IGFueSB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0Q29vcmRzKFwic3RhcnQtbG9jYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXJ0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0U3RyaW5nQ29vcmRzKFwic3RhcnQtbG9jYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldERlc3QoKTogbnVtYmVyW10gfCBhbnkge1xuICAgICAgICByZXR1cm4gQ29vcmRzLmdldENvb3JkcyhcImRlc3RpbmF0aW9uXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXN0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDb29yZHMuZ2V0U3RyaW5nQ29vcmRzKFwiZGVzdGluYXRpb25cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENvb3Jkcyh0YXJnZXRDbGFzczogc3RyaW5nKTogbnVtYmVyW10gfCBhbnkge1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gQ29vcmRzLmdldEFsbFNxdWFyZXMoKTtcblxuICAgICAgICBsZXQgY29vcmRzOiBudW1iZXJbXSB8IG51bGwgPSBudWxsO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnModGFyZ2V0Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRBdHRyOiBzdHJpbmcgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKFwiY29vcmRcIikhO1xuICAgICAgICAgICAgICAgIGNvb3JkcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGNvb3JkQXR0ci5zcGxpdChcIi1cIilbMF0pLFxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIoY29vcmRBdHRyLnNwbGl0KFwiLVwiKVsxXSksXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RyaW5nQ29vcmRzKHRhcmdldENsYXNzOiBzdHJpbmcpOiBzdHJpbmcgfCBhbnkge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBDb29yZHMuZ2V0Q29vcmRzKHRhcmdldENsYXNzKTtcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtudWxsLCBcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCJdO1xuICAgICAgICBpZiAoIWNvb3Jkcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2xldHRlcnNbY29vcmRzWzBdXX0ke2Nvb3Jkc1sxXX1gO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGxTcXVhcmVzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlc3RNYXJrZXIge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBhbmltYXRlRGVzdGluYXRpb25NYXJrZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVnXCIpITtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NOYW1lID09PSBcImxlZyB0b3BcIiB8fCBub2RlLmNsYXNzTmFtZSA9PT0gXCJsZWcgYm90dG9tXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZXN0aW5hdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBcIi5jaGVzcy1ib2FyZCAuc3F1YXJlXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgbG9jYXRpb25zLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJrbmlnaHQtbG9jYXRpb25cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcImRlc3RpbmF0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXN0aW5hdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmZpcnN0Q2hpbGQhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGRvIG5vdCBhbGxvdyBwbGFjaW5nIHRoZSBtYXJrZXIgb24gdG9wIG9mIHRoZSBzdGFydCBwb2ludCB3aGVyZSB0aGUga25pZ2h0IHBpZWNlIGlzIGxvY2F0ZWRcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXJ0LWxvY2F0aW9uXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVzdGluYXRpb24uY2xhc3NMaXN0LmFkZChcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChCdWlsZC5kZXN0aW5hdGlvbk1hcmtlcigpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBEZXN0TWFya2VyLmFuaW1hdGVEZXN0aW5hdGlvbk1hcmtlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVLbmlnaHQge1xuICAgIG1vdXNlRG93bjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudEVsZW1lbnQ6IGFueSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0KHBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGluaXQocGFyZW50RWxlbWVudDogYW55ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBwYXJlbnRFbGVtZW50ID8/XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZXNzLWJvYXJkXCIpIS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgICBjb25zdCBrbmlnaHRJbWFnZSA9IGNyZWF0ZShcImltZ1wiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJrbmlnaHQtcGllY2VcIixcbiAgICAgICAgICAgIHNyYzoga25pZ2h0LFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBcImZhbHNlXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGtuaWdodEltYWdlLm9ubW91c2V1cCA9IChlKSA9PiB0aGlzLnNldENsaWNrKGUpO1xuICAgICAgICBrbmlnaHRJbWFnZS5vbm1vdXNlZG93biA9IChlKSA9PiB0aGlzLnNldENsaWNrKGUpO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBpcyBvbmx5IG9uZSBsb2NhdGlvbiB3aXRoIHRoZSBzdGFydCBsb2NhdGlvbiBjbGFzc1xuICAgICAgICB0aGlzLnJlbW92ZUdsb2JhbENsYXNzTmFtZShcInN0YXJ0LWxvY2F0aW9uXCIsIFwiLnNxdWFyZVwiKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3RhcnQtbG9jYXRpb25cIik7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChrbmlnaHRJbWFnZSk7XG4gICAgfVxuXG4gICAgc2V0Q2xpY2soZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGtuaWdodDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtuaWdodC1waWVjZVwiKSE7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBtb3VzZURvd24gcHJvcGVydHkgaWYgbW91c2Vkb3duIG9yIG1vdXNldXAgb24ga25pZ2h0XG4gICAgICAgIC8vIGRyYWdLbmlnaHQgY2hhbmdlcyBsb2NhdGlvbiBvZiB0aGUga25pZ2h0IHBpZWNlIGJhc2VkIG9uIHRoZSBjdXJzb3IgcG9zaXRpb25cblxuICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5kcmFnS25pZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAga25pZ2h0LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgdGhpcy5wbGFjZUtuaWdodChlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmRyYWdLbmlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhZ0tuaWdodCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGtuaWdodDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmtuaWdodC1waWVjZVwiKSE7XG4gICAgICAgIGNvbnN0IGNoZXNzQm9hcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVzcy1ib2FyZFwiKSE7XG5cbiAgICAgICAgaWYgKHRoaXMubW91c2VEb3duKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1dpdGhpbkVsZW1lbnQoZSwgY2hlc3NCb2FyZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVzcyBwaWVjZSBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgY2hlc3MgYm9hcmRcbiAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZIC0ga25pZ2h0Lm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICAgICAgICAgICAgICAgIGtuaWdodC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYIC0ga25pZ2h0Lm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclNxdWFyZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlc3MgcGllY2UgaGFzIHRyYXZlbGVkIG91dCBvZiBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUtuaWdodChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwbGFjZUtuaWdodChlOiBhbnkpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBrbmlnaHQgZnJvbSB0aGUgRE9NXG4gICAgICAgIC8vIGEgbmV3IGtuaWdodCB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBjaGVzcyBib2FyZCB3aGVuIGEgbmV3IERyYWdnYWJsZUtuaWdodCBvYmplY3QgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25pZ2h0LXBpZWNlXCIpIGFzIEhUTUxFbGVtZW50KS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBvcmlnaW5hbFN0YXJ0UG9pbnQgaXMgd2hlcmUgdGhlIGtuaWdodCB3aWxsIGJlIGFwcGVuZGVkIGlmIGl0cyBub3QgaW4gYSB2YWxpZCBzcG90IHVwb24gcGxhY2VtZW50XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU3RhcnRQb2ludDogSFRNTEVsZW1lbnQgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1sb2NhdGlvblwiKSE7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBrbmlnaHQgaGFzIHRyYXZlbGVkIG91dCBvZiBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG4gICAgICAgIC8vIGlmIGl0IGlzIG91dCBvZiBib3VuZHMsIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIG9yaWdpbmFsU3RhcnRQb2ludFxuICAgICAgICBjb25zdCBjaGVzc0JvYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlc3MtYm9hcmRcIikhO1xuICAgICAgICBpZiAoIXRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIGNoZXNzQm9hcmQpKSB7XG4gICAgICAgICAgICBuZXcgRHJhZ2dhYmxlS25pZ2h0KG9yaWdpbmFsU3RhcnRQb2ludCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhdGlvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuXG4gICAgICAgIGxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWREcm9wTG9jKGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBrbmlnaHQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHNwZWNpZmllZCBzcXVhcmUgQU5EIGlzIG9uIGEgdmFsaWQgZHJvcCBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYSBuZXcga25pZ2h0IHRvIHRoZSBzcGVjaWZpZWQgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ga25pZ2h0IGlzIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBzcGVjaWZpZWQgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpcyBOT1QgaW4gYSB2YWxpZCBsb2NhdGlvbiAoY2FuJ3QgZHJvcCBvbiB0aGUgZGVzdGluYXRpb24gcG9pbnQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBhIG5ldyBrbmlnaHQgdG8gdGhlIG9yaWdpbmFsIHN0YXJ0IHBvaW50XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQob3JpZ2luYWxTdGFydFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNXaXRoaW5FbGVtZW50KGU6IGFueSwgZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGJvdW5kaW5nUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZS5jbGllbnRYID49IGJvdW5kaW5nUmVjdC5sZWZ0ICYmXG4gICAgICAgICAgICBlLmNsaWVudFggPD0gYm91bmRpbmdSZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICBlLmNsaWVudFkgPj0gYm91bmRpbmdSZWN0LnRvcCAmJlxuICAgICAgICAgICAgZS5jbGllbnRZIDw9IGJvdW5kaW5nUmVjdC5ib3R0b21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW1vdmVHbG9iYWxDbGFzc05hbWUodG9SZW1vdmU6IHN0cmluZywgcVNlbGVjdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocVNlbGVjdCk7XG5cbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKHRvUmVtb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRMb2NCRyhzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRHJvcExvYyhsb2NhdGlvbjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFsb2NhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkZXN0aW5hdGlvblwiKTtcbiAgICB9XG5cbiAgICBoaWdobGlnaHREcm9wTG9jKHNxdWFyZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcm9wXCIpO1xuICAgIH1cblxuICAgIHJlc2V0TG9jQkcoc3F1YXJlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyb3BcIik7XG4gICAgfVxuXG4gICAgaG92ZXJTcXVhcmUoZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIHNxdWFyZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRHJvcExvYyhzcXVhcmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RHJvcExvYyhzcXVhcmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0TG9jQkcoc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW50ZXJmYWNlIEVWTCB7XG4gICAgW2tleTogc3RyaW5nXTogRXZlbnRMaXN0ZW5lcjtcbn1cblxuaW50ZXJmYWNlIEF0dHJpYnV0ZXMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IEVWTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuOiBBcnJheTxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDbGFzc2VzOiBzdHJpbmdbXSA9IChhdHRyaWJ1dGVzLmNsYXNzIGFzIHN0cmluZykuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnVzZXJDbGFzc2VzKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiZXZsXCIgJiYgdHlwZW9mIGF0dHJpYnV0ZXMuZXZsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50S2V5IGluIGF0dHJpYnV0ZXMuZXZsKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50S2V5LCBhdHRyaWJ1dGVzLmV2bFtldmVudEtleV0gYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInRjXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBEZXN0TWFya2VyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRHJhZ2dhYmxlS25pZ2h0IH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBjcmVhdGUgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBCdWlsZCB7XG4gICAgc3RhdGljIGJvYXJkQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJlbXB0eS1zcGFjZVwiIH0pLFxuICAgICAgICAgICAgICAgIEJ1aWxkLmxldHRlckNvb3JkcygpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImVtcHR5LXJvd1wiIH0pLFxuICAgICAgICAgICAgICAgIEJ1aWxkLm51bWJlckNvb3JkcygpLFxuICAgICAgICAgICAgICAgIEJ1aWxkLmNoZXNzQm9hcmQoKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJlbXB0eS1zcGFjZVwiIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxldHRlckNvb3JkcygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGxldHRlcnM6IHN0cmluZ1tdID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIl07XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBsZXR0ZXJDb29yZHM6IEhUTUxFbGVtZW50ID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29vcmRpbmF0ZXMgbGV0dGVyc1wiIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBsZXR0ZXJzKSB7XG4gICAgICAgICAgICBsZXR0ZXJDb29yZHMuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwibGV0dGVyLWNvb3JkXCIsIHRjOiBgJHtsZXR0ZXJ9YCB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGV0dGVyQ29vcmRzO1xuICAgIH1cblxuICAgIHN0YXRpYyBudW1iZXJDb29yZHMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgbnVtYmVyQ29vcmRzOiBIVE1MRWxlbWVudCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNvb3JkaW5hdGVzIG51bWJlcnNcIiB9KVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIG51bWJlckNvb3Jkcy5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJudW1iZXItY29vcmRcIiwgdGM6IGAke2kudG9TdHJpbmcoKX1gIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJDb29yZHM7XG4gICAgfVxuXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgc3RhdGljIGNoZXNzQm9hcmQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBib2FyZDogSFRNTEVsZW1lbnQgPSBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJjaGVzcy1ib2FyZFwiIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gODsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGxpZ2h0XCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgZGFya1wiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgZGFya1wiLCBjb29yZDogYCR7an0tJHtpfWAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3F1YXJlIGxpZ2h0XCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zOiBIVE1MQ29sbGVjdGlvbiA9IGJvYXJkLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gbG9jYXRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgICBzcXVhcmU/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBEZXN0TWFya2VyLnNldERlc3RpbmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBEcmFnZ2FibGVLbmlnaHQoYm9hcmQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgZGVzdGluYXRpb25NYXJrZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGVzdGluYXRpb24tbWFya2VyXCIgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiB0b3BcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgdG9wXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uIGxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgbGVmdFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiByaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImxlZyByaWdodFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiBib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgYm90dG9tXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBtYWluU2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjcmVhdGUoXCJzZWN0aW9uXCIsIHsgaWQ6IFwibWFpbi1zZWN0aW9uXCIgfSwgXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZm9ybVwiLCB7IGlkOiBcInJ1bi1jb29yZHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1jb250YWluZXIgc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwibGFiZWxcIiwgeyBmb3I6IFwic3RhcnQtY29vcmRcIiwgdGM6IFwiU3RhcnQ6XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJpbnB1dFwiLCB7IGlkOiBcInN0YXJ0LWNvb3JkXCIsIHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcInN0YXJ0LWNvb3JkXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtY29udGFpbmVyIGRlc3RpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImxhYmVsXCIsIHsgZm9yOiBcImRlc3RpbmF0aW9uLWNvb3JkXCIsIHRjOiBcIkRlc3RpbmF0aW9uOlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiaW5wdXRcIiwgeyBpZDogXCJkZXN0aW5hdGlvbi1jb29yZFwiLCB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJkZXN0aW5hdGlvbi1jb29yZFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImJ1dHRvblwiLCB7IGNsYXNzOiBcInJ1bi1jb29yZHNcIiwgdGM6IFwiR09cIiB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInByZXZpb3VzLXBhdGhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJzcGFuXCIsIHsgY2xhc3M6IFwicGF0aFwiLCB0YzogXCJTaG9ydGVzdCBwYXRoIGZyb20gQTEgdG8gQjMgaXMgMSBtb3ZlXCIgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IExvYWQsIENvb3JkcyB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuTG9hZC5kZWZhdWx0VUkoKTtcblxuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgYm9hcmRDb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXJcIikhO1xuICAgIGJvYXJkQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn0sIDApO1xuXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBDb29yZHMudXBkYXRlR1VJKCk7XG59LCAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==