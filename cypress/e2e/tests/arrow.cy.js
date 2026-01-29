 it('nada agora', function() {}) //nada agora, porém nenhum comando foi executdo durante esse teste

// exemplo de função em js

//  function soma(a, b) {
//     return a + b;
//  }

// exemplo de variável em js

// const soma = function (a, b) {
//     return a + b
// }

// exemplos de arrow function em js

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a, b) => a + b

// const soma = (a) => a + a

// const soma = a => a + a // serve somente para 1 parâmetro!

// const soma = () => 5 + 5


//  console.log(soma (1, 4))


 it('a function test...', function() {
    console.log('Function', this) //o this faz a referência para o escopo em que elas estão sendo executadas
 })

  it('an arrow test...', () => {
    console.log('Arrow', this) // aqui o this não varia, fica no escopo mais alto, logo fica como 'undefined'
 })