const entrada = require("prompt-sync")()

function main(){
    console.log("#### Par ou ímpar ####")

    // Entrada
    const numero = Number(entrada("Digite um número: "))

    // Processamento/ Saída
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par.`)
    }else{
        console.log(`O número ${numero} é ímpar.`)
    }
}
main()