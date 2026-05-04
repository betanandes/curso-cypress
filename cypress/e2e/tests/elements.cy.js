/// <reference types="cypress" />

describe('Work with nasic elements', () => {
    it ('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text é mais especifico, tem que ser exatamente igual
    })
})