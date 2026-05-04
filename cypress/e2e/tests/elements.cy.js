/// <reference types="cypress" />

describe('Work with nasic elements', () => {
    it ('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text é mais especifico, tem que ser exatamente igual
    })

    it.only('Links', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.get('a').click() (não vai funcionar porque tem mais de um link, tem que ser mais específico)

        cy.reload() //recarrega a página
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!') //tem que ser exatamente igual
    })
})