const entrada = require("prompt-sync")()

function main(){
    
    // Entrada
    const altura = Number(entrada("Qual a sua altura? (m): "))
    const peso = Number(entrada("Qual o seu peso? (Kg): "))

    // Processamento
    const imc = peso / (altura * altura)
    let categoria

    if (imc < 25){
        categoria = "Peso normal."
    }else if (imc >= 25 && imc <= 30){
        categoria = "Obesidade."
    }else if (imc > 30){
        categoria = "Obesidade mórbida."
    }

    // Saída
    console.log("Seu imc é:",imc.toFixed(2))
    console.log(categoria)

}
main()