const promise = require('bluebird')
const options = { promiseLib: promise }
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)
const queries = require('./queries')

const allItems = () => {
	return db.many(queries.allItems())
}

const itemsInSection = (section) => {
	return db.many(queries.itemsInSection(), [section])
}

const cheapItems = () => {
	return db.many(queries.cheapItems())
}

const countItemsInSection = (section) => {
	return db.one(queries.countItemsInSection(), section)
}

const mostRecentOrders = () => {
	return db.many(queries.mostRecentOrders())
}

const lastShopperName = () => {
	return db.one(queries.lastShopperName())
}

const orderTotal = (orderId) => {
	return db.one(queries.orderTotal(orderId))
}

module.exports = {
	allItems,
	itemsInSection,
	cheapItems,
	countItemsInSection,
	mostRecentOrders,
	lastShopperName,
	orderTotal
}
