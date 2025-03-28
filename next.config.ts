import type { NextConfig } from "next";

import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@components': path.resolve(__dirname, 'components'),
            '@app': path.resolve(__dirname, 'app'),
            '@public': path.resolve(__dirname, 'public'),
            '@lib': path.resolve(__dirname, 'lib'),
            '@': path.resolve(__dirname)
        };
        return config;
    }
};

export default nextConfig;
