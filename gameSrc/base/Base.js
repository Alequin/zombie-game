import Population from "./population/Population.js"
import TurnEffort from "./population/TurnEffort.js"

class Base{
  constructor(options = {}){
    this.population = new Population(options.people)

    if(!options.turnEffort){
      this.effort = new TurnEffort()
    }else{
      this.effort = new TurnEffort(
        options.turnEffort.usedThisTurn,
        options.turnEffort.totalThisTurn,
        options.turnEffort.usedLastTurn,
        options.turnEffort.totalLastTurn,
      )
    }

    this._size = options.size || 500
  }

  getSize(){
    return this._size
  }
}

export default Base
