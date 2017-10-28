const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.get('/p/:id', (req, res) => {
      console.log('server play')
      app.render(req, res, '/play', { id: req.params.id })
    })
    server.get('/b/:start', (req, res) => {
      console.log('server browse')
      app.render(req, res, '/browse', { start: req.params.start })
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
