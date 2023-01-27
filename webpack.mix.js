let mix = require('laravel-mix')
const path = require('path')


mix.js('Vue/VUEsite.js', 'wwwroot/js/vue-site.js').vue() // Compile our Vue entry point
.styles('Vue/css', 'wwwroot/css/site.css') // Compile all files to app.css

mix.webpackConfig({
    resolve: {
      alias: {
        "@" : path.resolve(__dirname, 'Vue/components')
      }
    }
  })
