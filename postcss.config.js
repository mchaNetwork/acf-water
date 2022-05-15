module.exports = {
  plugins: [
    require('postcss-advanced-variables')({
      importPaths: ['node_modules']
    }),
    require('postcss-nested')(),
    require('postcss-csso')(),
  ],
}
