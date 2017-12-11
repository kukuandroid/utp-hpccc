const store = require('../store')

module.exports = (app) => {
  app.post('/services/access', (req, res) => {
    console.log(req.body)
    store
      .submitAccess({
        std_name: req.body.std_name,
      std_id: req.body.std_id,
      std_email: req.body.std_email,
      std_programme: req.body.std_programme,
      prj_title: req.body.prj_title,
      prj_abstract: req.body.prj_abstract,
      prj_workplace: req.body.prj_workplace,
      prj_version: req.body.prj_version,
      prj_module: req.body.prj_module,
      prj_large: req.body.prj_large,
      prj_core: req.body.prj_core,
      prj_hours: req.body.prj_hours,
      sv_name: req.body.sv_name,
      sv_email: req.body.sv_email,
      })
      .then(function(show) {
        res.status(200).json(show);
      })
  })
}
