const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  flexsearch: true,
  staticImage: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Nextra との互換性のため
  experimental: {
    esmExternals: false
  }
};

module.exports = withNextra(nextConfig);
