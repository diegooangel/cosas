const $h2    = document.getElementsByTagName('h2')[0];

let sec = 0;
let min = 0;
let hrs = 0;
let t;
//Esta funcion lo que hace es cada vez que se ejecuta se le suma uno a sec, cuando sec llegue a 60, sec pasa a tener 0, y se le suma uno a min y asi hasta con la hrs.
const tick = () => {
    sec++;
    if(sec >= 60) {
        sec = 0;
        min++;
        if(min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

const add = () => {
    tick();
    $h2.textContent =   (hrs > 9 ? hrs : "0" + hrs) 
                + ":" + (min > 9 ? min : "0" + min) //esto dice que si min es mayor a 9, que imprima min, sino que sea 0 + min, lo que seria por ejemplo 09 min
                + ":" + (sec > 9 ? sec : "0" + sec);
    //timer(); //luego de que pasa un segundo para ejecutarse add, se vuelve ejecutar timer(), ya que sin timer() dentro de la funcion add(), solo se ejecutaria solo una vez, despues de un segundo.
}

const timer = () => {
    t = setTimeout(add, 1000); //hace que cada un segundo se ejecute la funcion add y la almacena dentro de t.
}

const stop = () => {
    clearTimeout(t);
}

const reset = () => {
    $h2.textContent = '00:00:00';
    sec = 0;
    min = 0;
    hrs = 0;
}

