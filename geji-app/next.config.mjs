/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env['GITHUB_ACTIONS'] ? "export": undefined, // needed to create static bundle for Github pages
    reactStrictMode: true,
    assetPrefix: process.env['GITHUB_ACTIONS'] ? '/geji/' : undefined,

    images: {
        unoptimized: process.env['GITHUB_ACTIONS'] ? true : false
      }
};

export default nextConfig;
