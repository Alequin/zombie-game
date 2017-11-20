import Population from "./population/Population.js"

class Base{
  constructor(options = {}){
    this.population = new Population(3, options.people)
  }
}

export default Base
