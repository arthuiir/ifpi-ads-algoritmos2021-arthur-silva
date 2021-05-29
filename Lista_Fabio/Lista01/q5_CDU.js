const entrada = require("prompt-sync")()

//Entrada
const digito1 = Number(entrada("Digite uma número (centena): "))
const digito2 = Number(entrada("Digite uma número (dezena): "))
const digito3 = Number(entrada("Digite uma número (unidade): "))

// Processamento
const centena = digito1 * 100
const dezena = digito2 * 10
const unidade = digito3 * 1
const soma =  centena + dezena + unidade

// Saída
console.log(soma)