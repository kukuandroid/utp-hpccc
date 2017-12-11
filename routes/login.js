const store = require('../store')

module.exports = (app) => {
	app.get('/login/:name&:pwd', (req, res) => {
  store
    .login({
    	username : req.params.name,
    	password : req.params.pwd,
    })
     .then(function(show) {
    res.status(200).json(show);
  })
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