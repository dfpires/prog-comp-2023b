function calcularAdicional(){
    // se a caixa de seleção estiver checado
    let soma = 0
    if (document.getElementById("padrao").checked){
        let qtdePadrao = Number(document.getElementById("qtdePadrao").value)
        soma = soma + (qtdePadrao * 50)
    }
    if (document.getElementById("kitAlimenta").checked){
        let qtdePadrao = Number(document.getElementById("qtdeKitAlimenta").value)
        soma = soma + (qtdePadrao * 25)
    }
    // mostra resultado ao usuário
    document.getElementById("resultado").innerHTML = soma + " pontos"
}