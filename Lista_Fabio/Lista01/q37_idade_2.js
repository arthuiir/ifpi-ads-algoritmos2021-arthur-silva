const entrada = require("prompt-sync")()

// Entrada
const idade = Number(entrada("Digite quantidade de dia que você viveu: "))

// Processamento
const anos = Math.floor(idade / 365)
const resto = idade % 365
const meses = Math.floor(resto / 30)
const dias = resto % 30

// Saída
console.log(anos, meses, dias)