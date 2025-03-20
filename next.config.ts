import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        // if (!isServer) {
        //     config.resolve.fallback = {
        //         fs: false,
        //     };
        // }
        return config;
    }
}