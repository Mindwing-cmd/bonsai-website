/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bonsai-webdesign.de" }],
        destination: "https://www.bonsai-webdesign.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
