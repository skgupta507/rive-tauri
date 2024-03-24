/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;

// import withPWA from "next-pwa";
// const withPwaConfig = {
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// };

// export default withPWA(withPwaConfig);
