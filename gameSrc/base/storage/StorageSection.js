import Tracker from "./../../util/Tracker.js"

class StorageSection{
  constructor(capacity, percentageCapacity){
    this.content = new Tracker(0, 0, capacity)
    this.percentageCapacity = percentageCapacity
  }
}

export default StorageSection
