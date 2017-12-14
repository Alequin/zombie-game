import { newMaxValueTracker } from "./../util/TrackerFactory.js"
import Percentage from "./../util/Percentage.js"
import PercentageDice from "./../util/PercentageDice.js"
import { newDice } from "./../util/Dice.js"

class Zombies{
  constructor(zombieCount = 0, fluctuationPercentage = 20){
    this._count = newMaxValueTracker(zombieCount)
    this._fluctuation = new Percentage(fluctuationPercentage)
  }

  count(){
    return this._count.get()
  }

  add(amount){
    this._count.inc(amount)
  }

  remove(amount){
    this._count.dec(amount)
  }

  getFluctuationPercentage(){
    return this._fluctuation.percentage()
  }

  setFluctuationPercentage(value){
    return this._fluctuation.set(value)
  }

  changeCountRandomly(directonChance = 50){
    const directionDice = new PercentageDice(directonChance)
    const amountDice = newDice(
      0, this.count()*(this.getFluctuationPercentage()/100)
    )

    let amount = Math.floor(amountDice.roll())
    if(directionDice.chance()) this.add(amount)
    else this.remove(amount)
  }
}



export default Zombies
