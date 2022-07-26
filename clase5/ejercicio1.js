const obj = {};

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.ceil(Math.random() * 20);
    if (obj[randomNumber]) {
        obj[randomNumber]++;
    } else {
        obj[randomNumber] = 1; 
    }
    obj[randomNumber] ? obj[randomNumber]++ : obj[randomNumber] = 1
}
console.log(obj);