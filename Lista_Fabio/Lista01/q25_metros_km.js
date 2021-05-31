const entrada = require("prompt-sync")()

// Entrada
const metros = Number(entrada("Digite um valor em metros: "))

// Processamento
const kilometros = metros  / 1000

// Saída
console.log(metros,"metro(s) equivale a ",kilometros,"Km")