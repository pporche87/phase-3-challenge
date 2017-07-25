const express = require('express')
const app = express()
const api = require('./api/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)


app.use((error, req, res, next) => {
  res.status(500).send('Something broke in the Phase 1 Challenge. Error::', error)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Part 1 application listening on PORT: ', port)
})
