const entrada = require("prompt-sync")()

// Entrada
const diasInteiros = Number(entrada("Digite o n° de dias: "))

// Processamento
const semanas = Math.floor(diasInteiros / 7)
const resto = semanas % 7
const dias = Math.floor(resto / 24)

// Saída
console.log(diasInteiros,"dias equivalem a ",semanas,"semanas e",dias,"dias")