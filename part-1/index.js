const express = require('express')
const app = express()

app.get('/', (req, res) => {
	// ==== Express application running succesfully ====
	// res.json('Hello World')
	
})

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log('Part 1 application listening on PORT: ', port)
})
