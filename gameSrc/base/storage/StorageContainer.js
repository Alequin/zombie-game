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

  add(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")

    const result = this._sections[key].contentCount + amount
    if(result > this._sections[key].capacity){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
    this._sections[key].contentCount = result
  }
}

export default StorageContainer
