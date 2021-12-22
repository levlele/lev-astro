module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'mono': 'Fira Code',
    }
  }
};