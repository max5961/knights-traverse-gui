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

img.knight-svg {
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
}`, "",{"version":3,"sources":["webpack://./src/style/index.scss"],"names":[],"mappings":"AAgBA;EACI,aAAA;EACA,YAAA;EACA,yBAfM;EAgBN,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAVc;EAWd,gCAVe;EAWf,kBAAA;AAbJ;;AAgBA;EACI,YAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,qCAAA;AAbJ;;AAgBA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,SAAA;EACA,cA7CM;EA8CN,yBAxCS;AA2Bb;AAeI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;AAbR;AAeQ;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AAbZ;AAeY;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBA9DN;AAiDV;AAiBQ;EACI,0BAAA;EACA,kBAAA;EACA,yBAhEA;EAiEA,gBAAA;AAfZ;AAmBI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAjBR;;AAqBA;EACI,aAAA;EACA,YAAA;EACA,yBApFM;EAqFN,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,UAAA;EACA,iCAAA;EACA,yBAAA;EACA,kBAAA;AAlBJ;AAqBQ;EACI,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,mBAAA;AAnBZ;AAsBQ;EACI,aAAA;EACA,kCAAA;EACA,qBAAA;EACA,mBAAA;AApBZ;AAwBI;EACI,aAAA;EACA,kCAAA;EACA,qCAAA;EACA,yBAAA;EACA,kBAAA;AAtBR;AAwBQ;EACI,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAtBZ;AAwBY;EACI,yBA3HN;AAqGV;AAwBY;EACI,yBA5HF;AAsGd;AAyBY;EAEI,8CAAA;AAxBhB;AA2BY;EACI,yBApIH;AA2Gb;;AA+BA;EACI,kBAAA;EACA,UAAA;AA5BJ;;AA+BA;EACI,aAAA;EACA,kCAAA;EACA,+BAAA;EACA,WAAA;EACA,UAAA;EACA,wBAAA;AA5BJ;AA8BI;EACI,aAAA;AA5BR;AA8BQ;EACI,qBAAA;AA5BZ;AA8BQ;EACI,uBAAA;AA5BZ;AA8BQ;EACI,yBAAA;AA5BZ;AA8BQ;EACI,2BAAA;AA5BZ;AA+BQ;EACI,yBAvKG;EAwKH,kBAAA;EACA,iCAAA;AA7BZ;AA+BY;EAEI,QAAA;EACA,YAAA;AA9BhB;AAgCY;EAEI,SAAA;EACA,WAAA;AA/BhB","sourcesContent":["@import \"./reset.css\";\n// Onest font\n@import url(\"https://fonts.googleapis.com/css2?family=Onest:wght@500&display=swap\");\n\n$main-bg: #fefae3;\n$light-square: $main-bg;\n$dark-square: #d4a469;\n$valid-drop: #00cd34;\n$marker-color: #000000;\n$go-button: #befff5;\n$section-bg: #8d7b66;\n\n// fonts\n$main-font-color: #b17036;\n$main-font-family: \"Onest\", sans-serif;\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: $main-bg;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: $main-font-color;\n    font-family: $main-font-family;\n    position: relative;\n}\n\n#content {\n    height: 100%;\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 1;\n    transition: opacity 500ms ease-in-out;\n}\n\nsection#main-section {\n    width: 100%;\n    height: auto;\n    padding: 10px;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 20px;\n    color: $light-square;\n    background-color: $section-bg;\n\n    form#run-coords {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n\n        .input-container {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n\n            input {\n                width: 55px;\n                border: none;\n                border-radius: 5px;\n                background-color: $light-square;\n            }\n        }\n\n        button {\n            padding: 5px 20px 5px 20px;\n            border-radius: 5px;\n            background-color: $go-button;\n            font-weight: 900;\n        }\n    }\n\n    .previous-path {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n}\n\n.board-container {\n    height: 700px;\n    width: 700px;\n    background-color: $main-bg;\n    display: grid;\n    grid-template-rows: 0.5fr 8fr 0.5fr;\n    grid-template-columns: 0.5fr 8fr 0.5fr;\n    opacity: 0;\n    transition: opacity 1500ms linear;\n    border: 5px solid $dark-square;\n    border-radius: 5px;\n\n    .coordinates {\n        &.letters {\n            display: grid;\n            grid-template-columns: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n\n        &.numbers {\n            display: grid;\n            grid-template-rows: repeat(8, 1fr);\n            justify-items: center;\n            align-items: center;\n        }\n    }\n\n    .chess-board {\n        display: grid;\n        grid-template-rows: repeat(8, 1fr);\n        grid-template-columns: repeat(8, 1fr);\n        border: 3px solid $dark-square;\n        border-radius: 5px;\n\n        .square {\n            border-radius: 2px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            &.light {\n                background-color: $light-square;\n            }\n            &.dark {\n                background-color: $dark-square;\n            }\n\n            &.dark,\n            &.light {\n                transition: background-color 100ms ease-in-out;\n            }\n\n            &.valid-drop {\n                background-color: $valid-drop;\n            }\n        }\n    }\n}\n\nimg.knight-svg {\n    position: absolute;\n    z-index: 1;\n}\n\n.destination-marker {\n    display: grid;\n    grid-template-columns: 5fr 1fr 5fr;\n    grid-template-rows: 5fr 1fr 5fr;\n    height: 75%;\n    width: 75%;\n    transform: rotate(45deg);\n\n    .section {\n        display: flex;\n\n        &.top {\n            align-items: flex-end;\n        }\n        &.bottom {\n            align-items: flex-start;\n        }\n        &.left {\n            justify-content: flex-end;\n        }\n        &.right {\n            justify-content: flex-start;\n        }\n\n        .leg {\n            background-color: $marker-color;\n            border-radius: 5px;\n            transition: all 150ms ease-in-out;\n\n            &.left,\n            &.right {\n                width: 0;\n                height: 100%;\n            }\n            &.top,\n            &.bottom {\n                height: 0;\n                width: 100%;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   ChessBoard: () => (/* binding */ ChessBoard),
/* harmony export */   KnightPiece: () => (/* binding */ KnightPiece),
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

var ChessBoard = /** @class */ (function () {
    function ChessBoard() {
    }
    // prettier-ignore
    ChessBoard.animateDestinationMarker = function () {
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
    ChessBoard.setDestination = function (e) {
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
        if (destination.classList.contains("start-point")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(_view__WEBPACK_IMPORTED_MODULE_2__.Build.destinationMarker());
        setTimeout(function () {
            ChessBoard.animateDestinationMarker();
        });
    };
    return ChessBoard;
}());

var KnightPiece = /** @class */ (function () {
    function KnightPiece(parentElement) {
        var _this = this;
        if (parentElement === void 0) { parentElement = null; }
        this.dragImage = function (e) {
            var knight = document.querySelector(".knight-svg");
            var chessBoard = document.querySelector(".chess-board");
            if (_this.mouseDown) {
                var chessBoardRect = chessBoard.getBoundingClientRect();
                if (_this.isWithinElement(e, chessBoardRect)) {
                    // chess piece is within the bounds of the chess board
                    knight.style.top = "".concat(e.clientY - knight.offsetHeight / 2, "px");
                    knight.style.left = "".concat(e.clientX - knight.offsetWidth / 2, "px");
                    _this.hoverSquare(e);
                }
                else {
                    // chess piece has traveled out of bounds of the chess board
                    _this.mouseDown = false;
                    knight.style.cursor = "default";
                    _this.placeImage(e);
                }
            }
        };
        this.mouseDown = false;
        this.startHTMLClass = "start-point";
        this.destHTMLClass = "destination";
        this.init(parentElement);
    }
    KnightPiece.prototype.init = function (parentElement) {
        var _this = this;
        if (parentElement === void 0) { parentElement = null; }
        parentElement !== null && parentElement !== void 0 ? parentElement : document.querySelector(".chess-board").firstElementChild;
        var knightImage = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
            class: "knight-svg",
            src: _Images_knight_svg__WEBPACK_IMPORTED_MODULE_0__,
            draggable: "false",
        });
        knightImage.onmouseup = function (e) { return _this.setClick(e); };
        knightImage.onmousedown = function (e) { return _this.setClick(e); };
        // make sure there is only one location with the start point class
        this.removeGlobalClassName(this.startHTMLClass, ".square");
        parentElement.classList.add(this.startHTMLClass);
        parentElement.appendChild(knightImage);
    };
    KnightPiece.prototype.removeGlobalClassName = function (toRemove, qSelect) {
        var _this = this;
        var squares = document.querySelectorAll(qSelect);
        squares.forEach(function (square) {
            square.classList.remove(toRemove);
            _this.resetBG(square);
        });
    };
    KnightPiece.prototype.placeImage = function (e) {
        var _this = this;
        // remove the knight from the DOM
        // a new knight will be appended to the chess board when a new KnightPiece object is initialized
        document.querySelector(".knight-svg").remove();
        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        var originalStartPoint = document.querySelector(".start-point");
        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        var chessBoard = document.querySelector(".chess-board");
        if (!this.isWithinElement(e, chessBoard.getBoundingClientRect())) {
            new KnightPiece(originalStartPoint);
            return;
        }
        var locations = document.querySelectorAll(".square");
        locations.forEach(function (location) {
            var locationRect = location.getBoundingClientRect();
            if (_this.isWithinElement(e, locationRect)) {
                if (_this.isValidDropPoint(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight tied to a new KnightPiece object
                    new KnightPiece(location);
                    return;
                }
                else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight in place of the original start point
                    new KnightPiece(originalStartPoint);
                    return;
                }
            }
        });
    };
    KnightPiece.prototype.isWithinElement = function (e, bRect) {
        return (e.clientX >= bRect.left &&
            e.clientX <= bRect.right &&
            e.clientY >= bRect.top &&
            e.clientY <= bRect.bottom);
    };
    KnightPiece.prototype.isValidDropPoint = function (square) {
        return !square.classList.contains(this.destHTMLClass);
    };
    KnightPiece.prototype.highlightDropPoint = function (square) {
        var highlightColor = "#00cd34";
        square.classList.add("valid-drop");
    };
    KnightPiece.prototype.resetBG = function (square) {
        square.classList.remove("valid-drop");
    };
    KnightPiece.prototype.hoverSquare = function (e) {
        var _this = this;
        var squares = document.querySelectorAll(".square");
        squares.forEach(function (square) {
            if (_this.isWithinElement(e, square.getBoundingClientRect())) {
                if (_this.isValidDropPoint(square)) {
                    _this.highlightDropPoint(square);
                    return;
                }
            }
            _this.resetBG(square);
        });
    };
    KnightPiece.prototype.setClick = function (e) {
        var chessBoard = document.querySelector(".chess-board");
        var knight = document.querySelector(".knight-svg");
        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            chessBoard.addEventListener("mousemove", this.dragImage);
        }
        if (e.type === "mouseup") {
            this.mouseDown = false;
            knight.style.cursor = "default";
            this.placeImage(e);
            chessBoard.removeEventListener("mousemove", this.dragImage);
            return;
        }
    };
    return KnightPiece;
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
            square === null || square === void 0 ? void 0 : square.addEventListener("click", _controller__WEBPACK_IMPORTED_MODULE_0__.ChessBoard.setDestination);
        }
        var knightPiece = new _controller__WEBPACK_IMPORTED_MODULE_0__.KnightPiece(board.children[3]);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLHVDQUF1QyxFQUFFLENBQUMsQ0FDakYsQ0FDSixDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNIRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDUTtBQUVwQyw2Q0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRWpCLFVBQVUsQ0FBQztJQUNQLGtCQUFrQjtJQUNsQixJQUFNLGNBQWMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBRSxDQUFDO0lBQ2hGLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUN2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL3N0eWxlL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXNlMS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzdlYjkiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Jhc2UxLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXNlMS8uL3NyYy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL2NyZWF0ZUVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYmFzZTEvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXNlMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jhc2UxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmFzZTEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Jhc2UxLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T25lc3Q6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYWUzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNiMTcwMzY7XG4gIGZvbnQtZmFtaWx5OiBcIk9uZXN0XCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbiAgY29sb3I6ICNmZWZhZTM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDdiNjY7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiBmb3JtI3J1bi1jb29yZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIGZvcm0jcnVuLWNvb3JkcyAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuc2VjdGlvbiNtYWluLXNlY3Rpb24gZm9ybSNydW4tY29vcmRzIC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogNTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG59XG5zZWN0aW9uI21haW4tc2VjdGlvbiBmb3JtI3J1bi1jb29yZHMgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDIwcHggNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlZmZmNTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbnNlY3Rpb24jbWFpbi1zZWN0aW9uIC5wcmV2aW91cy1wYXRoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDcwMHB4O1xuICB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZhZTM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgOGZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDhmciAwLjVmcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTAwbXMgbGluZWFyO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZDRhNDY5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jb29yZGluYXRlcy5sZXR0ZXJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY29vcmRpbmF0ZXMubnVtYmVycyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2Q0YTQ2OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmFlMztcbn1cbi5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUuZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGE0Njk7XG59XG4uYm9hcmQtY29udGFpbmVyIC5jaGVzcy1ib2FyZCAuc3F1YXJlLmRhcmssIC5ib2FyZC1jb250YWluZXIgLmNoZXNzLWJvYXJkIC5zcXVhcmUubGlnaHQge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmJvYXJkLWNvbnRhaW5lciAuY2hlc3MtYm9hcmQgLnNxdWFyZS52YWxpZC1kcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2QzNDtcbn1cblxuaW1nLmtuaWdodC1zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kZXN0aW5hdGlvbi1tYXJrZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgNWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgNWZyO1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDc1JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLnRvcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24uYm90dG9tIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uLmxlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xufVxuLmRlc3RpbmF0aW9uLW1hcmtlciAuc2VjdGlvbiAubGVnLmxlZnQsIC5kZXN0aW5hdGlvbi1tYXJrZXIgLnNlY3Rpb24gLmxlZy5yaWdodCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcudG9wLCAuZGVzdGluYXRpb24tbWFya2VyIC5zZWN0aW9uIC5sZWcuYm90dG9tIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBZk07RUFnQk4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQVZjO0VBV2QsZ0NBVmU7RUFXZixrQkFBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQWJKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxjQTdDTTtFQThDTix5QkF4Q1M7QUEyQmI7QUFlSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBYlI7QUFlUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFiWjtBQWVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQTlETjtBQWlEVjtBQWlCUTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFoRUE7RUFpRUEsZ0JBQUE7QUFmWjtBQW1CSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakJSOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBcEZNO0VBcUZOLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQWxCSjtBQXFCUTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFuQlo7QUFzQlE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBcEJaO0FBd0JJO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBdEJSO0FBd0JRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXRCWjtBQXdCWTtFQUNJLHlCQTNITjtBQXFHVjtBQXdCWTtFQUNJLHlCQTVIRjtBQXNHZDtBQXlCWTtFQUVJLDhDQUFBO0FBeEJoQjtBQTJCWTtFQUNJLHlCQXBJSDtBQTJHYjs7QUErQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUE1Qko7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FBNUJKO0FBOEJJO0VBQ0ksYUFBQTtBQTVCUjtBQThCUTtFQUNJLHFCQUFBO0FBNUJaO0FBOEJRO0VBQ0ksdUJBQUE7QUE1Qlo7QUE4QlE7RUFDSSx5QkFBQTtBQTVCWjtBQThCUTtFQUNJLDJCQUFBO0FBNUJaO0FBK0JRO0VBQ0kseUJBdktHO0VBd0tILGtCQUFBO0VBQ0EsaUNBQUE7QUE3Qlo7QUErQlk7RUFFSSxRQUFBO0VBQ0EsWUFBQTtBQTlCaEI7QUFnQ1k7RUFFSSxTQUFBO0VBQ0EsV0FBQTtBQS9CaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi9yZXNldC5jc3NcXFwiO1xcbi8vIE9uZXN0IGZvbnRcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbmVzdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4kbWFpbi1iZzogI2ZlZmFlMztcXG4kbGlnaHQtc3F1YXJlOiAkbWFpbi1iZztcXG4kZGFyay1zcXVhcmU6ICNkNGE0Njk7XFxuJHZhbGlkLWRyb3A6ICMwMGNkMzQ7XFxuJG1hcmtlci1jb2xvcjogIzAwMDAwMDtcXG4kZ28tYnV0dG9uOiAjYmVmZmY1O1xcbiRzZWN0aW9uLWJnOiAjOGQ3YjY2O1xcblxcbi8vIGZvbnRzXFxuJG1haW4tZm9udC1jb2xvcjogI2IxNzAzNjtcXG4kbWFpbi1mb250LWZhbWlseTogXFxcIk9uZXN0XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iZztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiAkbWFpbi1mb250LWNvbG9yO1xcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udC1mYW1pbHk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbnNlY3Rpb24jbWFpbi1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN0aW9uLWJnO1xcblxcbiAgICBmb3JtI3J1bi1jb29yZHMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvLWJ1dHRvbjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5wcmV2aW91cy1wYXRoIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgOGZyIDAuNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDhmciAwLjVmcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTAwbXMgbGluZWFyO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAkZGFyay1zcXVhcmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgLmNvb3JkaW5hdGVzIHtcXG4gICAgICAgICYubGV0dGVycyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5udW1iZXJzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNoZXNzLWJvYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRkYXJrLXNxdWFyZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAgIC5zcXVhcmUge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgJi5saWdodCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1zcXVhcmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICYuZGFyayB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXNxdWFyZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJi5kYXJrLFxcbiAgICAgICAgICAgICYubGlnaHQge1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmLnZhbGlkLWRyb3Age1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsaWQtZHJvcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuaW1nLmtuaWdodC1zdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kZXN0aW5hdGlvbi1tYXJrZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgNWZyO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcbiAgICAuc2VjdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgJi50b3Age1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgIH1cXG4gICAgICAgICYuYm90dG9tIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG4gICAgICAgICYubGVmdCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIH1cXG4gICAgICAgICYucmlnaHQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5sZWcge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXJrZXItY29sb3I7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgICAgICAgICAmLmxlZnQsXFxuICAgICAgICAgICAgJi5yaWdodCB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICYudG9wLFxcbiAgICAgICAgICAgICYuYm90dG9tIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgLyogY29sb3I6IGluaGVyaXQ7ICovXG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGhlaWdodDogMzVweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgLyogY29sb3I6IGluaGVyaXQ7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGtuaWdodCBmcm9tIFwiLi9JbWFnZXMva25pZ2h0LnN2Z1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBjcmVhdGUgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBCdWlsZCB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIExvYWQge1xuICAgIHN0YXRpYyBkZWZhdWx0VUkoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpITtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLm1haW5TZWN0aW9uKCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKEJ1aWxkLmJvYXJkQ29udGFpbmVyKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoZXNzQm9hcmQge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBhbmltYXRlRGVzdGluYXRpb25NYXJrZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGVnXCIpITtcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhc3NOYW1lID09PSBcImxlZyB0b3BcIiB8fCBub2RlLmNsYXNzTmFtZSA9PT0gXCJsZWcgYm90dG9tXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXREZXN0aW5hdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9jYXRpb25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICBcIi5jaGVzcy1ib2FyZCAuc3F1YXJlXCIsXG4gICAgICAgICk7XG5cbiAgICAgICAgbG9jYXRpb25zLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJrbmlnaHQtbG9jYXRpb25cIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcImRlc3RpbmF0aW9uXCIpKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJkZXN0aW5hdGlvblwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmZpcnN0Q2hpbGQhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGRvIG5vdCBhbGxvdyBwbGFjaW5nIHRoZSBtYXJrZXIgb24gdG9wIG9mIHRoZSBzdGFydCBwb2ludCB3aGVyZSB0aGUga25pZ2h0IHBpZWNlIGlzIGxvY2F0ZWRcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInN0YXJ0LXBvaW50XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVzdGluYXRpb24uY2xhc3NMaXN0LmFkZChcImRlc3RpbmF0aW9uXCIpO1xuICAgICAgICBkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChCdWlsZC5kZXN0aW5hdGlvbk1hcmtlcigpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBDaGVzc0JvYXJkLmFuaW1hdGVEZXN0aW5hdGlvbk1hcmtlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLbmlnaHRQaWVjZSB7XG4gICAgbW91c2VEb3duOiBib29sZWFuO1xuICAgIHN0YXJ0SFRNTENsYXNzOiBzdHJpbmc7XG4gICAgZGVzdEhUTUxDbGFzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50RWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0SFRNTENsYXNzID0gXCJzdGFydC1wb2ludFwiO1xuICAgICAgICB0aGlzLmRlc3RIVE1MQ2xhc3MgPSBcImRlc3RpbmF0aW9uXCI7XG4gICAgICAgIHRoaXMuaW5pdChwYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpbml0KHBhcmVudEVsZW1lbnQ6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgcGFyZW50RWxlbWVudCA/P1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVzcy1ib2FyZFwiKSEuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgY29uc3Qga25pZ2h0SW1hZ2UgPSBjcmVhdGUoXCJpbWdcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFwia25pZ2h0LXN2Z1wiLFxuICAgICAgICAgICAgc3JjOiBrbmlnaHQsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IFwiZmFsc2VcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAga25pZ2h0SW1hZ2Uub25tb3VzZXVwID0gKGUpID0+IHRoaXMuc2V0Q2xpY2soZSk7XG4gICAgICAgIGtuaWdodEltYWdlLm9ubW91c2Vkb3duID0gKGUpID0+IHRoaXMuc2V0Q2xpY2soZSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlIGlzIG9ubHkgb25lIGxvY2F0aW9uIHdpdGggdGhlIHN0YXJ0IHBvaW50IGNsYXNzXG4gICAgICAgIHRoaXMucmVtb3ZlR2xvYmFsQ2xhc3NOYW1lKHRoaXMuc3RhcnRIVE1MQ2xhc3MsIFwiLnNxdWFyZVwiKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3RhcnRIVE1MQ2xhc3MpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoa25pZ2h0SW1hZ2UpO1xuICAgIH1cblxuICAgIHJlbW92ZUdsb2JhbENsYXNzTmFtZSh0b1JlbW92ZTogc3RyaW5nLCBxU2VsZWN0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxU2VsZWN0KTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKHRvUmVtb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRCRyhzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmFnSW1hZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGxldCBrbmlnaHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rbmlnaHQtc3ZnXCIpITtcbiAgICAgICAgY29uc3QgY2hlc3NCb2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZXNzLWJvYXJkXCIpITtcblxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZXNzQm9hcmRSZWN0ID0gY2hlc3NCb2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzV2l0aGluRWxlbWVudChlLCBjaGVzc0JvYXJkUmVjdCkpIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVzcyBwaWVjZSBpcyB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgY2hlc3MgYm9hcmRcbiAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZIC0ga25pZ2h0Lm9mZnNldEhlaWdodCAvIDJ9cHhgO1xuICAgICAgICAgICAgICAgIGtuaWdodC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYIC0ga25pZ2h0Lm9mZnNldFdpZHRoIC8gMn1weGA7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlclNxdWFyZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlc3MgcGllY2UgaGFzIHRyYXZlbGVkIG91dCBvZiBib3VuZHMgb2YgdGhlIGNoZXNzIGJvYXJkXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZUltYWdlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHBsYWNlSW1hZ2UoZTogYW55KSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUga25pZ2h0IGZyb20gdGhlIERPTVxuICAgICAgICAvLyBhIG5ldyBrbmlnaHQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgY2hlc3MgYm9hcmQgd2hlbiBhIG5ldyBLbmlnaHRQaWVjZSBvYmplY3QgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua25pZ2h0LXN2Z1wiKSBhcyBIVE1MRWxlbWVudCkucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gb3JpZ2luYWxTdGFydFBvaW50IGlzIHdoZXJlIHRoZSBrbmlnaHQgd2lsbCBiZSBhcHBlbmRlZCBpZiBpdHMgbm90IGluIGEgdmFsaWQgc3BvdCB1cG9uIHBsYWNlbWVudFxuICAgICAgICBjb25zdCBvcmlnaW5hbFN0YXJ0UG9pbnQ6IEhUTUxFbGVtZW50ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtcG9pbnRcIikhO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUga25pZ2h0IGhhcyB0cmF2ZWxlZCBvdXQgb2YgYm91bmRzIG9mIHRoZSBjaGVzcyBib2FyZFxuICAgICAgICAvLyBpZiBpdCBpcyBvdXQgb2YgYm91bmRzLCBhcHBlbmQgYSBuZXcga25pZ2h0IHRvIHRoZSBvcmlnaW5hbFN0YXJ0UG9pbnRcbiAgICAgICAgY29uc3QgY2hlc3NCb2FyZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZXNzLWJvYXJkXCIpITtcbiAgICAgICAgaWYgKCF0aGlzLmlzV2l0aGluRWxlbWVudChlLCBjaGVzc0JvYXJkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSkge1xuICAgICAgICAgICAgbmV3IEtuaWdodFBpZWNlKG9yaWdpbmFsU3RhcnRQb2ludCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhdGlvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgICAgICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uUmVjdCA9IGxvY2F0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIGxvY2F0aW9uUmVjdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRHJvcFBvaW50KGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBrbmlnaHQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHNwZWNpZmllZCBzcXVhcmUgQU5EIGlzIG9uIGEgdmFsaWQgZHJvcCBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYSBuZXcga25pZ2h0IHRpZWQgdG8gYSBuZXcgS25pZ2h0UGllY2Ugb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG5ldyBLbmlnaHRQaWVjZShsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBrbmlnaHQgaXMgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIHNwZWNpZmllZCBzcXVhcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGlzIE5PVCBpbiBhIHZhbGlkIGxvY2F0aW9uIChjYW4ndCBkcm9wIG9uIHRoZSBkZXN0aW5hdGlvbiBwb2ludClcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGEgbmV3IGtuaWdodCBpbiBwbGFjZSBvZiB0aGUgb3JpZ2luYWwgc3RhcnQgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgbmV3IEtuaWdodFBpZWNlKG9yaWdpbmFsU3RhcnRQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzV2l0aGluRWxlbWVudChlOiBhbnksIGJSZWN0OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGUuY2xpZW50WCA+PSBiUmVjdC5sZWZ0ICYmXG4gICAgICAgICAgICBlLmNsaWVudFggPD0gYlJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgIGUuY2xpZW50WSA+PSBiUmVjdC50b3AgJiZcbiAgICAgICAgICAgIGUuY2xpZW50WSA8PSBiUmVjdC5ib3R0b21cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRHJvcFBvaW50KHNxdWFyZTogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGVzdEhUTUxDbGFzcyk7XG4gICAgfVxuXG4gICAgaGlnaGxpZ2h0RHJvcFBvaW50KHNxdWFyZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0Q29sb3IgPSBcIiMwMGNkMzRcIjtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcm9wXCIpO1xuICAgIH1cblxuICAgIHJlc2V0Qkcoc3F1YXJlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyb3BcIik7XG4gICAgfVxuXG4gICAgaG92ZXJTcXVhcmUoZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNxdWFyZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5FbGVtZW50KGUsIHNxdWFyZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRHJvcFBvaW50KHNxdWFyZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHREcm9wUG9pbnQoc3F1YXJlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNldEJHKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldENsaWNrKGU6IGFueSkge1xuICAgICAgICBjb25zdCBjaGVzc0JvYXJkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hlc3MtYm9hcmRcIikhO1xuICAgICAgICBjb25zdCBrbmlnaHQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5rbmlnaHQtc3ZnXCIpITtcblxuICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJncmFiXCI7XG4gICAgICAgICAgICBjaGVzc0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5kcmFnSW1hZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICBrbmlnaHQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSW1hZ2UoZSk7XG4gICAgICAgICAgICBjaGVzc0JvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5kcmFnSW1hZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW50ZXJmYWNlIEVWTCB7XG4gICAgW2tleTogc3RyaW5nXTogRXZlbnRMaXN0ZW5lcjtcbn1cblxuaW50ZXJmYWNlIEF0dHJpYnV0ZXMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IEVWTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuOiBBcnJheTxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoa2V5ID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJDbGFzc2VzOiBzdHJpbmdbXSA9IChhdHRyaWJ1dGVzLmNsYXNzIGFzIHN0cmluZykuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLnVzZXJDbGFzc2VzKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiZXZsXCIgJiYgdHlwZW9mIGF0dHJpYnV0ZXMuZXZsID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50S2V5IGluIGF0dHJpYnV0ZXMuZXZsKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50S2V5LCBhdHRyaWJ1dGVzLmV2bFtldmVudEtleV0gYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInRjXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBDaGVzc0JvYXJkIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgS25pZ2h0UGllY2UgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIGNyZWF0ZSB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEJ1aWxkIHtcbiAgICBzdGF0aWMgYm9hcmRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImVtcHR5LXNwYWNlXCIgfSksXG4gICAgICAgICAgICAgICAgQnVpbGQubGV0dGVyQ29vcmRzKCksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZW1wdHktcm93XCIgfSksXG4gICAgICAgICAgICAgICAgQnVpbGQubnVtYmVyQ29vcmRzKCksXG4gICAgICAgICAgICAgICAgQnVpbGQuY2hlc3NCb2FyZCgpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImVtcHR5LXNwYWNlXCIgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbGV0dGVyQ29vcmRzKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgbGV0dGVyczogc3RyaW5nW10gPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGNvbnN0IGxldHRlckNvb3JkczogSFRNTEVsZW1lbnQgPSBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJjb29yZGluYXRlcyBsZXR0ZXJzXCIgfSk7XG4gICAgICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIGxldHRlcnMpIHtcbiAgICAgICAgICAgIGxldHRlckNvb3Jkcy5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZXR0ZXItY29vcmRcIiwgdGM6IGAke2xldHRlcn1gIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZXR0ZXJDb29yZHM7XG4gICAgfVxuXG4gICAgc3RhdGljIG51bWJlckNvb3JkcygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBudW1iZXJDb29yZHM6IEhUTUxFbGVtZW50ID0gY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiY29vcmRpbmF0ZXMgbnVtYmVyc1wiIH0pXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgbnVtYmVyQ29vcmRzLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcIm51bWJlci1jb29yZFwiLCB0YzogYCR7aS50b1N0cmluZygpfWAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bWJlckNvb3JkcztcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgY2hlc3NCb2FyZCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGJvYXJkOiBIVE1MRWxlbWVudCA9IGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNoZXNzLWJvYXJkXCIgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgbGlnaHRcIiwgY29vcmQ6IGAke2p9LSR7aX1gIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNxdWFyZSBkYXJrXCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNxdWFyZSBkYXJrXCIsIGNvb3JkOiBgJHtqfS0ke2l9YCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzcXVhcmUgbGlnaHRcIiwgY29vcmQ6IGAke2p9LSR7aX1gIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhdGlvbnM6IEhUTUxDb2xsZWN0aW9uID0gYm9hcmQuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBsb2NhdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgIHNxdWFyZT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIENoZXNzQm9hcmQuc2V0RGVzdGluYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga25pZ2h0UGllY2UgPSBuZXcgS25pZ2h0UGllY2UoYm9hcmQuY2hpbGRyZW5bM10pO1xuXG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBzdGF0aWMgZGVzdGluYXRpb25NYXJrZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZGVzdGluYXRpb24tbWFya2VyXCIgfSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiB0b3BcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgdG9wXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uIGxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgbGVmdFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiByaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImxlZyByaWdodFwiIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZWN0aW9uXCIgfSksXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic2VjdGlvbiBib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJsZWcgYm90dG9tXCIgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNlY3Rpb25cIiB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHN0YXRpYyBtYWluU2VjdGlvbigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjcmVhdGUoXCJzZWN0aW9uXCIsIHsgaWQ6IFwibWFpbi1zZWN0aW9uXCIgfSwgXG4gICAgICAgICAgICAgICAgY3JlYXRlKFwiZm9ybVwiLCB7IGlkOiBcInJ1bi1jb29yZHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJpbnB1dC1jb250YWluZXIgc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwibGFiZWxcIiwgeyBmb3I6IFwic3RhcnQtY29vcmRcIiwgdGM6IFwiU3RhcnQ6XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJpbnB1dFwiLCB7IGlkOiBcInN0YXJ0LWNvb3JkXCIsIHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcInN0YXJ0LWNvb3JkXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtY29udGFpbmVyIGRlc3RpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImxhYmVsXCIsIHsgZm9yOiBcImRlc3RpbmF0aW9uLWNvb3JkXCIsIHRjOiBcIkRlc3RpbmF0aW9uOlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlKFwiaW5wdXRcIiwgeyBpZDogXCJkZXN0aW5hdGlvbi1jb29yZFwiLCB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJkZXN0aW5hdGlvbi1jb29yZFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZShcImJ1dHRvblwiLCB7IGNsYXNzOiBcInJ1bi1jb29yZHNcIiwgdGM6IFwiR09cIiB9KSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInByZXZpb3VzLXBhdGhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGUoXCJzcGFuXCIsIHsgY2xhc3M6IFwicGF0aFwiLCB0YzogXCJTaG9ydGVzdCBwYXRoIGZyb20gQTEgdG8gQjMgaXMgMSBtb3ZlXCIgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IExvYWQgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbkxvYWQuZGVmYXVsdFVJKCk7XG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtY29udGFpbmVyXCIpITtcbiAgICBib2FyZENvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG59LCAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==