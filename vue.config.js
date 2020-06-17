// vue.config.js
module.exports = {
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // Provide path to the file with resources
            /* resources: './path/to/resources.scss', */

            // Or array of paths
            resources: ['./resources/sass/_variables.scss', './resources/sass/app.scss']
          })
          .end()
      })
    }
  }
