/** @type {import('next').NextConfig} */
const nextConfig = {
    // 외부 이미지 사용시 도메인 허용해주어야함. (https://nextjs.org/docs/app/building-your-application/optimizing/images#remote-images)
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 's3.amazonaws.com',
    //       port: '',
    //       pathname: '/my-bucket/**',
    //     },
    //   ],
    // },
  }

module.exports = nextConfig
