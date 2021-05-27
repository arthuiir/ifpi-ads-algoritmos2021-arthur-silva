const imput = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(imput('Digite a velocidade em m/s: '))

// Processamento
const velocidade_km = velocidade_ms * 3.6

// Saída
console.log('A velocidade de ',velocidade_ms,'m/s')
console.log('corresponde a ',velocidade_km,'km/h')