const isPokiBuild = process.env.POKI_BUILD === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Poki serves builds from a versioned sub-path, so assets must resolve relatively.
  assetPrefix: isPokiBuild ? './' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
