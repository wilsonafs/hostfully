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
    
    it('Perform a successful search', () => {
        cy.fillFilter('Acer')
        cy.clickFilter()
        cy.filterResult()
        cy.validateSearchResult()
    })

    it('Open search result', () => {
        cy.fillFilter('Acer') 
        cy.clickFilter()
        cy.filterResult()
        cy.validateSearchResult()
        cy.openResult()
    })
})