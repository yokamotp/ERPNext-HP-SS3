// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const withMDX = createMDX({
  options: {
    // remark: GFMだけでOK
    remarkPlugins: [remarkGfm],
    // rehype: slug → autolink の順で
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },

  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  experimental: { mdxRs: true },
};

export default withMDX(nextConfig);
