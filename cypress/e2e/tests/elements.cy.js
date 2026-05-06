/// <reference types="cypress" />

describe('Work with basic elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    }) // beforeEach é para rodar a página antes de cada teste
    
    beforeEach(() => {
        cy.reload() // recarrega a página antes de cada teste
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text é mais especifico, tem que ser exatamente igual'
    })

    it('Links', () => {
        // cy.get('a').click() (não vai funcionar porque tem mais de um link, tem que ser mais específico)

        cy.get('#resultado').should('have.not.text' , 'Voltou!') //verifica se o elemento não existe
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!') //tem que ser exatamente igual
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test') //verifica se o valor do campo é igual ao que foi digitado

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')


        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')


        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}') //apaga os dois últimos caracteres
            .should('have.value', 'Teste123')

         cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay: 100}) //seleciona todo o texto e digita por cima
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked') //verifica se o radio button está selecionado
        
        cy.get('#formSexoMasc').should('not.be.checked') //verifica se o radio button não está selecionado
        cy.get('[name="formSexo"]').should('have.length', 2) //verifica se existem dois radio buttons com o mesmo name

    })
})