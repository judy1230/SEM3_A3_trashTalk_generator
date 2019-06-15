//require related modules used in the proj
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser') 
const generateTrashTalk = require('./generateTrashTalk')
const app = express()
const port = 1250

//set template engine
app.engine('handlebars', exphbs({ defaultLayout:'main'}))
app.set('view engine', 'handlebars')


//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))


//localhost:2150
app.get('/', (req, res) => {
	res.render('index')
})
app.post('/', (req, res) => {
	console.log('req.body', req.body)
  //res.render('index')
	const showTrashTalk = generateTrashTalk(req.body)
	 console.log('trashTalk', showTrashTalk)
	//const options = req.body
	res.render('index', { showTrashTalk: showTrashTalk })
})

app.listen(port, () => {
	console.log(`This Express server is running on http://localhost:${port}`)
})