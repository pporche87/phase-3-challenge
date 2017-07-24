const express = require('express')
const app = express()

app.get('/api/supported-operations', (req, res) => {
	// ==== Express application running succesfully ====
	// res.json('Hello World')

	// ==== Supported Operation route test ====
	res.json('/api/supported-operations')
})

app.get('/api/square', (req, res) => {
	// ==== Square route test ====
	res.json('/api/square')
})

app.get('/api/compute', (req, res) => {
	// ==== Compute route test ====
	res.json('/api/compute')
})

const port = process.env.PORT || 3000

app.use((error, req, res, next) => {
  res.status(500).send('Something broke in the Phase 1 Challenge')
})

app.listen(port, () => {
	console.log('Part 1 application listening on PORT: ', port)
})
