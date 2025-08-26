// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   eslint: {
//     // ✅ Don’t fail production builds because of ESLint errors in generated files
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     // ✅ Fail the build on type errors (recommended for production safety)
//     ignoreBuildErrors: false,
//   },
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Don’t fail production builds because of ESLint errors in generated files
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Fail the build on type errors (recommended for production safety)
    ignoreBuildErrors: false,
  },
  reactStrictMode: true, // Recommended for catching errors early
};

export default nextConfig;


