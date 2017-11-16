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
}

export default StorageContainer
