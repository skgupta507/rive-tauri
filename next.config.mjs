/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

let internalHost = null;

if (!isProd) {
  const { internalIpV4 } = await import("internal-ip");
  internalHost = await internalIpV4();
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: isProd ? null : `http://${internalHost}:3000`,
};

export default nextConfig;

// import withPWA from "next-pwa";
// const withPwaConfig = {
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// };

// export default withPWA(withPwaConfig);
