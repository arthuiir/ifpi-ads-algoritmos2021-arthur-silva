const entrada = require("prompt-sync")()

function main(){

    const media1 = Number(entrada("Qual a média de casos há 14 dias atrás? "))
    const media2 = Number(entrada("Qual a média de casos hoje? "))

    const variação = variacao_percentual(media1,media2)
    const classificacao = status(variação)

    console.log("Diferença(%):",variação.toFixed(1))
    console.log(classificacao)
}
main()

function variacao_percentual(valor1,valor2){
    return ((valor2 - valor1) / valor1 )* 100
}

function status(valor){
    if (valor > 0 && valor < 15){
        return "Em estabilidade"
    }else if (valor > 15){
        return "Em alta."
    }else if(valor < 0){
        return "Em queda."
    }
}