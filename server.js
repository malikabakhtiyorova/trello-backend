const http2 = require('http')
const { PORT } = require('./config/config.js')
const app = require('./app/index.js')

const http2Server = http2.createServer(app)

http2Server.listen( PORT, () => {
  console.log(`http://localhost:` + PORT)
})
