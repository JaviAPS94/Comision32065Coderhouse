function sumar() {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    return suma;
}

process.on('message', msg => {
    if (msg === 'start') {
        console.log('Child process received START message');
        let result = sumar();
        process.send(result);
    }
})