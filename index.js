const http = require('http')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
    response.writeHead(200)
    console.log(request.url)
    response.end('Hello Node.js Server! of Tran Tuan Huy (1760327)')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})