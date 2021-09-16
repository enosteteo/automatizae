// teacher.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Cadastrar professor', () => {

    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit('/')

        cy.location('pathname').should('include', 'login')
        cy.fromControlName('username').type('teste').should('have.value', 'teste')
        cy.fromControlName('password').type('teste').should('have.value', 'teste')
        cy.get('button').contains('Entrar').click()

        cy.location('pathname').should('include', 'home')
        cy.visit('/professor/cadastrar')
    })

    it('Criar um professor', () => {
        cy.location('pathname').should('include', '/professor/cadastrar')

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
