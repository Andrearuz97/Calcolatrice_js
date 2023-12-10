function aggiungiNum(elemento){

    let simbolo = elemento.getAttribute('data-num');

    let display = document.querySelector('#display');
    display.value += simbolo;
}

function totale(){
    let display = document.querySelector('#display');

    display.value = eval(display.value);
}
function cancella(){
    let display = document.querySelector('#display');
    display.value = " "; 
}
