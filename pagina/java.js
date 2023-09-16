document.addEventListener('DOMContentLoaded', function () {
    const botonMenu = document.getElementById('botonMenu');
    const menu = document.getElementById('menu');

    botonMenu.addEventListener('click', () => {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});

function RedirigirFormulario() {
    window.location.href = "/pagina/formulario.html";
}
const listadetodo = [
    ["Aceite vegetal", "aceite.png", "$20000"],
    ["Chocolate corona", "chocolate.png", "$20000"],
    ["Galletas saltin", "galletas.png", "$20000"],
    ["Granos", "granos.png", "$20000"],
    ["Jugo Hit", "hit.png", "$20000"],
    ["Pony malta", "malta.png", "$20000"],
    ["Milo", "milo.png", "$20000"],
    ["Queso crema", "queso_crema.png", "$20000"],

]
const listadefrutas = [
    ["Aguacate maduro","aguacate.png","$20000"],
    ["Ajo","ajo.png","$20000"],
    ["Cilantro","cilantro.png","$20000"],
    ["Mango","mango.png","$20000"],
    ["Papa","papa.png","$20000"],
    ["Papaya","papaya.png","$20000"],
    ["Piña","pina.png","$20000"],
    ["Platano","platano.png","$20000"],


]
const divtodo = document.getElementById('ver-productos');
const divfrutas = document.getElementById('ver-frutas');

if (divtodo) {
    mostrarCartas(listadetodo, divtodo,"abarrotes");
    mostrarSlider();
}
if (divfrutas) {
    mostrarCartas(listadefrutas, divfrutas,"frutas");
   
}

function mostrarCartas(array, divId, tipo) {
    const arrayNombres = array.map(e => e[0])
    const arrayImagenes = array.map(e => e[1])
    const arrayPrecios = array.map(e => e[2])

    for(let i = 0; i < 8; i++) {
        let divCarta = document.createElement('div');
        divCarta.className = 'cards';
        divId.append(divCarta);

        /* Se crea una etiqueta <img> y se referencia */
        let img = document.createElement('img');
        img.src = "imagenes/"+arrayImagenes[i];
        img.alt = "No existe";
        divCarta.append(img);

        /* Se crea una etiqueta <p> y se muestra el texto */
        let parrafo = document.createElement('p');
        divCarta.append(parrafo);
        parrafo.innerHTML = arrayNombres[i];

        /* Se crea una etiqueta <p> y se muestra el precio */
        let precio = document.createElement('p');
        divCarta.append(precio);
        precio.innerHTML = arrayPrecios[i];

        /* Se crea una etiqueta <a> y se crea un enlace a otra página */
        let enlace = document.createElement('a');
        enlace.href = "PRODUCTOS/"+tipo+[i+1]+".html";
        enlace.innerHTML = "Detalle del producto",
        enlace.className = "btn";
        divCarta.append(enlace);
    }
}






