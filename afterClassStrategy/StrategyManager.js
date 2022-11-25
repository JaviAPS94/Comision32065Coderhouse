export default class StrategyManager {
    constructor() {
        this.strategies = [];
    }

    addStrategy(strategy) {
        this.strategies = [...this.strategies, strategy];
    }

    getStrategy(name) {
        return this.strategies.find(strategy => strategy.name === name);
    }
}