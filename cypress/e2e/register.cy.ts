describe('The register Page', () => {
    it('successfully loads', () => {
        cy.visit('/')
        cy.get('input[name=firstName]').type("Isa")
        cy.get('input[name=lastName]').type(`Isayev`)
        cy.get('input[name=email]').type(`Isayev@gamil.com`)
        cy.get('input[name=phoneNumber]').type(`4506678601`)
        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`Soltan1234{enter}`)
        cy.get('input[name=confirmPassword]').type(`Soltan1234{enter}`)
        cy.get("#form-phoneNumber-error").contains("Telefon nömrəsi düzgün formatda olmalıdır")
        cy.get('button[type="submit"]').click()
        // cy.url().should('include', '/login')
    })
})