const express = require('express');
const app = express();

const bodyparser1 = require('body-parser');
const bodyparser = bodyparser1();

const morgan = require('morgan');
const morganbody = require('morgan-body');


app.use(morgan('combined'));
app.use(bodyparser);
morganbody(app, {logAllReqHeader:true,logAllResHeader:true, maxBodyLength:10000});

// parse the body using own middleware:
/*app.use((req, res, next) => {
    console.log(req.body);
    next();
  });*/

app.get('/', function (req, res) {
  res.send('Hello ddd World!');
});

app.post('/learning/oauth-api/rest/v1/token', function (req, res) {
	res.json({
    "access_token": "XXXXXXXX",
    "expires_in": 1800,
    "token_type": "Bearer"
});
});

app.head('/learning/odatav4/public/admin/learningevent-service/v1', function (req, res) {
	res.json({});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});
