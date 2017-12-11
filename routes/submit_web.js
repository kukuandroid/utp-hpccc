const store = require('../store')

module.exports = (app) => {
  app.post('/services/access', (req, res) => {
    store
      .submitAccess({
        stdName: req.body.stdName,
        stdID: req.body.stdID,
        stdEmail: req.body.stdEmail,
        stdPrg: req.body.stdPrg,
        prjTitle: req.body.prjTitle,
        prjDesc: req.body.prjDesc,
        sv_name: req.body.sv_name,
        prj_date: req.body.prj_date,
        sv_email: req.body.sv_email,
        vm_core: req.body.vm_core,
        vm_ram: req.body.vm_ram,
        vm_hd: req.body.vm_hd,
      })
      .then(function(show) {
        res.status(200).json(show);
      })
  })
}
