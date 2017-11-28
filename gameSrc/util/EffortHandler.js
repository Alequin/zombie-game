import Tracker from "./Tracker.js"

class EffortHandler{
  constructor(capacity, minimum = 0){
    this._effort = new Tracker(0, minimum, capacity)
  }

  getCapacity(){
    return this._effort.getMax()
  }

  setCapacity(capacity){
    this._effort.max(capacity)
  }

  currentEffort(){
    return this._effort.get()
  }

  add(amount){
    this._effort.inc(amount)
  }

  remove(amount){
    this._effort.dec(amount)
  }

  reset(){
    this._effort.dec(this._effort.get())
  }

}

export default EffortHandler
