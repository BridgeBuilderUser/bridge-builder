/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
          {
            protocol: "http",
            hostname: "**",
          },
          {
            protocol: 'http',
            hostname: "localhost"
          }
        ],
      },
    exclude: ['tailwindui']
}

module.exports = nextConfig
