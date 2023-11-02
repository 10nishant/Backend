// Create a http server using node js

const http = require('http');

const{
    createFun, readFun, uodateFun, deleteFun} = require('./newModule');

    if (req.url == '/create'){
        res.write(createFun(10))
    } else if (req.url == '/read'){
        res.write(readFun())
    } else if (req.url == '/update'){
        res.updateFun(0, 100)
    } e


const server = http.createServer(function(req, res){
    console.log(req.method, req.url);

if(req.url == "/"){
    res.write("Request looks Good.")
}
else if(req.url == '/pizza'){
    res.write("Pizza is ready")
}
else{
    res.write("Request not supported")
}
    res.write("Request looks good.")
    res.end();
})

server.listen(5000, function(){
    console.log("server running on port 5000!");
})