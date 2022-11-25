export default class StrategyB {
    constructor(name) {
        this.name = name;
    }

    doAction() {
        //Debería implementar la lógica particular de la estrategia B
        console.log(this.name);
        console.log('Soy la estrategia B');
    }
}