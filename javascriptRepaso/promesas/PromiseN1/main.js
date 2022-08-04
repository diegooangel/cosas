console.log('Hola mundo');
// En javascript, podemos crear una nueva Promise con new Promise(), que toma una funcion como argumento: (resolve, reject) => {}.
// En esta funcion, resolve(resolver) y reject(rechazar) son funciones callback, que se proporcinan de forma predeterminada en javascript 
const miCumple = (KayoSeEnferma) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!KayoSeEnferma) {
                resolve(2);
            } else {
                reject(console.error('estoy kiste'));
            }
        }, 5000);
    });
}
//  Si Kayo no esta enferma, ejecutamos resolve con 2 como argumento.
//  Si Kayo esta enferma, ejecutamos el reject con un new Error('estoy kiste') como argumento. Aunque puedes pasar cualquier cosa a reject como argumento, se recomienda pasarle un objeto Error.

// Ahora porque miCumple() retorna una Promise, tenemos acceso a los metodos then(entonces), catch(atrapa), y finally(finalmente).
// Y tambien tenemos acceso a los argumentos que se pasaron a resolve y reject antes en ese then y catch.

miCumple(false)
    .then((resolve) => {
        console.log(`Para mi fiesta voy a tener ${resolve} tortas, gracias a que Kayo no esta enferma`);
    })
    .catch((reject) => {
        console.log(reject);
    })
    .finally(console.log(`anasheee hay fiesta`));