describe("login tests", () => {
beforeEach(() => {
    cy.visit('/login')  //ensures it is in the login page
})

    it("should login with valid credentials", () => {
         cy.contains("login").should("be.visible")
    })

    it("should not login with invalid credentials", () => {
        
    })
})