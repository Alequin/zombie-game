import Tracker from "./../../util/Tracker.js"
import Percentage from "./../../util/Percentage.js"

class StorageSection{
  constructor(capacity, percentageCapacity){
    this._content = new Tracker(0, 0, capacity)
    this._percentageCapacity = new Percentage(percentageCapacity)
  }

  getContents(){
    return this._content.get()
  }

  add(amount){
    this._content.inc(amount)
  }

  remove(amount){
    this._content.dec(amount)
  }

  getCapacity(){
    return this._content.getMax()
  }

  setCapacity(capacity){
    this._content.max(capacity)
  }

  getPercentageCapacity(){
    return this._percentageCapacity.percentage()
  }

  setPercentageCapacity(percentage){
    this._percentageCapacity.set(percentage)
  }
}

export default StorageSection
