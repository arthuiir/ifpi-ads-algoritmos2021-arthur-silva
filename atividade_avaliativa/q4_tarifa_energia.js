const entrada = require("prompt-sync")()

function main(){
    const leitura_atual = Number(entrada("Leitura atual:"))
    const leitura_anterior = Number(entrada("Leitura anterior: "))

    const leitura_real = leitura_atual - leitura_anterior
    const valor_faturado = faixa_consumo(leitura_real)
    const bandeira_tarifaria = bandeira(leitura_real)
    const qtd_bandeira = bandeira_tarifaria / 8 
    const icms = (valor_faturado / 100) * 25
    const pis_cofins = (valor_faturado / 100) * 15
    const ilumincao_publica = iluminacao(leitura_real)
    const total_faturado = valor_faturado + icms + pis_cofins + ilumincao_publica

    console.log("Consumo (Kw/h):",leitura_real)
    console.log("Valor faturado:",valor_faturado)
    console.log("Bandeira R$:",bandeira_tarifaria,  "Bandeiras ativas:",qtd_bandeira)
    console.log("ICMS R$:", icms.toFixed(2))
    console.log("PIS/COFINS R$:",pis_cofins.toFixed(2))
    console.log("Taxa de iluminação pública R$:",ilumincao_publica.toFixed(2))
    console.log("Total a pagar R$:",total_faturado.toFixed(2))

}

main()

function faixa_consumo(valor){
    if (valor <= 30){
        return "isento"
    }else if (valor <= 100){
        return 0.59 * valor
    }else if (valor > 100){
        return 0.75 * valor
    }
}

function iluminacao(valor){
    if (valor > 80){
        return 6
    }else{
        return 0
    }
}

function bandeira(valor){
    if (valor >= 100){
        return Math.floor(valor / 100) * 8
    }else {
        return 0
    }
}