const http=require('http')
const server=http.createServer((req,res)=>
{ 
    if(req.url==="/")
    res.end("hello this is my first node page")
    if(req.url==="/about")
    res.end("hello this is my second node page")
    res.end(`<h1>OOPS </h1>
        <p>THE PAGE YOU ARE LOOKING FOR IS NOT AVAILABLE</p>
        <a href="/">BACK TO HOME PAGE</a>`)
    
})
server.listen(5000)