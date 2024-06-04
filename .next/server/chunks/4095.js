"use strict";
exports.id = 4095;
exports.ids = [4095];
exports.modules = {

/***/ 4095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ teams)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/about/team.json
const team_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/team/1.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"","usertitle":"Agena"},{"id":2,"image":"/assets/img/team/2.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"","usertitle":"Capella"},{"id":3,"image":"/assets/img/team/3.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"","usertitle":"Gredi"},{"id":4,"image":"/assets/img/team/4.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"","usertitle":"Rigel"}]');
;// CONCATENATED MODULE: ./src/pages/about/teams.jsx

/* eslint-disable @next/next/no-img-element */ 

const Team2 = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "team bord section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-header text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Villalarımız"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: team_namespaceObject.slice(0, 4).map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `img ${index && !(index & index - 1) ? "right" : "left"}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.image,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: item.username
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: item.usertitle
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, item.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const teams = (Team2);


/***/ })

};
;