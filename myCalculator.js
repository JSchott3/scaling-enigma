// process.argv is the array that contains command line arguments
// print all arguments using forEach

// console.log(process.argv[2])
// console.log(process.argv[3])
var http = require('http');

http.createServer(function (req, res) {
    const value=process.argv[2]*process.argv[3]
    console.log(value)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`${process.argv} = ${value}.`); 
    // res.end(value + ' = ' + value + '.');    
}).listen(8080);
// process.argv.forEach((val, index) => {
//     console.log(4*5)
//   })
