const entrada = require("prompt-sync")()

// Entrada
const binario = Number(entrada("Digite um numero em binário de 4 dígitos: "))

//Procesamento
const milhar = Math.floor(binario / 1000)
const resto_1 = binario % 1000
const centena = Math.floor(resto_1 / 100)
const resto_2 = resto_1 % 100
const dezena = Math.floor(resto_2 / 10)
unidade = resto_2 % 10

//convertendo para decimal
const binario_1 = (unidade * 2 ** 0)
const binario_2 = (dezena * 2 ** 1)
const binario_3 = (centena * 2 ** 2)
const binario_4 = (milhar * 2 ** 3)
const numero_decimal = binario_1 + binario_2 + binario_3 + binario_4

// Saída
console.log(numero_decimal,"na base decimal.")