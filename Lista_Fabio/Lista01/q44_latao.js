const entrada = require("prompt-sync")()

// Entrada
const latao = Number(entrada("Quantos kg de latão você deseja?"))
// Processamento
const zinco = latao * 0.7
const cobre = latao * 0.3

// Saída
console.log("Você precisq de ",zinco,"kg de zinco e",cobre,"kg de cobre para obter essa quantidade de latão.")