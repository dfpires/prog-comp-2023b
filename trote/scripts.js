function trocaSwitch(){
    // vamos obter a página ou documento HTML
    // na verdade, obteremos o elemento html (root)
    const html = document.documentElement
    // vamos verificar se no documento tem a classe claro
    // if é o comando se
    if (html.classList.contains('claro')) {
        // como o documento tem a classe claro, vamos remover
        html.classList.remove('claro')
    }
    else {
        // como o documento não tem a classe claro, vamos adicionar
        html.classList.add('claro')
    }
}