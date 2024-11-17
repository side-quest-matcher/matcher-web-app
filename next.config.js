/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust this value based on your needs
    },
  },
}

module.exports = nextConfig 