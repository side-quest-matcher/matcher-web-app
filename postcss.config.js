/** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     "postcss-import": {},
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

// export default config;
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compilerOptions: {
    "skipLibCheck": true,
  }
};
