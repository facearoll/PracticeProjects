const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === "/"){
        res.end("Welcome to our homepage")
    }
    if(req.url === "/about"){
        res.end("Here is our short history")
    }
    res.end(
        `
        <h1>Oops</h1>
        <p> We cant seem to find the page that you are looking for</p 
        <a href="/">back home </a>
        `
    )
})

server.listen(5000)