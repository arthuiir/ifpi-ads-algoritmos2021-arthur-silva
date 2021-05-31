const entrada = require("prompt-sync")()

// Entrada
const idadeAnos = Number(entrada("Digite sua idade em anos: "))
const idadeMeses = Number(entrada("Agora digite em meses: "))
const idadeDias = Number(entrada("Digite os dias: "))

// Processamento
const anos = idadeAnos * 365
const meses = idadeMeses * 30
const idade = anos + meses + idadeDias

// Saída
console.log("Você viveu",idade,"dias debaixo do sol.")