function calcularIMC(){
    // recuperar o peso informado na caixa de texto
    // document representa toda a página html
    let peso = document.getElementbyId("peso").value // valor digitado
    // recuperar a altura informada na caixa de texto
    let altura = document.getElementById("altura").value

    // calcula IMC
    // peso dividido pela altura ao quadrado
    let imc = (peso / (altura*altura)) // peso / Math.pow(altura, 2)
    // mostra resultado ao usuário
    alert(imc.toFixed(2)) // mostra o IMC com 2 casas depois da vírgula
}