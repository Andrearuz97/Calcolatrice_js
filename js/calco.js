function aggiungiNum(elemento) {
    let simbolo = elemento.getAttribute('data-num');

    let display = document.querySelector('#display');
    display.value += simbolo;
}

function totale() {
    let display = document.querySelector('#display');

    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Errore';
    }
}

function cancella() {
    let display = document.querySelector('#display');
    display.value = "";
}

function calcola(funzione) {
    let display = document.querySelector('#display');
    let valore = parseFloat(display.value) || 0;

    switch(funzione) {
        case 'pig':
            display.value += Math.PI;
            break;
        case 'last':
            display.value = display.value.slice(0, -1);           
            break;
        case 'sqrt':
            display.value = Math.sqrt(valore).toString();
            break;
        case 'log':
            display.value = Math.log(valore).toString();
            break;
        case 'sin':
            display.value = Math.sin(valore * Math.PI / 180).toString();
            break;
        case 'cos':
            display.value = Math.cos(valore * Math.PI / 180).toString();
            break;
        case 'tan':
            display.value = Math.tan(valore * Math.PI / 180).toString();
            break;
        default:
            break;
    }
}
