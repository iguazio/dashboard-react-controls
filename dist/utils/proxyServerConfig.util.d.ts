export function mlrunProxyConfig(env: any): {
    '/api': {
        target: any;
        changeOrigin: boolean;
        headers: {
            Connection: string;
            'x-v3io-session-key': any;
            'x-remote-user': string;
        };
    };
    '/nuclio': {
        target: any;
        changeOrigin: boolean;
        rewrite: (path: any) => any;
    };
    '/iguazio': {
        target: any;
        changeOrigin: boolean;
        rewrite: (path: any) => any;
    };
    '/function-catalog': {
        target: any;
        changeOrigin: boolean;
        rewrite: (path: any) => any;
    };
};
//# sourceMappingURL=proxyServerConfig.util.d.ts.map