import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY || "";
const repoName = repository.split("/")[1] || "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const basePath =
  isGithubActions && repoName && !isUserOrOrgSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
