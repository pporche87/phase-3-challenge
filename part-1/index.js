const express = require('express')
const app = express()
const api = require('./api/routes')

app.use('/api', api)

const port = process.env.PORT || 3000

app.use((error, req, res, next) => {
  res.status(500).send('Something broke in the Phase 1 Challenge')
})

app.listen(port, () => {
	console.log('Part 1 application listening on PORT: ', port)
})
