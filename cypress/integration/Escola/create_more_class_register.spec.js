// create_more_class_register.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Cadastrar Registro de Aula', () => {

    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit('http://localhost:4200/auth/login')

        cy.location('pathname').should('include', 'login')
        cy.fromControlName('username').type('46853052994').should('have.value', '46853052994')
        cy.fromControlName('password').type('46853052994').should('have.value', '46853052994')
        cy.get('button').contains('Entrar').click()

        cy.location('pathname').should('include', 'turmas')
        cy.visit('http://localhost:4200/professor/turmas')
    })

    const qnt_aula = 10

    it('Cadastrar X registros de aula', () => {
        cy.visit('http://localhost:4200/professor/turmas/c3ec98fb-52f6-4dc3-8061-e2f5991831bd')

        cy.fromControlName('name').type('José Barboza de Bravo do Azougue')
            .should('have.value', 'José Barboza de Bravo do Azougue')

        cy.fromControlName('email').type('jose@teste.com')
            .should('have.value', 'jose@teste.com')

        cy.fromControlName('birthdate').type('2003-05-19')
            .should('have.value', '2003-05-19')

        cy.fromControlName('rg').type('16.835.882-7')
            .should('have.value', '16.835.882-7')

        cy.fromControlName('cpf').type('424.185.500-87')
            .should('have.value', '424.185.500-87')

        cy.fromControlName('phone').type('(34)43539-1668')
            .should('have.value', '(34) 43539-1668')

        cy.get('.btn-primary').contains('Cadastrar').click()

        cy.url().should('not.include', 'cadastrar')

        cy.get('#42418550087').should('contain.text', 'jose@teste.com')
    })
})
