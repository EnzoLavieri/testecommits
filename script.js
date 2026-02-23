const receitaBruta = prompt("Digite sua renda bruta")
console.log("val receitaBruta", receitaBruta)

const impostos = confirm("Voce tem impostos a declarar?")
let valReceitaDescImposto = receitaBruta; 
if (impostos) {
    let continua = true

    while (continua) {
        let promptImposto = Number(prompt("Digite em % o valor do imposto"))
        valReceitaDescImposto -= valReceitaDescImposto * (promptImposto / 100)
        alert(`Valor atual da sua receita bruta descontando impostos anteriores: R$${valReceitaDescImposto.toFixed(2)}`)
        continua = confirm("Voce tem mais impostos a declarar?")
    }

}

const custos = Number(prompt("Quais foram seus custos?"))
const receita = Number(valReceitaDescImposto)
const lucroBruto = receita - custos
alert(`Seu lucro bruto é de: R$${lucroBruto.toFixed(2)}`)

const despesas = Number(prompt("Quais foram suas despesas?"))
const lucroAntesIR = lucroBruto - despesas
alert(`Seu lucro antes do imposto de renda é de: R$${lucroAntesIR.toFixed(2)}`)

const impostoDeRenda = Number(prompt("Em porcentagem, qual o valor do seu imposto de renda?"))
const subIR = lucroAntesIR * (impostoDeRenda / 100)
const lucroLiquido = lucroAntesIR - subIR
alert(`Seu lucro liquido é de: R$${lucroLiquido.toFixed(2)}`)