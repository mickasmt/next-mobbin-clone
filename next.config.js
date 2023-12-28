/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/browse/ios/apps',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
