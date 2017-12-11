const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

require('./main.js')(app);

app.listen(7555, () => {
	console.log(chalk.white.bgGreen.bold('[Server] running on http://localhost:7555'));
})