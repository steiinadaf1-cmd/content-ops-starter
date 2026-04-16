/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://123sayangsemua.space/register?referral_code=vipscatter',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

