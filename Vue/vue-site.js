window.axios = require('axios')
window.Vue = require('vue')
const app = Vue.createApp({
  });
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key =>
    app.component(
        key
            .split('/')
            .pop()
            .split('.')[0],
        files(key).default,
    ),
)
  
app.mount('#app');
