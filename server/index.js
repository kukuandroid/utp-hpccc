const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const app = express()
var cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

require('./main.js')(app);

app.listen(3000, () => {
	console.log(chalk.white.bgGreen.bold('[Server] running on http://localhost:3000'));
})

app.get('/',(req,res) => {
	res.send('HPCCC Mobile')
}) 