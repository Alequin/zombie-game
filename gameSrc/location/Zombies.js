import { newMaxValueTracker } from "./../util/TrackerFactory.js"
import Percentage from "./../util/Percentage.js"

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
}



export default Zombies
