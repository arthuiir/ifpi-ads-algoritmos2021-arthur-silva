const entrada = require("prompt-sync")()

function main(){

    const num1 = Number(entrada("Número 1:"))
    const num2 = Number(entrada("Número 2:"))
    const num3 = Number(entrada("Número 3:"))

    let maior, meio, menor

    if (num1 > num2 && num1 > num3){
        maior = num1
        if (num2 < num3){
            meio = num3
            menor = num2
        }else{
            meio = num2
            menor = num3
        }
    }else if (num1 < num2 && num1 < num3){
        menor = num1
        if (num2 < num3){
            meio = num2
            maior = num3
        }else{
            meio = num3
            maior = num2
        }
    }
    console.log("Maior:",maior)
    console.log("Meio:",meio)
    console.log("Menor:",menor)
}
main()