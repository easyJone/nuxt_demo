const Vue = require('vue')
const server = require('express')()

// express响应
server.get('/', (req, res) => {
  // 1.创建vue实例
  const app = new Vue({
    template: `<div>${req.url}</div>`
  })
  // 2.创建renderer
  // vue-server-renderer
  const renderer = require('vue-server-renderer').createRenderer()

  // 3.渲染vue实例
  renderer.renderToString(app).then(html => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        ${html}
      </body>
    </html>
    `)
  }).catch(err => console.err(err))

})

server.listen(3001, () => console.log('开始监听3001端口'))