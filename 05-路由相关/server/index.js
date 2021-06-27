// 热加载的自定义 Web 服务器
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3333

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

// Listen the server
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})