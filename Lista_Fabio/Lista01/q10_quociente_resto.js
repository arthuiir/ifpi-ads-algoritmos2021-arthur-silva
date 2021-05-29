const entrada = require("prompt-sync")()

// Entrada
const numero1  = Number(entrada("Digite um número: "))
const numero2  = Number(entrada("Digite mais um número: "))

// Processameto
const quociente = Math.floor(numero1 / numero2)
const resto = numero1 % numero2

// Saída
console.log("Quociente: ",quociente, "e resto ",resto)