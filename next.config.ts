import os from "node:os";
import type { NextConfig } from "next";

const lanOrigins = Object.values(os.networkInterfaces())
  .flat()
  .filter((item): item is os.NetworkInterfaceInfo => {
    if (!item || item.internal) {
      return false;
    }

    return item.family === "IPv4" || item.family === 4;
  })
  .map((item) => item.address);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: lanOrigins,
};

export default nextConfig;
