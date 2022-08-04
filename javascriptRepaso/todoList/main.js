console.log('todo list');
const d = document;
const $input = d.getElementById('input');
const $button = d.getElementById('button');
const $ul = d.getElementById('ul');

$button.addEventListener('click', (event) => {
    event.preventDefault();
    agregar();
})


const agregar = () => {
    const contenido = $input.value;
    const li = d.createElement('li');
    const buttonEliminar = d.createElement('button');
    buttonEliminar.innerText = 'Eliminar';
    li.innerText = contenido;
    li.appendChild(buttonEliminar);
    buttonEliminar.addEventListener('click', (e)=>{
        $ul.removeChild(li);
        console.log(li);
    })
    $ul.appendChild(li);
    $input.value = '';
}
