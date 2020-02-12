const path = require('path')
let express = require('express')
let app = express()
let mainRouter = require('./mainRoutes')

// mainRouter.get('/', function (req, res) {
//   res.send('Hello World, My name is alfhisdgjkfkh')
// })

// mainRouter.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname, 'views', 'about.html'))
// })

app.use(mainRouter)

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
