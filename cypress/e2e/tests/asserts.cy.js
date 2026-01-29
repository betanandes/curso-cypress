/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1;


    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    // a.should('to.be.equal', 1)
    expect(a).not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).to.be.deep.eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const srt = 'String'

    expect(num).to.be.a('number')
    expect(srt).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.a('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.be.length(15)
    expect(str).to.be.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/) //^ = deve iniciar com essa palavra
    expect(str).to.match(/teste$/) //$ = deve finalizar com essa palavra
    expect(str).to.match(/.{15}/) // = o tamanho caracteres esperado
    expect(str).to.match(/\w+/) // = verificar se existem apenas letras
    expect(str).to.match(/\D+/) // = verificar se não contém números
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(floatNumber).to.be.equal(5.123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.above(5)
})