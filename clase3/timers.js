// function myFunc(param) {
//     console.log(`parametro: ${param}`);
// }

// setTimeout(myFunc, 1500, asdad, asd);

let count = 0;

let interval = setInterval(() => {
    count += 1;
    console.log('Alex');
    if (count === 5) {
        clearInterval(interval)
    }
}, 1500);