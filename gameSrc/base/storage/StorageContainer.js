import StorageSection from "./StorageSection.js"

class StorageContainer{
  constructor(sectionNames){
    this._capacity = 100
    this._sections = {}

    const sectionBaseCapacity = this._capacity / sectionNames.length
    for(let name of sectionNames){
      this._sections[name] = new StorageSection(sectionBaseCapacity)
    }
  }

  getContentCount(key){
    return this._sections[key].contentCount
  }

  getCapacity(key){
    return this._sections[key].capacity
  }

  setCapacityPercentage(targetKey, percentage){
    const targetSectionSize = this._capacity * (percentage/100)
    this._sections[targetKey].capacity = Math.floor(targetSectionSize)

    const remainingCapacity = this._capacity - targetSectionSize
    const otherSectionsSize = remainingCapacity / (Object.keys(this._sections).length-1)
    for(let sectionKey in this._sections){
      if(targetKey != sectionKey){
        this._sections[sectionKey].capacity = Math.floor(otherSectionsSize)
      }
    }
  }

  add(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")

    const result = this._sections[key].contentCount + amount
    if(result > this._sections[key].capacity){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
    this._sections[key].contentCount = result
  }

  remove(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")

    const result = this._sections[key].contentCount - amount
    if(result < 0){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
    this._sections[key].contentCount = result
  }
}

export default StorageContainer
