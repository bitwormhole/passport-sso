// vue.config.js

const theWebAppTitle = 'Passport Cloud'

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    proxy: 'http://localhost:12209',
    port: 12200,
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = theWebAppTitle
      return args
    })
  },
})
