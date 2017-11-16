
class Workers{

  constructor(){
    this.workers = []
    this._effortUsedThisTurn = 0
    this._totalEffortThisTurn = 0
    this._effortUsedLastTurn = 0
    this._totalEffortLastTurn = 0
  }

  getTotalEffort(){
    let count = 0
    for(let worker of this.workers){
      count += worker.getEffort()
    }
    return count
  }

  getEffortUsedThisTurn(){
    return this._effortUsedThisTurn
  }

  getTotalEffortThisTurn(){
    return this._totalEffortThisTurn
  }

  getEffortUsedLastTurn(){
    return this._effortUsedLastTurn
  }

  getTotalEffortLastTurn(){
    return this._totalEffortLastTurn
  }

  prepareEffortValues(){
    this._effortUsedLastTurn = this._effortUsedThisTurn
    this._totalEffortLastTurn = this._totalEffortThisTurn

    this._totalEffortThisTurn = this.getTotalEffort()
    this._effortUsedThisTurn = 0
  }

  useEffort(amount){
    if(amount <= 0) throw new Error("Effort used cannot be less than or equal to 0")
    this._effortUsedThisTurn += amount
  }
}

export default Workers
