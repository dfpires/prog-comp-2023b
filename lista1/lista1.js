function exe1(){

}
function exe2(){

}
function exe3(){

}
function exe4(){

}
function exe5(){

}
function exe6(){
    // recupera o salário fixo do usuário
    // Number converte em número
    let fixo = Number(document.getElementById("fixo").value)
    // recupera as vendas do usuário
    let vendas = Number(document.getElementById("vendas").value)
    // calcula comissão
    let comissao = vendas * 4 / 100
    // calcular salaário total
    let total = fixo + comissao
    alert("Comissão " + comissao + " Salário total " + total)
}
function exe7(){

}