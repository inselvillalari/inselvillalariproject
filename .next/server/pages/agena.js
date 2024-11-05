const CHUNK_PUBLIC_PATH = "server/pages/agena.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/src_61800f._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_16dceb._.js");
runtime.loadChunk("server/chunks/ssr/_0053fd._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/agena/index.jsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
