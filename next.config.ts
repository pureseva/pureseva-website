import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The "Sponsor a Meal" flow was renamed to "Gift a Meal".
      // Keep old bookmarks and shared links working.
      { source: "/sponsor", destination: "/gift", permanent: true },
    ];
  },
};

export default nextConfig;
