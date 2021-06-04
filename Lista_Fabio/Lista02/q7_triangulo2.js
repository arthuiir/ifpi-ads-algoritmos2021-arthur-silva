const entrada = require("prompt-sync")()

function main(){

    const lado1 = Number(entrada("Lado 1: "))
    const lado2 = Number(entrada("Lado 2: "))
    const lado3 = Number(entrada("Lado 3: "))

    const soma_dois_lados = lado1 + lado2
    
    if (lado1 === 0 || lado2 === 0 || lado3 === 0){
        console.log("Não existe lado com tamnho 0.")
    }else if (soma_dois_lados < lado3){
        console.log("A soma dos dois lados não pode ser menor que o lado 3.")
    }else if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
        console.log("É um triângulo equilátero.")
    }else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("É um triângulo isóceles.")
    }else if ( lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        console.log("É um triângulo escaleno.")
    }
}


main()