const expect = require('chai').expect
const database = require('./database')

describe('grocery_store', () => {

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
				expect(items[0].id).to.equal(16)
				expect(items[1].id).to.equal(33)
				expect(items[2].id).to.equal(36)
				expect(returnedBulkItems).to.eql(bulkItems)
				expect(returnedBulkItemsIds).to.eql(bulkItemsId)
			})
		})
	})

	context('cheapItems()', () => {
		it('A call to cheapItems() returns the item with name "Fish" as the first item and the item with name "Honey" as the last item', () => {
			return database.cheapItems().then(items => {

				expect(items.length).to.equal(25)
				expect(items[0].name).to.equal('Fish')
				expect(items[24].name).to.equal('Honey')
			})
		})
	})

	context('countItemsInSection()', () => {
		it('A call to countItemsInSection("packaged") returns 5', () => {
			return database.countItemsInSection('packaged').then(items => {

				expect(items.count).to.equal('5')
			})
		})
	})
})
