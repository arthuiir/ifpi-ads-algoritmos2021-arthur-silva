const entrada = require("prompt-sync")()

// Entrada
const hora = Number(entrada("Digite a hora: "))
const minuto = Number(entrada("Digite os minutos: "))

// Processamento
const horas = hora * 60
const minutos = horas + minuto

// Saída
console.log(minutos, "minutos.")