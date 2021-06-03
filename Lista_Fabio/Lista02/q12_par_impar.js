const entrada = require("prompt-sync")()

function main(){
    
    // Entrada
    const numero = Number(entrada("Digite um número: "))

    // Processamento
    let resultado
    if (numero % 2 === 0){
        resultado = "O número é par."
    }else{
        resultado = "O número é ímpar."
    }
    // Saída
    console.log(resultado)
}
main()