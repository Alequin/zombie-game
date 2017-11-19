
class Effort{

  constructor(){
    this._effortUsedThisTurn = 0
    this._totalEffortThisTurn = 0
    this._effortUsedLastTurn = 0
    this._totalEffortLastTurn = 0
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

  prepareEffortValuesForNextTurn(effortToUse){
    this._effortUsedLastTurn = this._effortUsedThisTurn
    this._totalEffortLastTurn = this._totalEffortThisTurn

    this._totalEffortThisTurn = effortToUse
    this._effortUsedThisTurn = 0
  }

  useEffort(amount){
    if(amount <= 0) throw new Error("Effort used cannot be less than or equal to 0")
    this._effortUsedThisTurn += amount
    if(this._effortUsedThisTurn > this._totalEffortThisTurn){
      throw new Error("Effort used cannot be greater than the current max")
    }
  }

  returnEffort(amount){
    if(amount <= 0) throw new Error("Effort returned cannot be less than or equal to 0")
    this._effortUsedThisTurn-=amount
    if(this._effortUsedThisTurn < 0){
      throw new Error("Returned effort cannot be greater than the used effort")
    }
  }
}

export default Effort
