function exe5(){
    // recupera nro1, nro2, escolha 
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let escolha = Number(document.getElementById("escolha").value)
    // vamos verificar o que o usuário escolheu
    let resultado
    switch(escolha){
        case 1: resultado = (nro1 + nro2) / 2
                break // não entra nos cases de baixo
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = nro1 * nro2
                break
        case 4: if (nro2 != 0) {
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Não pode dividir por zero"
                }
                break
        default: resultado = "Opção inválida"
    }
    // saída do dados
    document.getElementById("resultado").innerHTML = resultado
}