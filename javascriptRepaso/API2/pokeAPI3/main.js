console.log(`pokeapi3 uwu`);

const div = document.getElementById('div');
const boton = document.getElementById('boton');
const input = document.getElementById('input');
boton.addEventListener('click', (e) => {
    console.log(input.value);
    const url = `https://pokeapi.co/api/v2/pokemon/${input.value}`;

    fetch(url)
        .then(res => res.json())
        .then(perro = (data) => {
            console.log(data);
            
            //Aca estoy creando un parrafo con el nombre del pokemon seleccionado.
            const p = document.createElement('p');
            p.innerHTML = data.name;
            div.appendChild(p);

            //Aca estoy guardando en una constante la img ya creada y agregandole la propiedad con la imagen del pokemon seleccionado.
            //const img = document.getElementById('img');
            const img = document.createElement('img');
            img.setAttribute('src', data.sprites.front_shiny);
            div.appendChild(img);

            
        })

});
/* 
const url = 'https://pokeapi.co/api/v2/pokemon/25';

fetch(url)
    .then(res => res.json())
    .then(perro = (data) => {
        console.log(data);
        
        //Aca estoy creando un parrafo con el nombre del pokemon seleccionado.
        const p = document.createElement('p');
        p.innerHTML = data.name;
        div.appendChild(p);

        //Aca estoy guardando en una constante la img ya creada y agregandole la propiedad con la imagen del pokemon seleccionado.
        const img = document.getElementById('img');
        img.setAttribute('src', data.sprites.front_shiny);

        
    })
*/