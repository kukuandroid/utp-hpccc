const knex = require('knex')(require('./knex/knexfile'))

module.exports = {
  login({ username, password }) {
    return knex.select('username', 'firstname').from('ost_staff').where({
      username: username,
      passwd: password
    })
  },
  submitVM({ stdName, stdID, stdEmail, stdPrg, prjTitle, prjDesc, prj_date, sv_name, sv_email, vm_core, vm_ram, vm_hd }) {
    return knex('ost_services_vm').insert({
      std_name: stdName,
      std_id: stdID,
      std_email: stdEmail,
      std_programme: stdPrg,
      prj_title: prjTitle,
      prj_desc: prjDesc,
      prj_date: prj_date,
      sv_name: sv_name,
      sv_email: sv_email,
      vm_core: vm_core,
      vm_ram: vm_ram,
      vm_hdd: vm_hd

    })
  },
  submitAccess({ stdName, stdID, stdEmail, stdPrg, prjTitle, prjDesc, prj_date, sv_name, sv_email, vm_core, vm_ram, vm_hd }) {
    return knex('ost_service_access').insert({
      std_name: stdName,
      std_id: stdID,
      std_email: stdEmail,
      std_programme: stdPrg,
      prj_title: prjTitle,
      prj_desc: prjDesc,
      prj_date: prj_date,
      sv_name: sv_name,
      sv_email: sv_email,
      vm_core: vm_core,
      vm_ram: vm_ram,
      vm_hdd: vm_hd

    })
  },
  submitAccess({ std_name, std_id, std_email, std_programme, prj_title, prj_abstract, prj_version, prj_module, prj_large, prj_core, prj_hours, sv_name, sv_email }) {
    return knex('ost_service_ansys').insert({
      std_name: std_name,
      std_id: std_id,
      std_email: std_email,
      std_programme: std_programme,
      prj_title: prj_title,
      prj_abstract: prj_abstract,
      prj_workplace: prj_workplace,
      prj_version: prj_version,
      prj_module: prj_module,
      prj_large: prj_large,
      prj_core: prj_core,
      prj_hours: prj_hours,
      sv_name: sv_name,
      sv_email: sv_email,
    })
  },

  createProblem({ type, detail,refNo,date }) {
    return knex('ost_problem').insert({
      type,
      detail,
      refNo,
      date
    })
  },
  submitForm({ type, data }) {
    console.log('submitForm', type);
    if (type == 1) {
      return knex.transaction(function(t) {
          return knex("ost_mobile_services")
            .transacting(t)
            .insert({ user_id: data.user_id, form_category: type })
            .then(function(response) {
              return knex('ost_supervisor')
                .transacting(t)
                .insert({ name: data.svName, email: data.svEmail }).then(function(response) {
                  return knex('ost_project')
                    .transacting(t)
                    .insert({ title: data.proTitle, desc: data.proDesc, 'date': data.proDate }).then(function(response) {
                      return knex('ost_student_details')
                        .transacting(t)
                        .insert({ name: data.stdName, matrix_id: data.stdID, programme: data.stdProgramme })
                    })
                    .then(t.commit)
                    .catch(t.rollback)
                })
                .then(t.commit)
                .catch(t.rollback)
            })
            .then(t.commit)
            .catch(t.rollback)
        })
        .then(function() {
          // transaction suceeded, data written
        })
        .catch(function() {
          // transaction failed, data rolled back
        });


    } else if (type == 2) {

    } else if (type == 3) {

    } else if (type == 4) {

    } else {
      console.log('FAILED');
    }

  }

}
