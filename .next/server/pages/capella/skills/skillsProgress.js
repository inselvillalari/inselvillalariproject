"use strict";
(() => {
var exports = {};
exports.id = 6790;
exports.ids = [6790];
exports.modules = {

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const skillsProgress = ()=>{
    let skillsSection = document.querySelector(".skills-sec");
    if (skillsSection) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                var myVal = item.getAttribute("data-value");
                if (window.pageYOffset > skillsSection.offsetTop - 400) {
                    item.style.width = myVal;
                }
            });
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skillsProgress);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4554));
module.exports = __webpack_exports__;

})();