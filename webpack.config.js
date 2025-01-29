const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/assets/')
  .setPublicPath('/assets')
  .addEntry('app', './assets/app.js')
  .autoProvidejQuery()
  .enableSingleRuntimeChunk()
  .enableSassLoader()
  .configureFilenames({
    css: 'css/[name].min.css',
  })
  .copyFiles({
    from: './assets/fonts',
    to: 'fonts/[name].[ext]',
  })
  .copyFiles({
    from: './assets/images',
    to: 'images/[path][name].[ext]',
  })
  .copyFiles({
    from: './assets/js',
    to: 'js/[path][name].[ext]',
  })
  .copyFiles({
    from: './assets/vendor',
    to: 'vendor/[path][name].[ext]',
  })
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications();

module.exports = Encore.getWebpackConfig();