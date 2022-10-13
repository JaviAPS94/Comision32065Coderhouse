const calculo = () => {
    let suma = 0;
    for (let i = 0; i < 6e9; i++) {
        suma += i;
    }
    return suma;
};

process.on('message', (message) => {
    if (message === 'start') {
        console.log('Child process start');
        const result = calculo();
        process.send(result);
    }
});