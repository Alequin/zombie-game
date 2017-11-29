import { newMaxValueTracker } from "./../util/TrackerFactory.js"

class Zombies{
  constructor(zombieCount = 0){
    this._count = newMaxValueTracker(zombieCount)
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
