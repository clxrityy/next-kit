import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Fixes npm packages that depend on `fs` module
        // if (!isServer) {
        //     config.resolve.fallback = {
        //         fs: false,
        //     };
        // }
        return config;
    }
}

export default nextConfig;