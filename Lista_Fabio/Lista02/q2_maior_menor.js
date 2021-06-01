const entrada = require("prompt-sync")()

function main(){
    const primeiro_numero = Number(entrada("Digite um número: "))
    const segundo_numero = Number(entrada("Digite outro número: "))

    if (primeiro_numero > segundo_numero){
        console.log(`${primeiro_numero} é o maior número e ${segundo_numero} é o menor.`)
    }else if(primeiro_numero < segundo_numero){
        console.log(`${segundo_numero} é o maior número e ${primeiro_numero} é o menor.`)
    }else if(primeiro_numero === segundo_numero){
        console.log("Os números são iguais.")
    }
}
main()