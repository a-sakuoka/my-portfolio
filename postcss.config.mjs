/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ← これはOK
    autoprefixer: {},           // ← これを動かすためにインストールしました
  },
};

export default config;