window.addEventListener('load', () => { //escuchamos cuando se carga el documento.

    const display = document.querySelector('.display');
    const keypadButtons = document.getElementsByClassName('key-button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
        })
    } )

    

})