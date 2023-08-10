const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'))

//controlador
app.get('/',  (req, res)=> {
  res.render('home',{
    nombre: 'Ismael',
    titulo: 'Curso Node'
  });
});

app.get('/generic',  (req, res)=> {
  res.render('generic',{
    nombre: 'Ismael',
    titulo: 'Curso Node'
  });
});

app.get('/elements',  (req, res)=> {
  res.render('elements',{
    nombre: 'Ismael',
    titulo: 'Curso Node'
  });
});


app.get('*',  (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
  });
  

app.listen(port, ()=> {
  console.log(`listening on port at http://localhost:${{port}}` );
})