"use strict";
window.onload = GeneradorCaptcha;
let btnEnviar = document.getElementById("boton-enviar");
btnEnviar.addEventListener("click",VerificarCaptcha);

function VerificarCaptcha(){
    let textIngresado = document.getElementById("txtcaptcha");
    let cap = document.getElementById("captcha");
    let textvalidacion= document.getElementById("validacionCaptcha");

    if (textIngresado.value == cap.innerHTML){
        textvalidacion.innerHTML = ("La suscripcion al newsletter se ha efectuado con exito");
        document.getElementById("cajavalidacion").classList.remove("incorrecto");
        document.getElementById("cajavalidacion").classList.add("correcto");
        btnEnviar.disabled = true;
    } else {
        textvalidacion.innerHTML = ("El texto ingresado es Incorrecto");
        document.getElementById("cajavalidacion").classList.add("incorrecto");
        GeneradorCaptcha();
        
    }
}
function GeneradorCaptcha(){
    let indice;
    let character;
    let captcha = "";

    for (indice = 0; indice <6; indice++){

        character = GenLetraONumero();
        captcha = captcha + character;
    } 

    let tituloCaptcha = document.getElementById("captcha");
    tituloCaptcha.innerHTML = captcha;
}

function GenLetraONumero(){

    let Num_o_Letra = Math.floor((Math.random()*10)+1);

    if (Num_o_Letra %2 == 0) {
        let valor = numrandom();
        return valor;
    }else {
        let valor = letrarandom();
        return valor;
    }

    
}
function letrarandom (){
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

    let valor = Math.floor((Math.random()*26));
    return letras [valor];
}

function numrandom (){
    let valor = Math.floor((Math.random()*10));
    
    return valor.toString();
}

