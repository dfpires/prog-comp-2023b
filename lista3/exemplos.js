function conta10(){
    let conta = 1
    while (conta <= 10){
        console.log("Boa noite " + conta)
        conta = conta + 1 // incremento de 1
    }
    console.log("Depois do while " + conta)
}

function somaIdades(){
    let conta = 1
    let soma = 0
    let qtde = Number(prompt('Informe a qtde de idades'))
    while (conta <= qtde){
        let idade = Number(prompt('Informe idade ' + conta))
      //  console.log('Idade ' + idade)
        soma = soma + idade // acumulador
      //  console.log('Soma ' + soma)
        conta = conta + 1 // contador
    }
    let media = soma / qtde
    alert('A média das idades é ' + media)
}

function tabuada(){
    let nro = Number(prompt('Informe um número'))
    let conta = 0
    while (conta <= 10){
        alert(nro + " x " + conta + " = " + nro*conta)
        conta++
    }
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Despesa </th> <th> Lucro </th></tr>"
    while(preco >= 1.0){
        let lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    saida = saida + "</table>"
    document.getElementById("tabela").innerHTML = saida
}