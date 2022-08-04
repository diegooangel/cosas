import * as CRUD from './crud-provider.js'

CRUD.getUsuario(2).then( console.log );

CRUD.crearUsuario({
    name: 'Diego',
    job: 'Programador'
}).then(console.log)

CRUD.actualizarUsuario(2, {
    name: 'Pedro',
    job: 'Puta'
}).then(console.log);

CRUD.borrarUsuario( 1 ).then( console.log );