
class TurnEffort{

  constructor(
    usedThisTurn = 0,
    totalThisTurn = 0,
    usedLastTurn = 0,
    totalLastTurn = 0)
  {
    this._usedThisTurn = usedThisTurn
    this._totalThisTurn = totalThisTurn
    this._usedLastTurn = usedLastTurn
    this._totalLastTurn = totalLastTurn
  }

  getUsedThisTurn(){
    return this._usedThisTurn
  }

  getTotalThisTurn(){
    return this._totalThisTurn
  }

  getUsedLastTurn(){
    return this._usedLastTurn
  }

  getTotalLastTurn(){
    return this._totalLastTurn
  }

  prepareValuesForNextTurn(ToUse){
    this._usedLastTurn = this._usedThisTurn
    this._totalLastTurn = this._totalThisTurn

    this._totalThisTurn = ToUse
    this._usedThisTurn = 0
  }

  use(amount){
    if(amount <= 0) throw new Error("Effort used cannot be less than or equal to 0")
    const result = this._usedThisTurn + amount
    if(result > this._totalThisTurn){
      throw new Error("Effort used cannot be greater than the current max")
    }
    this._usedThisTurn = result
  }

  return(amount){
    if(amount <= 0) throw new Error("Effort returned cannot be less than or equal to 0")
    const result = this._usedThisTurn - amount
    if(result < 0){
      throw new Error("Returned effort cannot be greater than the used effort")
    }
    this._usedThisTurn = result
  }
}

export default TurnEffort
