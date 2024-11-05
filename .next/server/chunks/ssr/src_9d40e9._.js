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
"[project]/src/pages/layout/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/pages/navbar/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/common/getSiblings.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
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
const __TURBOPACK__default__export__ = getSiblings;

})()),
"[project]/src/pages/navbar/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/navbar/app.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/getSiblings.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Navbar = ({ navbarRef, logoRef, logoClass })=>{
    const handleDropdown = (e)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(e.target.parentElement).filter((item)=>item.classList.contains("show")).map((item)=>{
            item.classList.remove("show");
            if (item.childNodes[0]) {
                item.childNodes[0].setAttribute("aria-expanded", false);
            }
            if (item.childNodes[1]) {
                item.childNodes[1].classList.remove("show");
            }
        });
        e.target.parentElement.classList.toggle("show");
        e.target.setAttribute("aria-expanded", true);
        e.target.parentElement.childNodes[1].classList.toggle("show");
    };
    const handleMobileDropdown = (e)=>{
        document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("nav", {
            className: "navbar change navbar-expand-lg",
            ref: navbarRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                        className: `logo ${logoClass && logoClass}`,
                        href: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        onClick: handleMobileDropdown,
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                            className: "icon-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                className: "fas fa-bars"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/navbar/index.jsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/navbar/index.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/agena",
                                        children: "Agena"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/capella",
                                        children: "Capella"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/gredi",
                                        children: "Gredi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/rigel",
                                        children: "Rigel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item md-ml0",
                                    style: {
                                        marginLeft: "60px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/",
                                        children: "Anasayfa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        className: "nav-link",
                                        href: "/contact",
                                        children: "İletişim"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/navbar/index.jsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/navbar/index.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/navbar/index.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/navbar/index.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/navbar/index.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/pages/footer/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Footer = ({ classText })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("footer", {
        className: `${classText ? classText : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h5", {
                                        children: "Bize Ulaşın"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/footer/index.jsx",
                                        lineNumber: 13,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-map-marker"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 17,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Adres Bilgilerimiz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 19,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "Zakkum Sk Kalkan, Kaş, ANTALYA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 20,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 18,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 16,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Bize Yazın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 26,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "info@inselvillalari.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 27,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-call"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                                            children: "Bizi Arayın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                            children: "+90 532 490 53 07"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/footer/index.jsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/footer/index.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-whatsapp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fab fa-google"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/footer/index.jsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/footer/index.jsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/footer/index.jsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/footer/index.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/footer/index.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/footer/index.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/footer/index.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/pages/layout/LightLayout.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-css-tags */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__commonjs__external__next$2f$head$2e$js__ = __turbopack_external_require__("next/head.js", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/layout/app.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/navbar/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/footer/index.jsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const LightLayout = ({ children, footerClass })=>{
    const navbarRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const logoRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            // logo.setAttribute("src", appData.darkLogo);
            } else {
                navbar.classList.remove("nav-scroll");
            // logo.setAttribute("src", appData.lightLogo);
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__next$2f$head$2e$js__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style-light.css"
                }, void 0, false, {
                    fileName: "[project]/src/pages/layout/LightLayout.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/LightLayout.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                navbarRef: navbarRef,
                logoRef: logoRef
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/LightLayout.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                classText: footerClass
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/LightLayout.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = LightLayout;

})()),
"[project]/src/pages/intro/index.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("[{\"id\":1,\"title\":{\"first\":\"\",\"second\":\"VİLLA AGENA\"},\"image\":\"/assets/img/slid/homePage/agenaHomePage.jpeg\",\"pageLink\":\"/agena\"},{\"id\":2,\"title\":{\"first\":\"\",\"second\":\"VİLLA CAPELLA\"},\"image\":\"/assets/img/slid/homePage/capellaHomePage.jpeg\",\"pageLink\":\"/capella\"},{\"id\":3,\"title\":{\"first\":\"\",\"second\":\"VİLLA GREDI\"},\"image\":\"/assets/img/slid/homePage/grediHomePage.jpeg\",\"pageLink\":\"/gredi\"},{\"id\":4,\"title\":{\"first\":\"\",\"second\":\"VİLLA RIGEL\"},\"image\":\"/assets/img/slid/homePage/rigelHomePage.jpeg\",\"pageLink\":\"/rigel\"}]"));
})()),
"[project]/src/pages/split/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class Split extends __TURBOPACK__commonjs__external__react__["default"].Component {
    target = /*#__PURE__*/ __TURBOPACK__commonjs__external__react__["default"].createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            ref: this.target,
            children: this.props.children
        }, void 0, false, {
            fileName: "[project]/src/pages/split/index.jsx",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
}
const __TURBOPACK__default__export__ = Split;

})()),
"[project]/src/common/removeSlashFromPagination.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
const __TURBOPACK__default__export__ = removeSlashFromPagination;

})()),
"[project]/src/pages/intro/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/intro/index.json (json)");
var __TURBOPACK__esm__external__swiper$2f$react__ = __turbopack_external_import__("swiper/react");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$split$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/split/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__esm__external__swiper__ = __turbopack_external_import__("swiper");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$removeSlashFromPagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/removeSlashFromPagination.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__swiper$2f$react__,
    __TURBOPACK__esm__external__swiper__
]);
[__TURBOPACK__esm__external__swiper$2f$react__, __TURBOPACK__esm__external__swiper__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
__TURBOPACK__esm__external__swiper__["default"].use([
    __TURBOPACK__esm__external__swiper__["Navigation"],
    __TURBOPACK__esm__external__swiper__["Pagination"],
    __TURBOPACK__esm__external__swiper__["Parallax"]
]);
const IntroWithVertical = ()=>{
    const widthRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const [load, setLoad] = __TURBOPACK__commonjs__external__react__["default"].useState(true);
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$removeSlashFromPagination$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
        }, 1000);
        setTimeout(()=>{
            setLoad(false);
        });
    }, []);
    const navigationPrevRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const navigationNextRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const paginationRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const sliderRef = __TURBOPACK__commonjs__external__react__["default"].useRef(null);
    const handlePrev = __TURBOPACK__commonjs__external__react__["default"].useCallback(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = __TURBOPACK__commonjs__external__react__["default"].useCallback(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("header", {
            className: "slid-half",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    id: "js-cta-slider",
                    className: "cta__slider-wrapper nofull swiper-container",
                    ref: widthRef,
                    children: [
                        !load ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__swiper$2f$react__["Swiper"], {
                            ref: sliderRef,
                            speed: 800,
                            parallax: true,
                            // navigation={{
                            //   prevEl: navigationPrevRef.current,
                            //   nextEl: navigationNextRef.current,
                            // }}
                            pagination: {
                                type: "fraction",
                                clickable: true,
                                el: paginationRef.current
                            },
                            slidesPerView: 1,
                            direction: "horizontal",
                            loop: true,
                            grabCursor: true,
                            watchSlidesProgress: true,
                            breakpoints: {
                                450: {
                                    direction: "vertical"
                                }
                            },
                            onBeforeInit: (swiper)=>{
                                // swiper.params.navigation.prevEl = navigationPrevRef.current;
                                // swiper.params.navigation.nextEl = navigationNextRef.current;
                                swiper.params.pagination.el = paginationRef.current;
                            },
                            onSwiper: (swiper)=>{
                                setTimeout(()=>{
                                    for(var i = 0; i < swiper?.slides?.length; i++){
                                        swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.height);
                                    }
                                    if (swiper.params) {
                                        // swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        // swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.params.pagination.el = paginationRef.current;
                                        // Re-init navigation
                                        swiper.navigation?.destroy();
                                        swiper.navigation?.init();
                                        swiper.navigation?.update();
                                        swiper.pagination?.destroy();
                                        swiper.pagination?.init();
                                        swiper.pagination?.update();
                                    }
                                }, 500);
                            },
                            className: "swiper-wrapper cta__slider",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$json__$28$json$29$__["default"].map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__swiper$2f$react__["SwiperSlide"], {
                                    className: "cta__slider-item swiper-slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "media-wrapper slide-inner valign",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                className: "bg-img",
                                                style: {
                                                    backgroundImage: `url(${slide.image})`
                                                },
                                                "data-overlay-dark": "5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/intro/index.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                className: "container",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                        className: "col-lg-10 offset-lg-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                            className: "caption",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                                    className: "top-corn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                                    className: "bottom-corn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                                    className: "custom-font",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h5", {
                                                                            className: "thin custom-font",
                                                                            children: slide.title.first
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/intro/index.jsx",
                                                                            lineNumber: 120,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$split$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                                                                "data-splitting": true,
                                                                                className: "words chars splitting",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "#",
                                                                                    children: slide.title.second
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                                    lineNumber: 128,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/intro/index.jsx",
                                                                                lineNumber: 124,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/intro/index.jsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 29
                                                                }, this),
                                                                slide?.content && /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                                                    className: "mt-10",
                                                                    children: [
                                                                        slide.content.first,
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/src/pages/intro/index.jsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 55
                                                                        }, this),
                                                                        slide.content.second
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: slide?.pageLink,
                                                                    className: "btn-curve btn-color mt-30",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("span", {
                                                                        children: "Detaya Git"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/intro/index.jsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/intro/index.jsx",
                                                            lineNumber: 116,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/intro/index.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/intro/index.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/intro/index.jsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/intro/index.jsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, slide.id, false, {
                                    fileName: "[project]/src/pages/intro/index.jsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/intro/index.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "cta__slider-arrows",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                    id: "js-cta-slider-next",
                                    ref: navigationNextRef,
                                    className: "cta__slider-arrow cta__slider-arrow--next",
                                    onClick: handleNext,
                                    children: widthRef?.current?.offsetWidth > 450 ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-down"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/intro/index.jsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/intro/index.jsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/intro/index.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                    id: "js-cta-slider-previous",
                                    ref: navigationPrevRef,
                                    className: "cta__slider-arrow cta__slider-arrow--previous",
                                    onClick: handlePrev,
                                    children: widthRef?.current?.offsetWidth > 450 ? /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-up"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/intro/index.jsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                        className: "fas fa-chevron-left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/intro/index.jsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/intro/index.jsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/intro/index.jsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/intro/index.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top custom-font"
                }, void 0, false, {
                    fileName: "[project]/src/pages/intro/index.jsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "social-icon",
                    style: {
                        position: "absolute",
                        left: "40px",
                        bottom: "100px",
                        zIndex: 100
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            style: {
                                width: "40px",
                                height: "40px",
                                lineHeight: "40px",
                                textAlign: "center",
                                borderRadius: "20%",
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "#C13584"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                className: "fab fa-instagram"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/intro/index.jsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/intro/index.jsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            href: "https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            style: {
                                width: "40px",
                                height: "40px",
                                lineHeight: "40px",
                                textAlign: "center",
                                borderRadius: "50%",
                                color: "rgb(37,211,102)",
                                fontSize: "20px",
                                cursor: "pointer !important"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                className: "fab fa-whatsapp"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/intro/index.jsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/intro/index.jsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                            href: "/contact",
                            style: {
                                width: "40px",
                                height: "40px",
                                lineHeight: "40px",
                                textAlign: "center",
                                borderRadius: "50%",
                                color: "rgb(234, 67, 53)",
                                fontSize: "20px",
                                cursor: "pointer"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                className: "fab fa-google"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/intro/index.jsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/intro/index.jsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/intro/index.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/intro/index.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = IntroWithVertical;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[project]/src/pages/services/services.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("[{\"id\":\"01\",\"title\":\"Architecture\",\"content\":\"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.\"},{\"id\":\"02\",\"title\":\"Interior Design\",\"content\":\"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.\"},{\"id\":\"03\",\"title\":\"3D Modeling\",\"content\":\"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.\"}]"));
})()),
"[project]/src/pages/services/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$services$2f$services$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/services/services.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Services = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        className: "services",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "feat-top",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "notfull bg-gray wow"
            }, void 0, false, {
                fileName: "[project]/src/pages/services/index.jsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/services/index.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/services/index.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Services;

})()),
"[project]/src/pages/aboutus/about-us.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"title\":{\"first\":\"Kalkan\",\"second\":\"Kızıltaş'ta\"},\"image1\":\"/assets/img/slid/aboutUs/1.jpeg\",\"image2\":\"/assets/img/slid/aboutUs/2.jpeg\",\"content\":\"mavi ve yeşili sizlerle buluşturuyoruz. Villalarımız, bütün bir yılın yorgunluğunu üzerinizden atmanız için kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize 'işte bu' dedirtecek bir tatil geçirtmek için; kapılarımızı açıyoruz…\",\"exp\":\"\",\"textList\":[{\"id\":1,\"name\":\"Agena\"},{\"id\":2,\"name\":\"Capella\"},{\"id\":3,\"name\":\"Gredi\"},{\"id\":4,\"name\":\"Rigel\"}]}"));
})()),
"[project]/src/pages/aboutus/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/aboutus/about-us.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const AboutUs = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        className: "about section-padding",
        style: {
            backgroundColor: "#EFFAFA"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "exp-content nopat wow fadeInUp",
                            "data-wow-delay": ".3s",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                    className: "sub-title",
                                    children: "Konumumuz"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus/index.jsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h2", {
                                    className: "mb-20 playfont",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].title.first,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 21,
                                            columnNumber: 43
                                        }, this),
                                        " ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].title.second
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/aboutus/index.jsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("p", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].content
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus/index.jsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("ul", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].textList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("li", {
                                            children: item.name
                                        }, item.id, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus/index.jsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/aboutus/index.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus/index.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "ab-exp",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "col-md-4 mb-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                            className: "pattern bg-img bg-repeat",
                                            style: {
                                                backgroundImage: `url(/assets/img/line-pattern.png)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/aboutus/index.jsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "col-md-8 wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                            className: "img mb-20 wow imago",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].image1,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus/index.jsx",
                                                lineNumber: 49,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/aboutus/index.jsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "col-md-7 wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                            className: "img wow imago",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].image2,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus/index.jsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/aboutus/index.jsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "col-md-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                            className: "years-exp",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                className: "exp-text",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h2", {
                                                    className: "custom-font",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$about$2d$us$2e$json__$28$json$29$__["default"].exp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/aboutus/index.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus/index.jsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus/index.jsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/aboutus/index.jsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/aboutus/index.jsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/aboutus/index.jsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus/index.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/aboutus/index.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/aboutus/index.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/aboutus/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AboutUs;

})()),
"[project]/src/common/worksCardEffect.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/getSiblings.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(e.target).forEach((item)=>item.classList.remove("current"));
                    return false;
                }
            });
        });
    }
};
const __TURBOPACK__default__export__ = worksCardEffect;

})()),
"[project]/src/pages/portfolio/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$worksCardEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/worksCardEffect.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Portfolio2 = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$worksCardEffect$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        className: "portfolio full-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom current",
                            "data-tab": "tab-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Patara"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://tr.wikipedia.org/wiki/Patara",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 23,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom",
                            "data-tab": "tab-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Kaş"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://www.google.com/search?q=ka%C5%9F%27ta+gezilecek+yerler&sca_esv=c8c65b53b193be60&biw=2560&bih=1294&ei=7blcZp3KG93ixc8Ps-SumAw&udm=&oq=ka%C5%9Fta+ge&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWthxZ90YSBnZSoCCAAyDRAAGIAEGLEDGIMBGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyCBAAGBYYChgeMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yCBAAGBYYChgeMggQABgWGB4YD0iKFlDJBli4DHAAeAKQAQCYAZIBoAGnBaoBAzAuNbgBA8gBAPgBAZgCBqACtgXCAgQQABhHwgIMEAAYgAQYQxiKBRgKwgIFEAAYgATCAggQABiABBiiBJgDAIgGAZAGCJIHAzEuNaAHkSQ&sclient=gws-wiz-serp",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 37,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom",
                            "data-tab": "tab-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Kaputaş Plajı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://www.google.com/search?q=Kaputa%C5%9F+plaj%C4%B1&oq=Kaputa%C5%9F+plaj%C4%B1&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 51,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom",
                            "data-tab": "tab-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Saklıkent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://tr.wikipedia.org/wiki/Sakl%C4%B1kent_Mill%C3%AE_Park%C4%B1",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 65,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom",
                            "data-tab": "tab-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Kekova"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("a", {
                                        href: "https://tr.wikipedia.org/wiki/Kekova",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 79,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-2 col-md-6 cluom",
                            "data-tab": "tab-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h1", {
                                        className: "custom-font",
                                        children: "Tlos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "https://tr.wikipedia.org/wiki/Tlos",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            "Detaya Git ",
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("i", {
                                                className: "fas fa-chevron-right"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/portfolio/index.jsx",
                                                lineNumber: 93,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/portfolio/index.jsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/portfolio/index.jsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/portfolio/index.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/portfolio/index.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/portfolio/index.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                className: "glry-img",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-1",
                        className: "bg-img tab-img current",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/patara.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-2",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/kas.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-3",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/kaputas.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-4",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/saklikent.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-5",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/kekova.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        id: "tab-6",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/slid/portfolio/tlos.jpeg)`
                        },
                        "data-overlay-dark": "2"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/portfolio/index.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/portfolio/index.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/portfolio/index.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Portfolio2;

})()),
"[project]/src/data/blogs1.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("[{\"id\":1,\"image\":\"/assets/img/slid/random/1.jpeg\",\"title\":\"Villa Agena\",\"by\":\"ALEX SMITH\",\"date\":\"5 Haz 2024\"},{\"id\":2,\"image\":\"/assets/img/slid/random/2.jpeg\",\"title\":\"Villa Capella\",\"by\":\"ALEX SMITH\",\"date\":\"6 Haz 2024\"}]"));
})()),
"[project]/src/components/Blogs2/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs1$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/data/blogs1.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const Blogs2 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("section", {
        className: "blog-grid center bg-gray section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h6", {
                                    className: "custom-font wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    children: "KALKAN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Blogs2/index.jsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Görünümler"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Blogs2/index.jsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Blogs2/index.jsx",
                            lineNumber: 12,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Blogs2/index.jsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Blogs2/index.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                    className: "row",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs1$2e$json__$28$json$29$__["default"].map((blog, index)=>/*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                className: "item wow fadeInUp md-mb50",
                                "data-wow-delay": index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "post-img",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("img", {
                                                style: {
                                                    width: "65%"
                                                },
                                                src: blog.image,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Blogs2/index.jsx",
                                                lineNumber: 31,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Blogs2/index.jsx",
                                            lineNumber: 30,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Blogs2/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("div", {
                                                className: "info",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "",
                                                    style: {
                                                        pointerEvents: "none"
                                                    },
                                                    children: blog.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Blogs2/index.jsx",
                                                    lineNumber: 39,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Blogs2/index.jsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])("h5", {
                                                className: "playfont",
                                                children: blog.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Blogs2/index.jsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Blogs2/index.jsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Blogs2/index.jsx",
                                lineNumber: 25,
                                columnNumber: 15
                            }, this)
                        }, blog.id, false, {
                            fileName: "[project]/src/components/Blogs2/index.jsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Blogs2/index.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Blogs2/index.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Blogs2/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Blogs2;

})()),
"[project]/src/pages/home/index.jsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__commonjs__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$LightLayout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout/LightLayout.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/intro/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$services$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/services/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/aboutus/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$portfolio$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/portfolio/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Blogs2$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Blogs2/index.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const Home1 = ()=>{
    __TURBOPACK__commonjs__external__react__["default"].useEffect(()=>{
        document.querySelector("body").classList.add("homepage");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$LightLayout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$intro$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/home/index.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$services$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/home/index.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$aboutus$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/home/index.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$portfolio$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/home/index.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Blogs2$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/home/index.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/home/index.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home1;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[project]/src/pages/index.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/home/index.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$home$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/index.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),

};

//# sourceMappingURL=src_9d40e9._.js.map