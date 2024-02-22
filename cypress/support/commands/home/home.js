const el = require('./elements').ELEMENTS

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('computersUrl', () => {
    cy.visit('/', {"failOnStatusCode": false})
})

Cypress.Commands.add('computersValidatePage', () => {
    cy.get(el.h1Redirect).should('be.visible').and('have.attr', 'href', '/computers')
    cy.get(el.h1Title).invoke('text').then((text) => {
        expect(text).to.match(/\d+ computers found/)
    })
    cy.get(el.inputSearch).should('be.visible')
    cy.get(el.searchSubmitBtn).should('be.visible')
    cy.get(el.addNewComputerBtn).should('be.visible')
    cy.get(el.tableList).should('be.visible')
    cy.get(el.tablePagination).should('be.visible')
})

Cypress.Commands.add('clickFilter', () => {
    cy.get(el.searchSubmitBtn).click()
    cy.get(el.inputSearch).should('have.attr', 'required')
})

Cypress.Commands.add('fillFilter', (text) => {
    cy.get(el.inputSearch).type(text)
    Cypress.env('filterValue', text)
})

Cypress.Commands.add('noResult', (message) => {
    const filterValue = Cypress.env('filterValue')
    cy.url().should('include', filterValue)
    cy.get(el.resultText).should('be.visible').and('have.text', message)
})

Cypress.Commands.add('filterResult', () => {
    const filterValue = Cypress.env('filterValue')
    cy.url().should('include', filterValue)
    cy.get(el.h1Title).invoke('text').then((text) => {
        expect(text).to.match(/\d+ computers found/)
    })
})

Cypress.Commands.add('validateSearchResult', () => {
    const filterValue = Cypress.env('filterValue')

    cy.get(el.tableList).each(($cell) => {
            const cellText = $cell.text()
            expect(cellText).to.include(filterValue)
        
    })
})