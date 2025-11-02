const r = (e) => ({
  "/api": e.VITE_MLRUN_API_URL ? {
    target: e.VITE_MLRUN_API_URL,
    changeOrigin: !0,
    headers: {
      Connection: "keep-alive",
      "x-v3io-session-key": e.VITE_MLRUN_V3IO_ACCESS_KEY,
      "x-remote-user": "admin"
    }
  } : void 0,
  "/nuclio": e.VITE_NUCLIO_API_URL ? {
    target: e.VITE_NUCLIO_API_URL,
    changeOrigin: !0,
    rewrite: (i) => i.replace(/^\/nuclio/, "")
  } : void 0,
  "/iguazio": e.VITE_IGUAZIO_API_URL ? {
    target: e.VITE_IGUAZIO_API_URL,
    changeOrigin: !0,
    rewrite: (i) => i.replace(/^\/iguazio/, "")
  } : void 0,
  "/function-catalog": e.VITE_FUNCTION_CATALOG_URL ? {
    target: e.VITE_FUNCTION_CATALOG_URL,
    changeOrigin: !0,
    rewrite: (i) => i.replace(/^\/function-catalog/, "")
  } : void 0
});
export {
  r as mlrunProxyConfig
};
//# sourceMappingURL=proxyServerConfig.util.mjs.map
