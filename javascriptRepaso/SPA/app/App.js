export const App = () => {
    document.getElementById('root').innerHTML = `<h1>Bienvenido a mi primer SPA (Single Page Application) uWu. </h1>`
}
const seccion      = document.getElementById('about');
export const about = () => {
    seccion.innerHTML = 
    `<form action="" method="get">
        <label>Usuario</label>
        <input type="text" placeholder="Nombre o numero del pokemon..." id="input">
        <button id="boton">Enviar</button>
    </form>` 
}

export const ponch = () => {
    seccion.innerHTML = 
    `<h3>Ponch</h3> <p>Puchiiiii</p>` 
}

export const pokemonCreate =  ( name, imagen) => {
// Creamos la imagen.     
    const img = document.createElement('img');
    img.setAttribute('src', imagen );
    seccion.appendChild(img);
// Creamos el parrafo.
    const p = document.createElement('p');
    p.innerText = name;
    seccion.appendChild(p);
}

