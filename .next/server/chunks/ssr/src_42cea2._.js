module.exports = {

"[project]/src/pages/_document.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/document.js [ssr] (ecmascript)");
var __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__ = __turbopack_external_import__("@vercel/speed-insights/next");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__
]);
[__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class MyDocument extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Html"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Head"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            charSet: "utf-8"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "keywords"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "description"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                            name: "author",
                            content: ""
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            rel: "shortcut icon",
                            href: "/assets/img/favicon.ico"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                            href: "https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",
                            rel: "stylesheet"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_document.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("body", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Main"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$document$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NextScript"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__["SpeedInsights"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_document.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_document.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/_document.js",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
}
const __TURBOPACK__default__export__ = MyDocument;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[project]/src/common/loadingPace.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader"), loadingText = document.querySelector(".loading-text");
    const addDoneClass = ()=>{
        preloader.classList.add("isdone");
        loadingText.classList.add("isdone");
    };
    Pace.on("start", function() {
        preloader.classList.remove("isdone");
        loadingText.classList.remove("isdone");
    });
    Pace.on("done", function() {
        addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        addDoneClass();
    }
    document.addEventListener("load", ()=>{
        addDoneClass();
    });
};
const __TURBOPACK__default__export__ = loadingPace;

})()),
"[project]/src/data/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/components/Loading-Screen/loading-screen.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$loadingPace$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/loadingPace.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/data/app.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const LoadingScreen = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$loadingPace$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    id: "preloader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "loading-text",
                        children: "Yükleniyor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$app$2e$json__$28$json$29$__["default"].showLoading ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/assets/js/pace.min.js"
            }, void 0, false, {
                fileName: "[project]/src/components/Loading-Screen/loading-screen.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : ""
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = LoadingScreen;

})()),
"[project]/src/common/mouseEffect.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mouseEffect = ()=>{
    function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        window.onmousemove = function(s) {
            o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
        };
        if (document.querySelector(".cursor-pointer")) {
            document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
            document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
        }
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
        });
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            });
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    mousecursor();
};
const __TURBOPACK__default__export__ = mouseEffect;

})()),
"[project]/src/components/Cursor/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mouseEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/mouseEffect.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Cursor = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$mouseEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "mouse-cursor cursor-outer"
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/index.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "mouse-cursor cursor-inner"
            }, void 0, false, {
                fileName: "[project]/src/components/Cursor/index.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Cursor;

})()),
"[project]/src/common/scrollToTop.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap").classList.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
const __TURBOPACK__default__export__ = scrollToTop;

})()),
"[project]/src/components/scrollToTop/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$scrollToTop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/scrollToTop.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const ScrollToTop = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$scrollToTop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            }, void 0, false, {
                fileName: "[project]/src/components/scrollToTop/index.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/scrollToTop/index.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/scrollToTop/index.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ScrollToTop;

})()),
"[project]/src/pages/_app.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [ssr] (ecmascript)");
var __TURBOPACK__commonjs__external__next$2f$head$2e$js__ = __turbopack_external_require__("next/head.js", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2d$Screen$2f$loading$2d$screen$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loading-Screen/loading-screen.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Cursor/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scrollToTop$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/scrollToTop/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__ = __turbopack_external_import__("@vercel/speed-insights/next");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__
]);
[__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__next$2f$head$2e$js__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("title", {
                        children: "IN-SEL"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.js",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cursor$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2d$Screen$2f$loading$2d$screen$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$vercel$2f$speed$2d$insights$2f$next__["SpeedInsights"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$scrollToTop$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "wow",
                src: "/assets/js/wow.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "splitting",
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "simpleParallax",
                src: "/assets/js/simpleParallax.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "isotope",
                src: "/assets/js/isotope.pkgd.min.js"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/js/main.js",
                id: "init",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),

};

//# sourceMappingURL=src_42cea2._.js.map