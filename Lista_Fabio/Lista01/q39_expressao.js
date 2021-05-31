const entrada = require("prompt-sync")()

// Entrada
const a = Number(entrada("Digite um número positivo: "))
const b = Number(entrada("Digite outro número positivo: "))
const c = Number(entrada("Digite mais um número positivo: "))

// Processamento
const r = (a + b) ** 2
const s = (b + c) ** 2
const d = (r + s) / 2

// Saída
console.log(d)