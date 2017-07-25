const queries = {
	allItems: () => {
		return `
			SELECT * FROM items
		`
	},
	itemsInSection: () => {
		return `
			SELECT id, name FROM items
			WHERE section=$1
		`
	},
	cheapItems: () => {
		return `
			SELECT (id, name, price) FROM items
			WHERE price < '10'
			ORDER BY price ASC
		`
	},
	countItemsInSection: () => {
		return `
			SELECT COUNT(*) FROM items
			WHERE section=$1
		`
	},
	mostRecentOrders: () => {
		return `
			SELECT (id, order_date) FROM orders
			ORDER BY order_date DESC
			LIMIT 10
		`
	},
	lastShopperName: () => {
		return `
			SELECT (first_name, last_name) FROM shoppers
			WHERE id = (
				SELECT shopper_id FROM orders
				ORDER BY order_date DESC
				LIMIT 1
			)

		`
	},
	orderTotal: () => {
		return `
			SELECT SUM(price) FROM orders
			JOIN order_items ON order_id=orders.id
			JOIN items ON items.id=item_id
			WHERE orders.id=$1
		`
	}
}

module.exports = queries
