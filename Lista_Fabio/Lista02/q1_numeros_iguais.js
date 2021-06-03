// QUESTÃO AINDA NÃO FINALIZADA

const entrada = require("prompt-sync")()

function main(){
    // Entrada
    const primeiro_numero = Number(entrada("Digite o primeiro número: "))
    const segundo_numero = Number(entrada("Digite o segundo número: "))
    const terceiro_numero = Number(entrada("Digite o terceiro número: "))

    // Saída
    console.log(primeiro_numero, segundo_numero, terceiro_numero)
}
main()