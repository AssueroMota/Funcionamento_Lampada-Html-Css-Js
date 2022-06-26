
//Variaveis

let ligando = document.getElementById('ligar');
let desligando = document.getElementById('desligar');
let lamp = document.getElementById('lampada');



//Function

function quandoquebrado(){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}
function turnOn(){
    if (!quandoquebrado() ) {
    lamp.src= './imagens/ligada.jpg';
}
}
function turnOff(){
    if ( !quandoquebrado() ) {
    lamp.src= './imagens/desligada.jpg';
}
}



function quebrar(){
    lamp.src= './imagens/quebrada.jpg';
}


//Eventos

ligar.addEventListener('click',turnOn);
desligar.addEventListener('click',turnOff);
lamp.addEventListener('mouseover',turnOn);
lamp.addEventListener('mouseleave',turnOff);
lamp.addEventListener('dblclick',quebrar);