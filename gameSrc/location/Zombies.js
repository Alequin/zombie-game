import { newMaxValueTracker } from "./../util/TrackerFactory.js"

class Zombies{
  constructor(zombieCount = 0){
    this._count = newMaxValueTracker(zombieCount)
  }
}



export default Zombies
