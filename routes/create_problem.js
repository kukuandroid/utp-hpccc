const store = require('../store')
var api_key = 'key-06db5079e118a6598e8bae3dd64fd449';
var domain = 'sandbox53669f67889843e99161f77d546adcca.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });


module.exports = (app) => {
  app.post('/problem', (req, res) => {
    store
      .createProblem({
        type: req.body.type,
        detail: req.body.detail,
        refNo: req.body.refNo,
        date: req.body.date
      })
      .then(() => {
        var data = {
          from: 'adlina.utp@gmail.com',
          to: 'khairulfilhan94@gmail.com',
          subject: 'HPCCC Reporting Service',
          text: req.body.type + ', ' + 'Reference Number : ' + req.body.refNo
        };
        mailgun.messages().send(data, function(error, body) {
          console.log(body);
          res.send(body);
        });
        res.status(200).json(show);
      })
  })
}
