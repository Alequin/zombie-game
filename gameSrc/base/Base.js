import Population from "./population/Population.js"
import TurnEffort from "./population/TurnEffort.js"

class Base{
  constructor(options = {}){
    this.population = new Population(3, options.people)
    this.effort = new TurnEffort(3, options.people)
  }
}

export default Base
