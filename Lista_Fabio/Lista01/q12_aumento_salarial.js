const imput = require('prompt-sync')()

// Entada
const salario = Number(imput('Digite seu salário atual(R$): '))

// Processamento
const aumento = salario * 25/100
const novo_salario = salario + aumento

// Saída
console.log('Seu novo salário é(R$): ',novo_salario)
