/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require("@next/mdx")({});

module.exports = withMDX(withBundleAnalyzer(nextConfig));