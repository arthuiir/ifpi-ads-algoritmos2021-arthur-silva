const entrada = require("prompt-sync")()

// Entrada
const anos = Number(entrada("Há quantos anos fuma?"))
const cigarros = Number(entrada("Quantos cigarros fuma por dia?"))
const preco = Number(entrada("Qual o valor da carteira de cigarros?"))

// Processamento
const dias = anos * 365
const gasto = (cigarros / 20) * dias

// Saída
console.log(gasto)