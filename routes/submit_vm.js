const store = require('../store')
var api_key = 'key-06db5079e118a6598e8bae3dd64fd449';
var domain = 'sandbox53669f67889843e99161f77d546adcca.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

module.exports = (app) => {
  app.post('/services/vm', (req, res) => {
    store
      .submitVM({
        stdName: req.body.stdName,
        stdID: req.body.stdID,
        stdEmail: req.body.stdEmail,
        stdPrg: req.body.stdPrg,
        prjTitle: req.body.prjTitle,
        prjDesc: req.body.prjDesc,
        sv_name: req.body.sv_name,
        prj_date: req.body.prj_date,
        sv_name: req.body.sv_name,
        sv_email: req.body.sv_email,
        vm_core: req.body.vm_core,
        vm_ram: req.body.vm_ram,
        vm_hd: req.body.vm_hd,
      })
      .then(function(show) {
        var data = {
          from: 'adlina.utp@gmail.com',
          to: 'khairulfilhan94@gmail.com',
          subject: 'HPCCC Reporting Service',
          text: req.body.svcType +', ' + 'from student : ' + req.body.stdName +",Email : " + req.body.stdEmail
        };
        mailgun.messages().send(data, function(error, body) {
          console.log(body);
          res.send(body);
        });
        res.status(200).json(show);
      })
  })
}
