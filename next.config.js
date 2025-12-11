const repoName = 'project-lumuno-waitlist'

const normalizeBasePath = (value = '') => {
  if (!value) return ''
  const withLeading = value.startsWith('/') ? value : `/${value}`
  return withLeading.endsWith('/') ? withLeading.slice(0, -1) : withLeading
}

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_PAGES ? repoName : '')
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static export in `out/` so GitHub Pages deploy scripts work.
  output: 'export',
  // Serve from the GitHub Pages project subpath.
  basePath: basePath || undefined,
  // Use basePath for GitHub Pages; fall back to relative for local file:// opens.
  assetPrefix: basePath || './',
  // Keep URLs compatible with static hosting (e.g. /about/ -> about/index.html).
  trailingSlash: true,
  // Disable image optimization for static export safety.
  images: { unoptimized: true },
}

module.exports = nextConfig
