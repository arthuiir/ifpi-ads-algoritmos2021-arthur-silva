const entrada = require("prompt-sync")()

// Entrada
const segundosInt = Number(entrada("Digite um numero inteiro de segundos: "))

// Processamento
const horas = Math.floor(segundosInt / 3600)
const minutos = segundosInt % 3600
const segundos = minutos % 60

// Saída
console.log(horas,"horas",minutos,"minutos e",segundos,"segundos")