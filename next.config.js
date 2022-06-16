/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'rosunviversitet.vercel.app',
            'media-app.timeweb-gate.appx.uz',
        ],
    },
}

module.exports = nextConfig
