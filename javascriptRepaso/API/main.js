console.log('funciona');
const parrafo = document.getElementById('parrafo');


const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            parrafo.innerText = JSON.stringify(`El pokemon que usted eligio es ${data.name}`)
        })     //aca va un segundo then porque en el then de arriba trae una Promise. data seria un objeto, y cuando le agrego .name me trae los nombres de los pokemones.
        //.then((data) => data.name)  //esto es casi lo mismo de arriba solo que sin el console.log();
}
fetchPokemon(2);

//fetchPokemons(9);

/* 


const parrafoPokemon = async (id) => {
    const parrafo = document.getElementById('parrafo');
    const nombrePokemon =  fetchPokemon(id)
    console.log(nombrePokemon)
    const nombre = document.createTextNode(nombrePokemon);
    parrafo.appendChild(nombre);
}
parrafoPokemon(2);*/
