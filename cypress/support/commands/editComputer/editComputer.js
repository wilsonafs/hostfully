const el = require('./elements').ELEMENTS

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('editComputerUrl', () => {
    cy.visit('/381', {"failOnStatusCode": false})
})

Cypress.Commands.add('editComputerValidatePage', (title) => {
    cy.get(el.h1Redirect).should('be.visible').and('have.attr', 'href', '/computers')
    cy.get(el.h1Title).should('be.visible').and('have.text', title)
    cy.get(el.labelName).should('be.visible')
    cy.get(el.labelIntroduced).should('be.visible')
    cy.get(el.labelDiscontinued).should('be.visible')
    cy.get(el.labelCompany).should('be.visible')
    cy.get(el.inputName).should('be.visible')
    cy.get(el.inputIntroduced).should('be.visible')
    cy.get(el.inputDiscontinued).should('be.visible')
    cy.get(el.selectCompany).should('be.visible')
    cy.get(el.btnSaveComputer).should('be.visible')
    cy.get(el.btnCancel).should('be.visible')
    cy.get(el.deleteComputer).should('be.visible')
})
