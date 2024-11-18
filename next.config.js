/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust this value based on your needs
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 