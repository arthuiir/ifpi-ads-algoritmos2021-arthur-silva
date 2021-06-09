const entrada = require("prompt-sync")()

function main(){

    const nome = entrada("Qual o nome do vendedor? ")
    const vendas = Number(entrada("Quanto vendeu este mês(R$)? "))

    const salario_fixo = 1100
    const porcentagem_comissao = faixa_comissao(vendas)
    const valor_comissao = (vendas * porcentagem_comissao) /  100
    const salario_final = salario_fixo + valor_comissao

    console.log(salario_final)
    
}

function faixa_comissao(valor){
    if (valor > 5000 && valor <= 10000){
        return 5
    }else if (valor <= 30000){
        return 10
    }else if (valor > 30000){
        return 20
    }else if (valor >= 5000){
        return 0
    }
}
main()