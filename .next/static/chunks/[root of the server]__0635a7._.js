(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__0635a7._.js", {

"[turbopack]/dev/client/websocket.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": ()=>addMessageListener,
    "connectHMR": ()=>connectHMR,
    "sendMessage": ()=>sendMessage
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}

})()),
"[turbopack]/dev/client/hmr-client.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/// <reference path="../../shared/runtime-types.d.ts" />
/// <reference path="../runtime/base/globals.d.ts" />
/// <reference path="../runtime/base/protocol.d.ts" />
/// <reference path="../runtime/base/extensions.d.ts" />
__turbopack_esm__({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/dev/client/websocket.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function connect({ // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"], onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}

})()),
"[project]/src/components/Work-header/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const WorkHeader = ({ title, content, center })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "work-header bg-img valign",
        style: {
            backgroundImage: "url(/assets/img/patern.png)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `row ${center ? "justify-content-center" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-lg-9",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cont ${center ? "text-center" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: typeof title == "object" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        title.first,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/Work-header/index.jsx",
                                            lineNumber: 16,
                                            columnNumber: 35
                                        }, this),
                                        " ",
                                        title.second
                                    ]
                                }, void 0, true) : title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Work-header/index.jsx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: content
                            }, void 0, false, {
                                fileName: "[project]/src/components/Work-header/index.jsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Work-header/index.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Work-header/index.jsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Work-header/index.jsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Work-header/index.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Work-header/index.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = WorkHeader;
const __TURBOPACK__default__export__ = WorkHeader;
var _c;
__turbopack_refresh__.register(_c, "WorkHeader");

})()),
"[project]/src/pages/navbar/app.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"lightLogo\":\"/assets/img/logo-light.png\",\"darkLogo\":\"/assets/img/logo-dark.png\",\"mapIframe\":\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9212341505254!2d29.41556577717408!3d36.2656911724043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c1d2d533c413e7%3A0x61b9e1538feeccf2!2sKalkan%2C%20Zakkum%20Sk.%2C%2007580%20Ka%C5%9F%2FAntalya!5e0!3m2!1str!2str!4v1717242307280!5m2!1str!2str\",\"showLoading\":true}"));
})()),
"[project]/src/common/getSiblings.js [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/pages/navbar/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$app$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/pages/navbar/app.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/getSiblings.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Navbar = ({ navbarRef, logoRef, logoClass })=>{
    const handleDropdown = (e)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$getSiblings$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(e.target.parentElement).filter((item)=>item.classList.contains("show")).map((item)=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "navbar change navbar-expand-lg",
            ref: navbarRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: `logo ${logoClass && logoClass}`,
                        href: "/"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/navbar/index.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        onClick: handleMobileDropdown,
                        "data-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "icon-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "navbar-nav ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item md-ml0",
                                    style: {
                                        marginLeft: "60px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_refresh__.register(_c, "Navbar");

})()),
"[project]/src/pages/footer/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Footer = ({ classText })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `${classText ? classText : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-map-marker"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 17,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            children: "Adres Bilgilerimiz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 19,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-mail"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            children: "Bize Yazın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 26,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "icon pe-7s-call"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/footer/index.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                            children: "Bizi Arayın"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/footer/index.jsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/footer/index.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",
                                            rel: "noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_refresh__.register(_c, "Footer");

})()),
"[project]/src/pages/layout/MainLayout.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-css-tags */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/navbar/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/footer/index.jsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const MainLayout = ({ children, logoClassText })=>{
    _s();
    const navbarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const logoRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            } else {
                navbar.classList.remove("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style.css"
                }, void 0, false, {
                    fileName: "[project]/src/pages/layout/MainLayout.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$navbar$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                navbarRef: navbarRef,
                logoRef: logoRef,
                logoClass: logoClassText
            }, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$footer$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/layout/MainLayout.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(MainLayout, "NJv/rvX5fPwWhnPtkwq0tuwt7xI=");
_c = MainLayout;
const __TURBOPACK__default__export__ = MainLayout;
var _c;
__turbopack_refresh__.register(_c, "MainLayout");

})()),
"[project]/src/common/initIsotope.js [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const initIsotope = ()=>{
    let iso;
    let grid = document.querySelectorAll(".gallery");
    let filtersElem = document.querySelector(".filtering");
    let buttonGroups = document.querySelectorAll(".filtering");
    if (grid.length >= 1) {
        grid.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items"
            });
        });
    }
    if (filtersElem) {
        filtersElem.addEventListener("click", function(event) {
            if (!matchesSelector(event.target, "span")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            filterValue = filterValue;
            iso.arrange({
                filter: filterValue
            });
        });
        const radioButtonGroup = (buttonGroup)=>{
            buttonGroup.addEventListener("click", (event)=>{
                if (!matchesSelector(event.target, "span")) {
                    return;
                }
                buttonGroup.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
            });
        };
        for(var i = 0, len = buttonGroups.length; i < len; i++){
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }
    }
};
const __TURBOPACK__default__export__ = initIsotope;

})()),
"[project]/src/icons/TenPeople.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function TenPeople({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_3597742",
                enableBackground: "new 0 0 64 64",
                viewBox: "0 0 64 64",
                height: "30",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m40 62h-6v-.8c0-2.96 1.05-5.72 2.82-7.89 1.21-1.47 2.75-2.66 4.52-3.46l1.66 4.15 5-2 5 2 1.66-4.15c4.39 1.97 7.34 6.37 7.34 11.35v.8h-6z",
                                        fill: "#75b1f2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m54.66 49.85-1.66 4.15-5-2 4-3c.93.19 1.82.48 2.66.85z",
                                        fill: "#5d9cec"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m48 52-5 2-1.66-4.15c.84-.37 1.73-.66 2.66-.85z",
                                        fill: "#5d9cec"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m24 62h-16-6v-.8c0-2.96 1.05-5.72 2.82-7.89.32-.39.66-.75 1.02-1.1 1.67-1.59 3.78-2.73 6.16-3.21v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c2.38.48 4.49 1.62 6.16 3.21.36.35.7.71 1.02 1.1 1.77 2.17 2.82 4.93 2.82 7.89v.8z",
                                        fill: "#ff826e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m40.54 40.5c.22 2.61 2.08 4.71 4.52 5.32l-.73 2.18h-15.33c-1.3-1.96-2-4.25-2-6.61v-6.39c0-2.03-.67-3.9-1.81-5.4l.01-.01c.04-.02.08-.03.12-.05l2.68 4.46 4-3 4 3 .43-.72c.14.24.3.45.5.65l.51.51c-.87.52-1.44 1.47-1.44 2.56 0 .83.34 1.58.88 2.12s1.29.88 2.12.88h1.5z",
                                        fill: "#b4dd7f"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m37.41 29.06c-.88.59-1.41 1.57-1.41 2.63 0 .57.15 1.11.43 1.59l-.43.72-4-3 4.67-2.8h.01c.27.28.58.53.9.75z",
                                        fill: "#a0d468"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m32 31-4 3-2.68-4.46c.75-.31 1.43-.76 2-1.35l.01.01z",
                                        fill: "#a0d468"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m7.23 29.08c-1.39 1.58-2.23 3.65-2.23 5.92v6.39c0 2.36-.7 4.65-2 6.61h-2v-15c0-.83.34-1.58.88-2.12s1.29-.88 2.12-.88c1.17 0 2.28-.33 3.22-.92z",
                                        fill: "#75b1f2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m29 48-.1.31c-.53 1.58-1.5 2.92-2.74 3.9-1.67-1.59-3.78-2.73-6.16-3.21l-1.24-3.71c.28-.16.55-.34.81-.54l.01-.01c2.11-1.69 3.34-4.23 3.37-6.93l.02-2.78c.02-1.67-1.33-3.03-3-3.03h-7.97c-1.66 0-3 1.34-3 3v2.59c0 2.79 1.27 5.42 3.45 7.17l.02.01c.24.19.5.37.77.52l-1.24 3.71c-2.38.48-4.49 1.62-6.16 3.21-1.24-.98-2.21-2.32-2.74-3.9l-.1-.31c1.3-1.96 2-4.25 2-6.61v-6.39c0-2.27.84-4.34 2.23-5.92 1.55-1.78 3.79-2.94 6.31-3.07.15-.01.3-.01.46-.01h4c2.94 0 5.55 1.41 7.19 3.6 1.14 1.5 1.81 3.37 1.81 5.4v6.39c0 2.36.7 4.65 2 6.61z",
                                        fill: "#fcd770"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m59.79 32.85-.54 2.16-.01.01c-.54-.63-1.34-1.02-2.24-1.02h-1c0-.03 0-.06 0-.08 0-1.06-.86-1.92-1.92-1.92h-4.98c-1.79 0-3.4-.95-4.28-2.41l-3.17 1.58c-1.01.51-1.65 1.54-1.65 2.68v.15h-1c-.57 0-1.11.16-1.56.44l-.51-.51c-.2-.2-.36-.41-.5-.65-.28-.48-.43-1.02-.43-1.59 0-1.06.53-2.04 1.41-2.63l.17-.11 1.42-.95-.66-1.32c-.22-.45-.34-.94-.34-1.44 0-.22.02-.44.55-1.81.12-.17.25-.33.4-.48.59-.59 1.39-.95 2.29-.95 1.23 0 2.46.05 3.68.16 5.63.84 7.58 1.34 9.5 1.98l.72.24c.11.04.22.07.32.12 2.69 1.04 4.49 3.6 4.54 6.5v.12c0 .59-.07 1.17-.21 1.73z",
                                        fill: "#656d78"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m23 13c-.72 0-1.37.25-1.89.67l-.44-.67-.27-.4c-.26-.39-.4-.85-.4-1.32 0-.8.4-1.55 1.06-1.99l1.94-1.29-.45-.45c-.35-.35-.55-.83-.55-1.32 0-.51.2-.98.55-1.31.16-.17.36-.31.58-.4l4.47-1.92c.92-.4 1.92-.6 2.92-.6.98 0 1.94.19 2.85.57l7.46 3.11c.36.15.69.33 1 .55 1.34.95 2.17 2.52 2.17 4.21 0 1.02-.3 2.01-.87 2.86l-.24.37c-.52-.42-1.17-.67-1.89-.67h-1.17-.01c-.4-1.17-1.51-2-2.82-2-.54 0-1.04.14-1.47.38l-.68-.17c-1.59-.4-2.92-1.37-3.77-2.66h-.01l-4.07 2.45c-1.31 0-2.42.83-2.82 2h-.01z",
                                        fill: "#656d78"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m44.16 15.99.38 4.51c.05.58.18 1.14.38 1.66-1.22-.11-2.45-.16-3.68-.16-.9 0-1.7.36-2.29.95-.15.15-.28.31-.4.48l-.1-.07c.56-.83.92-1.8 1.01-2.86l.12-1.5h1.42c.83 0 1.58-.34 2.12-.88s.88-1.29.88-2.12z",
                                        fill: "#b27946"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m48 9-2.52 1.89c-.93.7-1.48 1.79-1.48 2.96 0 .1 0 .2.01.3l.15 1.84-.16.01c0-.94-.43-1.78-1.11-2.33l.24-.37c.57-.85.87-1.84.87-2.86 0-1.69-.83-3.26-2.17-4.21 1.81-2.56 4.79-4.23 8.17-4.23h2c5.52 0 10 4.48 10 10v3c0 .66-.15 1.31-.45 1.89l-.1.22c-.28.56-.28 1.22 0 1.78l.1.22c.3.58.45 1.23.45 1.89s-.15 1.31-.45 1.89l-.1.22c-.28.56-.28 1.22 0 1.78l.06.14c.32.64.49 1.34.49 2.06 0 1.22-.49 2.4-1.35 3.26l-.65.65c-.05-2.9-1.85-5.46-4.54-6.5v-.01c1.12-.99 1.87-2.4 2-3.99l.53-6.42c.01-.05.01-.11.01-.16 0-1.06-.86-1.92-1.92-1.92h-.84c-2.71 0-5.32-1.08-7.24-3z",
                                        fill: "#b27946"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m22 6.23c0 .49.2.97.55 1.32l.45.45-1.94 1.29c-.66.44-1.06 1.19-1.06 1.99 0 .47.14.93.4 1.32l.27.4h-.81c-.25-.77-.82-1.41-1.59-1.74l-5.27-2.26-5.27 2.26c-.77.33-1.34.97-1.59 1.74h-1.14c-.87 0-1.66.37-2.21.97l-.65-3.26c-.09-.47-.14-.95-.14-1.43 0-4.02 3.26-7.28 7.28-7.28h7.44c2.38 0 4.5 1.14 5.82 2.91l.01.01c-.35.33-.55.8-.55 1.31z",
                                        fill: "#b27946"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m50.94 45.82 1.06 3.18-4 3-4-3 .33-1 .73-2.18c.47.12.96.18 1.46.18h2.96c.5 0 .99-.06 1.46-.18z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m57 34c.9 0 1.7.39 2.24 1.02.47.53.76 1.22.76 1.98 0 .83-.34 1.58-.88 2.12s-1.29.88-2.12.88h-1.5l.49-5.92c.01-.02.01-.05.01-.08z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m40.01 34.15.49 5.85h-1.5c-.83 0-1.58-.34-2.12-.88s-.88-1.29-.88-2.12c0-1.09.57-2.04 1.44-2.56.45-.28.99-.44 1.56-.44h1c0 .05 0 .1.01.15z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m55.46 40.5c-.22 2.61-2.08 4.71-4.52 5.32-.47.12-.96.18-1.46.18h-2.96c-.5 0-.99-.06-1.46-.18-2.44-.61-4.3-2.71-4.52-5.32l-.04-.5-.49-5.85c-.01-.05-.01-.1-.01-.15s0-.1 0-.15c0-1.14.64-2.17 1.65-2.68l3.17-1.58c.88 1.46 2.49 2.41 4.28 2.41h4.98c1.06 0 1.92.86 1.92 1.92v.08s0 .06-.01.08l-.49 5.92z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m55.46 24.49v.01c-.1-.05-.21-.08-.32-.12l-.72-.24c-1.92-.64-3.87-1.14-9.5-1.98-.2-.52-.33-1.08-.38-1.66l-.38-4.51-.15-1.84c-.01-.1-.01-.2-.01-.3 0-1.17.55-2.26 1.48-2.96l2.52-1.89c1.92 1.92 4.53 3 7.24 3h.84c1.06 0 1.92.86 1.92 1.92 0 .05 0 .11-.01.16l-.53 6.42c-.13 1.59-.88 3-2 3.99z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m35.19 25.75c.3.94.81 1.77 1.49 2.44-.01.01-.01.01 0 .01h-.01l-4.67 2.8-4.67-2.8-.01-.01c.67-.66 1.19-1.5 1.49-2.44.54.16 1.12.25 1.71.25h2.96c.59 0 1.17-.09 1.71-.25z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m42.89 13.67c.68.55 1.11 1.39 1.11 2.33 0 .83-.34 1.58-.88 2.12s-1.29.88-2.12.88h-1.42l.38-4.58c.03-.14.04-.28.04-.42 0-.35-.06-.69-.18-1h.01 1.17c.72 0 1.37.25 1.89.67z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m37 17c-1.66 0-3-1.34-3-3 0-1.12.62-2.1 1.53-2.62l-.68-.17c-1.59-.4-2.92-1.37-3.77-2.66h-.01l-4.07 2.45c1.66 0 3 1.34 3 3s-1.34 3-3 3c-1.52 0-2.77-1.12-2.96-2.58l.38 4.58.12 1.5c.21 2.52 1.96 4.57 4.27 5.25.54.16 1.12.25 1.71.25h2.96c.59 0 1.17-.09 1.71-.25 1.34-.4 2.49-1.25 3.26-2.39.56-.83.92-1.8 1.01-2.86l.12-1.5.38-4.58c-.19 1.46-1.44 2.58-2.96 2.58z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m20 49v3c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-3l1.24-3.71c.83.47 1.77.72 2.75.72h.04c.96-.01 1.9-.26 2.73-.72z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m24 14c0 .14.01.28.04.42l.38 4.58h-1.42c-.35 0-.69-.06-1-.18-.43-.14-.81-.39-1.12-.7-.54-.54-.88-1.29-.88-2.12 0-.94.43-1.78 1.11-2.33.52-.42 1.17-.67 1.89-.67h1.17.01c-.12.31-.18.65-.18 1z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m19.97 32c1.67 0 3.02 1.36 3 3.03l-.02 2.78c-.03 2.7-1.26 5.24-3.37 6.93l-.01.01c-.26.2-.53.38-.81.54-.83.46-1.77.71-2.73.72-.01 0-.03 0-.04 0-.98 0-1.92-.25-2.75-.72-.27-.15-.53-.33-.77-.52l-.02-.01c-2.18-1.75-3.45-4.38-3.45-7.17v-2.59c0-1.66 1.34-3 3-3z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m19.86 13c.09.28.14.58.14.88 0 .08 0 .16-.01.24l-.41 4.88-.12 1.5c-.26 3.09-2.83 5.47-5.92 5.5-.02 0-.04 0-.06 0h-.96c-3.12 0-5.72-2.39-5.98-5.5l-.12-1.5-.41-4.88c-.01-.08-.01-.16-.01-.24 0-.3.05-.6.14-.88.25-.77.82-1.41 1.59-1.74l5.27-2.26 5.27 2.26c.77.33 1.34.97 1.59 1.74z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m6.42 19h-1.42c-.83 0-1.58-.34-2.12-.88s-.88-1.29-.88-2.12c0-.79.3-1.5.79-2.03.55-.6 1.34-.97 2.21-.97h1.14c-.09.28-.14.58-.14.88 0 .08 0 .16.01.24z",
                                        fill: "#f0d0b4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m39.82 13c.12.31.18.65.18 1l-.04.42c-.19 1.46-1.44 2.58-2.96 2.58-1.66 0-3-1.34-3-3 0-1.12.62-2.1 1.53-2.62.43-.24.93-.38 1.47-.38 1.31 0 2.42.83 2.82 2z",
                                        fill: "#69d6f4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m27 11c1.66 0 3 1.34 3 3s-1.34 3-3 3c-1.52 0-2.77-1.12-2.96-2.58l-.04-.42c0-.35.06-.69.18-1 .4-1.17 1.51-2 2.82-2z",
                                        fill: "#69d6f4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/TenPeople.jsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/TenPeople.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m28.211 20.658c.722 1.445 2.174 2.342 3.789 2.342s3.067-.897 3.789-2.342l.105-.211-1.789-.895-.105.212c-.381.762-1.147 1.236-2 1.236s-1.619-.474-2-1.236l-.105-.211-1.789.895z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m16.789 20.658.105-.211-1.789-.895-.105.212c-.381.762-1.147 1.236-2 1.236s-1.619-.474-2-1.236l-.105-.211-1.789.895.105.21c.722 1.445 2.174 2.342 3.789 2.342s3.067-.897 3.789-2.342z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m62.447 17.341c.362-.723.553-1.533.553-2.341v-3c0-6.065-4.935-11-11-11h-2c-3.26 0-6.336 1.467-8.416 3.944-.125-.062-.243-.135-.373-.189l-7.46-3.108c-2.085-.87-4.466-.858-6.541.033l-4.47 1.916c-1.56-1.659-3.706-2.596-6.019-2.596h-7.442c-4.565 0-8.279 3.714-8.279 8.279 0 .547.055 1.094.161 1.624l.563 2.814c-.453.648-.724 1.433-.724 2.283 0 2.206 1.794 4 4 4h.497l.048.581c.203 2.441 1.679 4.52 3.733 5.607-.999.537-1.889 1.245-2.649 2.076-.793.479-1.699.736-2.629.736-2.206 0-4 1.794-4 4v16h2.31c.471 1.231 1.185 2.339 2.114 3.265-2.138 2.398-3.424 5.545-3.424 8.933v1.802h62v-1.802c0-6.188-4.268-11.584-10.23-13.051l-.57-1.712c2.198-.941 3.843-2.979 4.2-5.436h.6c2.206 0 4-1.794 4-4 0-.815-.248-1.572-.668-2.205l.427-1.704c.135-.543.201-1.1.222-1.658l.374-.375c1.061-1.059 1.645-2.469 1.645-3.968 0-.867-.205-1.734-.592-2.509l-.066-.132c-.14-.28-.14-.615 0-.895l.105-.211c.362-.724.553-1.534.553-2.342s-.191-1.618-.553-2.342l-.105-.21c-.14-.28-.14-.615 0-.895zm-34.449-13.823c1.581-.678 3.396-.687 4.983-.025l7.46 3.108c1.555.648 2.559 2.154 2.559 3.837 0 .656-.16 1.294-.453 1.873-.477-.199-.999-.311-1.547-.311h-.556c-.694-1.19-1.97-2-3.444-2-.559 0-1.091.117-1.575.325l-.332-.083c-2.409-.602-4.093-2.758-4.093-5.242h-2c0 1.137.277 2.214.743 3.188l-3.076 1.845c-1.331.112-2.47.869-3.111 1.966h-.556c-.561 0-1.094.118-1.58.328l-.187-.28c-.152-.229-.233-.495-.233-.77 0-.465.23-.896.617-1.154l2.952-1.968-1.316-1.318c-.163-.162-.253-.378-.253-.608 0-.346.205-.657.522-.793zm19.942 6.776c2.035 1.746 4.593 2.706 7.302 2.706h.838c.507 0 .92.413.917.997l-.535 6.418c-.092 1.102-.556 2.112-1.289 2.922l-.44-.147c-.642-.214-1.289-.408-1.939-.591.848-.396 1.557-1.066 1.994-1.942l.105-.211-1.789-.895-.104.213c-.381.762-1.147 1.236-2 1.236s-1.619-.474-2-1.236l-.105-.211-1.789.895.105.21c.156.312.352.593.57.851-.696-.108-1.396-.195-2.097-.269-.069-.271-.123-.545-.146-.825l-.529-6.349c-.006-.072-.009-.146-.009-.22 0-.843.402-1.648 1.077-2.154zm10.878 22.312-.187.749c-.499-.224-1.049-.355-1.631-.355h-.163c-.388-1.158-1.47-2-2.757-2h-4.981c-1.9 0-3.55-1.352-3.922-3.216l-.196-.98-1.961.393.196.98c.066.332.159.652.276.959l-2.288 1.144c-1.1.55-1.854 1.553-2.105 2.72h-.099c-.471 0-.918.097-1.338.247l-.029-.029c-.408-.408-.633-.95-.633-1.527 0-.724.359-1.396.962-1.797l2.327-1.552-1.053-2.106c-.154-.309-.236-.655-.236-1 0-1.233 1.003-2.236 2.236-2.236 4.381 0 8.709.703 12.865 2.088l.721.24c2.499.833 4.178 3.162 4.178 5.797 0 .499-.062.997-.182 1.481zm-27.826 28.394c-.049-3.313-1.32-6.384-3.416-8.735.928-.925 1.643-2.033 2.114-3.265h11.133c-4.61 2.131-7.737 6.765-7.815 12zm12.787-10.917 2.198 1.649-2.42.968-.913-2.282c.369-.13.748-.242 1.135-.335zm-.166-3.083h-14.055c-1.017-1.695-1.558-3.62-1.558-5.605v-6.145l4-3 3.588 2.691c-.365.603-.588 1.303-.588 2.059 0 2.206 1.794 4 4 4h.601c.357 2.456 2.001 4.495 4.2 5.436zm-9.976-35.149c-.224.349-.388.737-.495 1.149h-2.284c-.237-.912-.781-1.696-1.524-2.234l1.51-.906c.752.861 1.697 1.55 2.793 1.991zm5.443 23.149.334 4h-.414c-1.103 0-2-.897-2-2s.897-2 2-2zm-12.354-5.066c.25-.154.489-.32.716-.502l2.768 1.661-1.923 1.442zm4.132-14.934h2.284c.447 1.72 1.999 3 3.858 3 .608 0 1.179-.147 1.696-.391l-.234 2.806c-.215 2.571-2.402 4.585-4.983 4.585h-2.959c-2.58 0-4.768-2.014-4.982-4.585l-.234-2.806c.517.244 1.088.391 1.696.391 1.859 0 3.411-1.28 3.858-3zm-.337 12h2.959c.376 0 .745-.037 1.107-.096.168.358.365.7.589 1.025l-3.176 1.905-3.166-1.9c.224-.325.425-.666.594-1.028.357.057.721.094 1.093.094zm4.755 3.2c-.18.469-.276.973-.276 1.491 0 .113.024.222.033.334l-1.243-.932zm2.171-3.07.264.527-.08.053c-.455-.403-.84-.88-1.126-1.415.195-.095.385-.198.569-.31.072.398.193.785.373 1.145zm3.007-6.549.049-.581h.497c.916 0 1.751-.322 2.427-.842l.118 1.422c.014.167.051.33.077.495-.794-.045-1.588-.075-2.386-.075-.291 0-.575.03-.849.086.027-.167.053-.334.067-.505zm2.546-4.581c0 1.103-.897 2-2 2h-.331l.327-3.917h-.004c0-.028.008-.055.008-.083 1.103 0 2 .897 2 2zm-4.017-1.83c-.088 1.023-.939 1.83-1.983 1.83-1.103 0-2-.897-2-2s.897-2 2-2c1.097 0 1.989.888 1.998 1.984zm-11.983-2.17c1.103 0 2 .897 2 2s-.897 2-2 2c-1.044 0-1.895-.807-1.983-1.83l-.016-.187c.01-1.095.902-1.983 1.999-1.983zm-3.992 2.083h-.004l.327 3.917h-.331c-1.103 0-2-.897-2-2s.897-2 2-2c0 .028.008.055.008.083zm-2.554 6.498.049-.581h.497c.342 0 .675-.057 1.001-.142.321.084.652.142.999.142h.497l.048.581c.21 2.525 1.783 4.662 3.949 5.715-.463.872-1.165 1.589-2.035 2.067-1.764-1.98-4.296-3.253-7.128-3.347 1.185-1.144 1.979-2.696 2.123-4.435zm-11.175-17.581h7.441c1.758 0 3.387.713 4.57 1.975-.186.383-.29.809-.29 1.254 0 .573.167 1.12.478 1.584l-.97.646c-.741.493-1.235 1.25-1.419 2.101-.137-.08-.276-.157-.425-.22l-5.664-2.428-5.664 2.427c-.798.342-1.428.936-1.835 1.661h-.501c-.538 0-1.05.11-1.519.303l-.359-1.795c-.081-.4-.122-.814-.122-1.229 0-3.462 2.816-6.279 6.279-6.279zm-4.279 15c-1.103 0-2-.897-2-2s.897-2 2-2h.005c.002.068.002.136.009.201l.317 3.799zm2.538 2.415-.532-6.383c-.004-.051-.006-.1-.006-.151 0-.743.44-1.411 1.123-1.704l4.877-2.089 4.877 2.09c.683.292 1.123.961 1.123 1.703 0 .05-.002.1-.006.15l-.532 6.383c-.215 2.572-2.402 4.586-4.983 4.586h-.959c-2.58 0-4.767-2.014-4.982-4.585zm-3.538 20.98c0 1.985-.541 3.91-1.558 5.605h-.442v-14c0-1.103.897-2 2-2 .292 0 .582-.025.87-.061-.555 1.243-.87 2.615-.87 4.061zm.101 6.74c1.244-2.031 1.899-4.35 1.899-6.74v-6.395c0-4.411 3.589-8 8-8h4c4.411 0 8 3.589 8 8v6.395c0 2.39.655 4.709 1.899 6.74-.372 1.042-.978 1.971-1.76 2.743-1.531-1.277-3.349-2.233-5.37-2.73l-.82-2.459c.083-.06.174-.106.254-.171 2.351-1.881 3.717-4.687 3.747-7.697l.05-4.811-2-.021-.049 4.811c-.024 2.408-1.116 4.652-3.008 6.164-.827.662-1.866 1.031-2.925 1.041-1.064.006-2.099-.35-2.947-1.029-1.952-1.561-3.071-3.89-3.071-6.389v-2.587c0-1.103.897-2 2-2v-2c-2.206 0-4 1.794-4 4v2.587c0 3.11 1.393 6.008 3.844 7.969.065.052.139.088.205.137l-.818 2.455c-2.02.497-3.838 1.453-5.369 2.73-.783-.772-1.39-1.701-1.761-2.743zm8.899 1.028.839-2.518c.685.234 1.407.36 2.138.36h.06c.724-.007 1.44-.138 2.121-.371l.842 2.529v2.837c0 .551-.448 1-1 1h-4c-.552 0-1-.449-1-1zm-2 1.133v1.704c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-1.704c4.638 1.466 7.905 5.77 7.991 10.704h-3.991v-4h-2v4h-14v-4h-2v4h-3.998c.086-4.935 3.36-9.238 7.998-10.704zm49.998 10.704h-3.998v-4h-2v4h-14v-4h-2v4h-3.991c.072-4.118 2.361-7.795 5.813-9.752l1.622 4.052 5.556-2.223 5.557 2.223 1.622-4.053c3.452 1.958 5.748 5.634 5.819 9.753zm-7.642-10.582-.913 2.282-2.42-.968 2.198-1.649c.387.093.766.204 1.135.335zm-2.532-1.785-2.824 2.117-2.824-2.118.56-1.682c.259.03.52.05.785.05h2.959c.265 0 .526-.02.784-.049zm3.638-8.218c-.215 2.571-2.402 4.585-4.983 4.585h-2.959c-2.58 0-4.768-2.014-4.982-4.585l-.529-6.349c-.006-.072-.009-.146-.009-.22 0-.757.421-1.438 1.099-1.777l2.413-1.207c1.112 1.317 2.773 2.138 4.587 2.138h4.981c.507 0 .92.413.917.997zm2.538-1.415h-.414l.334-4h.08c1.103 0 2 .897 2 2s-.897 2-2 2zm4-24c0 .5-.118 1-.342 1.447l-.105.211c-.42.84-.42 1.843 0 2.683l.105.21c.224.449.342.949.342 1.449s-.118 1-.342 1.447l-.105.211c-.42.84-.42 1.843-.001 2.682l.066.133c.25.5.382 1.058.382 1.616 0 .562-.141 1.097-.382 1.587-.591-1.868-1.853-3.452-3.543-4.472.787-1.046 1.27-2.293 1.38-3.623l.535-6.41c.007-.084.01-.168.01-.251 0-1.61-1.31-2.92-2.92-2.92h-.838c-2.336 0-4.533-.87-6.242-2.441v-3.559h-2v3.5l-2.031 1.523c-.101-1.501-.735-2.878-1.763-3.912 1.702-1.958 4.177-3.111 6.794-3.111h2c4.963 0 9 4.038 9 9z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m49 41h-4v2h4c2.206 0 4-1.794 4-4h-2c0 1.103-.897 2-2 2z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m16 43c1.615 0 3.067-.897 3.789-2.342l.105-.211-1.789-.895-.105.212c-.381.762-1.147 1.236-2 1.236s-1.619-.474-2-1.236l-.105-.211-1.789.895.105.21c.722 1.445 2.174 2.342 3.789 2.342z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m14.5 30.938h1.999v4.123h-1.999z",
                                    transform: "matrix(.97 -.243 .243 .97 -7.541 4.745)"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m18.5 30.938h1.999v4.123h-1.999z",
                                    transform: "matrix(.97 -.243 .243 .97 -7.422 5.715)"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/TenPeople.jsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/TenPeople.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/TenPeople.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/TenPeople.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/TenPeople.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/TenPeople.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TenPeople;
const __TURBOPACK__default__export__ = TenPeople;
var _c;
__turbopack_refresh__.register(_c, "TenPeople");

})()),
"[project]/src/icons/FivePlusOne.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function FivePlusOne({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 512 512",
                height: "30",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_6427340",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "_13._Big_House",
                    "data-name": "13. Big House",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m280 304h224v40h-224z",
                            fill: "#596060"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m504 352h-224a8 8 0 0 1 -8-8v-40a8 8 0 0 1 8-8h224a8 8 0 0 1 8 8v40a8 8 0 0 1 -8 8zm-216-16h208v-24h-208z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m504 512h-496a8 8 0 0 1 0-16h496a8 8 0 0 1 0 16z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m8 304h288v40h-288z",
                            fill: "#596060"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m296 352h-288a8 8 0 0 1 -8-8v-40a8 8 0 0 1 8-8h288a8 8 0 0 1 8 8v40a8 8 0 0 1 -8 8zm-280-16h272v-24h-272z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m24 344h256v160h-256z",
                            fill: "#eaf2ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m24 480h256v24h-256z",
                            fill: "#c1d1f7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m280 512h-256a8 8 0 0 1 0-16h248v-144h-240v120a8 8 0 0 1 -16 0v-128a8 8 0 0 1 8-8h256a8 8 0 0 1 8 8v160a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m272 32v272h-240v-192z",
                            fill: "#eaf2ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m272 32v43.97l-240 79.99v-43.96z",
                            fill: "#c1d1f7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m32 280h240v24h-240z",
                            fill: "#c1d1f7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m272 312h-240a8 8 0 0 1 -8-8v-192a8 8 0 0 1 5.47-7.59l240-80a8 8 0 0 1 10.53 7.59v272a8 8 0 0 1 -8 8zm-232-16h224v-252.9l-224 74.67z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m280 344h208v160h-208z",
                            fill: "#eaf2ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m280 480h208v24h-208z",
                            fill: "#c1d1f7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m488 512h-208a8 8 0 0 1 -8-8v-160a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8v160a8 8 0 0 1 -8 8zm-200-16h192v-144h-192z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m8 104 280-96 16 32-288 96z",
                            fill: "#596060"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m272 232h224v72h-224z",
                            fill: "#a8edfd"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m272 280h224v24h-224z",
                            fill: "#8bd4de"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m16 144a8 8 0 0 1 -7.76-6.06l-8-32a8 8 0 0 1 5.17-9.51l280-96a8 8 0 0 1 9.75 4l16 32a8 8 0 0 1 -4.63 11.17c-308.64 102.87-288.53 96.4-290.53 96.4zm1.54-34.81 4.13 16.49 271.05-90.35-8.72-17.49z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m320 312a8 8 0 0 1 -8-8v-72a8 8 0 0 1 16 0v72a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m496 312h-224a8 8 0 0 1 -8-8v-72a8 8 0 0 1 16 0v64h208v-56h-184a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8v72a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m384 312a8 8 0 0 1 -8-8v-72a8 8 0 0 1 16 0v72a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m448 312a8 8 0 0 1 -8-8v-72a8 8 0 0 1 16 0v72a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m448 512h-128a8 8 0 0 1 -8-8v-104a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v104a8 8 0 0 1 -8 8zm-120-16h112v-88h-112z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m320 400h128v32h-128z",
                            fill: "#dcdcdc"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m448 440h-128a8 8 0 0 1 -8-8v-32a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v32a8 8 0 0 1 -8 8zm-120-16h112v-16h-112z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m320 432h128v32h-128z",
                            fill: "#dcdcdc"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m448 472h-128a8 8 0 0 1 -8-8v-32a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v32a8 8 0 0 1 -8 8zm-120-16h112v-16h-112z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m320 464h128v40h-128z",
                            fill: "#dcdcdc"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m320 480h128v24h-128z",
                            fill: "#bbb"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m448 512h-128a8 8 0 0 1 -8-8v-40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v40a8 8 0 0 1 -8 8zm-120-16h112v-24h-112z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m64 392h64v112h-64z",
                            fill: "#a6806f"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m64 480h64v24h-64z",
                            fill: "#8d6d5f"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m128 512h-64a8 8 0 0 1 -8-8v-112a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v112a8 8 0 0 1 -8 8zm-56-16h48v-96h-48z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m160 392h80v48h-80z",
                            fill: "#a8edfd"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m240 448h-80a8 8 0 0 1 -8-8v-48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v48a8 8 0 0 1 -8 8zm-72-16h64v-32h-64z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m72 176h64v48h-64z",
                            fill: "#a8edfd"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m136 232h-64a8 8 0 0 1 -8-8v-48a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v48a8 8 0 0 1 -8 8zm-56-16h48v-32h-48z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m168 176h64v48h-64z",
                            fill: "#a8edfd"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m232 232h-64a8 8 0 0 1 -8-8v-48a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v48a8 8 0 0 1 -8 8zm-56-16h48v-32h-48z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m504 192h-160v-16a80 80 0 0 1 160 0z",
                            fill: "#cd4f5f"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m344.4 168c-.5 5.07-.4 6.68-.4 24h160c0-16.58.13-18.7-.4-24z",
                            fill: "#b24654"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m456 173.25v18.75h-64c0-19.73 0-20.53.12-24a109.3 109.3 0 0 1 31.88-72 109.24 109.24 0 0 1 32 77.25z",
                            fill: "#eaf2ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m456 192h-64c0-19.73 0-20.53.12-24h63.76c.17 3.76.12 5.22.12 24z",
                            fill: "#c1d1f7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m504 200h-160a8 8 0 0 1 -8-8v-16a88 88 0 0 1 176 0v16a8 8 0 0 1 -8 8zm-152-16h144v-8a72 72 0 0 0 -144 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m392 200a8 8 0 0 1 -8-8v-18.75a116.53 116.53 0 0 1 34.34-82.91 8 8 0 1 1 11.32 11.32 100.56 100.56 0 0 0 -29.66 71.59v18.75a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m456 200a8 8 0 0 1 -8-8v-18.75a100.56 100.56 0 0 0 -29.66-71.59 8 8 0 0 1 11.32-11.32 116.53 116.53 0 0 1 34.34 82.91v18.75a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m424 240a8 8 0 0 1 -8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1 -8 8z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/FivePlusOne.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/FivePlusOne.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/FivePlusOne.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/FivePlusOne.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/FivePlusOne.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = FivePlusOne;
const __TURBOPACK__default__export__ = FivePlusOne;
var _c;
__turbopack_refresh__.register(_c, "FivePlusOne");

})()),
"[project]/src/icons/Bilardo.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Bilardo({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_4295446",
                enableBackground: "new 0 0 512 512",
                viewBox: "0 0 512 512",
                width: "30px",
                height: "30px",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "_x31_2_Pool_Table",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m424.468 26.667v458.666c0 11.786-9.547 21.333-21.333 21.333h-294.293c-11.787 0-21.333-9.547-21.333-21.333v-458.666c0-11.787 9.547-21.333 21.333-21.333h294.293c11.786 0 21.333 9.546 21.333 21.333z",
                                fill: "#fab280"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m125.856 506.666h-17.014c-11.787 0-21.333-9.547-21.333-21.333v-458.666c0-11.787 9.547-21.333 21.333-21.333h17.014c-11.787 0-21.333 9.547-21.333 21.333v458.666c0 11.786 9.546 21.333 21.333 21.333z",
                                fill: "#fff",
                                opacity: ".5"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m424.469 26.667v458.666c0 11.786-9.547 21.333-21.333 21.333h-57.12c11.787 0 21.333-9.547 21.333-21.333v-458.666c0-11.787-9.547-21.333-21.333-21.333h57.12c11.786 0 21.333 9.546 21.333 21.333z",
                                opacity: ".15"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m119.522 37.334h272.932v437.332h-272.932z",
                                fill: "#7bdd9d"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m119.509 37.334h17.066v437.332h-17.066z",
                                fill: "#fff",
                                opacity: ".5"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m358.388 37.334h34.08v437.332h-34.08z",
                                opacity: ".15"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                fill: "#7c8a8d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m404.543 45.459c0 11.163-9.041 20.157-20.203 20.157-11.116 0-20.157-8.995-20.157-20.157 0-11.116 9.041-20.157 20.157-20.157 11.163 0 20.203 9.041 20.203 20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m107.433 45.459c0 11.163 9.041 20.157 20.203 20.157 11.116 0 20.157-8.995 20.157-20.157 0-11.116-9.041-20.157-20.157-20.157-11.161 0-20.203 9.041-20.203 20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m404.543 256c0 11.163-9.041 20.157-20.203 20.157-11.116 0-20.157-8.995-20.157-20.157 0-11.116 9.041-20.157 20.157-20.157 11.163 0 20.203 9.041 20.203 20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m107.433 256c0 11.163 9.041 20.157 20.203 20.157 11.116 0 20.157-8.995 20.157-20.157 0-11.116-9.041-20.157-20.157-20.157-11.161 0-20.203 9.041-20.203 20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m107.433 466.541c0-11.163 9.041-20.157 20.203-20.157 11.116 0 20.157 8.995 20.157 20.157 0 11.116-9.041 20.157-20.157 20.157-11.162 0-20.203-9.041-20.203-20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m404.543 466.541c0-11.163-9.041-20.157-20.203-20.157-11.116 0-20.157 8.995-20.157 20.157 0 11.116 9.041 20.157 20.157 20.157 11.163 0 20.203-9.041 20.203-20.157z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m424.468 235.84v40.32h-32v-1.707c7.093-3.093 12.053-10.186 12.053-18.453 0-8.213-4.96-15.307-12.053-18.453v-1.707z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m107.456 256c0 8.267 4.96 15.359 12.053 18.453v1.707h-32v-40.32h32v1.707c-7.094 3.146-12.053 10.24-12.053 18.453z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m424.468 26.667v37.119h-31.786c6.986-3.093 11.841-10.133 11.841-18.346 0-11.093-9.014-20.16-20.16-20.16-8.213 0-15.253 4.907-18.346 11.893v-31.839h37.12c11.784 0 21.331 9.546 21.331 21.333z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m87.509 26.667v37.119h31.786c-6.986-3.093-11.841-10.133-11.841-18.346 0-11.093 9.014-20.16 20.16-20.16 8.213 0 15.253 4.907 18.346 11.893v-31.839h-37.12c-11.784 0-21.331 9.546-21.331 21.333z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m87.509 485.333v-37.119h31.786c-6.986 3.093-11.841 10.133-11.841 18.346 0 11.094 9.014 20.16 20.16 20.16 8.213 0 15.253-4.907 18.346-11.893v31.84h-37.12c-11.784-.001-21.331-9.547-21.331-21.334z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m424.468 485.333v-37.119h-31.786c6.986 3.093 11.841 10.133 11.841 18.346 0 11.094-9.014 20.16-20.16 20.16-8.213 0-15.253-4.907-18.346-11.893v31.84h37.12c11.784-.001 21.331-9.547 21.331-21.334z",
                                fill: "#a7b1b3"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m221.966 120.622c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354 0 17.006 7.652 17.006 17.006z",
                                                        fill: "#fb888b"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m221.941 120.616c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.321 0 16.955 7.695 16.955 17.018z",
                                                        opacity: ".15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m256.001 120.622c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354 0 17.006 7.652 17.006 17.006z",
                                                        fill: "#fb888b"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m255.976 120.616c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.695 16.955 17.018z",
                                                        opacity: ".15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m290.036 120.622c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354 0 17.006 7.652 17.006 17.006z",
                                                        fill: "#fb888b"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "m290.01 120.616c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.323 0 16.955 7.695 16.955 17.018z",
                                                        opacity: ".15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m324.07 120.622c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354 0 17.006 7.652 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m324.045 120.616c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.695 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m238.983 150.087c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354.002 17.006 7.653 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m238.958 150.081c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.696 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m273.019 150.087c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.353.002 17.006 7.653 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m272.993 150.081c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.696 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m307.053 150.087c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.353.002 17.006 7.653 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m307.028 150.081c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.321 0 16.955 7.696 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m256.001 179.559c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354.001 17.006 7.653 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m255.976 179.553c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.695 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m290.036 179.559c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.354.001 17.006 7.653 17.006 17.006z",
                                                fill: "#fb888b"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m290.01 179.553c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.323 0 16.955 7.695 16.955 17.018z",
                                                opacity: ".15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/Bilardo.jsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m273.019 209.051c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.353.001 17.006 7.653 17.006 17.006z",
                                        fill: "#fb888b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m272.993 209.045c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322.001 16.955 7.696 16.955 17.018z",
                                        opacity: ".15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m273.019 367.957c0 9.402-7.653 17.055-17.006 17.055-9.403 0-17.055-7.653-17.055-17.055 0-9.353 7.652-17.006 17.055-17.006 9.353 0 17.006 7.653 17.006 17.006z",
                                        fill: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m272.993 367.951c0 9.385-7.633 17.079-16.955 17.079-2.189 0-4.254-.375-6.131-1.126 6.381-2.44 10.948-8.696 10.948-15.953 0-7.195-4.567-13.451-10.948-15.892 1.877-.751 3.942-1.126 6.131-1.126 9.322 0 16.955 7.696 16.955 17.018z",
                                        opacity: ".15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m32.619 109.307 12.674 381.41c.289 8.719-6.7 15.945-15.424 15.945h-9.09c-8.724 0-15.714-7.226-15.424-15.945l12.675-381.411c.131-3.935 3.358-7.056 7.295-7.056 3.936 0 7.164 3.123 7.294 7.057z",
                                        fill: "#fab280"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m8.868 385.03-3.512 105.688c-.289 8.719 6.7 15.945 15.424 15.945h9.09c8.724 0 15.714-7.226 15.424-15.945l-3.511-105.688z",
                                        fill: "#a7b1b3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m29.863 506.666h-9.066c-8.747 0-15.734-7.253-15.467-15.946l12.694-381.44c.16-3.893 3.36-7.04 7.307-7.04 1.867 0 3.52.693 4.8 1.867-1.493 1.226-2.454 3.093-2.56 5.173l-12.642 381.44c-.319 8.533 6.401 15.68 14.934 15.946z",
                                        fill: "#fff",
                                        opacity: ".5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m45.276 490.72c.32 8.693-6.666 15.946-15.413 15.946h-9.066c-.427 0-.854 0-1.28-.106 8.106-.587 14.399-7.574 14.133-15.84l-12.693-381.44c-.054-1.547-.587-2.933-1.44-4.107 1.333-1.76 3.413-2.933 5.814-2.933 3.947 0 7.147 3.147 7.307 7.04z",
                                        opacity: ".15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m493.971 109.307 12.674 381.411c.289 8.719-6.7 15.945-15.424 15.945h-9.09c-8.724 0-15.714-7.226-15.424-15.945l12.674-381.411c.131-3.935 3.358-7.056 7.295-7.056 3.937-.001 7.165 3.122 7.295 7.056z",
                                        fill: "#fab280"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m470.219 385.03-3.512 105.687c-.289 8.719 6.7 15.945 15.424 15.945h9.09c8.724 0 15.714-7.226 15.424-15.945l-3.512-105.687z",
                                        fill: "#a7b1b3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m491.215 506.666h-9.066c-8.747 0-15.734-7.253-15.467-15.946l12.693-381.44c.16-3.893 3.36-7.04 7.307-7.04 1.867 0 3.52.693 4.8 1.867-1.493 1.226-2.454 3.093-2.56 5.173l-12.64 381.44c-.321 8.533 6.399 15.68 14.933 15.946z",
                                        fill: "#fff",
                                        opacity: ".5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m506.629 490.72c.32 8.693-6.666 15.946-15.413 15.946h-9.066c-.427 0-.854 0-1.28-.106 8.106-.587 14.399-7.574 14.133-15.84l-12.694-381.44c-.054-1.547-.587-2.933-1.44-4.107 1.333-1.76 3.413-2.933 5.814-2.933 3.947 0 7.147 3.147 7.307 7.04z",
                                        opacity: ".15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m403.135 0h-294.291c-14.703 0-26.667 11.963-26.667 26.667v458.666c0 14.703 11.963 26.667 26.667 26.667h294.291c14.703 0 26.667-11.963 26.667-26.667v-458.666c0-14.703-11.964-26.667-26.667-26.667zm-18.797 441.052c-14.057 0-25.489 11.432-25.489 25.489 0 .956.179 1.863.282 2.791h-206.289c.103-.929.282-1.835.282-2.791 0-14.057-11.432-25.489-25.489-25.489-.956 0-1.863.179-2.791.281v-160.125c.929.102 1.835.281 2.791.281 14.057 0 25.489-11.432 25.489-25.489s-11.432-25.489-25.489-25.489c-.956 0-1.863.179-2.791.281v-160.126c.929.102 1.835.281 2.791.281 14.057 0 25.489-11.432 25.489-25.489 0-.956-.179-1.863-.282-2.791h206.288c-.103.929-.282 1.835-.282 2.791 0 14.057 11.432 25.489 25.489 25.489.959 0 1.87-.179 2.803-.282v160.127c-.932-.103-1.842-.282-2.803-.282-14.057 0-25.489 11.432-25.489 25.489s11.432 25.489 25.489 25.489c.959 0 1.87-.179 2.803-.282v160.127c-.932-.102-1.842-.281-2.802-.281zm-271.573-185.052c0-8.172 6.672-14.823 14.87-14.823 8.172 0 14.823 6.651 14.823 14.823s-6.651 14.823-14.823 14.823c-8.198 0-14.87-6.651-14.87-14.823zm-5.815 14.828h-14.106v-29.657h14.106c-3.022 4.188-4.851 9.284-4.851 14.828-.001 5.545 1.829 10.642 4.851 14.829zm277.388-.005c-8.172 0-14.823-6.651-14.823-14.823s6.651-14.823 14.823-14.823c8.198 0 14.87 6.651 14.87 14.823s-6.672 14.823-14.87 14.823zm20.69-29.646h14.107v29.651h-14.111c3.022-4.188 4.851-9.284 4.851-14.828-.001-5.541-1.828-10.637-4.847-14.823zm-7.221-10.666v-161.391h21.328v161.391zm-13.469-170.229c-8.172 0-14.823-6.651-14.823-14.823 0-2.208.518-4.285 1.387-6.169.009-.02.022-.036.03-.057 2.361-5.06 7.463-8.598 13.405-8.598 8.198 0 14.87 6.651 14.87 14.823s-6.671 14.824-14.869 14.824zm-23.656-28.281h-209.385v-21.334h209.385zm-218.223 13.457c0 8.172-6.651 14.823-14.823 14.823-8.198 0-14.87-6.651-14.87-14.823s6.672-14.823 14.87-14.823c8.171.001 14.823 6.652 14.823 14.823zm-28.282 23.662v161.385h-21.333v-161.385zm-21.333 212.374h21.333v161.386h-21.333zm34.791 170.224c8.172 0 14.823 6.651 14.823 14.823s-6.651 14.823-14.823 14.823c-8.198 0-14.87-6.651-14.87-14.823s6.672-14.823 14.87-14.823zm23.662 28.282h209.385v21.333h-209.385zm219.636-7.234c-.009-.021-.022-.037-.031-.058-.869-1.884-1.386-3.961-1.386-6.168 0-8.172 6.651-14.823 14.823-14.823 8.198 0 14.87 6.651 14.87 14.823s-6.672 14.823-14.87 14.823c-5.943.001-11.044-3.536-13.406-8.597zm26.874-29.886v-161.386h21.328v161.386zm21.328-416.213v31.786h-12.947c2.289-3.818 3.687-8.23 3.687-12.995 0-14.057-11.453-25.489-25.537-25.489-4.763 0-9.172 1.395-12.99 3.678v-12.98h31.786c8.823 0 16.001 7.177 16.001 16zm-310.291-16h31.786v12.983c-3.818-2.285-8.23-3.681-12.995-3.681-14.084 0-25.537 11.432-25.537 25.489 0 4.765 1.398 9.176 3.687 12.995h-12.941v-31.786c0-8.823 7.176-16 16-16zm-16 474.666v-31.786h12.942c-2.289 3.818-3.687 8.23-3.687 12.995 0 14.057 11.453 25.489 25.537 25.489 4.765 0 9.176-1.396 12.995-3.681v12.983h-31.786c-8.825 0-16.001-7.177-16.001-16zm310.291 16h-31.786v-12.98c3.817 2.283 8.227 3.678 12.99 3.678 14.084 0 25.537-11.432 25.537-25.489 0-4.765-1.399-9.176-3.687-12.995h12.947v31.786c-.001 8.823-7.179 16-16.001 16z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m307.067 98.281c-6.833 0-12.886 3.136-16.997 7.968-4.092-4.863-10.201-7.968-17.04-7.968-6.864 0-12.936 3.154-17.025 8.033-4.101-4.869-10.163-8.033-17.012-8.033-6.863 0-12.936 3.164-17.046 8.031-4.098-4.863-10.143-8.031-16.984-8.031-12.343 0-22.39 10.02-22.39 22.339 0 10.962 7.936 20.072 18.356 21.982-.852 2.339-1.341 4.851-1.341 7.486 0 10.977 7.957 20.087 18.397 21.981-.857 2.342-1.376 4.845-1.376 7.487 0 10.983 7.964 20.102 18.411 21.989-.851 2.356-1.395 4.86-1.395 7.506 0 12.343 10.047 22.385 22.39 22.385 12.318 0 22.339-10.042 22.339-22.385 0-2.647-.53-5.154-1.389-7.503 10.44-1.875 18.405-10.998 18.405-21.992 0-2.637-.498-5.145-1.344-7.487 10.419-1.892 18.359-11.004 18.359-21.982 0-2.636-.51-5.138-1.357-7.48 10.428-1.886 18.378-11.005 18.378-21.99 0-12.314-10.021-22.336-22.339-22.336zm-45.747 22.21c.071-6.377 5.292-11.543 11.711-11.543 6.393 0 11.588 5.166 11.659 11.543 0 .044-.013.085-.013.128 0 .045.013.085.013.128-.071 6.402-5.265 11.595-11.659 11.595-6.42 0-11.64-5.192-11.711-11.595 0-.044.013-.085.013-.128s-.013-.083-.013-.128zm-5.305 17.926c6.438 0 11.672 5.235 11.672 11.672 0 6.463-5.235 11.719-11.672 11.719-6.463 0-11.724-5.255-11.724-11.719 0-6.438 5.261-11.672 11.724-11.672zm-17.021-29.469c6.438 0 11.672 5.235 11.672 11.672 0 6.463-5.235 11.724-11.672 11.724-6.463 0-11.719-5.26-11.719-11.724.001-6.437 5.256-11.672 11.719-11.672zm-45.754 11.672c0-6.438 5.26-11.672 11.724-11.672 6.393 0 11.588 5.166 11.658 11.543 0 .044-.013.085-.013.128 0 .045.013.085.013.128-.071 6.402-5.265 11.595-11.658 11.595-6.464.002-11.724-5.258-11.724-11.722zm17.015 29.469c0-6.438 5.26-11.672 11.724-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.463-5.235 11.719-11.672 11.719-6.463-.001-11.724-5.256-11.724-11.719zm28.739 41.192c-6.463 0-11.719-5.26-11.719-11.724 0-6.438 5.255-11.672 11.719-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.464-5.234 11.724-11.672 11.724zm17.021 29.49c-6.463 0-11.724-5.255-11.724-11.719 0-6.438 5.26-11.672 11.724-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.464-5.234 11.719-11.672 11.719zm17.016-29.49c-6.463 0-11.724-5.26-11.724-11.724 0-6.438 5.26-11.672 11.724-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.464-5.234 11.724-11.672 11.724zm17.016-29.474c-6.463 0-11.719-5.255-11.719-11.719 0-6.438 5.255-11.672 11.719-11.672 6.438 0 11.672 5.235 11.672 11.672-.001 6.464-5.235 11.719-11.672 11.719zm17.02-29.463c-6.463 0-11.724-5.26-11.724-11.724 0-6.438 5.26-11.672 11.724-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.464-5.234 11.724-11.672 11.724z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m256.015 345.619c-12.343 0-22.39 10.02-22.39 22.339 0 12.343 10.047 22.385 22.39 22.385 12.318 0 22.339-10.042 22.339-22.385 0-12.317-10.021-22.339-22.339-22.339zm0 34.058c-6.463 0-11.724-5.255-11.724-11.719 0-6.438 5.26-11.672 11.724-11.672 6.438 0 11.672 5.235 11.672 11.672 0 6.463-5.234 11.719-11.672 11.719z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m37.948 109.13c-.224-6.849-5.771-12.214-12.625-12.214-6.849 0-12.396 5.364-12.62 12.214l-12.677 381.412c-.389 11.769 9.023 21.453 20.755 21.453h9.089c11.749 0 21.149-9.712 20.75-21.453-3.437-103.452-10.293-309.825-12.672-381.412zm-14.589.354c.036-1.067.901-1.901 1.964-1.901 1.067 0 1.932.834 1.969 1.901l8.977 270.213h-21.891zm6.511 391.844h-9.089c-5.691 0-10.282-4.697-10.099-10.432l3.349-100.531h22.589l3.344 100.531c.184 5.747-4.413 10.432-10.094 10.432z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m499.301 109.13c-.224-6.849-5.771-12.214-12.625-12.214-6.844 0-12.391 5.364-12.625 12.214-2.356 70.924-9.22 277.504-12.672 381.41-.399 11.742 9.002 21.453 20.75 21.453h9.094c11.749 0 21.149-9.712 20.75-21.453-3.425-103.096-10.297-309.938-12.672-381.41zm-14.593.359c.036-1.067.901-1.906 1.969-1.906 1.067 0 1.932.834 1.969 1.901l8.977 270.213h-21.893zm6.516 391.839h-9.094c-5.682 0-10.278-4.685-10.093-10.432l3.34-100.531h22.601l3.34 100.531c.183 5.747-4.413 10.432-10.094 10.432z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/Bilardo.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/icons/Bilardo.jsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/icons/Bilardo.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/icons/Bilardo.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/Bilardo.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Bilardo.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Bilardo.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Bilardo;
const __TURBOPACK__default__export__ = Bilardo;
var _c;
__turbopack_refresh__.register(_c, "Bilardo");

})()),
"[project]/src/icons/Check.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Check({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                fill: "none",
                viewBox: "0 0 64 64",
                height: "30",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_5629243",
                className: "mr-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        clipRule: "evenodd",
                        d: "m42.6645 13.6077c3.5304-3.499 9.2288-3.4736 12.7278.0568s3.4736 9.2288-.0568 12.7278l-23.2064 23c-3.5081 3.4769-9.1628 3.4769-12.6709 0l-10.79368-10.6977c-3.53038-3.4989-3.55582-9.1974-.05684-12.7278 3.49902-3.5303 9.19742-3.5558 12.72782-.0568l4.4582 4.4185z",
                        fill: "#00ec42",
                        fillRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Check.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m24.7937 29.3374-3.4582-3.4274c-2.0108-1.9929-4.7248-2.8424-7.3353-2.5523 1.9464.2164 3.8363 1.0666 5.3353 2.5523l4.4582 4.4185z",
                        fill: "#bffacf"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Check.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m24.7937 51.9446c2.6115.2903 5.3257-.5604 7.3354-2.5523l23.2064-23c3.5304-3.499 3.5558-9.1974.0568-12.7278-2.0133-2.0314-4.7548-2.9023-7.3925-2.6091 1.9728.2193 3.8864 1.0895 5.3925 2.6091 3.499 3.5304 3.4736 9.2288-.0568 12.7278l-23.2064 23c-1.4983 1.4851-3.3883 2.3358-5.3354 2.5523z",
                        fill: "#bffacf"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Check.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        clipRule: "evenodd",
                        d: "m42.6645 13.6077c3.5304-3.499 9.2288-3.4736 12.7278.0568s3.4736 9.2288-.0568 12.7278l-23.2064 23c-3.5081 3.4769-9.1628 3.4769-12.6709 0l-10.79368-10.6977c-3.53038-3.4989-3.55582-9.1974-.05684-12.7278 3.49902-3.5303 9.19742-3.5558 12.72782-.0568l4.4582 4.4185zm9.8868 2.8726c-1.9439-1.9613-5.1097-1.9755-7.071-.0316l-18.2788 18.1162c-.7795.7727-2.0362.7727-2.8157 0l-5.8661-5.8139c-1.9613-1.9438-5.1271-1.9297-7.071.0316-1.94387 1.9613-1.92973 5.1271.0316 7.071l10.7936 10.6977c1.949 1.9316 5.0905 1.9316 7.0395 0l23.2063-23c1.9613-1.9439 1.9755-5.1097.0316-7.071z",
                        fill: "#000",
                        fillRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Check.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/Check.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: "10px"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Check.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Check.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Check;
const __TURBOPACK__default__export__ = Check;
var _c;
__turbopack_refresh__.register(_c, "Check");

})()),
"[project]/src/icons/PrivatePool.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PrivatePool({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_1925866",
                enableBackground: "new 0 0 512.01 512.01",
                viewBox: "0 0 512.01 512.01",
                height: "30",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m434.285 136.89h-355.961l-32.452 165h420.865z",
                        fill: "#60b8fe"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m78.324 136.89-32.452 165h44l32.452-165z",
                        fill: "#23a8fe"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m51.661 300.39c-2.054 0-3.597-1.876-3.2-3.891l30.579-155.477c.301-1.529 1.642-2.632 3.2-2.632h166.7c11.358-12.002 24.637-22.167 39.347-30h-221.066c-7.168 0-13.335 5.071-14.718 12.105l-37.763 192c-1.823 9.262 5.278 17.895 14.718 17.895h419.531l19.258-30z",
                        fill: "#6c7ed6"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m48.741 312.495 2.393-12.166c-1.779-.291-3.034-1.995-2.672-3.831l30.578-155.476c.301-1.529 1.642-2.632 3.2-2.632h.743l3.52-17.895c1.383-7.034 7.55-12.105 14.718-12.105h-34c-7.168 0-13.335 5.071-14.718 12.105l-37.763 192c-1.823 9.262 5.278 17.895 14.718 17.895h34c-9.439 0-16.54-8.632-14.717-17.895z",
                        fill: "#4f67d2"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m442.58 187.238 20.681 109.148 2.985-4.97c4.265-7.103 13.478-9.403 20.582-5.137 3.954 2.375 6.413 6.284 7.086 10.508l-20.759-109.55h-30.575z",
                        fill: "#6c7ed6"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#bc7c63",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m443.173 384.103c-2.712 4.516-7.593 7.277-12.859 7.277h-15v45.198c0 8.284 6.716 15 15 15s15-6.716 15-15v-56.04z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PrivatePool.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m263.822 391.381v45.198c0 8.284 6.716 15 15 15s15-6.716 15-15v-45.198z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PrivatePool.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m443.173 384.103c-2.712 4.516-7.593 7.277-12.859 7.277h-15v45.198c0 8.284 6.716 15 15 15s15-6.716 15-15v-56.04z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PrivatePool.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m263.822 391.381v45.198c0 8.284 6.716 15 15 15s15-6.716 15-15v-45.198z",
                        fill: "#ab6b51"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m356.106 90.192c5.062 0 10.065.246 15 .726v-15.478c0-8.284-6.716-15-15-15s-15 6.716-15 15v15.479c4.935-.481 9.938-.727 15-.727z",
                        fill: "#bc7c63"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m361.106 75.402c0-4.463 1.696-8.52 4.46-11.598-2.581-2.101-5.872-3.364-9.46-3.364-8.284 0-15 6.716-15 15v15.479c4.935-.48 9.938-.726 15-.726 1.674 0 3.339.037 5 .09z",
                        fill: "#ab6b51"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m341.106 187.238h30v178.142h-30z",
                        fill: "#bc7c63"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m341.106 187.238h19.774v178.142h-19.774z",
                        fill: "#ab6b51"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m498.329 184.62c-22.509-56.496-77.7-96.427-142.223-96.427-64.522 0-119.713 39.931-142.223 96.427-.882 2.214.772 4.619 3.156 4.619h53.072c13.106-57.875 46.661-99.046 85.995-99.046s72.889 41.171 85.995 99.046h53.072c2.384-.001 4.038-2.405 3.156-4.619z",
                        fill: "#dfebfa"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m340.031 92.529c2.157-1.562 4.358-2.911 6.597-4.044-60.41 3.692-111.346 42.426-132.745 96.135-.882 2.214.772 4.619 3.156 4.619h53.072c11.279-49.807 37.702-87.24 69.92-96.71z",
                        fill: "#b1dbfc"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m356.106 90.192c15.59 0 28.889 41.171 34.083 99.046h52.358c-12.779-58.926-46.656-101.046-86.442-101.046s-73.662 42.12-86.442 101.046h52.358c5.196-57.875 18.495-99.046 34.085-99.046z",
                        fill: "#ff656f"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m345.143 89.271c-34.957 6.923-63.891 46.536-75.479 99.967h23.892c8.749-49.175 27.937-86.872 51.587-99.967z",
                        fill: "#ff4756"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m356.106 88.192c-15.769 0-29.195 42.12-34.26 101.046h68.521c-5.066-58.926-18.492-101.046-34.261-101.046z",
                        fill: "#dfebfa"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m430.314 393.381h-167.209c-8.284 0-15-6.716-15-15s6.716-15 15-15h158.721l44.42-73.964c4.265-7.103 13.478-9.403 20.582-5.137 7.103 4.266 9.401 13.48 5.137 20.582l-48.791 81.241c-2.713 4.516-7.594 7.278-12.86 7.278z",
                        fill: "#dfebfa"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m322.313 378.381c0-8.284 6.716-15 15-15h-74.208c-8.284 0-15 6.716-15 15s6.716 15 15 15h74.208c-8.285 0-15-6.716-15-15z",
                        fill: "#b1dbfc"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m98.292 236.128c11.325-.394 22.045-5.122 29.982-13.113 17.378 17.54 45.695 17.531 63.066.002 8.321 8.398 19.602 13.146 31.521 13.15h.002c4.142 0 7.5-3.356 7.501-7.498s-3.355-7.501-7.497-7.502c-8.786-.003-17.053-3.904-22.681-10.705-2.195-2.654-5.42-4.176-8.846-4.176s-6.65 1.522-8.847 4.176c-11.823 14.286-33.571 14.258-45.372 0-4.62-5.583-13.099-5.553-17.692 0-5.451 6.587-13.144 10.378-21.659 10.674-4.14.144-7.379 3.617-7.234 7.756.144 4.141 3.613 7.376 7.756 7.236z"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m98.291 192.784c11.326-.394 22.047-5.122 29.984-13.113 13.131 13.233 33.232 16.919 50.223 9.04 3.758-1.743 5.392-6.202 3.648-9.959-1.742-3.758-6.199-5.39-9.959-3.649-12.11 5.616-26.529 2.333-35.065-7.983-4.62-5.582-13.1-5.553-17.691 0-5.453 6.588-13.145 10.379-21.659 10.674-4.14.144-7.38 3.616-7.235 7.756.143 4.138 3.658 7.365 7.754 7.234z"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m511.224 180.092v-.001c-22.116-55.507-72.262-93.928-129.808-101.931v-7.148c0-12.609-10.258-22.867-22.867-22.867s-22.868 10.258-22.868 22.867v7.148c-18.384 2.557-36.112 8.195-52.57 16.726h-84.086c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h60.343c-5.98 4.536-12.344 10.083-17.916 15.735h-167.25c-3.584 0-6.667 2.536-7.359 6.053l-32.644 165.968c-.91 4.631 2.639 8.947 7.359 8.947h84.911v15.735h-103.595c-4.951 0-8.675-4.534-7.719-9.386l38.688-196.704c.723-3.679 3.97-6.349 7.719-6.349h101.605c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-101.605c-10.898 0-20.335 7.762-22.438 18.455l-38.686 196.702c-2.783 14.136 8.054 27.282 22.437 27.282h103.595v17.62c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-17.62h32.127v17.62c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-17.62h147.085v21.183h-72.412c-12.609 0-22.867 10.258-22.867 22.868 0 10.255 6.785 18.954 16.102 21.845v37.779c0 12.609 10.259 22.867 22.868 22.867s22.867-10.258 22.867-22.867v-36.757h109.469v36.757c0 12.609 10.258 22.867 22.867 22.867s22.868-10.258 22.868-22.867v-53.285l46.723-77.798c3.053-5.083 3.994-11.096 2.685-16.86l-8.366-42.541c-.798-4.064-4.743-6.713-8.807-5.912-4.064.799-6.711 4.742-5.912 8.806l4.353 22.13c-5.463-.86-11.1.386-15.437 3.049l-16.42-83.491h16.035l4.416 22.454c.8 4.063 4.745 6.712 8.807 5.912 4.064-.799 6.711-4.742 5.912-8.806l-3.847-19.56h13.438c7.726.001 13.068-7.806 10.2-15.005zm-129.808 157.232h52.939l-12.722 21.183h-40.218v-21.183zm61.948-15h-61.948v-15.735h71.397c-3.276 5.457-6.161 10.261-9.449 15.735zm-111.683-142.226c6.757-67.052 21.787-88.356 26.81-88.518h.117c5.021.161 20.051 21.464 26.81 88.518-6.918 0-45.823 0-53.737 0zm-52.19 0c10.655-40.735 31.314-70.868 55.64-82.837-10.735 22.604-16.075 58.069-18.516 82.837zm-57.343 0c16.288-36.555 46.389-64.34 81.95-78.28-20.439 20.888-33.189 50.003-40.077 78.28zm178.336 0c-2.446-24.806-7.789-60.251-18.517-82.838 24.326 11.969 44.984 42.102 55.64 82.838zm-49.803-103.335v-5.751c0-4.338 3.529-7.867 7.868-7.867 4.338 0 7.867 3.529 7.867 7.867v5.751c-4.987-.236-10.365-.252-15.735 0zm-270.311 63.858h148.009c-9.234 11.979-16.828 25.222-22.504 39.468-2.866 7.19 2.463 15.009 10.199 15.009h119.606v96.491h-147.084v-7.335c0-17.128-13.935-31.063-31.063-31.063-9.417 0-17.862 4.218-23.563 10.856-5.701-6.639-14.146-10.856-23.563-10.856-17.129 0-31.063 13.935-31.063 31.063v7.335h-28.667zm46.099 150.968h-32.127v-7.335c0-8.857 7.206-16.063 16.063-16.063s16.063 7.206 16.063 16.063v7.335zm47.127 0h-32.127v-7.335c0-8.857 7.206-16.063 16.063-16.063s16.063 7.206 16.063 16.063v7.335zm-32.127 30.735v-15.735h32.127v15.735zm47.127 0v-15.735h147.085v15.735zm162.085-127.226h15.735v163.409h-15.735c0-15.194 0-144.251 0-163.409zm-63.442 245.9c0 4.338-3.529 7.867-7.867 7.867-4.339 0-7.868-3.529-7.868-7.867v-36.757h15.735zm155.204 0c0 4.338-3.529 7.867-7.868 7.867-4.338 0-7.867-3.529-7.867-7.867v-36.757h7.867c2.467 0 5.268-.448 7.868-1.411zm46.169-149.6c3.717 2.232 4.933 7.068 2.694 10.795l-47.792 79.578s-.001.001-.001.001l-2.193 3.652c-1.414 2.354-3.998 3.817-6.745 3.817-21.127 0-150.37 0-171.306 0-4.338 0-7.867-3.529-7.867-7.867s3.529-7.868 7.867-7.868h162.609c2.634 0 5.074-1.381 6.43-3.639 7.964-13.26 32.56-54.215 40.188-66.917l5.32-8.858c2.231-3.715 7.052-4.943 10.796-2.694zm-28.662.191h-78.534v-96.491h59.557zm-6.872-111.491c-6.89-28.282-19.641-57.395-40.077-78.28 35.059 13.742 65.387 41.107 81.95 78.28-14.817 0-27.056 0-41.873 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PrivatePool.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/PrivatePool.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/PrivatePool.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/PrivatePool.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PrivatePool;
const __TURBOPACK__default__export__ = PrivatePool;
var _c;
__turbopack_refresh__.register(_c, "PrivatePool");

})()),
"[project]/src/icons/BBQ.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function BBQ({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                height: "30",
                width: "30",
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_3808804",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "_4-grill",
                    "data-name": "4-grill",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m14 63h-4l6-16h4z",
                            fill: "#d4e5e6"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m50 63h4l-6-16h-4z",
                            fill: "#d4e5e6"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m59 29c0 13.807-12.088 25-27 25s-27-11.193-27-25z",
                            fill: "#e36861"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "32",
                            cy: "29",
                            fill: "#f59760",
                            rx: "27",
                            ry: "14"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m20 22c4 0 4 5 7 5 4 0 8-1 8 4s-3.4 5-10 5c-8 0-10-5-10-8s1-6 5-6z",
                            fill: "#e36861"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "20",
                            cy: "28",
                            fill: "#f5b3bd",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m30 49h4v14h-4z",
                            fill: "#e0f2f3"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m48.5 32.6a10.622 10.622 0 0 1 -7.714 1.468 2 2 0 0 1 1.008-3.871 6.943 6.943 0 0 0 4.706-1.065 6.92 6.92 0 0 0 3.272-3.548 2.015 2.015 0 0 1 2.468-1.358 1.985 1.985 0 0 1 1.387 2.424 10.616 10.616 0 0 1 -5.127 5.95z",
                            fill: "#e36861"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m64 29a5.006 5.006 0 0 0 -5-5 5.081 5.081 0 0 0 -.523.033c-3.747-5.898-14.042-10.033-26.477-10.033s-22.73 4.135-26.477 10.033a5.081 5.081 0 0 0 -.523-.033 4.987 4.987 0 0 0 -.476 9.952c2.148 10.307 10.863 18.621 22.305 20.606a1.118 1.118 0 0 0 .172.014 1 1 0 0 0 .17-1.985c-9.679-1.678-17.243-8.216-20.013-16.565 4.63 4.778 13.908 7.978 24.842 7.978s20.212-3.2 24.842-7.978c-2.77 8.349-10.334 14.887-20.013 16.565a1 1 0 0 0 .171 1.985 1.118 1.118 0 0 0 .172-.014c11.442-1.985 20.157-10.3 22.305-20.606a4.99 4.99 0 0 0 4.523-4.952zm-26.343 12.485 2.828-2.828 2.192 2.192a45.783 45.783 0 0 1 -4.84.817zm15.556-7.071 1.181 1.18a22.085 22.085 0 0 1 -5.74 3.38zm1.414-1.414 2.829-2.829.358.358a8.611 8.611 0 0 1 -1.989 3.671zm-9.9-9.9-2.827-2.828 2.653-2.652c.166.046.33.094.494.142l2.51 2.51zm-11.313-2.828 2.828-2.828 2.829 2.828-2.829 2.828zm4.564-3.921c1.487.175 2.926.413 4.3.711l-1.8 1.8zm-3.195-.276-2.783 2.783-2.783-2.783c.915-.048 1.843-.075 2.783-.075s1.868.026 2.783.075zm-13.064.987c1.377-.3 2.816-.536 4.3-.711l-2.507 2.507zm-7.231 2.338-3.7 3.7-.916-.915a21.581 21.581 0 0 1 4.616-2.785zm-6.082 4.147.967.968-2.829 2.828-.259-.259a9.04 9.04 0 0 1 2.121-3.537zm-.231 10.653a8.611 8.611 0 0 1 -1.989-3.669l.358-.358 2.829 2.827zm2.612.216 4.559 4.56a22.085 22.085 0 0 1 -5.74-3.38zm-8.787-5.416a3 3 0 0 1 2.524-2.952 8.714 8.714 0 0 0 -.524 2.952q0 .4.038.8c.023.7.071 1.39.152 2.074a3 3 0 0 1 -2.19-2.874zm27.63 12.944-.459-.459 2.778-2.778-1.414-1.414-2.778 2.778-1.778-1.778-1.414 1.414 1.778 1.778-.18.181a45.783 45.783 0 0 1 -4.84-.817l2.142-2.142-1.414-1.414-2.779 2.778-7.072-7.071 1.506-1.506-1.413-1.414-1.506 1.506-2.829-2.829 2.829-2.828.778.778 1.414-1.414-.778-.778 6.753-6.753c.164-.048.328-.1.494-.142l5.845 5.844 1.414-1.414-1.778-1.778 2.829-2.828 2.828 2.828-2.293 2.293 1.414 1.414 2.293-2.293 7.021 7.021 1.414-1.414-2.778-2.778 2.828-2.829 2.829 2.829-2.021 2.021 1.414 1.414 6.263-6.264 1.021 1.021 1.414-1.414-1.021-1.021.3-.3c3.684 1.905 6.219 4.369 7.032 7.111l-.259.259-.749-.748-1.414 1.414.749.749-11.315 11.314-4.779-4.778-1.414 1.414.536.536-2.828 2.828-2.778-2.778-1.414 1.414 2.778 2.778-.459.459c-.781.035-1.57.056-2.37.056s-1.589-.021-2.37-.056zm30.18-10.069c.081-.684.129-1.376.152-2.074q.038-.401.038-.801a8.714 8.714 0 0 0 -.524-2.952 2.985 2.985 0 0 1 .334 5.827z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m18.1 52.063a1 1 0 0 0 -1.289.586l-3.504 9.351h-1.864l3.994-10.649a1 1 0 1 0 -1.874-.7l-4.5 12a1 1 0 0 0 .937 1.349h4a1 1 0 0 0 .937-.649l3.75-10a1 1 0 0 0 -.587-1.288z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m50.437 50.649a1 1 0 1 0 -1.874.7l3.994 10.651h-1.864l-3.506-9.351a1 1 0 1 0 -1.874.7l3.75 10a1 1 0 0 0 .937.651h4a1 1 0 0 0 .937-1.351z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m36 31a5.032 5.032 0 0 0 -1.308-3.818c-1.44-1.39-3.654-1.31-5.99-1.224-.559.021-1.131.042-1.7.042-.828 0-1.319-.651-2.116-1.8-.986-1.426-2.219-3.2-4.886-3.2-3.869 0-6 2.486-6 7 0 3.343 2.316 9 11 9 6.624 0 11 0 11-6zm-11 4c-6.643 0-9-3.771-9-7 0-4.482 2.283-5 4-5 1.62 0 2.37 1.083 3.24 2.338s1.844 2.662 3.76 2.662c.6 0 1.191-.021 1.774-.043 1.906-.069 3.7-.135 4.531.665a3.219 3.219 0 0 1 .695 2.378c0 3.83-2.014 4-9 4z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m20 25a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m29 30h2v2h-2z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m24 31h2v2h-2z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m34 48h-4a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-14a1 1 0 0 0 -1-1zm-1 14h-2v-12h2z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m40.527 35.03a8.483 8.483 0 0 0 2.091.23 12.729 12.729 0 0 0 6.382-1.798 11.672 11.672 0 0 0 5.593-6.552 2.968 2.968 0 0 0 -2.078-3.645 3.022 3.022 0 0 0 -3.7 2.023 5.975 5.975 0 0 1 -2.815 2.978 6.011 6.011 0 0 1 -3.96.958 3 3 0 0 0 -1.513 5.806zm-.189-3.156a1 1 0 0 1 .974-.738 1.045 1.045 0 0 1 .262.033 7.919 7.919 0 0 0 5.426-1.169 7.9 7.9 0 0 0 3.729-4.125 1.011 1.011 0 0 1 1.236-.686.983.983 0 0 1 .7 1.2 9.729 9.729 0 0 1 -4.665 5.341 9.587 9.587 0 0 1 -6.955 1.37 1 1 0 0 1 -.707-1.224z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m31.445 6.834a2.576 2.576 0 0 0 -1.445 2.166 1 1 0 0 0 2 0c0-.114.164-.241.555-.5a2.576 2.576 0 0 0 1.445-2.168 2.574 2.574 0 0 0 -1.445-2.166c-.391-.261-.555-.389-.555-.5s.163-.239.554-.5a2.573 2.573 0 0 0 1.446-2.166 1 1 0 0 0 -2 0c0 .112-.163.239-.555.5a2.571 2.571 0 0 0 -1.445 2.164 2.576 2.576 0 0 0 1.445 2.166c.392.261.555.388.555.5s-.164.243-.555.504z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m15.359 10.564a3.049 3.049 0 0 0 -1.359 2.436 1 1 0 0 0 2 0c0-.337.156-.5.641-.9a3.049 3.049 0 0 0 1.359-2.435 3.049 3.049 0 0 0 -1.359-2.436c-.485-.4-.641-.562-.641-.9 0-.321.129-.471.64-.9a3.042 3.042 0 0 0 1.36-2.429 1 1 0 0 0 -2 0c0 .321-.129.471-.64.9a3.042 3.042 0 0 0 -1.36 2.43 3.049 3.049 0 0 0 1.359 2.436c.485.4.641.562.641.9s-.156.495-.641.898z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m47.359 10.564a3.049 3.049 0 0 0 -1.359 2.436 1 1 0 0 0 2 0c0-.337.156-.5.641-.9a3.049 3.049 0 0 0 1.359-2.435 3.049 3.049 0 0 0 -1.359-2.436c-.485-.4-.641-.562-.641-.9 0-.321.129-.471.64-.9a3.042 3.042 0 0 0 1.36-2.429 1 1 0 0 0 -2 0c0 .321-.129.471-.64.9a3.042 3.042 0 0 0 -1.36 2.43 3.049 3.049 0 0 0 1.359 2.436c.485.4.641.562.641.9s-.156.495-.641.898z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BBQ.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/BBQ.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/BBQ.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/BBQ.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/BBQ.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = BBQ;
const __TURBOPACK__default__export__ = BBQ;
var _c;
__turbopack_refresh__.register(_c, "BBQ");

})()),
"[project]/src/icons/Jacuzzy.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Jacuzzy({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                height: "30",
                width: "30",
                viewBox: "0 0 96 96",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_5921609",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "Jacuzzi",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m61.47 18.67h-26.94v-4.2a13.47 13.47 0 0 1 26.94 0z",
                            fill: "#e6e7e8"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m61.47 19.67h-26.94a1 1 0 0 1 -1-1v-4.2a14.47 14.47 0 0 1 28.94 0v4.2a1 1 0 0 1 -1 1zm-25.94-2h24.94v-3.2a12.47 12.47 0 0 0 -24.94 0z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m42.39 52.33a4.19 4.19 0 0 0 -3.72 2.29 4.15 4.15 0 0 0 -2.5-.82 4.6 4.6 0 0 0 -7.44-4 3.39 3.39 0 1 0 -5.94 2.77 4.75 4.75 0 0 0 -2.79 2.43 4.11 4.11 0 0 0 -8 1.07 3.42 3.42 0 1 0 -3.13 6.08c.85 3.34 11.78 4.67 17 1.82a15.45 15.45 0 0 0 8.61.47c4 2.36 10.85.64 10.85-2.68a2.62 2.62 0 0 0 -.68-1.69 4.2 4.2 0 0 0 -2.26-7.74z",
                            fill: "#cbf4ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m34.32 65.49a16.68 16.68 0 0 1 -8.39-.43c-5.24 2.55-16.08 1.74-17.83-2.22-4.26-2.57-1.61-9.21 3.24-8.1a5.12 5.12 0 0 1 8.66-1.56 5.27 5.27 0 0 1 1.33-1.06 4.39 4.39 0 0 1 7.91-3.81 5.61 5.61 0 0 1 7.91 4.58 5 5 0 0 1 1.18.39 5.19 5.19 0 1 1 7.62 7 3.34 3.34 0 0 1 .35 1.47c.02 4.25-7.37 6.12-11.98 3.74zm.15-2a1 1 0 0 1 .51.13c4.09 2.41 11.2-.14 8.9-2.85a1 1 0 0 1 .22-1.49 3.19 3.19 0 1 0 -4.54-4.15 1 1 0 0 1 -.66.52c-.85.2-1.1-.78-2.67-.8a1 1 0 0 1 -1-1.09 3.61 3.61 0 0 0 -3.59-3.91c-2 0-2.2 1.32-3.21.94a1 1 0 0 1 -.63-.76 2.39 2.39 0 1 0 -4.19 2 1 1 0 0 1 -.47 1.59 3.73 3.73 0 0 0 -2.23 1.93 1 1 0 0 1 -1.91-.17 3.12 3.12 0 0 0 -6 .8 1 1 0 0 1 -.53.78c-.76.39-1-.33-2.1-.33a2.43 2.43 0 0 0 -1.05 4.62 1 1 0 0 1 .53.65c.27 1.08 3.41 2.63 8.38 2.63a15.76 15.76 0 0 0 7.12-1.43 1 1 0 0 1 .84-.06 15.09 15.09 0 0 0 8.28.4z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m83.43 52.33a4.18 4.18 0 0 0 -3.72 2.29 4.15 4.15 0 0 0 -2.5-.82 4.6 4.6 0 0 0 -7.44-4 3.39 3.39 0 1 0 -5.94 2.77 4.7 4.7 0 0 0 -2.83 2.43 4.11 4.11 0 0 0 -7.92 1.06 3.42 3.42 0 1 0 -3.08 6.09c.85 3.34 11.78 4.67 17 1.82a15.45 15.45 0 0 0 8.61.47c4 2.36 10.85.64 10.85-2.68a2.62 2.62 0 0 0 -.68-1.69 4.2 4.2 0 0 0 -2.35-7.74z",
                            fill: "#cbf4ff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m75.36 65.49a16.68 16.68 0 0 1 -8.36-.43c-5.24 2.55-16.08 1.74-17.83-2.22-4.26-2.57-1.62-9.21 3.24-8.1a5.11 5.11 0 0 1 8.67-1.56 5.5 5.5 0 0 1 1.34-1.06 4.39 4.39 0 0 1 7.91-3.81 5.61 5.61 0 0 1 7.91 4.58 5 5 0 0 1 1.18.39 5.19 5.19 0 1 1 7.62 7 3.34 3.34 0 0 1 .35 1.47c-.03 4.25-7.39 6.12-12.03 3.74zm.15-2a1 1 0 0 1 .51.13c4.08 2.41 11.2-.15 8.9-2.85a1 1 0 0 1 .22-1.49 3.19 3.19 0 1 0 -4.54-4.15 1 1 0 0 1 -.66.52c-.85.2-1.1-.78-2.67-.8a1 1 0 0 1 -1.06-1.08 3.6 3.6 0 0 0 -3.58-3.92c-2 0-2.2 1.32-3.21.94a1 1 0 0 1 -.63-.76 2.39 2.39 0 1 0 -4.19 2 1 1 0 0 1 -.47 1.59 3.73 3.73 0 0 0 -2.23 1.93 1 1 0 0 1 -1.83-.07 3.12 3.12 0 0 0 -6 .8 1 1 0 0 1 -.53.78c-.76.39-1-.33-2.11-.33a2.43 2.43 0 0 0 -1 4.62 1 1 0 0 1 .54.65c.27 1.08 3.41 2.63 8.38 2.63a15.76 15.76 0 0 0 7.12-1.43 1 1 0 0 1 .84-.06 15.1 15.1 0 0 0 8.2.3z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m27.18 74.76a66 66 0 0 1 5.61-20.42 6.63 6.63 0 0 1 4.72-3.72l4.42-.89a2.42 2.42 0 0 0 1.94-2.37v-4.44h8.36v4.44a2.41 2.41 0 0 0 1.94 2.37c4.45.9 5.66.94 7.23 2.21a6.49 6.49 0 0 1 1.91 2.45c2.43 5.32 4.62 14.6 5.51 20.37z",
                            fill: "#fbc4ab"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m52.19 46.15c0-.78 0-1.8 0-3.23h-8.32v3.23a2.63 2.63 0 0 0 2.64 2.6h3a2.64 2.64 0 0 0 2.68-2.6z",
                            fill: "#f4978e"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m63.31 54.39a6.64 6.64 0 0 0 -4.73-3.77l-.95-.19a1.5 1.5 0 1 0 -.63 2.94 4.91 4.91 0 0 1 2.48.9 3.67 3.67 0 0 1 1.06 1.36c1.82 4 3.59 10.63 4.67 16.13h-34.6a63.42 63.42 0 0 1 4.91-16.17 3.63 3.63 0 0 1 2.58-2l1.36-.27a1.52 1.52 0 0 0 1.21-1.47 1.5 1.5 0 0 0 -1.8-1.47l-1.36.27a6.63 6.63 0 0 0 -4.72 3.72 66.14 66.14 0 0 0 -5.61 20.42h41.64c-.89-5.79-3.08-15.08-5.51-20.4z",
                            fill: "#fbe2d3"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            fill: "#302d3d",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m68.82 75.76h-41.64a1 1 0 0 1 -1-1.12 67 67 0 0 1 5.69-20.71 7.61 7.61 0 0 1 5.43-4.29l4.42-.89a1.41 1.41 0 0 0 1.14-1.39v-4.44a1 1 0 0 1 1-1h8.36a1 1 0 0 1 1 1v4.44a1.41 1.41 0 0 0 1.14 1.39l4.41.89a7.63 7.63 0 0 1 5.45 4.36c2.39 5.24 4.62 14.35 5.59 20.64a1 1 0 0 1 -.99 1.12zm-40.51-2h39.34c-1-6-3.1-14.25-5.25-19a5.64 5.64 0 0 0 -4-3.2l-4.4-.85a3.42 3.42 0 0 1 -2.74-3.35v-3.44h-6.39v3.44a3.43 3.43 0 0 1 -2.75 3.35l-4.42.89a5.63 5.63 0 0 0 -4 3.16 65 65 0 0 0 -5.39 19z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Jacuzzy.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m39.15 55.4a1 1 0 0 1 -.22-2l4.36-1a1 1 0 0 1 1.2.76 1 1 0 0 1 -.76 1.19c-4.73 1.12-4.43 1.05-4.58 1.05z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Jacuzzy.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m57 55.4c-.16 0 .13.06-4.58-1a1 1 0 0 1 .43-1.95l4.37 1a1 1 0 0 1 -.22 1.95z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Jacuzzy.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m88.83 65.83h-81.66a2.8 2.8 0 0 1 0-5.59h81.66a2.8 2.8 0 0 1 0 5.59z",
                            fill: "#f4a261"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m14.21 60.24h15.75v5.58h-15.75z",
                            fill: "#f47a61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m67.54 60.24h9.83v5.58h-9.83z",
                            fill: "#f47a61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m57.37 65.83h-18.74a2.8 2.8 0 1 1 0-5.59h18.74a2.8 2.8 0 1 1 0 5.59z",
                            fill: "#ffd489"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m88.83 66.83h-81.66a3.8 3.8 0 0 1 0-7.59h81.66a3.8 3.8 0 0 1 0 7.59zm-81.66-5.59a1.8 1.8 0 0 0 0 3.59h81.66a1.8 1.8 0 0 0 0-3.59z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 65.83h81.06v9.72h-81.06z",
                            fill: "#f47a61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m77.72 75.55h-59.44a4.86 4.86 0 0 1 0-9.72h59.44a4.86 4.86 0 0 1 0 9.72z",
                            fill: "#f4a261"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 65.83h81.06v4.34h-81.06z",
                            fill: "#db6b61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            fill: "#ffd489",
                            height: "2.71",
                            rx: "1.35",
                            width: "26.02",
                            x: "35.46",
                            y: "68.81"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 75.55h81.06v9.72h-81.06z",
                            fill: "#f47a61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 85.28h81.06v9.72h-81.06z",
                            fill: "#f47a61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m77.72 95h-59.44a4.86 4.86 0 0 1 0-9.72h59.44a4.86 4.86 0 1 1 0 9.72z",
                            fill: "#f4a261"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m77.72 85.28h-59.44a4.87 4.87 0 0 1 0-9.73h59.44a4.87 4.87 0 0 1 0 9.73z",
                            fill: "#f4a261"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 92.25h81.06v2.75h-81.06z",
                            fill: "#db6b61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7.47 82.53h81.06v2.75h-81.06z",
                            fill: "#db6b61"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m88.53 76.55h-81.06a1 1 0 0 1 -1-1v-9.72a1 1 0 0 1 1-1h81.06a1 1 0 0 1 1 1v9.72a1 1 0 0 1 -1 1zm-80.06-2h79.06v-7.72h-79.06z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m88.53 86.28h-81.06a1 1 0 0 1 -1-1v-9.73a1 1 0 0 1 1-1h81.06a1 1 0 0 1 1 1v9.73a1 1 0 0 1 -1 1zm-80.06-2h79.06v-7.73h-79.06z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m88.53 96h-81.06a1 1 0 0 1 -1-1v-9.72a1 1 0 0 1 1-1h81.06a1 1 0 0 1 1 1v9.72a1 1 0 0 1 -1 1zm-80.06-2h79.06v-7.72h-79.06z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m27.18 60.24v14.81a3.17 3.17 0 0 1 -6.33 0v-3.05a2 2 0 0 0 -2-2 2 2 0 0 1 -2-2v-7.8z",
                            fill: "#56bdff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m24 79.21a4.17 4.17 0 0 1 -4.15-4.21v-3a1 1 0 0 0 -1-1 3 3 0 0 1 -3-3v-7.8a1 1 0 0 1 1-1h10.33a1 1 0 0 1 1 1v14.8a4.17 4.17 0 0 1 -4.18 4.21zm-6.08-18v6.79a1 1 0 0 0 1 1 3 3 0 0 1 3 3v3a2.17 2.17 0 1 0 4.33 0v-13.76z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m72.46 71.33a2.7 2.7 0 0 1 -2.71-2.7v-8.39h5.42v8.39a2.71 2.71 0 0 1 -2.71 2.7z",
                            fill: "#56bdff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m72.46 72.33a3.71 3.71 0 0 1 -3.71-3.71v-8.38a1 1 0 0 1 1-1h5.42a1 1 0 0 1 1 1v8.38a3.72 3.72 0 0 1 -3.71 3.71zm-1.71-11.09v7.38a1.71 1.71 0 0 0 3.42 0v-7.38z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "78",
                            cy: "41.56",
                            fill: "#cbf4ff",
                            r: "1.92"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m78 44.48a2.92 2.92 0 1 1 2.92-2.92 2.92 2.92 0 0 1 -2.92 2.92zm0-3.83a.92.92 0 1 0 .92.91.92.92 0 0 0 -.92-.91z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "31.31",
                            cy: "41.56",
                            fill: "#cbf4ff",
                            r: "1.92"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m31.31 44.48a2.92 2.92 0 1 1 2.92-2.92 2.91 2.91 0 0 1 -2.92 2.92zm0-3.83a.92.92 0 1 0 .92.91.91.91 0 0 0 -.92-.91z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "15.81",
                            cy: "47",
                            fill: "#cbf4ff",
                            r: "1.92"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m15.81 49.92a2.92 2.92 0 1 1 2.92-2.92 2.91 2.91 0 0 1 -2.92 2.92zm0-3.84a.92.92 0 1 0 .92.92.92.92 0 0 0 -.92-.92z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m75.05 21.58a6.11 6.11 0 0 0 .19 5.15l.37.72c.87 1.71.14 3-.45 4.43",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m75.16 32.88a1 1 0 0 1 -.93-1.38c.56-1.35 1.15-2.3.49-3.59l-.37-.73a7 7 0 0 1 -.22-6 1 1 0 1 1 1.87.82 5.09 5.09 0 0 0 .16 4.3l.37.73a4.65 4.65 0 0 1 .16 3.86l-.58 1.4a1 1 0 0 1 -.95.59z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m80 25.52a6.13 6.13 0 0 0 .66 2.64l.37.72c.87 1.71.14 3-.45 4.43",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m80.58 34.31a1 1 0 0 1 -.92-1.38c.55-1.35 1.14-2.3.48-3.59a8 8 0 0 1 -1.14-3.8 1 1 0 0 1 1-1 1 1 0 0 1 1 1 6.11 6.11 0 0 0 .92 2.93 4.61 4.61 0 0 1 .16 3.86l-.57 1.4a1 1 0 0 1 -.93.58z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m16.29 26a6.08 6.08 0 0 0 .19 5.14l.37.72c.87 1.71.14 3-.45 4.43",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m16.4 37.31a1 1 0 0 1 -.93-1.38c.56-1.35 1.15-2.3.49-3.59l-.37-.73a7 7 0 0 1 -.22-6 1 1 0 1 1 1.84.77 5.09 5.09 0 0 0 .16 4.3l.37.73a4.65 4.65 0 0 1 .16 3.86l-.58 1.4a1 1 0 0 1 -.92.64z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m21.24 30a6.13 6.13 0 0 0 .66 2.64l.37.72c.87 1.71.14 3-.45 4.43",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m21.82 38.74a1 1 0 0 1 -.92-1.38c.55-1.35 1.14-2.3.48-3.59a7.93 7.93 0 0 1 -1.14-3.77 1 1 0 1 1 2-.05 6.11 6.11 0 0 0 .92 2.93 4.57 4.57 0 0 1 .16 3.86l-.57 1.4a1 1 0 0 1 -.93.6z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            fill: "#ffd489",
                            height: "2.71",
                            rx: "1.35",
                            width: "15.76",
                            x: "40.59",
                            y: "78.21"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            fill: "#ffd489",
                            height: "2.71",
                            rx: "1.35",
                            width: "5.72",
                            x: "55.75",
                            y: "87.41"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            fill: "#ffd489",
                            height: "2.71",
                            rx: "1.35",
                            width: "15.67",
                            x: "35.46",
                            y: "87.41"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m49.32 6.06v9.15a13.43 13.43 0 0 0 -14.75 13.36 29.8 29.8 0 0 0 .14 4.28 16.27 16.27 0 0 1 -3.11-9.6v-.85a16.39 16.39 0 0 1 17.72-16.34z",
                            fill: "#99c0f4"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m49.32 6.06v9.15a13.4 13.4 0 0 0 -6.2.85 7 7 0 0 1 -1.92-8.59 16.14 16.14 0 0 1 8.12-1.41z",
                            fill: "#6793f4"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m37.48 16.66a2.92 2.92 0 0 0 -5.11.78 17.25 17.25 0 0 0 -.77 5.81 16.27 16.27 0 0 0 3.11 9.6 28.41 28.41 0 0 1 -.14-4.28 13.31 13.31 0 0 1 2.86-8.25 3 3 0 0 0 .05-3.66z",
                            fill: "#767ad1"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m48 40.65a17.43 17.43 0 0 1 -17.4-17.4v-.86a17.4 17.4 0 0 1 34.8 0v.86a17.43 17.43 0 0 1 -17.4 17.4zm0-33.65a15.42 15.42 0 0 0 -15.4 15.4v.86a15.4 15.4 0 0 0 30.8 0v-.86a15.42 15.42 0 0 0 -15.4-15.4z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m47.35 6a4.58 4.58 0 0 0 .35 9.15 13.43 13.43 0 0 1 13.72 13.42 28.33 28.33 0 0 1 -.14 4.3 16.27 16.27 0 0 0 3.12-9.62v-.86a16.4 16.4 0 0 0 -17.05-16.39z",
                            fill: "#99c0f4"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m51.61 9a13.55 13.55 0 0 0 -3.61-.53 2.44 2.44 0 0 0 -1.93.61 2.1 2.1 0 0 0 1.57 3.59 15.42 15.42 0 0 1 3 .22 2 2 0 0 0 2.42-2 2 2 0 0 0 -1.45-1.89z",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m55.07 15.32a3.68 3.68 0 0 0 1.41 2.86 13.34 13.34 0 0 1 4.94 10.39 28.8 28.8 0 0 1 -.14 4.3 16.27 16.27 0 0 0 3.12-9.62v-.86a16.38 16.38 0 0 0 -2.73-9.06 3.6 3.6 0 0 0 -6.6 1.99z",
                            fill: "#767ad1"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m60.29 32.72a25.21 25.21 0 0 0 .13-4.15 12.43 12.43 0 0 0 -12.69-12.42 5.58 5.58 0 0 1 -4.73-8.74 5.51 5.51 0 0 1 4.31-2.41 17.38 17.38 0 0 1 18.09 17.39v.86a17.23 17.23 0 0 1 -3.32 10.21 1 1 0 0 1 -1.79-.74zm2.13-4.06a16.19 16.19 0 0 0 1-6.27 15.4 15.4 0 0 0 -16.03-15.39 3.58 3.58 0 0 0 .29 7.15 14.43 14.43 0 0 1 14.74 14.51z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m63 31.07h-30a2.89 2.89 0 0 1 0-5.78h30a2.89 2.89 0 1 1 0 5.78z",
                            fill: "#f4978e"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m63 32.07h-30a3.89 3.89 0 0 1 0-7.78h30a3.89 3.89 0 1 1 0 7.78zm-30-5.78a1.89 1.89 0 0 0 0 3.78h30a1.89 1.89 0 1 0 0-3.78z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m49.65 11.6h-2.56a1 1 0 0 1 0-2h2.56a1 1 0 0 1 0 2z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m48 44.34a13.42 13.42 0 0 1 -13.43-13.42v-2.35a13.43 13.43 0 0 1 26.86 0v2.35a13.43 13.43 0 0 1 -13.43 13.42z",
                            fill: "#fbc4ab"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m61.43 28.62v2.3a13.43 13.43 0 0 1 -26.86 0v-2.3a13.43 13.43 0 0 0 26.86 0z",
                            fill: "#f4978e"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m53.79 24.31a2.24 2.24 0 0 0 1.53-3.87 10.92 10.92 0 0 0 -14.64 0 2.24 2.24 0 0 0 1.53 3.87z",
                            fill: "#fbe2d3"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m48 45.34a14.45 14.45 0 0 1 -14.43-14.42v-2.35a14.43 14.43 0 0 1 28.86 0v2.35a14.45 14.45 0 0 1 -14.43 14.42zm0-29.19a12.44 12.44 0 0 0 -12.43 12.42v2.35a12.43 12.43 0 0 0 24.86 0v-2.35a12.44 12.44 0 0 0 -12.43-12.42z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m51.57 28.2a1 1 0 0 1 1.32-1.51.72.72 0 0 0 1 0 1 1 0 0 1 1.41.1c1.08 1.3-1.83 3.06-3.73 1.41z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m40.94 28.2a1 1 0 0 1 1.31-1.51.8.8 0 0 0 1 0 1 1 0 0 1 1.41.1c1.08 1.3-1.82 3.06-3.72 1.41z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m51.1 36.75a4.65 4.65 0 0 1 -6.1 0",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m44.34 37.5a1 1 0 0 1 1.31-1.5 3.74 3.74 0 0 0 4.79 0 1 1 0 0 1 1.41.1 1 1 0 0 1 -.1 1.41 5.65 5.65 0 0 1 -7.41-.01z",
                            fill: "#302d3d"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Jacuzzy.jsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/Jacuzzy.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/Jacuzzy.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Jacuzzy.jsx",
                lineNumber: 269,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Jacuzzy.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Jacuzzy;
const __TURBOPACK__default__export__ = Jacuzzy;
var _c;
__turbopack_refresh__.register(_c, "Jacuzzy");

})()),
"[project]/src/icons/Wifi.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Wifi({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "-2 0 512 512.00045",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_1183657",
                width: "30",
                height: "30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m454.535156 367.875h-31.25v-272.679688c0-1.722656 2.011719-2.632812 3.28125-1.492187l.53125.476563c17.453125 15.671874 27.4375 38.136718 27.4375 61.726562zm0 0",
                        fill: "#5b5c6c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m84.132812 367.875h-31.253906v-272.679688c0-1.722656 2.011719-2.632812 3.285156-1.492187l.527344.476563c17.453125 15.671874 27.4375 38.136718 27.4375 61.726562v211.96875zm0 0",
                        fill: "#5b5c6c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m427.042969 94.179688-.53125-.476563c-1.273438-1.140625-3.28125-.230469-3.28125 1.492187v12.082032c10.101562 14.003906 15.679687 31 15.679687 48.628906v211.96875h15.570313v-211.96875c0-23.589844-9.984375-46.054688-27.4375-61.726562zm0 0",
                        fill: "#464655"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m56.691406 94.179688-.527344-.476563c-1.273437-1.140625-3.285156-.230469-3.285156 1.492187v12.082032c10.101563 14.003906 15.683594 31 15.683594 48.628906v211.96875h15.570312v-211.96875c0-23.589844-9.988281-46.054688-27.441406-61.726562zm0 0",
                        fill: "#464655"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m97.160156 512h-57.507812c-1.605469 0-2.910156-1.300781-2.910156-2.910156v-27.164063h63.328124v27.164063c0 1.609375-1.304687 2.910156-2.910156 2.910156zm0 0",
                        fill: "#5b5c6c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m467.761719 511.375h-57.503907c-1.609374 0-2.910156-1.304688-2.910156-2.914062v-27.164063h63.328125v27.164063c0 1.609374-1.304687 2.914062-2.914062 2.914062zm0 0",
                        fill: "#5b5c6c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m97.160156 496.335938h-57.507812c-1.605469 0-2.910156-1.300782-2.910156-2.910157v-11.820312h63.328124v11.820312c0 1.605469-1.304687 2.910157-2.910156 2.910157zm0 0",
                        fill: "#464655"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m467.761719 496.03125h-57.503907c-1.609374 0-2.910156-1.304688-2.910156-2.914062v-11.816407h63.328125v11.816407c0 1.609374-1.304687 2.914062-2.914062 2.914062zm0 0",
                        fill: "#464655"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m487.574219 482.738281h-467.730469c-10.960938 0-19.84375-8.886719-19.84375-19.84375v-77.332031c0-10.957031 8.882812-19.839844 19.84375-19.839844h467.730469c10.957031 0 19.84375 8.882813 19.84375 19.839844v77.332031c-.003907 10.957031-8.886719 19.84375-19.84375 19.84375zm0 0",
                        fill: "#707384"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m487.570312 365.722656h-60.59375c10.960938 0 19.847657 8.882813 19.847657 19.839844v77.335938c0 10.957031-8.886719 19.839843-19.847657 19.839843h60.59375c10.960938 0 19.84375-8.882812 19.84375-19.839843v-77.335938c.003907-10.957031-8.882812-19.839844-19.84375-19.839844zm0 0",
                        fill: "#5b5c6c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m284.0625 394.390625h-60.707031c-4.902344 0-8.878907-3.976563-8.878907-8.878906v-19.789063h78.460938v19.789063c0 4.902343-3.972656 8.878906-8.875 8.878906zm0 0",
                        fill: "#7de6c4"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#54a1ff",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m269.277344 202.992188c.042968 8.632812-6.921875 15.65625-15.550782 15.699218-8.625.042969-15.660156-6.910156-15.699218-15.546875-.023438-4.359375 1.75-8.328125 4.644531-11.175781 2.796875-2.769531 6.644531-4.5 10.90625-4.519531 4.3125-.019531 8.234375 1.710937 11.074219 4.527343 2.835937 2.820313 4.605468 6.707032 4.625 11.015626zm0 0"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Wifi.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m253.273438 124.96875c-14.195313.066406-27.488282 3.914062-38.925782 10.585938-8.824218 5.144531-10.46875 17.195312-3.289062 24.453124l.066406.070313c5.027344 5.078125 12.832031 6.035156 19.011719 2.445313 6.847656-3.976563 14.800781-6.273438 23.289062-6.3125 8.679688-.042969 16.824219 2.277343 23.820313 6.359374 6.15625 3.589844 13.953125 2.601563 18.96875-2.460937l.066406-.066406c7.203125-7.273438 5.519531-19.328125-3.320312-24.484375-11.652344-6.800782-25.222657-10.664063-39.6875-10.589844zm0 0"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Wifi.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m252.96875 62.484375c-32.042969.15625-61.527344 11.011719-85.085938 29.164063-7.378906 5.683593-8.019531 16.597656-1.46875 23.21875l.0625.0625c5.503907 5.570312 14.308594 6.21875 20.515626 1.445312 18.316406-14.101562 41.226562-22.527344 66.128906-22.648438 25.328125-.125 48.675781 8.363282 67.289062 22.714844 6.191406 4.773438 14.992188 4.109375 20.492188-1.445312l.058594-.058594c6.5625-6.625 5.914062-17.542969-1.46875-23.238281-23.929688-18.453125-53.960938-29.371094-86.523438-29.214844zm0 0"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Wifi.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m252.664062.00390625c-49.242187.23828175-94.304687 17.96874975-129.324218 47.27734375-7 5.855469-7.511719 16.441406-1.09375 22.929688l.058594.058593c5.742187 5.804688 14.933593 6.125 21.199218.890625 29.609375-24.742187 67.707032-39.714844 109.3125-39.917968 42.328125-.203126 81.171875 14.910156 111.246094 40.132812 6.195312 5.199219 15.351562 4.746094 21.042969-.996094l.058593-.058594c6.429688-6.488281 5.910157-17.074218-1.089843-22.941406-35.539063-29.78125-81.40625-47.621094-131.410157-47.37499975zm0 0"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/Wifi.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m253.671875 205.144531c-6.199219.03125-11.5625-3.5625-14.109375-8.785156-.984375 2.058594-1.546875 4.355469-1.535156 6.785156.042968 8.636719 7.074218 15.589844 15.703125 15.546875 8.625-.042968 15.589843-7.066406 15.546875-15.699218-.011719-2.425782-.589844-4.707032-1.589844-6.75-2.503906 5.238281-7.824219 8.875-14.015625 8.902343zm0 0",
                        fill: "#4a7fdd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m296.222656 146.496094-.066406.066406c-5.015625 5.0625-12.808594 6.050781-18.964844 2.460938-6.996094-4.078126-15.144531-6.402344-23.824218-6.359376-8.484376.039063-16.4375 2.335938-23.285157 6.3125-6.179687 3.589844-13.988281 2.632813-19.011719-2.445312l-.066406-.070312c-1.234375-1.246094-2.1875-2.640626-2.910156-4.109376-2.695312 5.667969-1.886719 12.753907 2.964844 17.65625l.066406.066407c5.027344 5.082031 12.832031 6.039062 19.011719 2.449219 6.847656-3.980469 14.800781-6.273438 23.289062-6.316407 8.679688-.042969 16.824219 2.28125 23.820313 6.363281 6.15625 3.589844 13.953125 2.597657 18.96875-2.464843l.066406-.066407c4.890625-4.9375 5.675781-12.074218 2.914062-17.765624-.726562 1.511718-1.707031 2.941406-2.972656 4.222656zm0 0",
                        fill: "#4a7fdd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m340.902344 101.394531-.058594.058594c-5.5 5.550781-14.300781 6.214844-20.492188 1.441406-18.609374-14.347656-41.960937-22.835937-67.289062-22.714843-24.898438.121093-47.8125 8.550781-66.128906 22.648437-6.203125 4.777344-15.011719 4.125-20.515625-1.441406l-.0625-.0625c-1.234375-1.25-2.210938-2.652344-2.9375-4.140625-2.726563 5.710937-1.796875 12.839844 2.992187 17.683594l.0625.0625c5.503906 5.570312 14.3125 6.21875 20.515625 1.445312 18.316407-14.101562 41.230469-22.527344 66.128907-22.648438 25.328124-.125 48.679687 8.363282 67.292968 22.714844 6.1875 4.773438 14.988282 4.109375 20.488282-1.445312l.058593-.058594c4.835938-4.878906 5.742188-12.078125 2.945313-17.8125-.734375 1.535156-1.726563 2.984375-3 4.269531zm0 0",
                        fill: "#4a7fdd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m388.097656 52.515625c-.734375 1.535156-1.71875 2.976563-2.992187 4.261719l-.054688.054687c-5.695312 5.746094-14.847656 6.195313-21.042969 1-30.074218-25.226562-68.917968-40.339843-111.25-40.132812-41.601562.203125-79.703124 15.171875-109.308593 39.917969-6.265625 5.234374-15.460938 4.910156-21.203125-.894532l-.058594-.058594c-1.230469-1.246093-2.199219-2.640624-2.925781-4.125-2.726563 5.730469-1.800781 12.835938 2.984375 17.671876l.054687.058593c5.742188 5.804688 14.9375 6.125 21.203125.890625 29.605469-24.742187 67.707032-39.714844 109.308594-39.917968 42.332031-.203126 81.175781 14.910156 111.25 40.132812 6.195312 5.199219 15.351562 4.746094 21.042969-.996094l.058593-.058594c4.824219-4.867187 5.738282-12.042968 2.933594-17.804687zm0 0",
                        fill: "#4a7fdd"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m60.691406 439.496094c0 4.3125-3.496094 7.8125-7.8125 7.8125s-7.8125-3.5-7.8125-7.8125c0-4.316406 3.496094-7.816406 7.8125-7.816406s7.8125 3.5 7.8125 7.816406zm0 0",
                        fill: "#ffb96a"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m91.945312 439.496094c0 4.3125-3.5 7.8125-7.8125 7.8125-4.316406 0-7.816406-3.5-7.816406-7.8125 0-4.316406 3.5-7.816406 7.816406-7.816406 4.3125 0 7.8125 3.5 7.8125 7.816406zm0 0",
                        fill: "#a7d16c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m446.824219 439.496094c0 4.3125-3.5 7.8125-7.8125 7.8125-4.316407 0-7.816407-3.5-7.816407-7.8125 0-4.316406 3.5-7.816406 7.816407-7.816406 4.3125 0 7.8125 3.5 7.8125 7.816406zm0 0",
                        fill: "#a09bff"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m478.488281 439.496094c0 4.3125-3.5 7.8125-7.8125 7.8125-4.316406 0-7.816406-3.5-7.816406-7.8125 0-4.316406 3.5-7.816406 7.816406-7.816406 4.3125 0 7.8125 3.5 7.8125 7.816406zm0 0",
                        fill: "#a09bff"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m336.523438 432.039062h-165.632813c-4.3125 0-7.8125 3.496094-7.8125 7.808594 0 4.316406 3.5 7.8125 7.8125 7.8125h165.632813c4.316406 0 7.816406-3.496094 7.816406-7.8125 0-4.3125-3.5-7.808594-7.816406-7.808594zm0 0",
                        fill: "#3b3b47"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/Wifi.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/Wifi.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Wifi.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Wifi.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Wifi;
const __TURBOPACK__default__export__ = Wifi;
var _c;
__turbopack_refresh__.register(_c, "Wifi");

})()),
"[project]/src/icons/PingPong.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PingPong({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "30px",
                height: "30px",
                viewBox: "0 -78 511.99876 511",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_1060021",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m130.464844 355.160156c-7.234375 0-13.101563-5.867187-13.101563-13.105468v-149.359376c0-7.234374 5.867188-13.101562 13.101563-13.101562 7.238281 0 13.105468 5.867188 13.105468 13.101562v149.359376c0 7.238281-5.867187 13.105468-13.105468 13.105468zm0 0",
                        fill: "#ba6746"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m332.617188 355.160156c-7.238282 0-13.101563-5.867187-13.101563-13.105468v-149.359376c0-7.234374 5.863281-13.101562 13.101563-13.101562 7.238281 0 13.105468 5.867188 13.105468 13.101562v149.359376c0 7.238281-5.867187 13.105468-13.105468 13.105468zm0 0",
                        fill: "#ba6746"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m17.71875 355.160156c-9.878906 0-17.71875-8.007812-17.71875-17.886718v-131.371094c0-9.875 7.839844-17.886719 17.71875-17.886719s17.886719 8.011719 17.886719 17.886719v131.371094c0 9.878906-8.007813 17.886718-17.886719 17.886718zm0 0",
                        fill: "#5f6e9b"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m71.285156 355.207031c-9.878906 0-17.886718-8.007812-17.886718-17.886719v-77.074218l-13.972657-55.082032c-2.429687-9.578124 3.363281-19.308593 12.941407-21.738281 9.574218-2.429687 19.304687 3.363281 21.734374 12.941407l14.523438 57.25c.363281 1.4375.546875 2.914062.546875 4.398437v79.300781c0 9.882813-8.007813 17.890625-17.886719 17.890625zm0 0",
                        fill: "#414b82"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m0 215.628906 79.101562.433594.679688-124.21875c.054688-9.578125-7.667969-17.386719-17.246094-17.4375l-44.589844-.242188c-9.578124-.054687-17.8945308 7.667969-17.945312 17.246094zm0 0",
                        fill: "#64afff"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m71.492188 31.519531c0 17.128907-13.886719 31.015625-31.019532 31.015625-17.128906 0-31.015625-13.886718-31.015625-31.015625 0-17.132812 13.886719-31.019531 31.015625-31.019531 17.132813 0 31.019532 13.886719 31.019532 31.019531zm0 0",
                        fill: "#ffb69e"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m226.789062 74.066406c0 6.832032-5.539062 12.371094-12.371093 12.371094s-12.367188-5.539062-12.367188-12.371094c0-6.832031 5.535157-12.371094 12.367188-12.371094s12.371093 5.539063 12.371093 12.371094zm0 0",
                        fill: "#90a3a8"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m174.21875 165.261719c18.132812-6.324219 28.425781-24.089844 22.988281-39.6875-5.4375-15.59375-24.546875-23.109375-42.679687-16.785157-12.777344 4.453126-21.652344 14.59375-23.882813 25.648438-.785156 3.878906-3.566406 7.078125-7.304687 8.382812l-33.992188 11.851563c-2.097656.730469-3.203125 3.023437-2.472656 5.117187l2.648438 7.59375c.730468 2.097657 3.023437 3.203126 5.117187 2.472657l33.992187-11.855469c3.746094-1.304688 7.902344-.53125 10.933594 2.023438 8.621094 7.273437 21.875 9.695312 34.652344 5.238281zm0 0",
                        fill: "#fa503c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m470.023438 355.160156c-8.554688 0-16.035157-6.285156-17.289063-15l-18.46875-128.253906c-1.375-9.558594 5.257813-18.425781 14.820313-19.800781 9.554687-1.375 18.425781 5.253906 19.800781 14.816406l18.46875 128.253906c1.375 9.5625-5.257813 18.425781-14.820313 19.800781-.84375.125-1.683594.183594-2.511718.183594zm0 0",
                        fill: "#55696e"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m404.277344 355.089844c-8.875 0-16.480469-6.730469-17.378906-15.75l-7.550782-75.59375c-.238281-2.390625.015625-4.804688.753906-7.089844l18.703126-58.1875c2.957031-9.195312 12.808593-14.253906 22.003906-11.296875 9.195312 2.953125 14.253906 12.804687 11.296875 22l-17.589844 54.71875 7.1875 71.972656c.957031 9.609375-6.054687 18.179688-15.664063 19.140625-.589843.058594-1.179687.085938-1.761718.085938zm0 0",
                        fill: "#748488"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m508.261719 114.324219-26.984375-27.824219c-5.183594-5.339844-12.328125-8.320312-19.769532-8.242188l-57.953124.605469c-10.957032.113281-20.769532 6.804688-24.878907 16.960938l-15.640625 38.660156-40.464844-13.089844c-6.886718-2.230469-14.289062 1.550781-16.515624 8.441407-2.230469 6.890624 1.550781 14.285156 8.441406 16.515624l52.148437 16.867188c6.574219 2.128906 13.671875-1.210938 16.226563-7.628906l8.542968-21.464844 1.328126 83.277344 77.496093-1.238282-1.675781-104.910156 16.117188 16.480469-12.777344 65.011719c-1.59375 8.117187 4.628906 15.648437 12.886718 15.648437 6.140626-.003906 11.628907-4.335937 12.855469-10.589843l14.105469-71.78125c.835938-4.234376-.46875-8.613282-3.488281-11.699219zm0 0",
                        fill: "#ba6746"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m501.917969 107.78125-20.640625-21.28125c-5.179688-5.339844-12.328125-8.320312-19.769532-8.242188l-18.457031.191407c-.0625 7.097656-4.660156 14.148437-13.792969 14.148437-9.023437 0-13.605468-6.863281-13.78125-13.859375l-11.917968.125c-10.957032.113281-20.773438 6.804688-24.882813 16.960938l-13.910156 34.390625 23.617187 11.523437 3.03125-7.613281 1.328126 83.277344 77.5-1.238282-1.675782-104.910156 14.128906 14.449219zm0 0",
                        fill: "#ffda52"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m458.941406 36.582031c0 16.746094-13.578125 30.324219-30.328125 30.324219-16.746093 0-30.324219-13.578125-30.324219-30.324219 0-16.75 13.578126-30.328125 30.324219-30.328125 16.75 0 30.328125 13.578125 30.328125 30.328125zm0 0",
                        fill: "#ba6746"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m274.667969 169.742188c-19.101563 1.980468-35.96875-9.730469-37.671875-26.15625-1.703125-16.429688 12.402344-31.351563 31.503906-33.332032 13.460938-1.394531 25.804688 4.007813 32.519531 13.070313 2.355469 3.183593 6.230469 4.894531 10.171875 4.484375l35.808594-3.710938c2.207031-.230468 4.183594 1.375 4.410156 3.582032l.832032 8c.226562 2.207031-1.378907 4.183593-3.585938 4.410156l-35.808594 3.714844c-3.945312.40625-7.378906 2.871093-9.035156 6.476562-4.714844 10.242188-15.683594 18.066406-29.144531 19.460938zm0 0",
                        fill: "#fa503c"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m356.089844 205.246094h-249.097656c-7.238282 0-13.101563-5.867188-13.101563-13.101563 0-7.238281 5.867187-13.105469 13.101563-13.105469h249.097656c7.238281 0 13.105468 5.867188 13.105468 13.105469 0 7.234375-5.867187 13.101563-13.105468 13.101563zm0 0",
                        fill: "#e28c71"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m110.101562 171.21875-52.886718-16.78125c-2.726563-.867188-5.105469-2.582031-6.789063-4.890625l-33.09375-45.457031c-4.359375-5.992188-3.039062-14.382813 2.949219-18.742188 5.992188-4.359375 14.382812-3.039062 18.742188 2.949219l30.5 41.894531 48.695312 15.453125c7.0625 2.238281 10.96875 9.78125 8.726562 16.84375-2.246093 7.085938-9.800781 10.964844-16.84375 8.730469zm0 0",
                        fill: "#ffb69e"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m34.585938 127.789062 21.476562-16.089843-17.039062-23.402344c-4.359376-5.988281-12.75-7.308594-18.742188-2.949219-5.988281 4.359375-7.308594 12.75-2.949219 18.742188zm0 0",
                        fill: "#4699f2"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PingPong.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/PingPong.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/PingPong.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/PingPong.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PingPong;
const __TURBOPACK__default__export__ = PingPong;
var _c;
__turbopack_refresh__.register(_c, "PingPong");

})()),
"[project]/src/icons/CarPark.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function CarPark({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_3420157",
                enableBackground: "new 0 0 512 512",
                viewBox: "0 0 512 512",
                height: "30",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m481.908 504.5v-327.782l-42.129-42.179-184.931-74.489-190.778 80.412-33.978 36.256v327.782",
                                            fill: "#6bbef6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m481.908 176.718-225.907-99.439-225.909 99.439c-6.583 2.898-14.268-.09-17.166-6.673l-4.319-9.814c-2.897-6.583.09-14.268 6.673-17.165l233.315-102.698c4.719-2.077 10.093-2.077 14.812 0l233.314 102.698c6.583 2.897 9.57 10.583 6.673 17.165l-4.319 9.814c-2.899 6.583-10.584 9.57-17.167 6.673z",
                                            fill: "#dd636e"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m390.589 307.097h-269.178c-10.259 0-18.576-8.317-18.576-18.576 0-10.259 8.317-18.576 18.576-18.576h269.178c10.259 0 18.576 8.317 18.576 18.576-.001 10.259-8.317 18.576-18.576 18.576z",
                                            fill: "#ffe07d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m332.496 232.196h-152.992c-7.494 0-13.76 5.695-14.475 13.155l-9.011 94.06h199.965l-9.011-94.06c-.716-7.46-6.982-13.155-14.476-13.155z",
                                            fill: "#f6f9f9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m223.195 339.409h-67.178l9.007-94.062c.716-7.455 6.986-13.152 14.474-13.152h61.975c-21.503 0-39.491 16.342-41.538 37.751l-3.804 39.687c-1.527 15.967 11.02 29.776 27.064 29.776z",
                                            fill: "#e7ecf6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m363.402 252.585c-3.403-21.852-22.211-37.964-44.327-37.964h-126.15c-22.117 0-40.924 16.112-44.327 37.964l-17.255 110.942h249.315zm-202.181 85.353 12.666-81.422c1.467-9.451 9.476-16.308 19.038-16.308h126.15c9.561 0 17.571 6.858 19.038 16.308l12.666 81.422z",
                                            fill: "#ffe07d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m192.925 214.62c-22.117 0-40.924 16.112-44.327 37.964l-17.255 110.942h17.016l17.255-110.942c3.403-21.852 22.211-37.964 44.327-37.964z",
                                            fill: "#e4936b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m158.286 504.5c-13.471 0-24.392-10.921-24.392-24.392v-24.392l19.162-23.261 29.622 23.261v24.392c0 13.471-10.921 24.392-24.392 24.392z",
                                            fill: "#30579d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m166.365 503.12c-2.525.887-5.246 1.373-8.077 1.373-13.476 0-24.394-10.918-24.394-24.386v-24.394l19.166-23.26 9.8 7.693-12.82 15.566v24.394c0 10.647 6.823 19.688 16.325 23.014z",
                                            fill: "#26457d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m351.161 504.5c-13.471 0-24.392-10.921-24.392-24.392v-24.392l32.175-23.261 16.609 23.261v24.392c0 13.471-10.921 24.392-24.392 24.392z",
                                            fill: "#30579d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m359.24 503.12c-2.525.887-5.246 1.373-8.077 1.373-13.476 0-24.394-10.918-24.394-24.386v-24.394l19.166-23.26 9.8 7.693-12.82 15.566v24.394c0 10.647 6.824 19.688 16.325 23.014z",
                                            fill: "#26457d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m358.944 322.84h-205.888c-27.971 0-50.646 22.675-50.646 50.646v8.323c0 27.971 22.675 50.646 50.646 50.646h205.888c27.971 0 50.646-22.675 50.646-50.646v-8.323c0-27.972-22.675-50.646-50.646-50.646z",
                                            fill: "#ffe07d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m196.453 432.451h-43.398c-27.976 0-50.648-22.671-50.648-50.648v-8.316c0-27.976 22.671-50.648 50.648-50.648h43.398c-27.976 0-50.648 22.671-50.648 50.648v8.316c.001 27.977 22.672 50.648 50.648 50.648z",
                                            fill: "#e4936b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m390.311 417.159h-268.623c-10.647 0-19.278 8.631-19.278 19.278 0 10.647 8.631 19.278 19.278 19.278h268.623c10.647 0 19.279-8.631 19.279-19.278 0-10.647-8.632-19.278-19.279-19.278z",
                                            fill: "#f6f9f9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m150.601 450.067c3.489 3.488 8.308 5.646 13.63 5.646h-42.545c-5.322 0-10.141-2.158-13.63-5.646-3.489-3.489-5.646-8.308-5.646-13.63 0-10.645 8.632-19.276 19.276-19.276h42.545c-10.645 0-19.276 8.632-19.276 19.276 0 5.323 2.158 10.142 5.646 13.63z",
                                            fill: "#e7ecf6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            fill: "#f6f9f9",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m151.211 399.258c-7.832 0-14.182-6.349-14.182-14.182v-23.55c0-7.832 6.349-14.182 14.182-14.182 7.832 0 14.182 6.349 14.182 14.182v23.55c0 7.833-6.349 14.182-14.182 14.182z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/icons/CarPark.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m360.788 399.258c-7.832 0-14.182-6.349-14.182-14.182v-23.55c0-7.832 6.349-14.182 14.182-14.182 7.832 0 14.182 6.349 14.182 14.182v23.55c0 7.833-6.349 14.182-14.182 14.182z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/icons/CarPark.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/icons/CarPark.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "256",
                                    cy: "96.621",
                                    fill: "#f6f9f9",
                                    r: "89.121"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m269.309 184.751c-4.34.65-8.78.99-13.3.99-49.23 0-89.13-39.9-89.13-89.12s39.9-89.12 89.13-89.12c4.52 0 8.96.34 13.3.99-42.91 6.42-75.82 43.43-75.82 88.13s32.91 81.71 75.82 88.13z",
                                    fill: "#e7ecf6"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m262.874 39.708h-27.481c-2.011 0-4.017.393-5.827 1.269-4.688 2.269-7.457 6.92-7.441 11.85v89.732c0 5.307 4.302 9.609 9.609 9.609h6.938c5.307 0 9.609-4.302 9.609-9.609v-20.553c5.402-.027 11.211-.052 14.595-.052 22.978 0 41.673-18.448 41.673-41.123s-18.696-41.123-41.675-41.123zm0 56.092c-3.373 0-9.107.024-14.474.051-.028-5.567-.067-24.169-.083-29.988h14.556c8.411 0 15.518 6.855 15.518 14.968s-7.105 14.969-15.517 14.969z",
                                        fill: "#6bbef6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/CarPark.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/CarPark.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m151.213 406.755c11.956 0 21.682-9.726 21.682-21.681v-23.549c0-11.955-9.726-21.681-21.682-21.681-11.955 0-21.681 9.726-21.681 21.681v23.549c0 11.955 9.727 21.681 21.681 21.681zm-6.681-45.23c0-3.684 2.997-6.682 6.681-6.682s6.682 2.997 6.682 6.682v23.549c0 3.684-2.998 6.681-6.682 6.681s-6.681-2.997-6.681-6.681z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m360.786 406.755c11.955 0 21.681-9.726 21.681-21.681v-23.549c0-11.955-9.726-21.681-21.681-21.681s-21.681 9.726-21.681 21.681v23.549c0 11.955 9.726 21.681 21.681 21.681zm-6.682-45.23c0-3.684 2.997-6.682 6.681-6.682s6.681 2.997 6.681 6.682v23.549c0 3.684-2.997 6.681-6.681 6.681s-6.681-2.997-6.681-6.681z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m200.266 370.755h111.467c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-111.467c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m200.266 393.674h111.467c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-111.467c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m504.494 496.995h-15.091v-311.803c1.754-.197 3.495-.609 5.183-1.265 5.114-1.988 9.144-5.849 11.343-10.863l4.318-9.807c2.211-5.016 2.334-10.594.348-15.706-1.985-5.11-5.841-9.141-10.859-11.352l-50.429-22.2c-3.786-1.667-8.216.051-9.886 3.842-1.669 3.791.052 8.217 3.843 9.886l50.426 22.199c1.351.595 2.389 1.681 2.924 3.058.534 1.375.502 2.875-.094 4.226l-4.323 9.82c-.591 1.348-1.673 2.383-3.046 2.917-1.376.536-2.879.503-4.225-.088l-133.396-58.724c.716-4.734 1.089-9.58 1.089-14.51 0-3.027-.147-6.019-.421-8.975l63.607 27.998c.982.433 2.009.638 3.018.638 2.883 0 5.632-1.672 6.868-4.48 1.669-3.791-.052-8.217-3.843-9.886l-73.029-32.145c-11.663-40.255-48.857-69.769-92.819-69.769s-81.156 29.514-92.819 69.768l-150.92 66.426c-5.016 2.21-8.871 6.242-10.856 11.351-1.986 5.112-1.863 10.69.347 15.704l4.315 9.8c2.203 5.023 6.233 8.884 11.347 10.872 1.687.656 3.427 1.068 5.181 1.265v311.803h-15.089c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h496.989c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.501-7.5zm-248.494-481.99c45.005 0 81.619 36.614 81.619 81.619s-36.614 81.62-81.619 81.62-81.619-36.614-81.619-81.619 36.614-81.62 81.619-81.62zm-236.201 152.015-4.32-9.812c-.595-1.348-.627-2.848-.093-4.224.535-1.377 1.573-2.463 2.921-3.057l141.495-62.278c-.274 2.956-.421 5.949-.421 8.976 0 4.931.373 9.776 1.089 14.51l-133.391 58.72c-1.35.594-2.851.627-4.23.091-1.373-.533-2.455-1.569-3.05-2.926zm17.796 14.595 126.355-55.623c12.458 38.961 49.01 67.252 92.051 67.252s79.592-28.291 92.051-67.252l126.353 55.622v315.381h-96.213c3.074-4.902 4.859-10.691 4.859-16.892v-16.892h7.259c14.765 0 26.778-12.012 26.778-26.778 0-8.657-4.132-16.362-10.524-21.261 6.83-9.711 10.524-21.251 10.524-33.365v-8.33c0-24.079-14.717-44.783-35.629-53.599l-.821-5.279h9.949c6.964 0 13.512-2.713 18.438-7.639 4.925-4.926 7.638-11.474 7.638-18.438 0-14.379-11.697-26.077-26.076-26.077h-18.062l-1.713-11.015c-3.999-25.674-25.758-44.309-51.738-44.309h-126.148c-25.98 0-47.738 18.635-51.737 44.311l-1.713 11.014h-18.064c-6.966 0-13.513 2.713-18.439 7.639-4.925 4.925-7.638 11.473-7.638 18.438 0 14.379 11.698 26.077 26.077 26.077h9.951l-.811 5.211c-15.595 6.491-27.89 19.63-33.1 36.631-1.214 3.96 1.013 8.154 4.974 9.368 3.958 1.212 8.154-1.012 9.368-4.974 5.59-18.241 22.17-30.497 41.258-30.497h205.886c23.792 0 43.148 19.352 43.148 43.139v8.33c0 10.332-3.616 20.105-10.234 27.896-.511-.029-1.026-.048-1.544-.048h-268.616c-.519 0-1.033.019-1.544.048-5.321-6.289-8.786-14.053-9.858-22.213-.541-4.108-4.314-6.996-8.414-6.459-4.106.54-6.998 4.307-6.459 8.413 1.215 9.24 4.707 18.096 10.035 25.717-6.4 4.898-10.538 12.609-10.538 21.272 0 14.765 12.012 26.778 26.778 26.778h4.705v16.892c0 6.201 1.785 11.99 4.859 16.892h-93.661zm103.801 298.488v-16.892h33.783v16.892c0 9.314-7.577 16.892-16.891 16.892s-16.892-7.578-16.892-16.892zm-19.704-55.448h268.617c6.494 0 11.778 5.284 11.778 11.779 0 6.494-5.284 11.778-11.778 11.778h-268.617c-6.494 0-11.778-5.284-11.778-11.778-.001-6.495 5.284-11.779 11.778-11.779zm68.487 55.448v-16.892h129.088v16.892c0 6.201 1.785 11.99 4.859 16.892h-138.806c3.074-4.902 4.859-10.691 4.859-16.892zm144.088 0v-16.892h33.783v16.892c0 9.314-7.577 16.892-16.891 16.892s-16.892-7.578-16.892-16.892zm3.888-164.764c-2.149-21.61-20.433-38.543-42.598-38.543s-40.449 16.933-42.598 38.543h-80.633l8.973-57.671c.896-5.77 5.786-9.959 11.627-9.959h126.147c5.842 0 10.731 4.188 11.627 9.961l8.973 57.669zm-15.114 0h-54.967c2.06-13.316 13.6-23.543 27.484-23.543 13.883-.001 25.423 10.226 27.483 23.543zm31.813 0-9.332-59.972c-2.037-13.129-13.161-22.657-26.449-22.657h-126.147c-13.287 0-24.41 9.529-26.449 22.654l-9.332 59.975h-4.093c-2.257 0-4.486.134-6.683.383l9.641-61.983c2.853-18.321 18.379-31.618 36.916-31.618h126.147c18.538 0 34.064 13.297 36.916 31.616l9.644 61.998c-2.198-.253-4.429-.397-6.695-.397h-4.084zm-221.157-15.74h-12.285c-6.108 0-11.077-4.969-11.077-11.077 0-2.958 1.152-5.74 3.245-7.832 2.092-2.092 4.874-3.245 7.832-3.245h15.731zm241.16-22.154h15.728c6.107 0 11.076 4.969 11.076 11.077 0 2.958-1.152 5.739-3.245 7.832-2.092 2.093-4.874 3.245-7.831 3.245h-12.283z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m240.901 95.891c.01 1.989.81 3.893 2.223 5.293 1.405 1.391 3.302 2.17 5.277 2.17h.037c5.353-.027 11.072-.051 14.436-.051 12.476 0 23.017-10.289 23.017-22.468s-10.541-22.468-23.017-22.468h-14.556c-1.993 0-3.903.793-5.31 2.204s-2.195 3.324-2.189 5.317c-.001.001.062 26.098.082 30.003zm21.973-22.524c4.271 0 8.017 3.49 8.017 7.469s-3.746 7.468-8.017 7.468c-1.8 0-4.27.007-7 .017-.013-4.497-.025-9.929-.037-14.509l-.001-.445z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m231.733 159.67h6.937c9.434 0 17.109-7.675 17.109-17.108v-13.087c2.77-.011 5.282-.018 7.095-.018 27.114 0 49.172-21.812 49.172-48.622s-22.058-48.622-49.172-48.622h-27.481c-3.267 0-6.326.679-9.095 2.018-7.225 3.497-11.699 10.634-11.674 18.601v89.73c.001 9.433 7.676 17.108 17.109 17.108zm-2.108-106.862c-.007-2.169 1.223-4.114 3.208-5.075.703-.34 1.589-.52 2.561-.52h27.481c18.842 0 34.172 15.083 34.172 33.623s-15.33 33.622-34.172 33.622c-3.393 0-9.217.025-14.632.052-4.128.021-7.463 3.372-7.463 7.5v20.553c0 1.163-.946 2.108-2.109 2.108h-6.937c-1.162 0-2.108-.946-2.108-2.108v-89.755z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/CarPark.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/CarPark.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/CarPark.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/CarPark.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/CarPark.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/CarPark.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = CarPark;
const __TURBOPACK__default__export__ = CarPark;
var _c;
__turbopack_refresh__.register(_c, "CarPark");

})()),
"[project]/src/icons/Guard.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Guard({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                height: "30",
                width: "30",
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg",
                id: "fi_2986423",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "Security_Guard-Surveillance-Guard-Home-Security",
                    "data-name": "Security Guard-Surveillance-Guard-Home-Security",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m52 23.86v35.14a2.006 2.006 0 0 1 -2 2h-36a2.006 2.006 0 0 1 -2-2v-35.04l9.17-7.78.26-.22 10.57-8.96z",
                            fill: "#acabb1"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m52 23.86v.31l-18-15.17-10.57 8.96-9.43 8-.05.04-1.95 1.65v-3.69l9.43-8 10.57-8.96z",
                            fill: "#898890"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m60.59 28.48a2.007 2.007 0 0 1 -2.82.24l-5.77-4.86-20-16.86-10.57 8.96-9.43 8-.05.04-3.02 2.56-.93.79-1.76 1.5h-.01a2.01 2.01 0 0 1 -3.02-.52 2.1 2.1 0 0 1 .53-2.62l4.26-3.57 9.7-8.14 13.02-10.92a1.982 1.982 0 0 1 2.56-.01l27.06 22.59a2 2 0 0 1 .25 2.82z",
                            fill: "#ff9811"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m50 35v5.94a12 12 0 0 1 -6.17 10.49l-2.83 1.57-2.83-1.57a12 12 0 0 1 -6.17-10.49v-5.94l9-4z",
                            fill: "#898890"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m48 33v5.94a12 12 0 0 1 -6.17 10.49l-2.83 1.57-2.83-1.57a12 12 0 0 1 -6.17-10.49v-5.94l9-4z",
                            fill: "#ff5023"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m25.44 43.42-2.74-1.22-2.7-1.2v-3.68a6.97 6.97 0 0 0 4-6.32h1a2 2 0 0 0 0-4h-1v-7a4.028 4.028 0 0 0 -2.83-3.82l-9.17 7.78v11.93a.265.265 0 0 0 .05.06 6.868 6.868 0 0 0 1.95 1.37v3.68l-2 .89v17.11a2.006 2.006 0 0 0 2 2h15v-12.1a6 6 0 0 0 -3.56-5.48zm-11.44-17.42h-.05l.05-.04z",
                            fill: "#898890"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m23 25a2 2 0 0 1 0 4h-1v-4z",
                            fill: "#ffb655"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m20.7 40.2-1.7 3.8-1.4-1.4-2.6-2.6 3-1z",
                            fill: "#1e81ce"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m22 18v6h-10v-.04l-.05.04h-3.95v-6a4 4 0 0 1 4-4h6a4.025 4.025 0 0 1 4 4z",
                            fill: "#5aaae7"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m17.6 42.6-1.6 2.4h-2l-1.6-2.4 2.6-2.6z",
                            fill: "#d8d7da"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m16 45 1 12-2 3-2-3 1-12z",
                            fill: "#e0e0e2"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "15",
                            cy: "19",
                            fill: "#e6e7e8",
                            r: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m27 46.9v14.1h-24v-14.1a6 6 0 0 1 3.56-5.48l2.74-1.22 1.7 3.8 1.4-1.4 1.6 2.4-1 12 2 3 2-3-1-12 1.6-2.4 1.4 1.4 1.7-3.8 2.74 1.22a6 6 0 0 1 3.56 5.48z",
                            fill: "#3d9ae2"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m12 39-2.7 1.2 1.7 3.8 1-1 .4-.4 2.6-2.6z",
                            fill: "#1e81ce"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m7 25a2 2 0 0 0 -.77 3.85h.01a1.944 1.944 0 0 0 .76.15h1v-4z",
                            fill: "#ffb655"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m8 24v1h-1a2 2 0 0 0 -.77 3.85 2.01 2.01 0 0 1 -3.02-.52 2.1 2.1 0 0 1 .53-2.62l4.26-3.57z",
                            fill: "#ff9811"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m18 35v4l-3 1-3-1v-4z",
                            fill: "#ffc477"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m18 35v2.32a6.958 6.958 0 0 1 -6 0v-2.32z",
                            fill: "#ffb655"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m12 24h-4v5a6.958 6.958 0 0 0 2.05 4.95 6.986 6.986 0 0 0 7.95 1.37 6.97 6.97 0 0 0 4-6.32v-5z",
                            fill: "#ffc477"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m12 24h-4a4.007 4.007 0 0 0 4 4h6a4 4 0 0 0 4-4z",
                            fill: "#3d9ae2"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m29 33v5.939a13.006 13.006 0 0 0 6.687 11.361l2.827 1.571a1 1 0 0 0 .972 0l2.827-1.571a13.006 13.006 0 0 0 6.687-11.361v-5.939a1 1 0 0 0 -.594-.914l-9-4a1 1 0 0 0 -.812 0l-9 4a1 1 0 0 0 -.594.914zm2 .65 8-3.556 8 3.556v5.289a11.007 11.007 0 0 1 -5.658 9.616l-2.342 1.301-2.342-1.3a11.007 11.007 0 0 1 -5.658-9.617z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m38 43a1 1 0 0 0 .707-.293l5-5-1.414-1.414-4.293 4.293-2.293-2.293-1.414 1.414 3 3a1 1 0 0 0 .707.293z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "15",
                            cy: "19",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m60.98 24.89-27.06-22.59a2.979 2.979 0 0 0 -3.84.01l-12.74 10.69h-5.34a5 5 0 0 0 -5 5v6a3 3 0 0 0 0 6h.07a8.028 8.028 0 0 0 3.93 5.92v2.43l-4.85 2.16a7 7 0 0 0 -4.15 6.39v14.1a1 1 0 0 0 1 1h47a3.009 3.009 0 0 0 3-3v-32.99l4.13 3.48a3 3 0 0 0 1.93.7 3 3 0 0 0 2.99-3.26 2.982 2.982 0 0 0 -1.07-2.04zm-53.98 3.11a1 1 0 0 1 0-2zm2-10a3.009 3.009 0 0 1 3-3h6a3.009 3.009 0 0 1 3 3v5h-12zm11.83 7a3.014 3.014 0 0 1 -2.83 2h-6a3.014 3.014 0 0 1 -2.83-2zm-11.83 4v-1.03a4.924 4.924 0 0 0 3 1.03h6a4.924 4.924 0 0 0 3-1.03v1.03a6 6 0 0 1 -12 0zm6 9.95-2-.67v-1.54a7.822 7.822 0 0 0 4 0v1.54zm1.31 3.78-.85 1.27h-.92l-.85-1.27 1.31-1.32zm1.64-2.66 1.43.64-.7 1.56-1.83-1.83zm-5.9 0 1.1.37-1.83 1.83-.7-1.56zm-4.05 19.93v-14h-2v14h-2v-13.1a5.009 5.009 0 0 1 2.97-4.57l1.83-.81 1.29 2.89a.992.992 0 0 0 .73.57 1.1 1.1 0 0 0 .18.02 1.007 1.007 0 0 0 .71-.29l.53-.54.73 1.09-.97 11.66a.943.943 0 0 0 .17.63l1.63 2.45zm7-1.8-.97-1.46.89-10.74h.16l.89 10.74zm11 1.8h-2v-14h-2v14h-5.8l1.63-2.45a.943.943 0 0 0 .17-.63l-.97-11.66.73-1.09.53.54a1.007 1.007 0 0 0 .71.29 1.1 1.1 0 0 0 .18-.02.992.992 0 0 0 .73-.57l1.29-2.89 1.83.81a5.009 5.009 0 0 1 2.97 4.57zm25-1a1 1 0 0 1 -1 1h-22v-13.1a7 7 0 0 0 -4.15-6.39l-4.85-2.16v-2.43a8.028 8.028 0 0 0 3.93-5.92h.07a3 3 0 0 0 0-6v-6a4.933 4.933 0 0 0 -.34-1.77l9.34-7.92 19 16.01zm-28-31v-2a1 1 0 0 1 0 2zm36.83-.17a1.012 1.012 0 0 1 -1.42.13l-25.77-21.72a.987.987 0 0 0 -1.29 0l-9.77 8.28a4.989 4.989 0 0 0 -1.61-1.11l11.4-9.57a.983.983 0 0 1 1.27 0l27.06 22.59a.986.986 0 0 1 .35.68.944.944 0 0 1 -.22.72z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/Guard.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/Guard.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/Guard.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Guard.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Guard.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Guard;
const __TURBOPACK__default__export__ = Guard;
var _c;
__turbopack_refresh__.register(_c, "Guard");

})()),
"[project]/src/icons/PoolHeating.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PoolHeating({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_5894120",
                height: "30",
                width: "30",
                viewBox: "0 0 512 512",
                xmlns: "http://www.w3.org/2000/svg",
                "data-name": "Layer 1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m423.52 204.21c-29.58-15.91-65.93-27.05-105.8-32.68a439.647 439.647 0 0 0 -61.72-4.27q-5.31 0-10.58.13a425.358 425.358 0 0 0 -65.97 6.52c-34.05 6.12-65.1 16.38-90.97 30.3-46.74 25.15-72.48 59.92-72.48 97.93s25.74 72.78 72.48 97.93c44.3 23.82 103.79 36.95 167.52 36.95s123.22-13.13 167.52-36.95c46.74-25.15 72.48-59.93 72.48-97.93s-25.74-72.78-72.48-97.93z",
                        fill: "#e19974"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PoolHeating.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m169.68 201.27a390.59 390.59 0 0 1 68.94-8.72q8.61-.345 17.38-.35a419.3 419.3 0 0 1 53.62 3.38c38.76 4.99 73.91 15.44 102.08 30.6 38.28 20.59 59.36 47.57 59.36 75.96s-21.08 55.37-59.36 75.96c-40.72 21.91-96.02 33.97-155.7 33.97s-114.98-12.06-155.7-33.97c-38.28-20.59-59.36-47.57-59.36-75.96s21.08-55.37 59.36-75.96c20.01-10.77 43.54-19.16 69.38-24.91z",
                        fill: "#80aaff"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PoolHeating.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m130.3 378.1c-38.28-20.59-59.36-47.57-59.36-75.96s21.08-55.37 59.36-75.96c20.01-10.77 43.54-19.16 69.38-24.91a390.59 390.59 0 0 1 68.94-8.72c.851-.034 1.711-.048 2.564-.077q-7.539-.264-15.184-.273-8.76 0-17.38.35a390.59 390.59 0 0 0 -68.94 8.72c-25.84 5.75-49.37 14.14-69.38 24.91-38.28 20.59-59.36 47.57-59.36 75.96s21.08 55.37 59.36 75.96c40.72 21.91 96.02 33.97 155.7 33.97q7.551 0 15-.263c-53.9-1.849-103.415-13.645-140.7-33.707z",
                        fill: "#678fce"
                    }, void 0, false, {
                        fileName: "[project]/src/icons/PoolHeating.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#284268",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m427.941 264.481c-12.107-9.905-29.29-18.478-49.689-24.793a6 6 0 1 0 -3.549 11.463c37.133 11.5 61.127 30.3 61.127 47.913 0 15.675-18.805 33.4-50.3 47.41-35.422 15.755-80.738 24.433-127.6 24.433s-92.181-8.678-127.6-24.433c-31.5-14.012-50.3-31.735-50.3-47.41s19.6-33.014 49.93-44.139a6 6 0 1 0 -4.133-11.266c-36.191 13.274-57.8 33.987-57.8 55.405 0 20.863 20.93 42.139 57.425 58.374 36.923 16.424 83.972 25.469 132.48 25.469s95.556-9.045 132.479-25.469c36.5-16.235 57.426-37.511 57.426-58.374-.007-11.979-6.885-23.938-19.896-34.583z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m312.256 275.005c39.524 5.6 60.575 18.382 60.575 25.457 0 6.751-19.991 21.689-59.824 27.428a6 6 0 1 0 1.711 11.877c18.882-2.72 36.262-7.93 48.942-14.669 13.851-7.362 21.171-15.88 21.171-24.636 0-20.148-38.189-32.706-70.892-37.338a6 6 0 0 0 -1.683 11.881z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m149.663 325.555c13.3 6.82 31.488 12.031 51.207 14.672a6.075 6.075 0 0 0 .8.053 6 6 0 0 0 .788-11.948c-41.952-5.617-63.008-20.895-63.008-27.87 0-7.469 22.218-21.291 62.39-26.747a6 6 0 0 0 -1.615-11.891c-19.69 2.674-37.686 7.684-50.674 14.106-14.458 7.148-22.1 15.631-22.1 24.532.003 8.966 7.683 17.638 22.212 25.093z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m270.742 306.51a6 6 0 1 0 1.926 11.844c13.811-2.245 22.735-9.487 22.735-18.449 0-8.866-8.794-16.086-22.4-18.393a6 6 0 0 0 -2.006 11.832c8.263 1.4 12.41 4.962 12.41 6.561-.007 1.632-4.234 5.234-12.665 6.605z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m241.8 318.538a6 6 0 0 0 1.631-11.889c-8.926-1.224-13.6-5.042-13.6-6.744s4.688-5.533 13.647-6.751a6 6 0 1 0 -1.615-11.89c-14.374 1.953-24.032 9.444-24.032 18.641.001 9.178 9.632 16.666 23.969 18.633z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m426.36 198.927c-29.086-15.648-64.548-26.759-103.4-32.69a34.021 34.021 0 0 0 -5.116-11.139c-2.375-3.725-4.091-6.416-4.091-12.557s1.716-8.832 4.091-12.556c2.661-4.173 5.973-9.366 5.973-19.007a6 6 0 0 0 -12 0c0 6.14-1.716 8.831-4.091 12.555-2.661 4.173-5.973 9.367-5.973 19.008s3.312 14.835 5.973 19.009c.633.992 1.217 1.912 1.737 2.843a451.12 451.12 0 0 0 -53.463-3.135c-.755 0-1.506.011-2.26.015a46.956 46.956 0 0 0 .894-9.489c0-11.077-3.037-16.872-5.718-21.985-2.332-4.45-4.346-8.292-4.346-16.415s2.014-11.966 4.346-16.416c2.681-5.113 5.718-10.908 5.718-21.986a6 6 0 0 0 -12 0c0 8.123-2.014 11.966-4.346 16.416-2.681 5.113-5.718 10.908-5.718 21.986s3.037 16.872 5.718 21.986c2.332 4.449 4.346 8.291 4.346 16.414a31.059 31.059 0 0 1 -1.342 9.716 436.292 436.292 0 0 0 -56.559 5.413 33.52 33.52 0 0 0 -5.258-11.815c-2.375-3.724-4.091-6.416-4.091-12.557s1.716-8.832 4.091-12.556c2.661-4.173 5.972-9.366 5.972-19.007a6 6 0 0 0 -12 0c0 6.14-1.716 8.831-4.091 12.555-2.661 4.174-5.972 9.367-5.972 19.008s3.311 14.835 5.972 19.009a22.771 22.771 0 0 1 3.573 7.479c-32.543 6.339-62.275 16.44-87.289 29.9-48.778 26.239-75.64 62.893-75.64 103.209s26.862 76.969 75.64 103.212c45.151 24.29 105.653 37.668 170.36 37.668s125.209-13.378 170.36-37.668c48.778-26.243 75.64-62.9 75.64-103.212s-26.862-76.97-75.64-103.211zm-177.444-25.155.239-.457c2.276-.034 4.557-.057 6.845-.057a438.175 438.175 0 0 1 55.693 3.5c-.433 4.353-1.962 6.766-3.963 9.905-.493.773-1.008 1.582-1.52 2.447a427.725 427.725 0 0 0 -50.21-2.91q-5.654 0-11.254.142c.533-5.616 2.241-8.889 4.17-12.57zm-69.441 19.344c2.17-3.4 4.772-7.49 5.658-14.111a420.66 420.66 0 0 1 50.481-5.28 39.025 39.025 0 0 0 -2.937 13.1 400.862 400.862 0 0 0 -53.221 6.324zm241.2 201.665c-43.435 23.367-101.917 36.237-164.675 36.237s-121.24-12.87-164.675-36.237c-44.705-24.051-69.325-56.952-69.325-92.643s24.62-68.593 69.325-92.638c23.223-12.494 50.75-21.983 80.931-28.112a29.839 29.839 0 0 1 -2.9 5.282 35.881 35.881 0 0 0 -4.707 9.61c-24.924 5.837-47.679 14.121-67.191 24.618-40.313 21.688-62.515 50.542-62.515 81.245s22.2 59.557 62.515 81.245c41.581 22.371 97.886 34.691 158.542 34.691s116.961-12.32 158.542-34.691c28.071-15.1 47.35-33.679 56.474-53.935a5.921 5.921 0 0 0 -5.435-8.31h-.146a5.989 5.989 0 0 0 -5.435 3.557c-8.047 17.748-25.524 34.33-51.142 48.111-39.864 21.449-94.149 33.26-152.856 33.26s-112.992-11.811-152.856-33.26c-36.242-19.5-56.2-44.6-56.2-70.676s19.959-51.18 56.2-70.678c17.6-9.468 38.013-17.055 60.373-22.58.637 7.635 3.49 12.121 5.839 15.806 2.375 3.725 4.091 6.417 4.091 12.559a6 6 0 0 0 12 0c0-9.642-3.311-14.836-5.972-19.01-2.308-3.619-3.988-6.272-4.082-12.052a383.932 383.932 0 0 1 57.9-7.379 43.431 43.431 0 0 0 4.994 13.374c2.332 4.45 4.346 8.293 4.346 16.417a6 6 0 0 0 12 0c0-11.078-3.037-16.874-5.717-21.988a35.571 35.571 0 0 1 -3.45-8.275q5.241-.127 10.533-.13a417.9 417.9 0 0 1 46.078 2.514 36.878 36.878 0 0 0 -.321 4.96c0 9.642 3.311 14.837 5.972 19.01 2.376 3.725 4.092 6.417 4.092 12.559a6 6 0 0 0 12 0c0-9.642-3.311-14.837-5.972-19.01-2.376-3.726-4.092-6.417-4.092-12.559a25.144 25.144 0 0 1 .222-3.456c35.988 5.136 68.573 15.089 94.877 29.24 25.618 13.783 43.1 30.365 51.142 48.113a5.988 5.988 0 0 0 5.437 3.565h.146a5.921 5.921 0 0 0 5.435-8.31c-9.124-20.256-28.4-38.833-56.474-53.935-26.634-14.329-59.313-24.526-95.3-30.012a29.769 29.769 0 0 0 4.327-12.42c36.533 5.8 69.8 16.341 97.107 31.034 44.703 24.053 69.323 56.954 69.323 92.646s-24.62 68.592-69.325 92.643z"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/PoolHeating.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/icons/PoolHeating.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/icons/PoolHeating.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/PoolHeating.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/PoolHeating.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PoolHeating;
const __TURBOPACK__default__export__ = PoolHeating;
var _c;
__turbopack_refresh__.register(_c, "PoolHeating");

})()),
"[project]/src/icons/IndoorPool.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function IndoorPool({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_3751986",
                height: "30",
                width: "30",
                viewBox: "0 0 256 256",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m71.902 41.224v28.051l-36.18 23.12v-51.171z",
                                        fill: "#fb5c3c"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m71.902 60.974v8.3l-36.18 23.12v-8.29c12.97-8.289 14.56-9.3 36.18-23.13z",
                                        fill: "#b55035"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m226.082 118.784v112.99h-197.75v-111.95c61.26-39.18 38.78-24.81 99.66-63.72.01.001 98.09 62.68 98.09 62.68z",
                                        fill: "#72c2e9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m160.673 133.304c-1.81-7.804-4.475-8.684-8.163-9.902-2.303-.761-2.309-4.037 0-4.8 3.543-1.167 6.311-1.922 8.164-9.903.603-2.601 4.322-2.594 4.923 0 1.812 7.804 4.339 8.639 8.164 9.903 2.303.761 2.309 4.037 0 4.799-6.353 2.099-7.073 5.203-8.163 9.902-.607 2.607-4.32 2.607-4.925.001z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/IndoorPool.jsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/IndoorPool.jsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m167.04 121.063c-1.82 1.24-3.06 2.67-3.96 4.18-1.08-1.92-2.33-3.24-3.73-4.22 1.34-.96 2.64-2.32 3.78-4.37 1.12 2.03 2.44 3.4 3.91 4.41z",
                                                fill: "#f0c020"
                                            }, void 0, false, {
                                                fileName: "[project]/src/icons/IndoorPool.jsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/IndoorPool.jsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m35.722 41.224h36.18v7h-36.18z",
                                        fill: "#b55035"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m81.014 26.918v11.628c0 1.481-1.201 2.682-2.682 2.682h-49.036c-1.481 0-2.682-1.201-2.682-2.682v-11.628c0-1.481 1.201-2.682 2.682-2.682h49.035c1.482-.001 2.683 1.2 2.683 2.682z",
                                        fill: "#eee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m226.082 118.784v8.31c-23.68-15.14-94.04-60.1-98.08-62.69l-99.67 63.73v-8.31c61.26-39.18 38.78-24.81 99.66-63.72.01.001 98.09 62.68 98.09 62.68z",
                                        fill: "#4ba4c7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m248.131 121.538c-2.843 4.453-8.758 5.754-13.198 2.911l-8.852-5.66c-.001-.001-98.083-62.688-98.084-62.689-60.861 38.907-38.432 24.567-99.667 63.722l-7.256 4.641c-4.439 2.83-10.354 1.542-13.198-2.91-2.843-4.453-1.542-10.355 2.897-13.198l24.947-15.948.027-.014 36.16-23.109 50.94-32.578c3.138-2.012 7.162-2.012 10.301 0 97.185 62.139 74.133 47.403 112.073 71.649 4.492 2.856 5.726 8.811 2.91 13.183z",
                                        fill: "#eee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "127.206",
                                        cy: "133.171",
                                        fill: "#ffb69f",
                                        r: "12.167"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m149.032 165.245c-3.58.31-7.07 1.84-9.81 4.58l-.01.01c-6.19 6.19-16.23 6.19-22.43 0-3.15-3.15-7.28-4.69-11.39-4.65 1.04-11.13 10.41-19.85 21.81-19.85 11.52 0 20.82 8.82 21.83 19.91z",
                                        fill: "#ffb69f"
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/IndoorPool.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/IndoorPool.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "m216.082 224.274h-164.75c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h162.25v-91.14c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5v93.64c0 1.381-1.119 2.5-2.5 2.5zm-174.75 0h-3c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h3c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z",
                                fill: "#c4e4fd"
                            }, void 0, false, {
                                fileName: "[project]/src/icons/IndoorPool.jsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m185.956 190.618c5.215-5.091 13.604-5.05 18.778.124.977.977 2.559.977 3.535 0s.977-2.559 0-3.535c-7.871-7.871-20.29-6.435-26.08.113-5.225 5.092-13.614 5.053-18.78-.113-7.169-7.169-18.788-7.191-25.965 0-5.205 5.204-13.682 5.204-18.895 0-7.169-7.169-18.788-7.191-25.965 0-5.218 5.218-13.665 5.218-18.884 0-7.126-7.127-18.771-7.134-25.957-.019-1.082 1.072-.918 2.397-.2 3.293.861 1.076 2.519 1.536 3.777.202 5.24-5.129 13.677-5.107 18.844.059 7.163 7.164 18.771 7.186 25.967-.011 5.196-5.207 13.652-5.221 18.884.013 7.164 7.151 18.811 7.15 25.976-.013 5.199-5.209 13.653-5.219 18.883.011 7.844 7.844 20.262 6.443 26.082-.124z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "156.382",
                            cy: "231.765",
                            r: "2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m246.562 106.245c-20.942-13.382-40.637-25.975-55.84-35.7-1.13-.721-2.74-.36-3.46.76-.755 1.195-.378 2.727.76 3.46h.011c45.903 29.355 25.738 16.451 55.84 35.7 3.364 2.127 4.203 6.57 2.149 9.72-2.089 3.294-6.441 4.261-9.739 2.16-4.605-2.943-101.147-64.647-106.94-68.35-.8-.521-1.89-.521-2.69 0-83.22 53.19-76.247 48.751-106.93 68.359-3.299 2.101-7.649 1.115-9.74-2.149-2.093-3.27-1.145-7.653 2.14-9.74l112.07-71.65c2.27-1.46 5.33-1.46 7.61 0 .051.033 39.369 25.167 39.42 25.2 1.12.72 2.73.36 3.45-.76.74-1.16.399-2.71-.76-3.45 0 0-19.681-12.588-39.42-25.21-3.9-2.49-9.121-2.48-13 .01l-47.09 30.105v-20.981h3.929c2.857 0 5.182-2.325 5.182-5.183v-11.628c0-2.857-2.325-5.183-5.182-5.183h-49.036c-2.857 0-5.182 2.325-5.182 5.183v11.628c0 2.857 2.325 5.183 5.182 5.183h3.926v47.308l-23.79 15.209c-5.651 3.61-7.237 11.068-3.66 16.649 3.63 5.665 11.061 7.206 16.65 3.68l3.41-2.18v107.371c0 1.384 1.111 2.5 2.5 2.5h118.05c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-115.55v-108.07c83.191-53.197-6.262 3.99 97.17-62.132l95.58 61.098v109.103h-57.2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h.01 59.69c1.362 0 2.5-1.093 2.5-2.5v-108.407l5 3.196c5.573 3.564 13.049 1.992 16.649-3.67 3.5-5.401 2.115-12.96-3.669-16.639zm-177.16-38.34-31.18 19.925v-24.355h7.614c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5h-7.614v-14.746h31.18zm-40.106-29.176c-.101 0-.182-.082-.182-.183v-11.628c0-.101.082-.183.182-.183h49.036c.101 0 .182.082.182.183v11.628c0 .101-.082.183-.182.183-.933 0-49.036 0-49.036 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m182.322 65.175c-1.14-.72-2.739-.36-3.46.76-.739 1.16-.399 2.71.761 3.46h.02c1.23.768 2.728.344 3.43-.77.74-1.15.41-2.69-.739-3.44-.012 0-.012-.01-.012-.01z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m103.2 162.848c-4 .513-7.707 2.311-10.605 5.208-.011.011-.023.022-.035.036-5.209 5.181-13.661 5.172-18.858-.024-7.123-7.133-18.767-7.144-25.958-.021-1.082 1.072-.919 2.393-.203 3.289.863 1.079 2.528 1.541 3.783.203 5.245-5.128 13.679-5.107 18.842.063 7.155 7.156 18.8 7.156 25.955 0 .011-.011.023-.022.035-.036 5.218-5.189 13.646-5.178 18.861.038 7.166 7.153 18.815 7.147 25.964-.002.011-.011.022-.022.035-.036 5.318-5.287 13.751-5.071 18.859.036 7.937 7.937 20.445 6.337 26.089-.132 5.268-5.146 13.635-5.014 18.77.131.975.977 2.558.979 3.536.003.977-.976.979-2.559.003-3.536-7.138-7.148-18.759-7.23-25.969-.011-.041.041-.08.084-.118.128-5.225 5.084-13.611 5.045-18.775-.118-3.28-3.28-7.628-5.157-12.207-5.351-1.552-8.36-7.245-15.077-14.827-18.117 3.346-2.69 5.496-6.811 5.496-11.429 0-8.087-6.579-14.666-14.667-14.666-8.087 0-14.667 6.579-14.667 14.666 0 4.619 2.151 8.74 5.498 11.43-7.616 3.057-13.322 9.832-14.837 18.248zm14.339-29.677c0-5.33 4.336-9.666 9.667-9.666 5.33 0 9.667 4.336 9.667 9.666 0 5.32-4.321 9.65-9.638 9.666-.011 0-.021-.001-.032-.001-.01 0-.019.001-.029.001-5.316-.018-9.635-4.347-9.635-9.666zm9.634 14.665c.011 0 .022.001.033.001.01 0 .02-.001.03-.001 9.31.015 17.09 6.459 18.962 15.339-3.287.778-6.324 2.463-8.743 4.88-.011.012-.022.023-.035.037-5.208 5.179-13.666 5.169-18.869-.025-2.823-2.823-6.393-4.611-10.266-5.184 1.976-8.727 9.691-15.033 18.888-15.047z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/IndoorPool.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/IndoorPool.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/IndoorPool.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/IndoorPool.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/IndoorPool.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = IndoorPool;
const __TURBOPACK__default__export__ = IndoorPool;
var _c;
__turbopack_refresh__.register(_c, "IndoorPool");

})()),
"[project]/src/icons/BabyBed.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function BabyBed({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_7107300",
                enableBackground: "new 0 0 512 512",
                height: "30",
                width: "30",
                viewBox: "0 0 512 512",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m34.357 486.027h-12.62c-7.863 0-14.237-6.374-14.237-14.236v-342.897c0-7.863 6.374-14.236 14.237-14.236h12.62c7.863 0 14.236 6.374 14.236 14.236v342.897c0 7.863-6.374 14.236-14.236 14.236z",
                                            fill: "#ea9b58"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m490.263 486.027h-12.62c-7.862 0-14.236-6.374-14.236-14.236v-342.897c0-7.863 6.374-14.236 14.236-14.236h12.62c7.863 0 14.237 6.374 14.237 14.236v342.897c0 7.863-6.374 14.236-14.237 14.236z",
                                            fill: "#ea9b58"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m463.407 324.999h-140.027l7.82-13.186c14.193-23.931 39.954-38.604 67.778-38.604h64.428v51.79z",
                                            fill: "#d8ecfe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m48.593 324.999h414.814v54.562h-414.814z",
                                            fill: "#8ac9fe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m48.593 186.245h414.814v36.484h-414.814z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m95.505 222.729h39.691v156.832h-39.691z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m189.598 222.729h39.691v156.832h-39.691z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m283.69 222.729h39.691v156.832h-39.691z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m377.781 222.729h39.691v156.832h-39.691z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m48.593 379.561h414.814v53.917h-414.814z",
                                            fill: "#ffbd86"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m433.407 186.245c0 10.208-8.275 18.483-18.483 18.483h-366.331v18h414.814v-36.483z",
                                            fill: "#f6a96c"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m433.407 379.561c0 13.209-10.708 23.917-23.917 23.917h-360.897v30h414.814v-53.917z",
                                            fill: "#f6a96c"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m233.15 105.653h-12.6c-3.112 0-5.987 1.66-7.542 4.355l-6.3 10.912c-1.556 2.695-1.556 6.015 0 8.709l6.3 10.912c1.556 2.695 4.431 4.354 7.542 4.354h12.6c3.112 0 5.987-1.66 7.542-4.354l6.3-10.912c1.556-2.695 1.556-6.015 0-8.709l-6.3-10.912c-1.555-2.695-4.43-4.355-7.542-4.355z",
                                            fill: "#b3dafe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m371.449 105.653h-12.6c-3.112 0-5.987 1.66-7.542 4.355l-6.3 10.912c-1.556 2.695-1.556 6.015 0 8.709l6.3 10.912c1.556 2.695 4.431 4.354 7.542 4.354h12.6c3.112 0 5.987-1.66 7.542-4.354l6.3-10.912c1.556-2.695 1.556-6.015 0-8.709l-6.3-10.912c-1.555-2.695-4.43-4.355-7.542-4.355z",
                                            fill: "#fe99a0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: "295.472",
                                            cy: "125.274",
                                            fill: "#ffd15b",
                                            rx: "19.621",
                                            ry: "19.621",
                                            transform: "matrix(.707 -.707 .707 .707 -2.04 245.622)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/icons/BabyBed.jsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/icons/BabyBed.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/BabyBed.jsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/BabyBed.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m492.446 107.268v-16.755c0-39.723-32.317-72.041-72.041-72.041h-100.208c-17.478 0-31.697 14.219-31.697 31.697v9.971h-35.565c-17.543 0-31.815 14.272-31.815 31.815v6.197h-.569c-5.772 0-11.151 3.106-14.037 8.105l-6.299 10.911c-2.887 4.999-2.887 11.21 0 16.21l6.299 10.911c2.886 5 8.265 8.105 14.038 8.105h12.6c5.772 0 11.151-3.105 14.037-8.104l6.3-10.911c2.887-5 2.887-11.211 0-16.209l-6.299-10.911c-2.383-4.128-6.468-6.96-11.069-7.823v-6.479c0-9.272 7.543-16.815 16.815-16.815h35.564v23.925c-11.586 3.085-20.149 13.664-20.149 26.208 0 14.954 12.167 27.121 27.121 27.121 14.955 0 27.121-12.167 27.121-27.121 0-12.161-8.045-22.477-19.093-25.908v-24.227h35.565c9.272 0 16.815 7.543 16.815 16.815v6.479c-4.601.863-8.685 3.695-11.068 7.823l-6.299 10.911c-2.887 4.999-2.887 11.21 0 16.21l6.299 10.911c2.886 5 8.265 8.105 14.038 8.105h12.6c5.772 0 11.151-3.105 14.038-8.104l6.3-10.912c2.886-4.999 2.886-11.21 0-16.208l-6.3-10.912c-2.887-4.999-8.266-8.104-14.038-8.104h-.569v-6.197c0-17.543-14.272-31.815-31.815-31.815h-35.566v-9.972c0-9.207 7.49-16.697 16.697-16.697h100.209c31.452 0 57.041 25.588 57.041 57.041v16.649c-11.895.107-21.54 9.812-21.54 21.731v49.851h-295.556c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h295.556v21.483h-399.814v-21.483h59.258c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-59.258v-49.851c0-11.985-9.751-21.736-21.736-21.736h-12.62c-11.986 0-21.737 9.751-21.737 21.736v342.896c0 11.985 9.751 21.736 21.736 21.736h12.62c11.985 0 21.736-9.751 21.736-21.736v-30.813h272.288c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-272.287v-38.917h399.814v38.917h-92.527c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h92.526v30.813c0 11.985 9.751 21.736 21.736 21.736h12.62c11.986 0 21.737-9.751 21.737-21.736v-342.896c.001-11.248-8.588-20.528-19.553-21.626zm-251.949 18.61-6.3 10.912c-.215.373-.616.604-1.046.604h-12.6c-.431 0-.832-.231-1.047-.604l-6.3-10.912c-.215-.373-.215-.835 0-1.208l6.3-10.912c.215-.373.616-.604 1.046-.604h12.6c.43 0 .832.231 1.047.605l6.3 10.913c.215.37.215.833 0 1.206zm67.096-.604c0 6.683-5.438 12.121-12.121 12.121s-12.121-5.438-12.121-12.121c0-6.684 5.438-12.121 12.121-12.121s12.121 5.437 12.121 12.121zm64.904-11.516 6.3 10.912c.215.373.215.836 0 1.209l-6.3 10.911c-.215.373-.617.605-1.047.605h-12.6c-.431 0-.832-.231-1.047-.604l-6.3-10.912c-.215-.373-.215-.835 0-1.208l6.3-10.912c.215-.373.616-.604 1.047-.604h12.6c.43-.002.831.23 1.047.603zm52.475 166.951h30.935v36.79h-30.935zm30.935-15h-30.935v-35.48h30.935zm-85.625 51.79h-33.733l1.103-1.86c7.625-12.855 19.056-22.921 32.63-28.89zm-39.402 15h39.401v39.562h-39.401zm39.402-61.857c-15.643 5.518-29.294 15.385-39.401 28.376v-68.79h39.401zm-133.494 61.857h39.401v39.562h-39.401zm39.401-15h-39.401v-87.27h39.401zm-133.493 15h39.401v39.562h-39.401zm39.402-15h-39.401v-87.27h39.401zm-94.093-87.27v87.27h-31.912v-87.27zm-46.912 241.562c0 3.714-3.022 6.736-6.736 6.736h-12.62c-3.714 0-6.736-3.022-6.736-6.736v-342.897c0-3.714 3.022-6.736 6.736-6.736h12.62c3.714 0 6.736 3.022 6.736 6.736zm15-139.292h31.913v39.562h-31.913zm46.912 39.562v-141.832h24.691v141.832zm94.093 0v-141.832h24.69v141.832zm94.091 0v-141.832h24.691v141.832zm94.093 0v-141.832h24.69v141.832zm39.69 0v-39.562h30.935v39.562zm72.028 99.73c0 3.714-3.022 6.736-6.737 6.736h-12.62c-3.714 0-6.736-3.022-6.736-6.736v-342.897c0-3.714 3.022-6.736 6.736-6.736h12.62c3.715 0 6.737 3.022 6.737 6.736z"
                        }, void 0, false, {
                            fileName: "[project]/src/icons/BabyBed.jsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/BabyBed.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/BabyBed.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/BabyBed.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/BabyBed.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = BabyBed;
const __TURBOPACK__default__export__ = BabyBed;
var _c;
__turbopack_refresh__.register(_c, "BabyBed");

})()),
"[project]/src/icons/Terrace.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Terrace({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                id: "fi_6791513",
                enableBackground: "new 0 0 511.996 511.996",
                height: "30",
                viewBox: "0 0 511.996 511.996",
                width: "30",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m94.02 246.161h361.49v228.5h-361.49z",
                                    fill: "#ffd086"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m56.53 246.161h41.09v228.5h-41.09z",
                                    fill: "#ffc365"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m238.411 302.099h-35.046c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h35.046c4.801 0 8.693-3.892 8.693-8.693v-88.325c0-4.801-3.892-8.693-8.693-8.693z",
                                    fill: "#00d2fc"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m223.215 399.116v-88.325c0-4.801 3.892-8.693 8.693-8.693h-28.543c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h28.543c-4.802 0-8.693-3.892-8.693-8.693z",
                                    fill: "#00c2fb"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m323.869 302.099h-35.046c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h35.046c4.801 0 8.693-3.892 8.693-8.693v-88.325c0-4.801-3.892-8.693-8.693-8.693z",
                                    fill: "#00d2fc"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m308.673 399.116v-88.325c0-4.801 3.892-8.693 8.693-8.693h-28.543c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h28.543c-4.801 0-8.693-3.892-8.693-8.693z",
                                    fill: "#00c2fb"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m409.328 302.099h-35.046c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h35.046c4.801 0 8.693-3.892 8.693-8.693v-88.325c-.001-4.801-3.893-8.693-8.693-8.693z",
                                    fill: "#00d2fc"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m394.131 399.116v-88.325c0-4.801 3.892-8.693 8.693-8.693h-28.543c-4.801 0-8.693 3.892-8.693 8.693v88.325c0 4.801 3.892 8.693 8.693 8.693h28.543c-4.801 0-8.693-3.892-8.693-8.693z",
                                    fill: "#00c2fb"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m155.328 302.099h-15.682l-2.349 1.312-4 5.125v166.125h30.724v-163.87c-.001-4.8-3.893-8.692-8.693-8.692z",
                                    fill: "#e39b74"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m143.803 302.099h-41.09c-4.801 0-8.693 3.892-8.693 8.693v163.87h41.09v-163.87c.001-4.801 3.892-8.693 8.693-8.693z",
                                    fill: "#dd8858"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m350.861 35.327c-30.85 0-57.448 18.194-69.656 44.437-1.743 3.748 1.024 8.037 5.157 8.037h37.156l4.153-3.14h23.189v-49.334z",
                                    fill: "#ef6060"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m350.861 35.327v49.334h24.311l3.031 3.14h37.156c4.133 0 6.901-4.29 5.157-8.037-12.207-26.243-38.805-44.437-69.655-44.437z",
                                    fill: "#f67b7b"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m361.777 41.042h-1.855l-8.833 15.37-5.25 19.083-2 9.667 1.513 2.64h32.851c-2.658-21.233-8.704-38.329-16.426-46.76z",
                                    fill: "#c9f0fe"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m350.861 35.327c-12.727 0-23.525 21.983-27.342 52.474h21.833c2.658-21.232 8.703-38.328 16.425-46.76-3.367-3.676-7.052-5.714-10.916-5.714z",
                                    fill: "#9be8fd"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m130.807 49.189h-3.402l-8.128 9.091-3.189 11.729 2.139 12.037 4.63 8.025 7.951 2.832c7.553-4.357 12.641-12.51 12.641-21.857s-5.088-17.5-12.642-21.857z",
                                    fill: "#ffc365"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m118.166 71.046c0-9.347 5.088-17.5 12.641-21.857-3.704-2.137-7.997-3.365-12.581-3.365-13.93 0-25.222 11.292-25.222 25.222s11.292 25.222 25.222 25.222c4.583 0 8.877-1.229 12.581-3.365-7.553-4.358-12.641-12.511-12.641-21.857z",
                                    fill: "#ffa90f"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m493.425 468.687h-438.277l-3.893 2.224-3.583 3v21.417l.917 4.583 4.333 3.917 1.929.663h438.574c6.127 0 11.094-4.967 11.094-11.094v-13.617c-.001-6.126-4.967-11.093-11.094-11.093z",
                                    fill: "#92df93"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m48.613 493.398v-13.618c0-6.127 4.967-11.094 11.094-11.094h-41.09c-6.127 0-11.094 4.967-11.094 11.094v13.617c0 6.127 4.967 11.094 11.094 11.094h41.09c-6.128 0-11.094-4.966-11.094-11.093z",
                                    fill: "#73d578"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m469.14 215.597h-390.514c-2.105 1.325-3.788 2.398-3.788 2.398l-3.667 5.333v22.333l3.625 4s3.154.936 5.898 1.74h388.446c6.127 0 11.094-4.967 11.094-11.094v-13.617c0-6.126-4.967-11.093-11.094-11.093z",
                                    fill: "#62ddfc"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m72.897 240.308v-13.618c0-6.127 4.967-11.094 11.094-11.094h-41.091c-6.127 0-11.094 4.967-11.094 11.094v13.617c0 6.127 4.967 11.094 11.094 11.094h41.09c-6.126 0-11.093-4.966-11.093-11.093z",
                                    fill: "#00d2fc"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/Terrace.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m85.482 71.051c0 18.043 14.679 32.722 32.722 32.722s32.723-14.679 32.723-32.722-14.68-32.723-32.723-32.723-32.722 14.68-32.722 32.723zm32.722-17.723c9.772 0 17.723 7.95 17.723 17.723 0 9.771-7.95 17.722-17.723 17.722-9.771 0-17.722-7.95-17.722-17.722 0-9.773 7.951-17.723 17.722-17.723z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m125.704 16.973v-9.473c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.473c0 4.143 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m110.704 125.128v9.473c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.473c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m78.571 20.81c-2.93-2.928-7.678-2.928-10.607 0-2.929 2.93-2.929 7.678 0 10.607l6.698 6.698c2.931 2.929 7.678 2.928 10.607 0 2.929-2.93 2.929-7.678 0-10.607z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m151.14 103.985c-2.929 2.93-2.929 7.678 0 10.607l6.698 6.698c2.931 2.929 7.678 2.928 10.607 0 2.929-2.93 2.929-7.678 0-10.607l-6.698-6.698c-2.93-2.927-7.678-2.927-10.607 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m54.654 63.551c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.473c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m181.755 78.551c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.473c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m74.662 103.985-6.698 6.698c-2.929 2.93-2.929 7.678 0 10.607 2.931 2.929 7.678 2.928 10.607 0l6.698-6.698c2.929-2.93 2.929-7.678 0-10.607-2.929-2.927-7.677-2.927-10.607 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m157.838 20.81-6.698 6.698c-2.929 2.93-2.929 7.678 0 10.607 2.931 2.929 7.678 2.928 10.607 0l6.698-6.698c2.929-2.93 2.929-7.678 0-10.607-2.929-2.928-7.677-2.928-10.607 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m138.498 374.022c-4.143 0-7.5 3.357-7.5 7.5v7.75c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-7.75c0-4.142-3.357-7.5-7.5-7.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m203.343 294.604c-8.929 0-16.193 7.264-16.193 16.192v88.325c0 8.929 7.265 16.192 16.193 16.192h35.046c8.929 0 16.192-7.264 16.192-16.192v-88.325c0-8.929-7.264-16.192-16.192-16.192zm35.046 105.709h-35.046c-.658 0-1.193-.535-1.193-1.192v-36.662h37.432v36.662c-.001.657-.536 1.192-1.193 1.192zm1.192-89.517v36.663h-37.432v-36.663c0-.657.535-1.192 1.193-1.192h35.046c.658 0 1.193.535 1.193 1.192z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m288.801 294.604c-8.929 0-16.192 7.264-16.192 16.192v88.325c0 8.929 7.264 16.192 16.192 16.192h35.046c8.929 0 16.193-7.264 16.193-16.192v-88.325c0-8.929-7.265-16.192-16.193-16.192zm35.046 105.709h-35.046c-.657 0-1.192-.535-1.192-1.192v-36.662h37.432v36.662c-.001.657-.536 1.192-1.194 1.192zm1.193-89.517v36.663h-37.432v-36.663c0-.657.535-1.192 1.192-1.192h35.046c.659 0 1.194.535 1.194 1.192z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m374.259 294.604c-8.929 0-16.192 7.264-16.192 16.192v88.325c0 8.929 7.264 16.192 16.192 16.192h35.047c8.929 0 16.192-7.264 16.192-16.192v-88.325c0-8.929-7.264-16.192-16.192-16.192zm35.047 105.709h-35.047c-.657 0-1.192-.535-1.192-1.192v-36.662h37.432v36.662c-.001.657-.536 1.192-1.193 1.192zm1.192-89.517v36.663h-37.432v-36.663c0-.657.535-1.192 1.192-1.192h35.047c.658 0 1.193.535 1.193 1.192z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m493.402 461.191h-30.414v-88.732c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v88.732h-276.49v-150.395c0-8.929-7.264-16.192-16.192-16.192h-52.616c-8.929 0-16.192 7.264-16.192 16.192v150.396h-22.49v-202.286h383.98v78.553c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-78.553h6.13c10.252 0 18.593-8.341 18.593-18.594v-13.617c0-10.253-8.341-18.594-18.593-18.594h-36.03v-72.665c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v34.64h-34.5c-4.143 0-7.5 3.357-7.5 7.5v30.525h-17.75v-48.897h24.167c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-24.167v-48.898h56.999c4.525 0 8.682-2.279 11.117-6.098 2.427-3.806 2.741-8.517.841-12.603h-.001c-12.72-27.344-39.265-45.745-68.956-48.422v-9.413c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.413c-29.692 2.677-56.236 21.078-68.956 48.422-1.9 4.086-1.586 8.797.841 12.603 2.436 3.818 6.592 6.098 11.117 6.098h56.998v48.898h-24.166c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h24.166v48.897h-17.75v-30.525c0-4.143-3.357-7.5-7.5-7.5h-34.5v-34.64c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v72.665h-225.71c-10.253 0-18.594 8.341-18.594 18.594v13.617c0 10.253 8.341 18.594 18.594 18.594h6.13v202.285h-30.414c-10.253 0-18.594 8.341-18.594 18.594v13.617c0 10.253 8.341 18.594 18.594 18.594h219.904c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-219.904c-1.981 0-3.594-1.612-3.594-3.594v-13.617c0-1.981 1.612-3.594 3.594-3.594h474.809c1.981 0 3.594 1.612 3.594 3.594v13.617c0 1.981-1.612 3.594-3.594 3.594h-219.905c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h219.904c10.253 0 18.594-8.341 18.594-18.594v-13.617c0-10.253-8.341-18.594-18.594-18.594zm-80.999-380.885h-27.723c-2.165-13.362-5.586-24.586-9.962-33.188 16.022 5.916 29.632 17.643 37.685 33.188zm-85.445-33.189c-4.375 8.602-7.798 19.826-9.963 33.188h-27.722c8.053-15.545 21.664-27.271 37.685-33.188zm23.88-4.285c5.169 0 14.08 11.962 18.628 37.474h-37.256c4.549-25.512 13.46-37.474 18.628-37.474zm40.25 142.244h27v23.025h-27zm-107.5 0h27v23.025h-27zm-244.304 55.236v-13.617c0-1.981 1.612-3.594 3.594-3.594h426.24c1.981 0 3.593 1.612 3.593 3.594v13.617c0 1.981-1.611 3.594-3.593 3.594-11.398 0-414.783 0-426.24 0-1.982 0-3.594-1.612-3.594-3.594zm62.214 220.879v-150.395c0-.657.535-1.192 1.192-1.192h52.615c.657 0 1.192.535 1.192 1.192v150.396h-54.999z"
                                }, void 0, false, {
                                    fileName: "[project]/src/icons/Terrace.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/icons/Terrace.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/icons/Terrace.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/icons/Terrace.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "inherit",
                    marginLeft: '10px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/icons/Terrace.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/icons/Terrace.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Terrace;
const __TURBOPACK__default__export__ = Terrace;
var _c;
__turbopack_refresh__.register(_c, "Terrace");

})()),
"[project]/src/rigel/features/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$TenPeople$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/TenPeople.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$FivePlusOne$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/FivePlusOne.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Bilardo$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Bilardo.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Check.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$PrivatePool$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/PrivatePool.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$BBQ$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/BBQ.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Jacuzzy$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Jacuzzy.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Wifi$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Wifi.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$PingPong$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/PingPong.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$CarPark$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/CarPark.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Guard$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Guard.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$PoolHeating$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/PoolHeating.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$IndoorPool$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/IndoorPool.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$BabyBed$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/BabyBed.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Terrace$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/icons/Terrace.jsx [client] (ecmascript)");
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
;
;
;
;
;
;
const RigelFeatures = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "services section-padding p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Özellikler"
                    }, void 0, false, {
                        fileName: "[project]/src/rigel/features/index.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/rigel/features/index.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-sm-12 col-md-6 sm-mb30 sm-pl50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$TenPeople$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "10 Kişilik"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$PrivatePool$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Havuz"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$FivePlusOne$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "5+1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4 mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Bilardo$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Bilardo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4 mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$BBQ$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "BBQ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-4 mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Jacuzzy$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                title: "Jakuzi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/features/index.jsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/rigel/features/index.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/rigel/features/index.jsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-sm-12 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row pl-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-sm-12 col-md-6 sm-mb30 sm-pl50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row",
                                            style: {
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Otopark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Smart TV - Uydu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Güvenlik Görevlisi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Klima"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Masa Tenisi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Full Mobilyalı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Havuz Isıtma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Beyaz Eşyalı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Saç Kurutma Makinesi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Ütü"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Deniz Manzaralı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-sm-12 col-md-6 sm-pl50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row ",
                                            style: {
                                                flexDirection: "column"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "İnternet Bağlantısı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Bebek Yatağı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Kapalı Havuz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Teras"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Havuz - Bahçe Bakımı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Oyun Alanı"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Duşakabin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Alarm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Bahçeli"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Çocuk Havuzu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "item ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$icons$2f$Check$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: "Ebeveyn Banyosu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/rigel/features/index.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/features/index.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/rigel/features/index.jsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/features/index.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/rigel/features/index.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/rigel/features/index.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/rigel/features/index.jsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/rigel/features/index.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/rigel/features/index.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = RigelFeatures;
const __TURBOPACK__default__export__ = RigelFeatures;
var _c;
__turbopack_refresh__.register(_c, "RigelFeatures");

})()),
"[project]/src/rigel/skills/skillsProgress.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
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
const __TURBOPACK__default__export__ = skillsProgress;

})()),
"[project]/src/rigel/skills/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$skills$2f$skillsProgress$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/rigel/skills/skillsProgress.jsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
const RigelSkills = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$skills$2f$skillsProgress$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"])();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "skills-sec section-padding pt-100",
        style: {
            backgroundColor: "#181818"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6 valign  md-mb50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Merkez"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "65%",
                                                "data-name": "1 km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 19,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Mini Market"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "45%",
                                                "data-name": "300 m"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Otobüs Durakları"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "55%",
                                                "data-name": "700 m"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Dalaman Havalimanı"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "80%",
                                                "data-name": "120 km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/rigel/skills/index.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/rigel/skills/index.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Hastane"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "65%",
                                                "data-name": "1 km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Deniz (Plaj)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "65%",
                                                "data-name": "1 km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Restaurant"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "45%",
                                                "data-name": "300 m"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: "Antalya Havalimanı"
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progres custom-font",
                                                "data-value": "100%",
                                                "data-name": "220 km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/skills/index.jsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/rigel/skills/index.jsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/rigel/skills/index.jsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/rigel/skills/index.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/rigel/skills/index.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/rigel/skills/index.jsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/rigel/skills/index.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/rigel/skills/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(RigelSkills, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RigelSkills;
const __TURBOPACK__default__export__ = RigelSkills;
var _c;
__turbopack_refresh__.register(_c, "RigelSkills");

})()),
"[project]/src/rigel/RigelPage.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$initIsotope$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/common/initIsotope.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$features$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/rigel/features/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$skills$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/rigel/skills/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$propertyDetails$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/rigel/propertyDetails/index.jsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const RigelPage = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setTimeout(()=>{
            if (window.Isotope) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$common$2f$initIsotope$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])();
        }, 1000);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "works filter-img section-padding",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row gallery",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-6 items mt-0 interior theaters residential",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-head mb-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Mekanlar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/rigel/RigelPage.jsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rigel/dayViews",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 items theaters",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    src: "/assets/img/slid/rigel/dayViews/1.jpeg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 29,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cont vis",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: "Gündüz Görünümleri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 32,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/rigel/RigelPage.jsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rigel/nightViews",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 items residential interior",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    src: "/assets/img/slid/rigel/nightViews/1.jpeg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 43,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cont vis",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: "Gece Görünümleri"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 49,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/rigel/RigelPage.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rigel/insideViews",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 items interior",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    src: "/assets/img/slid/rigel/indoor/2.jpeg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cont vis",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: "İç Mekan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/rigel/RigelPage.jsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rigel/activities",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-6 items residential",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    alt: "",
                                                    src: "/assets/img/slid/rigel/activities/2.jpeg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cont vis",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: "Aktiviteler"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/rigel/RigelPage.jsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/rigel/RigelPage.jsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/rigel/RigelPage.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/rigel/RigelPage.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/rigel/RigelPage.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$skills$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/rigel/RigelPage.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$features$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/rigel/RigelPage.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$propertyDetails$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/rigel/RigelPage.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/rigel/RigelPage.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(RigelPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RigelPage;
const __TURBOPACK__default__export__ = RigelPage;
var _c;
__turbopack_refresh__.register(_c, "RigelPage");

})()),
"[project]/src/pages/rigel/index.jsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* eslint-disable @next/next/no-img-element */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Work$2d$header$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Work-header/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$MainLayout$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout/MainLayout.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$RigelPage$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/rigel/RigelPage.jsx [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const Rigel = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        document.querySelector("body").classList.add("index3");
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2f$MainLayout$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Work$2d$header$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                title: {
                    first: "VİLLA RIGEL"
                },
                // title = "text"
                content: "Villamızın giriş katında deniz ve doğa manzaralı Amerikan mutfak ve salon, üst katlarında beş adet suit yatak odası bulunmakta olup, ebeveyn odalarımızdan ikisinde yer alan jakuzide manzaraya karşı keyif yapabileceksiniz.  Hayallerinizin ötesinde bir tatil imkanı sunmakta olan villamız, bodrum katta spor salonu (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve ısıtmalı kapalı havuz ile bütün bir yılın yorgunluğunu üzerinizden atmanız için, kusursuz bir şekilde tasarlanmıştır.  4 adet Suit Aile ve 1 adet Suit Genç yatak odamız bulunmaktadır. Aile odalarımızın her birinde Çift kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Klima, Jakuzi, Banyo, TV ve balkon bulunmaktadır.  Genç odamızda ise 2 Adet tek kişilik yatak, Elbise dolabı, Komodin, Makyaj masası, Bebek yatağı, Klima, Banyo, TV ve balkon bulunmaktadır. Villamızın 1. katında 1 aile odası ve 1 genç odası bulunmaktadır. 2. katında ise 1 aile odası ve 1 genç odası bulunmaktadır. Aile odalarımızın bir tanesi de teras katındadır.   Villanın zemin katında spor odası (bilardo, masa tenisi, koşu bandı, kondisyon bisikleti) ve oturma alanı bulunmaktadır. Banyo mevcuttur. Villamızın Havuz Ebatları; En: 4,50 m Boy: 6,30 m Derinlik: 155-160 cm"
            }, void 0, false, {
                fileName: "[project]/src/pages/rigel/index.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$rigel$2f$RigelPage$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/rigel/index.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/rigel/index.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(Rigel, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Rigel;
const __TURBOPACK__default__export__ = Rigel;
var _c;
__turbopack_refresh__.register(_c, "Rigel");

})()),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/rigel/index.jsx [client] (ecmascript)\" } [client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const PAGE_PATH = "/rigel";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/rigel/index.jsx [client] (ecmascript)");
    }
]);
if (module.hot) {
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}

}.call(this) }),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0635a7._.js.map