import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/** @type {import('next').NextConfig} */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'example.com', // ✅ Replace with your actual image domain
				port: '',
				pathname: '/images/**', // ✅ Allow all images under /images/
			},
		],
	},
};

export default nextConfig;
