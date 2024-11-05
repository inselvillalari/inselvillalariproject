const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/_70d197._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
