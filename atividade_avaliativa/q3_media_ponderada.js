const entrada = require("prompt-sync")()

function main(){
    const nota_avaliacao1 = Number(entrada("Nota da avaliação 1: "))
    const nota_avaliacao2 = Number(entrada("Nota da avaliação 2: "))
    const nota_atividade = Number(entrada("Nota da atividade: "))

    const peso1 = (nota_atividade / 100) * 10
    const peso2 = (nota_avaliacao1 /100) * 20
    const peso3 = (nota_avaliacao2 / 100) * 30

    const media_semestral = (nota_avaliacao1 * peso2 + nota_avaliacao2 * peso3 + nota_atividade * peso1) / (peso1 + peso2 + peso3)

    const situacao = aprovacao(media_semestral)

    console.log("Média semestral:",media_semestral.toFixed(1))
    console.log("Situação:",situacao)

    if (situacao === "Prova final"){
        const recuperacao = prova_final(situacao)
        const situacao_pf = situacao_pos_pf(media_semestral,recuperacao)
        const mediapf = (media_semestral + recuperacao) / 2
    
        console.log("Média semestral pós prova final:",mediapf.toFixed(1))
        console.log("Situação:",situacao_pf)
    }
}
main()

function aprovacao(valor){
    if (valor < 4){
        return "Aluno reprovado."
    }else if (valor < 7){
        return "Prova final"
    }else if (valor >= 7){
        return "Aluno aprovado."
    }
}

function prova_final(valor){
    if (valor === "Prova final"){
        const nota_pf = Number(entrada("Digite a nota da prova final: "))
        return nota_pf
    }
}

function situacao_pos_pf(valor1,valor2){
    if (((valor1 + valor2) / 2) >= 6){
        return "Aprovado pós-prova final."
    }else {
        return "Reprovado pós-prova final."
    }
}