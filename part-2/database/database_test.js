const expect = require('chai').expect
const database = require('./database')

describe('grocery_store()', () => {

	context('itemsInSection()', () => {
		const bulkItems = ['Flour', 'Pasta', 'Rice']
		const bulkItemsId = [16, 33, 36]

		it('A call to itemsInSection("bulk") return the items "Flour", "Pasta", and "Rice"', () => {
			return database.itemsInSection('bulk').then(items => {
				const returnedBulkItems = items.map(item => item.name)
				const returnedBulkItemsIds = items.map(item => item.id)

				expect(items.length).to.equal(3)
				expect(items[0].name).to.equal('Flour')
				expect(items[1].name).to.equal('Pasta')
				expect(items[2].name).to.equal('Rice')
				expect(returnedBulkItems).to.eql(bulkItems)
				expect(returnedBulkItemsIds).to.eql(bulkItemsId)
			})
		})
	})
})
