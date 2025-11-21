/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Generate a fully static build suitable for cPanel hosting
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
