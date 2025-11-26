describe("login tests", () => {
beforeEach(() => {
    cy.visit('/login')  //ensures it is in the login page
})

    it("should login with valid credentials", () => {
         cy.contains("/login").should("be.visible")

         cy.getDataTest('login-email-input').as('login-email-input')

         cy.get('@login-emailinput')
           .should('be.visible')
           .should('have attr', 'type', 'email')
           .type('obwogemcbride73@gmail.com')

         cy.getDataTest('login-password-input').as('login-password-input')  
    })

    it("should not login with invalid credentials", () => {
        
    })
})