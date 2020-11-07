const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port',4000); // definicion de puerto
app.set('views',path.join(__dirname,'views')); // definicion de ruta de las vistas
app.set('view engine','ejs'); // definicion de motor de plantilla ejs
// middleware

// routes
app.use(require('./routes/index'));
// static files
// listening the server


app.listen(app.get('port'),()=>{
	console.log('Server on port',app.get('port'));
}
);

console.log('Server working')
