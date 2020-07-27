const express = require('express');
const engine = require('consolidate');
const app = express();

const port = 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

app.engine('hbs', engine.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.listen(port, () => {
  console.log("Server running in port: " + port);
});