import http from 'http'


const server = http.createServer((req, res) => {

    res.writeHead(200, "Success")
    res.end('Hello')
})

server.listen(3000, console.log("Port is running"))