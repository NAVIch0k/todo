const nextConfig = {
    output: 'standalone',
    reactStrictMode: false,
    swcMinify: true,
    env: {
      APP_URL: process.env.APP_URL
    }
  }
  
  module.exports = nextConfig