console.log('api3 uWu');
const $div = document.getElementById('div');
const urlUsuario = 'https://reqres.in/api/users?page=2';
const obtenerUsuario = async() => {
    const resp = await fetch( urlUsuario );
    //const { data: usuarios } = await resp.json(); //aca destructuramos la promesa data, porque solo nos interesaba la propiedad data, y le cambiamos el nombre a usuarios para que no quede tan confuso.
    const data = await resp.json();
    const usuario = () => {
        $div.innerHTML = `
        <ul>
            <li>${data.data[0].id}</li>
            <li>${data.data[0].email}</li>
            <li>${data.data[0].first_name}</li>
            <li>${data.data[0].last_name}</li>
        </ul>`
    }
    usuario();
}
obtenerUsuario();
obtenerUsuario();


