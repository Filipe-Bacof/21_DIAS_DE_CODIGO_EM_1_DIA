function mostrar(info) {
    let informacoes = document.querySelectorAll('.card');
    console.log(informacoes)
    for (let i=0; i<informacoes.length; i++) {
        informacoes[i].style.display = "none";
    }
    document.querySelector(`.${info}`).style.display = "block";
}

function mostrarEmail () {
    let texto = document.querySelector('.meu-email-clique');
    let email = document.querySelector('.meu-email');
    if (email.style.display == "none") {
        texto.style.display = "none";
        email.style.display = "block";
    } else {
        texto.style.display = "block";
        email.style.display = "none";
    }
}