console.log('hola');

let numero = 0;
const div = document.getElementById('div');
div.innerHTML = `<h2> ${numero} </h2>`


const incrementar = () => {
    numero += 1
    div.innerHTML = `<h2> ${numero} </h2>`
}
const reiniciar = () => {
    numero = 0
    div.innerHTML = `<h2> ${numero} </h2>`
}
const disminuir = () => {
    numero -= 1
    div.innerHTML = `<h2> ${numero} </h2>`
}