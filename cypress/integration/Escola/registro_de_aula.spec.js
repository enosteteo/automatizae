// create_more_class_register.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Cadastrar Registro de Aula', () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    beforeEach(() => {
        cy.viewport(2240, 1680)
        cy.exec('npm cache clear --force')
        cy.visit('/auth/login')

        cy.location('pathname').should('include', 'login')
        cy.fromControlName('username').type('46853052994').should('have.value', '46853052994')
        cy.fromControlName('password').type('46853052994').should('have.value', '46853052994')
        cy.get('button').contains('Entrar').click()

        cy.location('pathname').should('include', 'home')
        cy.visit('/professor/turmas')
    })

    const qnt_aula = 999
    for (let i = 0; i < qnt_aula; i++) {
        let class_qnt = getRandomInt(98) + 1
        let dia = getRandomInt(9)
        let mes = getRandomInt(2)
        let ano = getRandomInt(9)
        it(`Cadastrar registro de aula numero ${i}`, () => {
            cy.visit('/professor/turmas/c3ec98fb-52f6-4dc3-8061-e2f5991831bd')
            cy.location('pathname').should('include', 'turmas')
    
            cy.get('#ngb-nav-4').click()
    
            cy.fromControlName('classQuantity').type(`${class_qnt}`)
                .should('have.value', `${class_qnt}`)
    
            cy.fromControlName('classContent').type(`This class has name ${i}`)
                .should('have.value', `This class has name ${i}`)
    
            cy.fromControlName('methodology').type(`Aula expositiva ${i}`)
                .should('have.value', `Aula expositiva ${i}`)
    
            cy.fromControlName('classDate').type(`20${ano}${ano}-1${mes}-1${dia}`)
                .should('have.value', `20${ano}${ano}-1${mes}-1${dia}`)
    
            cy.get('.btn-primary').contains('Cadastrar').click()
        })
    }
})
