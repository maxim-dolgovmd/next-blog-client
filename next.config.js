/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
      styledComponents: true
    },
  
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  }
  
module.exports = nextConfig
