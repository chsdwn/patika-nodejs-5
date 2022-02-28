const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url || ''

  switch (url.toLowerCase()) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<h2>index</h2>')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<h2>about</h2>')
      break
    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<h2>contact</h2>')
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write('<h2>404 Not Found</h2>')
  }

  res.end()
})

const port = 5000
server.listen(port, () => console.log(`Listening on port ${port}`))
