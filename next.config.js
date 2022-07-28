/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'upload.wikimedia.org', 
      'static.xx.fbcdn.net', 
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'randomuser.me',
      'images.unsplash.com'
    ],
  }
}

module.exports = nextConfig
