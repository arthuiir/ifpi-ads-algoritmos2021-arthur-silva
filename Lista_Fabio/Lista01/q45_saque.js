const entrada = require("prompt-sync")()

//Entrada
const valor = Number(entrada("Digite o valor que deseja receber(R$):"))

// Processamento
const notas_de_100 = Math.floor(valor / 100)
const resto1 = valor % 100
const notas_de_50 = Math.floor(resto1 / 50)
const resto2 = resto1 % 50
const notas_de_20 = Math.floor(resto2 / 20)
const resto3 = resto2 % 20
const notas_de_10 = Math.floor(resto3 / 10)
const resto4 = resto3 % 10
const notas_de_5 = Math.floor(resto4 / 5)
const resto5 = resto4 % 5
const notas_de_2 = Math.floor(resto5 / 2)
const resto6 = resto5 % 2
const notas_de_1 = Math.floor(resto6 / 1)

// Saída
console.log("Você receberá",notas_de_100,"notas de R$100.,",notas_de_50,"notas de R$50,",notas_de_20,"notas de R$20,",notas_de_10,"notas de R$10,",notas_de_5,"notas de R$5,",notas_de_2,"notas de R$2 e",notas_de_1,"notas de R$1.")