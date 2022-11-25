export default class StrategyA {
    constructor(name) {
        this.name = name;
    }

    doAction() {
        //Debería implementar la lógica particular de la estrategia A
        console.log(this.name)
        console.log('Soy la estrategia A');
    }
}