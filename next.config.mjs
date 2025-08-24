// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('next').NextConfig} */
const base = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'], // ← 追加
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});

export default withMDX(base);
