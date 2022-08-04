/* 
    Un usuario puede introducir un numero.
    El sistema elige un numero aleatorio del 1 al 6.
    Si el numero de usuario es igual al numero aleatorio, le da el usuario 2 puntos.
    Si el numero del usuario es diferente al numero aleatorio por 1, le da al usuario 1 punto. De otra manera, le da al usuario 0 puntos.
    El usuario puede jugar tanto como quiera.
*/

const insertaNum = () => {
    return new Promise ((resolve, reject) => {
        const numUsuario = Number(window.prompt('inserte un numero del 1 al 6: '));

        // Math es uno de los objetos globales u objeto incorporado estandar de javascript. Contiene ademas de funciones como floor(), round() y ceil().
        // Math.floor() es un metodo del objeto estandar Math que redondea un numero dado hacia el numero entero anterior. Para los numeros negativos esto significa que el numero sera redondeado lejos de 0 en vez de le numero de menor valor absoluto debido a que Math.floor() devuelve el numero entero que sea menor o igual al numero dado. ejemplo Math.floor(1.7); esto va a dar 1 ya que redondea hacia el numero anterior.
        const aletorio = Math.floor(Math.random() * 6 + 1);

        // isNaN la funcion determina cuando el valor es NaN o no.
        if (isNaN(numUsuario)) {
            reject(new Error(console.log(`${numUsuario} no es un numero`)));
        }
        if (numUsuario === aletorio) {
            resolve({
                puntos: 2,
                aletorio
            });
        }
        else if(numUsuario === aletorio + 1 || numUsuario === aletorio - 1){
            resolve({
                puntos: 1,
                aletorio
            });
        } else {
            resolve({
                puntos: 0,
                aletorio
            });
        }
    });
}
const continuarJuego = () => {
    return new Promise((resolve) => {
        if (window.confirm('quiere seguir jugando:')){
            resolve(true);
        } else{
            resolve(false);
        }
    })
}
/* 
const suponer = () => {
    insertaNum()
        .then((resolve) => {
            alert(`Dado ${resolve.aletorio}: obtuviste ${resolve.puntos} puntos`)
            continuarJuego()
                .then((resolve) => {
                    if(resolve){
                        suponer();
                    } else{
                        alert(`termino el juego`);
                    }
                });
        })
        .catch((reject) => {
            alert(reject);
        })
}

suponer();*/

const suponer = async() => {
    try {
        const result = await insertaNum();
        alert(`Dado ${result.aletorio}: obtuviste ${result.puntos} puntos`)
        const estaContinuando = await continuarJuego();
        if (estaContinuando) {
            suponer();
        } else {
            alert('termino el juego')
        }
    } catch (error) {
        alert(error);
    }
}

suponer();