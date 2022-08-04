const $h2 = document.getElementById('cronometro');
const $buttonIniciar = document.getElementById('buttonIniciar');
let milseg = 0;
let seg = 0;
let min = 0;
let hrs = 0;
let t;
const ticktack = () => {
    milseg++;
    if(milseg >= 60){
        milseg = 0;
        seg++;
        if(seg >= 60){
            min++;
            seg = 0;
            if(min >= 60){
                hrs++;
                min = 0;
            }
        }
    }
    
}
const agregar = () => {
    ticktack();
    $h2.textContent = `${hrs} : ${min} : ${seg} : ${milseg}`;
    tiempo();
}
const tiempo = () => {
    t = setTimeout(() => {
            agregar();
        }, 16.6);
    $buttonIniciar.disabled = true;
}
const detener = () => {
    clearTimeout(t);
    $buttonIniciar.disabled = false;
}
const reiniciar = () => {
    milseg = 0;
    seg = 0;
    min = 0;
    hrs = 0;
    desactivar = 0;
    $h2.textContent = `0 : 0 : 0 : 0`;
}

