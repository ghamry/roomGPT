/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com", "pbxt.replicate.delivery"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  //   async redirects() {
  //     return [
  //       {
  //         source: "/github",
  //         destination: "https://github.com/Nutlope/roomGPT",
  //         permanent: false,
  //       },
  //       {
  //         source: "/deploy",
  //         destination: "https://vercel.com/templates/next.js/room-GPT",
  //         permanent: false,
  //       },
  //     ];
  //   },
};