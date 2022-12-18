const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ 
        /* options */
        resolvers: [ElementPlusResolver()],
      }),
      // require('unplugin-auto-import/webpack')({ 
      //   /* options */ 
      //   resolvers: [ElementPlusResolver()],
      // }),
    ],
  },
})
