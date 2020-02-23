const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const login = require('./login');

const port = 3000;

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/', (req, res) => {
  const options = req.body;
  let authenticate = login(options);
  console.log(options);

  if (options.email === '') {
    res.render('index', { emailEmpty: options })
  }
  else {
    if (authenticate.status === 'correct') {
      res.render('welcome', { loginSuccess: authenticate.name, options });
    }
    else if (authenticate.status === 'wrong') {
      res.render('index', { passwordWrong: authenticate.status, options })
    }
    else {
      res.render('index', { usernameWrong: authenticate.status, options });
    }
  }

})

app.listen(port, () => {
  console.log(`The server is listen on http:localhost:${port}`);
})