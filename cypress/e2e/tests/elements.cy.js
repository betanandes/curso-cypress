/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    }) // beforeEach é para rodar a página antes de cada teste
    
    beforeEach(() => {
        cy.reload() // recarrega a página antes de cada teste
    })

    it('text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text é mais especifico, tem que ser exatamente igual'
    })

    it('links', () => {
        // cy.get('a').click() (não vai funcionar porque tem mais de um link, tem que ser mais específico)

        cy.get('#resultado').should('have.not.text' , 'Voltou!') //verifica se o elemento não existe
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!') //tem que ser exatamente igual
    })
})