const Vue = require('vue')

const app = new Vue({
  template: '<div>12323</div>'
})

// vue-server-renderer
const renderer = require('vue-server-renderer').createRenderer()

// renderer.renderToString(app, (err, html) => {
//   if (err) return console.error(err)
//   console.log(html)
// })

renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => console.err(err))