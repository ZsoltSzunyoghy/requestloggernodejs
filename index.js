const express = require('express');
const app = express();

const bodyparser1 = require('body-parser');
const bodyparser = bodyparser1();

const morgan = require('morgan');
const morganbody = require('morgan-body');


app.use(morgan('combined'));
app.use(bodyparser);
morganbody(app, {logAllReqHeader:true});

// parse the body using own middleware:
/*app.use((req, res, next) => {
    console.log(req.body);
    next();
  });*/

app.get('/', function (req, res) {
  res.send('Hello ddd World!');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});