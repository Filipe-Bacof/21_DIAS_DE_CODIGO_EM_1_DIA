function mostrar(info) {
    let informacoes = document.querySelectorAll('.card');
    console.log(informacoes)
    for (let i=0; i<informacoes.length; i++) {
        informacoes[i].style.display = "none";
    }
    document.querySelector(`.${info}`).style.display = "block";
}