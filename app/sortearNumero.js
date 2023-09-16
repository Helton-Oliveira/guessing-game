const menorValor = 0
const maiorValor = 1500
const numerSecreto = gerarNumeroAleatorio()
const numeros = [
    {name: 'zero zero', value: 0,},
    {name: 'zero', value: 0},
    {name:'00', value: 0,},
    {name:'um', value: 1,},
    {name:'dois', value: 2,},
    {name:'três', value: 3,},
    {name:'quatro', value: 4,},
    {name:'cinco', value: 5,},
    {name:'seis', value: 6,},
    {name:'sete', value: 7,},
    {name:'oito', value: 8,},
    {name:'nove', value: 9,},
    {name:'dez', value: 10}
]

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor

