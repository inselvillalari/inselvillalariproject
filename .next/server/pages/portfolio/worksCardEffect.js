"use strict";
(() => {
var exports = {};
exports.id = 1246;
exports.ids = [1246,7794];
exports.modules = {

/***/ 4309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getSiblings = function(e) {
    let siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSiblings);


/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4309);

const worksCardEffect = ()=>{
    let workColumns = document.querySelectorAll(".full-bg .cluom"), glryTabsImages = document.querySelectorAll(".glry-img .tab-img");
    if (workColumns) {
        workColumns.forEach((cluom)=>{
            cluom.addEventListener("mouseenter", (e)=>{
                var tab_id = e.target.getAttribute("data-tab");
                cluom.classList.remove("current");
                e.target.classList.add("current");
                glryTabsImages.forEach((tabImg)=>{
                    tabImg.classList.remove("current");
                });
                document.getElementById(tab_id).classList.add("current");
            });
            cluom.addEventListener("mouseleave", (e)=>{
                if (e.target.classList.contains("current")) {
                    (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).forEach((item)=>item.classList.remove("current")
                    );
                    return false;
                }
            });
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worksCardEffect);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(278));
module.exports = __webpack_exports__;

})();