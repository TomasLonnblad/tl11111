
/** @type {import('next').NextConfig} */


const nextConfig = {
  basePath: isProd ? '/nextjs-blog-deployment' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
 },


export default nextConfig;
/**
 * @type {import('next').NextConfig}
 */
