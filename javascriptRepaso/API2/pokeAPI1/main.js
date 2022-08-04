

/* 
    const pokemons = (id) => {
        const url2 = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url2)
            .then((res) => res.json())
            .then((data) => {
                for (let i = 1; i < id; i++) {
                    console.log(data.name)
                    const parrafo2 = document.createElement('p');
                    parrafo2.innerHTML = data.name
                    const div = document.getElementById('div');
                    div.appendChild(parrafo2);
                }
            })
    }
    pokemons(5)
*/

const pokemons = async (id) => {
    for (let i = 1; i < id; i++) {
        const url2 = `https://pokeapi.co/api/v2/pokemon/${i}`
        await fetch(url2)
            .then((res) => res.json())
            .then((data) => {
                    console.log(data.name)
                    console.log(data)
                    const parrafo2 = document.createElement('p');
                    parrafo2.innerHTML = `${data.name} ${data.id}`
                    const div = document.getElementById('div');
                    div.appendChild(parrafo2);

                    const img = document.createElement('img');
                    img.setAttribute('src', data.sprites.front_default)
                    div.appendChild(img);     
            });
    }
    
}
pokemons(30) 
//el unico error que le encontre pero no se resolverlo es que aveces se imprime el pokemon numero 2 antes que el 1
// el error parece que lo aregle agregandole el await adelante del fetch.