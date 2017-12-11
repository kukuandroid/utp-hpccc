const store = require('../store')

module.exports = (app) => {
  app.post('/services/', (req, res) => {
    store
      .submitService({
        stdName: req.body.name,
        stdID: req.body.stdID,
        stdEmail: req.body.email,
        stdPrg: req.body.programme,
        svcType: req.body.type,
        svcID: req.body.svcID,
      })
      .then(function(show) {
        res.status(200).json(show);
      })
  })
}
