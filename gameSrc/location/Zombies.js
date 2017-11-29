import { newMaxValueTracker } from "./../util/TrackerFactory.js"
import Percentage from "./../util/Percentage.js"
import PercentageDice from "./../util/PercentageDice.js"
import Dice from "./../util/Dice.js"

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
    console.log(this._fluctuation.percentage());
    return this._fluctuation.percentage()
  }

  setFluctuationPercentage(value){
    return this._fluctuation.set(value)
  }

  changeCountRandomly(directonChance){
    const directionDice = new PercentageDice(directonChance || 50)
    const amountDice = new Dice(
      0, (this.getFluctuationPercentage()/this.count())*100
    )

    const amount = amountDice.roll()
    return directionDice.chance() ? amount : Math.abs(amount)
  }
}



export default Zombies
