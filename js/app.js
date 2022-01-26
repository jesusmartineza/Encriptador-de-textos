//VARIABLES

let botonEncriptar = document.querySelector('#encriptar');
let botonDesencriptar = document.querySelector('#desencriptar');
let botonCopiar = document.querySelector('#copiar');
let inputTexto = document.querySelector('#codigo');
inputTexto.focus();
//FUNCIONES

function btnEncriptar() {
    var cifrar = document.querySelector('#codigo').value;
    var cifrado = cifrar
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.querySelector('#mensaje').value = cifrado;
    document.querySelector('#codigo').value =
        document.querySelector('placeholder');
}

botonEncriptar.onclick = btnEncriptar;

function btnDesencriptar() {
    var cifrar = document.querySelector('#codigo').value;
    var cifrado = cifrar
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector('#mensaje').value = cifrado;
    document.querySelector('#codigo').value =
        document.querySelector('placeholder');
}

botonDesencriptar.onclick = btnDesencriptar;

function btnCopia() {
    const copiar = document.querySelector('#mensaje');
    copiar.select();
    document.execCommand('Copy');
    document.querySelector('#mensaje').value =
        document.querySelector('placeholder');
}

botonCopiar.onclick = btnCopia;
