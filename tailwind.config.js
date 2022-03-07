module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '720px',
      'lg': '1024px',
    },
    extend: {},
  },
};
