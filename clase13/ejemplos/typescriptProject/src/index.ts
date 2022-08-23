import * as operaciones from './lib/operaciones';

const num1: number = 10, num2: number = 4;

console.log(`La suma de ${num1} + ${num2} es ${operaciones.sumar(num1, num2)}`)
console.log(`La resta de ${num1} - ${num2} es ${operaciones.restar(num1, num2)}`)
console.log(`La multi de ${num1} * ${num2} es ${operaciones.multiplicar(num1, num2)}`)
console.log(`La div de ${num1} / ${num2} es ${operaciones.div(num1, num2)}`)