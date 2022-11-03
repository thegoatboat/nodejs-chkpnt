const http = require("http");

const Server = http.createServer (function(req,res){
    res.write('<h1>Hello World!!!</h1>');
    res.end()
})
Server.listen(3000,(err)=>{
    err?console.log(err):console.log('ur linked to server 3000')
})