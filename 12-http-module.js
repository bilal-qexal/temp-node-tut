const http=require('http');
let server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("welcome to home page");
    }
     if(req.url=='/about'){
        res.end('welcome to about page')
        
    }
    res.end(`
        Oops!
        <h1>current page dosn't exist!</h1>
        <a href="/">back</a>
        `)
    
})
server.listen(3000,(()=>{
console.log("Server is running on port:3000")
}))