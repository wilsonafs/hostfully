describe('Validate filter scenarios', () => {
	beforeEach(() => {
		cy.computersUrl()
		cy.computersValidatePage()
	})
	
	it('Trying to filter without passing any value in the input', () => {
		cy.clickFilter()
	})

    it('Trying to filter by passing which returns no result', () => {
        cy.fillFilter('000PC')
        cy.clickFilter()
        cy.noResult('Nothing to display')
    })
    
    it.only('Perform a successful search', () => {
        cy.fillFilter('ACER')
        cy.clickFilter()
        cy.filterResult()
        cy.validateSearchResult()
    })
})