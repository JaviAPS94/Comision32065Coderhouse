Promise.resolve(10)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x === 22) throw 'Error Ejecución'
        else return 80;
    })
    .then(x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)

Promise.resolve(15)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {
        if (x === 22) throw 'Error Ejecución'
        else return 80;
    })
    .then(x => x + 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)