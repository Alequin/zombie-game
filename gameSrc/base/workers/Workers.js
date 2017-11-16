
class Workers{

  constructor(){
    this.workers = []
    this._thisTurnEffortUsed = 0
    this._thisTurnTotalEffort = 0
    this.lastTurnEffortUsed = 0
    this.lastTurnTotalEffort = 0
  }

  getTotalEffort(){
    let count = 0
    for(let worker of this.workers){
      count += worker.getEffort()
    }
    return count
  }

  setTotalEffortThisTurn(){
    this._thisTurnTotalEffort = this.getTotalEffort()
  }

  getTotalEffortThisTurn(){
    return this._thisTurnTotalEffort
  }
}

export default Workers
