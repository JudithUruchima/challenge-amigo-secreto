// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let elementoHTML = '';

function asignarId(nombreId) {
    return document.getElementById(nombreId);
}


function agregarAmigo() {
    if (verificarVacio()) {
        alert('Por favor ingresa un nombre válido')
    }
    else {
        mostrarLista(agregarALista());
        limpiarCajaTexto();
    }

}
function agregarALista() {
    if (verificarVacio()) {
    }
    else {
        nombreAmigo = asignarId('amigo'); // getElementById no necesita #
        let nombreAgregar = nombreAmigo.value;
        listaDeAmigos.push(nombreAgregar);
    }
    return listaDeAmigos;
}


function mostrarLista(lista) {
    elementoHTML = asignarId('listaAmigos');
    elementoHTML.innerHTML = '';
    for (let index = 0; index < lista.length; index++) {
        let item = document.createElement('li');   // Crear un nuevo elemento <li>
        item.textContent = lista[index]; // Asignar el texto del amigo
        elementoHTML.appendChild(item); // Agregar el <li> a la <ul>
    }
}


function limpiarCajaTexto() {
    asignarId('amigo').value = '';
}

function verificarVacio() {
    if (asignarId('amigo').value == '') {
        return true;
    }
    else {
        return false;
    }
}

function sortearAmigo() {
    let lista = agregarALista();
    // console.log(lista.length);
    if (lista.length != 0) {
        let indiceRandom = Math.floor(Math.random() * (lista.length)); //No incluye el length
        //console.log(indiceRandom);
        elementoHTML = asignarId('resultado');
        return elementoHTML.innerHTML = `El amigo secreto sorteado es: ${lista[indiceRandom]}`;
    } else {
        alert('Necesita agregar amigos, o será que no tiene, pipipi');
    }
}