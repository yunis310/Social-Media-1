/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "cdn.pixabay.com",
      "firebasestorage.googleapis.com",
      "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
      "cloudflare-ipfs.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
