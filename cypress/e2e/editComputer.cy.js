describe('Validate computer edition scenarios', () => {
	beforeEach(() => {
		cy.editComputerUrl()
		cy.addComputerValidatePage('Edit computer')
	})
	
	it('Attempt to create a Computer with blank input data', () => {
		cy.addComputerValidatePage('Edit computer')
	})


})