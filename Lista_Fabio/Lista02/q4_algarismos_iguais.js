const entrada = require("prompt-sync")()

function main(){

    // Entrada
    const numero = Number(entrada("Digite um número com dois dígitos: "))
    
    // Processamento
    const dezena = Math.floor(numero / 10)
    const unidade = numero % 10

    let resultado

    if (dezena === unidade){
        resultado = "O número possui algarismos iguais."
    }else{
        resultado = "O número não possui algarismos iguais."
    }
    // Saída
    console.log(resultado)
}
main()