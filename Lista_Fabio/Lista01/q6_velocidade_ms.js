const entrada = require("prompt-sync")()

// Entrada
const velocidade_km = Number(entrada("Digite uma velocidade em Km/h: "))

// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saída
console.log(velocidade_km,"Km/h corresponde a ", velocidade_ms ,"m/s.")