const entrada = require("prompt-sync")()

// Entrada
const horas_inteiras = Number(entrada("Digite o total de horas: "))

// Processamento
const semanas = Math.floor(horas_inteiras / 168)
const resto = horas_inteiras % 168
const dias = Math.floor(resto / 24)
const horas = dias % 24

// Saída
console.log(semanas,"semana(s)",dias,"dia(s) e",horas,"hora(s).")