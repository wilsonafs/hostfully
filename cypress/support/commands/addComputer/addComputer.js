const el = require('./elements').ELEMENTS

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('addComputerUrl', () => {
    cy.visit('/new', {"failOnStatusCode": false})
})

Cypress.Commands.add('addComputerValidatePage', (title) => {
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
    cy.get(el.btnCreateComputer).should('be.visible')
    cy.get(el.btnCancel).should('be.visible')
})

Cypress.Commands.add('clickCreateBtn400', () => {
    cy.intercept('POST', 'https://computer-database.gatling.io/computers').as('createComputer')
    cy.get(el.btnCreateComputer).click()
    cy.wait('@createComputer').then((interception) => {
        expect(interception.response.statusCode).to.equal(400)
    })
})

Cypress.Commands.add('errorMsg', () => {
    // we need to fix the front message to display a user friendly message
    cy.get(el.errorMsg).should('be.visible')
})

Cypress.Commands.add('invalidDates', (name, firstDate, lastDate) => {
    cy.get(el.inputName).type(name)
    cy.get(el.inputIntroduced).type(firstDate)
    cy.get(el.inputDiscontinued).type(lastDate)
})

Cypress.Commands.add('clickCancelBtn', () => {
    cy.get(el.btnCancel).click()
    cy.location('href').should('eq', Cypress.config('baseUrl'))
})

Cypress.Commands.add('fillForm', (name, firstDate, lastDate, company) => {
    cy.get(el.inputName).type(name)
    cy.get(el.inputIntroduced).type(firstDate)
    cy.get(el.inputDiscontinued).type(lastDate)
    cy.get(el.selectCompany).select(company)
})

Cypress.Commands.add('clickCreateBtn', () => {
    cy.get(el.btnCreateComputer).click()
    cy.location('href').should('eq', Cypress.config('baseUrl'))
    cy.get(el.alertWarning, {timeout: 5000}).should('be.visible')
})
