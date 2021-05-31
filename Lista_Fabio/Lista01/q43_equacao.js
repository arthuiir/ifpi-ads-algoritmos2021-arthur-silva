const entrada = require("prompt-sync")()

// Entrada
const a = Number(entrada("Digite um número(1/6):"))
const b = Number(entrada("Digite mais um número(2/6):"))
const c = Number(entrada("Digite outro número(3/6):"))
const d = Number(entrada("Digite um número(4/6):"))
const e = Number(entrada("Digite outro número(5/6:)"))
const f = Number(entrada("Digite mais um número(5/6):"))

// Processamento
const x = (c*e) - (b*f) / (a*e) - (b*d)
const y = (a*f) - (c*d) / (a*e) - (b*d)

// Saída
console.log("x =",x, "e y =",y)