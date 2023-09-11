/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','tailwindui.com', 'res.cloudinary.com', 'images.unsplash.com'],
    },
    exclude: ['tailwindui']
}

module.exports = nextConfig
