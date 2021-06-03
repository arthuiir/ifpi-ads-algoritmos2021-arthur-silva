const entrada = require("prompt-sync")()

function main(){

    // entrada
    const num1 = Number(entrada("Digite um número: "))
    const num2 = Number(entrada("Digite mais um número: "))
    const num3 = Number(entrada("Digite outro número: "))

    // processamento
    let maior = num1

    if (num2 > maior){
        maior = num2
    }
    
    if (num3 > maior){
        maior = num3
    }

    // saída
    console.log("O maior entre os três números digitados é:",maior)    
}
main()