/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: [
              {
                  loader: "@svgr/webpack",
                  options: {
                      svgo: false, // Optimization caused bugs with some of my SVGs
                  },
              },
          ],
    });

    return config
  },
};
