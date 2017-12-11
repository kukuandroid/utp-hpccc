const store = require('../store')
var api_key = 'key-06db5079e118a6598e8bae3dd64fd449';
var domain = 'sandbox53669f67889843e99161f77d546adcca.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});




module.exports = (app) => {
  app.get('/email', (req, res) => {

var data = {
  from: 'adlina.utp@gmail.com',
  to: 'adlina.utp@gmail.com',
  subject: 'HPCCC Reporting Service',
  text: 'Please view the report'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
  res.send(body);
});

    });
 
}
