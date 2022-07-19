const operacion = (a, b, op) => op(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(operacion(4, 6, suma));
console.log(operacion(4, 6, resta));
console.log(operacion(4, 6, multiplicacion));
console.log(operacion(4, 6, division));