import StrategyManager from "./StrategyManager.js";
import StrategyA from "./StrategyA.js";
import StrategyB from "./StrategyB.js";

const strategyManager = new StrategyManager();
const strategyA = new StrategyA('strategy1');
const strategyB = new StrategyB('strategy2');

strategyManager.addStrategy(strategyA);
strategyManager.addStrategy(strategyB);

const strategyToLoad = process.argv[2] || 'strategy1';

const strategyToExecute = strategyManager.getStrategy(strategyToLoad);
strategyToExecute.doAction();