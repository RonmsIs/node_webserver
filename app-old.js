
const http = require('http');



http.createServer((request, response) => {

   
    response.writeHead(200, {'Content-Type':'application/json' });

    const persona ={
        id: 1,
        nombre: 'Ismael'
    }

    response.write(JSON.stringify(persona));

    response.end();


})
.listen(8080);

console.log('Escuchando el puerto', 8080);