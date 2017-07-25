const express = require('express')
const router = express.Router()

router.get('/supported-operations', (req, res) => {
	const supportedOperations = {
		"/": "division",
	  "+": "addition",
	  "-": "subtration",
	  "*": "multiplication"
	}

	res.json(supportedOperations)
})

router.get('/square?:number', (req, res) => {
	const numberSquared =  { "result": Math.pow(req.query.number, 2) }

	res.json(numberSquared)
})

router.post('/compute', (req, res, next) => {
	let result
	const operator = req.body.operator
	const operands = req.body.operands

	if (operator === '/') {
		result = operands[0] / operands[1]
	} else if (operator === '+') {
		result = operands[0] + operands[1]
	} else if (operator === '-') {
		result = operands[0] - operands[1]
	} else if (operator === '*') {
		result = operands[0] * operands[1]
	} else {
		result = {
			"error": `invalid operator ${operator}. Valid operators are /, +, -, *`
		}
	}

	if (!isNaN(result)) {
		result = result.toFixed(2)
	}

	res.json(result)
})

module.exports = router
