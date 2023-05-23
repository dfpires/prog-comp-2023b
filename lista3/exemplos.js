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
function exe21(){
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulos = 0, brancos = 0;
    let total, opcao;
    do{
        opcao = Number(prompt('Escolha uma opção: \n 1. Cand 1 \n 2. Cand 2 \n 3. Cand 3 \n 4. Cand 4 \n 5. Nulo \n 6. Branco \n 0. Sair do programa'))
        switch(opcao){
            case 1: cand1++; break
            case 2: cand2++; break
            case 3: cand3++; break
            case 4: cand4++; break
            case 5: nulos++; break
            case 6: brancos++; break
            case 0: alert('VOtação encerrada'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 0)
    total = cand1 + cand2 + cand3 + cand4 + nulos + brancos
    if (total > 0){
        alert(`% de votos nulos ${nulos/total*100}`)
        alert(`% de votos brancos ${brancos/total*100}`)
    }
    else alert('Nenhum voto computado')   
}