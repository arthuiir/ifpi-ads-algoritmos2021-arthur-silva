const entrada = require("prompt-sync")()

function main(){

    const num1 = Number(entrada("Número 1:"))
    const num2 = Number(entrada("Número 2:"))
    const num3 = Number(entrada("Número 3:"))
    const num4 = Number(entrada("Número 4:"))
    const num5 = Number(entrada("Número 5:"))

    const media = (num1 + num2 + num3 + num4 + num5) / 5

    console.log("A média é:",media)

    if (num1 > media){
        console.log(num1,"está acima da média.")
    }
    if (num2 > media){
        console.log(num2,"está acima da média.")
    }
    if (num3 > media){
        console.log(num3,"está acima da média.")
    }
    if (num4 > media){
        console.log(num4,"está acima da média.")
    }
    if (num5 > media){
        console.log(num5,"está acima da média.")
    }
}
main()