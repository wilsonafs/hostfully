describe('Validate computer creation scenarios', () => {
	beforeEach(() => {
		cy.addComputerUrl()
		cy.addComputerValidatePage('Add a computer')
	})
	
	it('Attempt to create a Computer with blank input data', () => {
		cy.clickCreateBtn400()
		cy.errorMsg()
	})

	it('Attempt to create a Computer with invalid dates', () => {
		cy.invalidDates('Computer Name', 'First Date', 'Last Date')
		cy.clickCreateBtn400()
		cy.errorMsg()
	})

	it('Click on the cancel button', () => {
		cy.clickCancelBtn()
	})

	it('Successfully create a computer', () => {

	})
})