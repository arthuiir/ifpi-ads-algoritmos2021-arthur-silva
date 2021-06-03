const entrada = require("prompt-sync")()

function main(){
    const angulo1 = Number(entrada("Angulo 1: "))
    const angulo2 = Number(entrada("Angulo 2: "))
    const angulo3 = Number(entrada("Angulo 3: "))

    const soma_angulos = angulo1 + angulo2 + angulo3

    if (eh_triangulo(angulo1, angulo2, angulo3)){
        console.log("É um triângulo.")

        const tipo = tipo_triangulo(angulo1, angulo2, angulo3)
        console.log(tipo)
    }else{
        console.log("Não é um triângulo.")
    }
}
main()


function eh_triangulo(ang1, ang2, ang3){
    const soma = ang1 + ang2 + ang3
    
    return (soma === 180)
}


function tipo_triangulo(ang1, ang2, ang3){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90){
        return "É um triângulo acutângulo."
    }else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        return "É um triângulo retângulo."
    }else if (ang1 > 90 || ang2 > 90 || ang3 > 90){
        return "É um triângulo obtusângulo."
    }
}