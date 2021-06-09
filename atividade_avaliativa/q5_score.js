const entrada = require("prompt-sync")()

function main(){
    const num1 = Number(entrada("Valor a: "))
    const num2 = Number(entrada("Valor b: "))
    const num3 = Number(entrada("Valor c: "))

    const peso1_score1 = (num1 / 100) * 26
    const peso2_score1 = (num2 / 100) * 57
    const peso3_score1 = (num3 / 100) * 17

    const peso1_score2 = (num1 / 100) * 62
    const peso2_score2 = (num2 / 100) * 19
    const peso3_score2 = (num3 / 100) * 19

    const media_score1 = (num1 * peso1_score1 + num2 * peso2_score1 + num3 * peso3_score1) / (peso1_score1 + peso2_score1 + peso3_score1)
    const media_score2 = (num1 * peso1_score2 + num2 * peso2_score2 + num3 * peso3_score2) / (peso1_score2 + peso2_score2 + peso3_score2)

    const score1 = faixa_score1(media_score1)
    const score2 = faixa_score2(media_score2)

    console.log("Score 1.0:",media_score1.toFixed(0),  "Categoria:",score1)
    console.log("Score 2.0:",media_score2.toFixed(0),  "Categoria:",score2)

}

main()

function faixa_score1(valor){
    if (valor < 400){
        return "Baixo."
    }else if (valor < 600){
        return "Regular."
    }else if (valor < 800){
        return "Bom."
    }else if (valor < 1000){
        return "Muito bom"
    }
}

function faixa_score2(valor){
    if (valor <+ 300){
        return "Baixo."
    }else if (valor <= 500){
        return "Regular."
    }else if (valor <= 700){
        return "Bom."
    }else if (valor <= 1000){
        return "Muito bom"
    }
}