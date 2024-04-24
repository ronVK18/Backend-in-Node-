const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("Roanak Sharma")

})
server.listen(3000)