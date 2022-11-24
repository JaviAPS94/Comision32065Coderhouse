const Singleton = require('./SingletonClass');

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj.printValue();
obj2.printValue();

console.log("equals: ", obj === obj2);