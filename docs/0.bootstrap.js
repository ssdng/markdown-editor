(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/markdown_editor.js":
/*!*********************************!*\
  !*** ../pkg/markdown_editor.js ***!
  \*********************************/
/*! exports provided: greet, parse_markdown, __wbg_alert_c1db9c936bf8198a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_editor_bg.wasm */ \"../pkg/markdown_editor_bg.wasm\");\n/* harmony import */ var _markdown_editor_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown_editor_bg.js */ \"../pkg/markdown_editor_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _markdown_editor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parse_markdown\", function() { return _markdown_editor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"parse_markdown\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_c1db9c936bf8198a\", function() { return _markdown_editor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_c1db9c936bf8198a\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/markdown_editor.js?");

/***/ }),

/***/ "../pkg/markdown_editor_bg.js":
/*!************************************!*\
  !*** ../pkg/markdown_editor_bg.js ***!
  \************************************/
/*! exports provided: greet, parse_markdown, __wbg_alert_c1db9c936bf8198a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse_markdown\", function() { return parse_markdown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_c1db9c936bf8198a\", function() { return __wbg_alert_c1db9c936bf8198a; });\n/* harmony import */ var _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown_editor_bg.wasm */ \"../pkg/markdown_editor_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n* @param {string} s\n* @returns {string}\n*/\nfunction parse_markdown(s) {\n    try {\n        const retptr = _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        var ptr0 = passStringToWasm0(s, _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"parse_markdown\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _markdown_editor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\nconst __wbg_alert_c1db9c936bf8198a = function(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/markdown_editor_bg.js?");

/***/ }),

/***/ "../pkg/markdown_editor_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/markdown_editor_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, greet, parse_markdown, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./markdown_editor_bg.js */ \"../pkg/markdown_editor_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/markdown_editor_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var markdown_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-editor */ \"../pkg/markdown_editor.js\");\n\n\n// wasm.greet();\n\nlet editor = document.getElementById(\"editor\");\nlet textbox = document.getElementById(\"textbox\");\n\ntextbox.addEventListener(\"input\", event => {\n    console.log(event);\n    let viewer = document.getElementById(\"viewer\");\n    let parsed = markdown_editor__WEBPACK_IMPORTED_MODULE_0__[\"parse_markdown\"](textbox.value);\n    viewer.innerHTML = parsed;\n    sessionStorage.setItem(\"raw-data\", textbox.value);    \n});\n\ntextbox.value = sessionStorage.getItem(\"raw-data\");\ntextbox.dispatchEvent(new Event(\"input\"));\n\n\ntextbox.addEventListener(\"keydown\", event => {\n    if (event.keyCode != 9) {\n        return;\n    }\n\n    event.preventDefault();\n\n    let cursorPosition = textbox.selectionStart;\n    let cursorLeft = textbox.value.substr( 0, cursorPosition );\n    let cursorRight = textbox.value.substr( cursorPosition, textbox.value.length );\n    textbox.value = cursorLeft + \"\\t\" + cursorRight;\n    textbox.selectionEnd = cursorPosition+1;\n});\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);