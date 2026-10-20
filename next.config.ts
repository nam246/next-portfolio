import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

export default withNextIntl(withMDX(nextConfig));
