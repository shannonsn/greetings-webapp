
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

 const Greetings = require('./greetings');

 const greetings = Greetings();

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

 // app.get('/', greetings.index)
 app.get('/', greetings.addOn);
 app.post('/', greetings.add);

  const port = 3007;

  app.listen(process.env.PORT || port , function(){
    console.log('app super ready to go:' + port);
  });
