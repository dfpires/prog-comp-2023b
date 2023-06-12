function exe1(){
    let vet = []
    // entrada de dados
    for(let i=0;i<6;i++){
        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))
    }
    // percorre o vetor e criar 2 novos vetores
    let pares = []; let impares = [];
    let iPares = 0; let iImpares = 0; // índices dos vetores
    for(let i=0;i<6;i++){
        if (vet[i] % 2 == 0){
            pares[iPares] = vet[i]
            iPares++ // incrementa para a próxima inserção
        }
        else {
            impares[iImpares] = vet[i]
            iImpares++  // incrementa para a próxima inserção
        }
    }
    console.log(`Valores pares ${pares} e a qtde é ${pares.length}`)
    console.log(`Valores ímpares ${impares} e a qtde é ${impares.length}`)
}

function exe2(){
    let vet = []; let mult2 = []; let mult3 = []; let mult23 = [];
    for(let i=0;i<7;i++){
        vet[i] = Number(prompt(`Informe o elemento`))
    }
    for(let i=0;i<7;i++){
        if ((vet[i] % 2 == 0) && (vet[i] % 3 == 0)) {
            mult2.push(vet[i]); mult3.push(vet[i]);
            mult23.push(vet[i])
        }
        else if (vet[i] % 2 == 0){
            mult2.push(vet[i])
        }
        else if (vet[i] % 3 == 0){
            mult3.push(vet[i])
        }
    }
    console.log(`Múltiplos de 2 e 3 ${mult23} com qtde ${mult23.length}`)
    console.log(`Múltiplos de 2 ${mult2} com qtde ${mult2.length}`)
    console.log(`Múltiplos de 3 ${mult3} com qtde ${mult3.length}`)
}
function exe3(){
    // declaração dos vetores
    let codigos = []
    let estoque = []
    // entrada de 5 produtos
    for(let i=0;i<5;i++){
        codigos[i] = Number(prompt(`Informe o código do produto ${i+1}`))
        estoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }
    let cliente = Number(prompt(`Informe o código do cliente`))
    while (cliente != 0 ) {
        // vamos perguntar o que ele quer comprar
        let codigo = Number(prompt('Qual código do produto para comprar'))
        let qtde = Number(prompt('Qual a qtde desejada para compra'))
        // vamos procurar pra ver se o código existe
        let achou = false
        for(let i=0;i<5;i++){
            if (codigo == codigos[i]){
                // produto encontrado
                achou = true
                if (estoque[i] >= qtde) {
                    estoque[i] = estoque[i] - qtde // atualiza estoque
                }
                else {
                    alert('Estoque insuficiente')
                }
            }
        }
        if (!achou) {
            alert('Produto não existe')
        }
        cliente = Number(prompt(`Informe o código do cliente. Digite 0 para encerrar`))
    }
    console.log(estoque)
}
function exe5(){
    let logica = []
    let linguagem = []
    for(let i=0;i<10;i++){
        logica[i] = Number(prompt(`Informe aluno que faz Lógica`))
    }
    for(let i=0;i<10;i++){
        linguagem[i] = Number(prompt(`Informe aluno que faz Linguagem`))
    }
    // verifica alunos que fazem disciplinas em comum
    let comum = []
    for(let i=0;i<10;i++){ // para cada aluno que faz Lógica
        // verifica se está em Linguagem também
        if (linguagem.includes(logica[i])){ 
            comum.push(logica[i]) // adiciona no vetor comum
        }
    }
    console.log(`Alunos que fazem ambas ${comum}`)
}

function exe6(){
    let nomes = []
    let salarios = []
    // entrada de dados
    for(let i=0;i<10;i++){
        nomes[i] = prompt('Informe nome')
        salarios[i] = Number(prompt('Informa salário'))
    }
    // calcula maior e menor salário
    let maior = salarios[0] // assume que maior salário é o primeiro
    let menor = salarios[0] // assume que menor salário é o primeiro
    for(let i=0;i<10;i++){
        if (salarios[i] > maior){
            maior = salarios[i] // atualiza maior
        }
        if (salarios[i] < menor){
            menor = salarios[i] // atualiza menor
        }
    }
    let nomeMaior = nomes[salarios.indexOf(maior)]
    let nomeMenor = nomes[salarios.indexOf(menor)]
    console.log(`${nomeMaior} vai receber o maior salário ${maior}`)
    console.log(`${nomeMenor} vai receber o menor salário ${menor}`)
}

function codigosRepetidosNao(){
    let codigos = []
    let nomes = []
    for(let i=0;i<5;i++){
        let aux = Number(prompt('Informe código do aluno'))
        while (codigos.includes(aux)){
            aux = Number(prompt('Código já existe, insira um diferente'))
        }
        codigos[i] = aux
        nomes[i] = prompt('Informe nome do aluno')
    }
    // peça ao usuário para entrar com o código de um aluno
    // mostre o nome do aluno caso seja um código cadastrado
    let codigo = Number(prompt('Informe um código'))
    let posicao = codigos.indexOf(codigo)
    if (posicao == -1){
        alert('Código não está presente no vetor')
    }
    else {
        alert(`Nome do aluno é ${nomes[posicao]}`)
    }
}