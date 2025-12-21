import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'next-intl'],
    optimizeCss: false,
  },

  // Compression
  compress: true,

  // Bundle analysis (optional - remove for production)
  // Uncomment to analyze bundles: webpack: (config) => {
  //   if (process.env.ANALYZE) {
  //     const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  //     config.plugins.push(
  //       new BundleAnalyzerPlugin({
  //         analyzerMode: 'static',
  //         reportFilename: './analyze/client.html',
  //       })
  //     );
  //   }
  //   return config;
  // },
};
 
export default withNextIntl(nextConfig);