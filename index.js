
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const mongoose = require('mongoose');
 const Greetings = require('./greetings');


 // const connectdb = require('./models/connections');
 // connectdb()

 const nameSchemaModel = require('./models/nameSchemaModel');

 const greetings = Greetings(nameSchemaModel);

  const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
// parse aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse aplication/json
app.use(bodyParser.json());

app.use(session({secret: 'keybaord cat', cookie: { maxAge: 60000 * 30}}))
app.use(flash())

 app.get('/', function(req, res){res.redirect('/greet')})
 app.get('/greet', greetings.addOn);
 app.post('/greet', greetings.add);
 app.get('/peopleGreeted', greetings.index)


  const port = process.env.PORT || 3007;

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

  app.listen(port , function(){
    console.log('app super ready to go:' + port);
  });
