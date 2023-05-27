module.exports = {
  mode: "jit",
  purge: [
    // './public/**/*.html',
    './src/**/*.{html,svelte,js,ts}',

  ],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js,svelte,ts}"],
  // mode: "jit",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
