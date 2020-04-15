const express = require('express')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
    const name = request.query.name || "Tran Tuan Huy (1760327)"
    console.log(request.query)
    response.send('Hello Node.js Server! of ' + name)
}

const server = express()
server.get('/', requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})