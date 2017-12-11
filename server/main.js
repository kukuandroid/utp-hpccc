module.exports = (app) => {
  require('../routes/create_problem.js')(app);
  require('../routes/submit_form.js')(app);
    require('../routes/submit_email.js')(app);
    require('../routes/login.js')(app);
    require('../routes/submit_service.js')(app);
    require('../routes/submit_access.js')(app);
    require('../routes/submit_ansys.js')(app);
    require('../routes/submit_cluster.js')(app);
    require('../routes/submit_dell.js')(app);
    require('../routes/submit_others.js')(app);
    require('../routes/submit_sgi.js')(app);
    require('../routes/submit_starccm.js')(app);
    require('../routes/submit_vm.js')(app);
    require('../routes/submit_web.js')(app);

};
