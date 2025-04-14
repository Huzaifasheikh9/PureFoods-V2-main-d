// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export"
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // 👈 This disables image optimization for export builds
    },
  };
  
  export default nextConfig;
  