let num1 = '';
let num2 = '';
let operador = '';
const tela = document.querySelector('.tela');

function numeros(num) {
    num1 += num;
    tela.innerHTML = num1;
}

function operator(op) {
    operador = op;
    num2 = num1;
    num1 = '';
    tela.innerHTML = '';
}

function igual() {
    switch (operador) {
        case 'a':
            tela.innerHTML = (+num2) + (+num1);
            num2 = (+num2) + (+num1);
            num1 = '';
            operador = '';
        break;
        case 's':
            tela.innerHTML = (+num2) - (+num1);
            num2 = (+num2) - (+num1);
            num1 = '';
            operador = '';
        break;
        case 'm':
            tela.innerHTML = num2 * num1;
            num2 = num2 * num1;
            num1 = '';
            operador = '';
        break;
        case 'd':
            tela.innerHTML = num2 / num1;
            num2 = num2 / num1;
            num1 = '';
            operador = '';
        break;
        default:
            tela.innerHTML = 'erro';
        break;
    }
}