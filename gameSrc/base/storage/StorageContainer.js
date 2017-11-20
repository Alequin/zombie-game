import StorageSection from "./StorageSection.js"
import Structure from "./../other/Structure.js"

class StorageContainer extends Structure{
  constructor(sectionNames, effortPerConstruction){
    super(effortPerConstruction, Number.MAX_SAFE_INTEGER)
    this._capacity = 100
    this._sections = {}
    this._input = 1

    const sectionBaseCapacity = this._capacity / sectionNames.length
    for(let name of sectionNames){
      this._sections[name] = new StorageSection(sectionBaseCapacity)
    }
  }

  totalCapacity(){
    return this._capacity
  }

  getContentCount(key){
    return this._sections[key].contentCount
  }

  getCapacity(key){
    return this._sections[key].capacity
  }

  setCapacityPercentage(targetKey, percentage){
    if(percentage < 1 || percentage > 99){
      throw new Error("Percentage must be between 1 and 99 inclusivly: " + percentage)
    }
    const targetSectionSize = this._capacity * (percentage/100)
    this._setSectionCapacity(targetKey, targetSectionSize)

    const remainingCapacity = this._capacity - targetSectionSize
    const otherSectionsSize = remainingCapacity / (Object.keys(this._sections).length-1)
    for(let sectionKey in this._sections){
      if(targetKey != sectionKey){
        this._setSectionCapacity(sectionKey, otherSectionsSize)
      }
    }
  }

  _setSectionCapacity(key, capacityToSet){
    if(capacityToSet < this._sections[key].contentCount){
      throw new Error("Cannot set section capacity at less than the current contents")
    }
    this._sections[key].capacity = Math.floor(capacityToSet)
  }

  add(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")
    this._alterContentCount(key, amount)
    if(this._sections[key].contentCount > this._sections[key].capacity){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
  }

  remove(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")
    this._alterContentCount(key, -amount)
    if(this._sections[key].contentCount < 0){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
  }

  _alterContentCount(key, amount){
    const result = this._sections[key].contentCount + amount
    this._sections[key].contentCount = result
  }

  produce(){
    super.produce()
    this._capacity = 100 * this._input
  }
}

export default StorageContainer
