/// <reference types="cypress" />

Cypress.Commands.add('getDataTest', (dataTestSelector) => {
    return cy.get('[data-test="${dataTestSelector}"]')
})

//Cypress.Commands.add('loginAsAdmin', (email = 'obwogemcbr', password ='123456'))

export {}
 declare global {
   namespace Cypress {
    interface Chainable {
        getDataTest(value: string): Chainable<JQuery<HTMLElement>>

    }
   }
 }