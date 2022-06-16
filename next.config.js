/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['site.bronme.uz', 'bronme.uz', 'rosunviversitet.vercel.app'],
    },
    experimental: { granularChunks: true },
}

module.exports = nextConfig
