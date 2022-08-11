const path = require('path')
let src_path = 'resources/js/';

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  css: {},
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, src_path),
        '@store': path.resolve(__dirname, src_path + 'store/'),
        '@views': path.resolve(__dirname, src_path + 'views/'),
        '@comp': path.resolve(__dirname, src_path + 'components/'),
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
  },
}
