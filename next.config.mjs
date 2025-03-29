/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  webpack(config) {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
