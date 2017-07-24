const express = require('express')
const router = express.Router()

const supportedOperations = {
	"/": "division",
  "+": "addition",
  "-": "subtration",
  "*": "multiplication"
}

router.get('/supported-operations', (req, res) => {
	// ==== Express application running succesfully ====
	// res.json('Hello World')

	// ==== Supported Operation route test ====
	// res.json('/api/supported-operations')

	res.json(supportedOperations)
})

router.get('/square', (req, res) => {
	// ==== Square route test ====
	res.json('/api/square')
})

router.get('/compute', (req, res) => {
	// ==== Compute route test ====
	res.json('/api/compute')
})

module.exports = router
