describe('Validate computer edition scenarios', () => {
	beforeEach(() => {
		cy.editComputerUrl()
		cy.addComputerValidatePage('Edit computer')
	})
	
	it('Attempt to create a Computer with blank input data', () => {
		cy.addComputerValidatePage('Edit computer')
	})

	it('Delete a Computer', () => {
		cy.clickDelete()
	})

	it('Update a Computer name', () => {
		cy.updateName('Computer Name')
		cy.clickSaveBtn()
	})

})