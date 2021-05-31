const entrada = require("prompt-sync")()

// Entrada
const custoFabrica = Number(entrada("Qual custo de fábrica do veículo?(R$)"))

// Processamento
const impostos = custoFabrica * 0.45
const distribuidor = custoFabrica * 0.28
const final = custoFabrica + impostos + distribuidor

// Saída
console.log("O valor final do carro será R$",final)