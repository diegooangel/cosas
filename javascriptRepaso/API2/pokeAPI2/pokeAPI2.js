console.log('Poke API 2');
//const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
const url = `https://pokeapi.co/api/v2/pokemon/25`;
fetch(url)
    .then(res => res.json())
    //.then(data => console.log(`${data.name} ${data.sprites.front_default}`))
    .then((data) => {
        const div = document.getElementById('div');
        const p = document.createElement('p');
        p.innerHTML = `Pokemon elegido es: ${data.name}`;
        div.appendChild(p);
        const img = document.getElementById('img');
        img.setAttribute('src', data.sprites.front_default)    //setAttribute establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
    })