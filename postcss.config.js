module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: true,
        grid: 'autoplace'
      },
      stage: 3,
      features: {
        'custom-properties': true,
        // 'nesting-rules': true
      }
    }
  }
}