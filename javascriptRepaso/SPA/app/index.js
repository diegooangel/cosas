console.log('SPA uWu');
import { App, about, ponch,  pokemonCreate } from "./App.js";

const d = document;

d.addEventListener('DOMContentLoaded', App); //aca le decimos al documento que cuando se termine de cargar, ejecute la funcion de App.
//DOMContentLoaded – el navegador HTML está completamente cargado y el árbol DOM está construido, pero es posible que los recursos externos como <img> y hojas de estilo aún no se hayan cargado.


const h3 = document.getElementById('h3');
h3.addEventListener('click', () =>  {
    about();
// Aca capturamos el evento del click del boton, y llamamos a la PokeAPI donde creamos un parrafo y una imagen gracias a la funcion pokemonCreate() exportada del archivo App.js
    const boton = document.getElementById('boton');
    boton.addEventListener( 'click', (e) => {
        e.preventDefault();
        const input = document.getElementById('input');
        const pokemon = input.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
            .then((data) => {
                pokemonCreate(data.name , data.sprites.front_default);
            })
            .catch(err => alert(`nombre o numero de pokemon incorrecto ${err}`));
    })
})



const h4 = document.getElementById('h4');
h4.addEventListener('click', () =>  {
    ponch();
})

