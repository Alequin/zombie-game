
class Effort{

  constructor(){
    this._usedThisTurn = 0
    this._totalThisTurn = 0
    this._usedLastTurn = 0
    this._totalLastTurn = 0
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
    this._usedThisTurn += amount
    if(this._usedThisTurn > this._totalThisTurn){
      throw new Error("Effort used cannot be greater than the current max")
    }
  }

  return(amount){
    if(amount <= 0) throw new Error("Effort returned cannot be less than or equal to 0")
    this._usedThisTurn-=amount
    if(this._usedThisTurn < 0){
      throw new Error("Returned effort cannot be greater than the used effort")
    }
  }
}

export default Effort
