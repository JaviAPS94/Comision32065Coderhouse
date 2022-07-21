const mostrarLetras = (str) => {
    let count = 0;
    const interval = setInterval(() => {
        'hola'

        console.log(str[count]);
        if (count === str.length) {
            clearInterval(interval);
            fin();
        }
        count++;
    }, 1000);
};

const fin = () => console.log("terminé");

setTimeout(mostrarLetras, 0, "hola");
setTimeout(mostrarLetras, 250, "hola");
setTimeout(mostrarLetras, 500, "hola");