import Tracker from "./../../util/Tracker.js"

class TurnEffort{

  constructor(
    total = 0,
    usedLastTurn = 0,
    totalLastTurn = 0)
  {
    this._effort = new Tracker(total, -total, total)

    this._usedLastTurn = usedLastTurn
    this._totalLastTurn = totalLastTurn
  }

  getUsedThisTurn(){
    return this.getTotalThisTurn() - this._effort.get()
  }

  getTotalThisTurn(){
    return this._effort.getMax()
  }

  getUsedLastTurn(){
    return this._usedLastTurn
  }

  getTotalLastTurn(){
    return this._totalLastTurn
  }

  prepareValuesForNextTurn(toUse){
    this._usedLastTurn = this.getUsedThisTurn()
    this._totalLastTurn = this.getUsedLastTurn()

    this._effort.min(-toUse)
    this._effort.max(toUse)
    this._effort.setToMax()
  }

  use(amount){
    this._effort.dec(amount)
  }

  return(amount){
    this._effort.inc(amount)
  }
}

export default TurnEffort
