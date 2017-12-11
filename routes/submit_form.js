const store = require('../store')

module.exports = (app) => {
	app.post('/form/:type', (req, res) => {
  store
    .submitForm({
    	type : req.params.type,
    	data : req.body.data,
    })
    .then(() => res.sendStatus(200))
})
}


//   store
//     .submitForm({
//     	name : req.body.std_name,
//     	id :  req.body.id,
//     	email  : req.body.email,
//     	programme :  req.body.programme,
//     	proTitle :  req.body.proTitle,
//     	proDesc :  req.body.proTitle,
//     	proDate :  req.body.proDate,
//     	svName :  req.body.svName,
//     	svEmail :  req.body.svEmail,
//     	formCategories : req.body.formCategories
//     })
//     .then(() => res.sendStatus(200))
// })