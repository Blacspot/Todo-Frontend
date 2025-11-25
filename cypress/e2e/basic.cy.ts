describe('UI navigation', () => {

    it("should visit multiple pages", () => {
        cy.visit('/')

        cy.location('pathname').should("equal", "/")

        cy.getDataTest('todo-welcome-header').contains('Welcome to TodoPro!')

    })
})