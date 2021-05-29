const entrada = require("prompt-sync")()

// Entrada
const numero1 = Number(entrada("Digite um número: "))
const numero2 = Number(entrada("Digite outro número: "))
const numero3 = Number(entrada("Digite mais um número: "))

// Processamento
const soma = numero1 + numero2
const diferenca = numero2 - numero3

// Saída
console.log("A soma dos dois primeros dígitos é:", soma,", e a diferença entre os dois últimos é: ",diferenca)