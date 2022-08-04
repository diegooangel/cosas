console.log('clases en javascipt UwU');

class Perro {
    constructor(raza, tamaño, color, genero){
        this.raza = raza,
        this.tatamaño =tamaño,
        this.color = color,
        this.genero = genero

        }
    //Los metodos (funciones) en las clases no llevan la palabra function o const o let.
    ladrar(){
        console.log('guagua');
        }
}

const carlitos = new Perro('chiguagua', 'pequeño', 'marronsito', 'macho');
carlitos.ladrar(); //aca ejecutamos la funcion ladrar que esta dentro de la clase perro


//aca use el destructuracion.
const {raza, color} = carlitos;
console.log(raza, color)