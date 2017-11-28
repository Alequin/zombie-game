import StorageSection from "./StorageSection.js"
import Construction from "./../other/Construction.js"
import { storageSettings } from "./../Settings.js"

class StorageContainer extends Construction{
  constructor(effortPerConstruction, materialsPerConstruction, sectionNames = []){
    super(
      effortPerConstruction,
      materialsPerConstruction,
    )
    this._capacity = this._calcCapacity()
    this._sections = {}

    const capacity = this._capacity / storageSettings.sectionNames.length
    for(let name of sectionNames){
      const percentageCapacity = Math.floor(100 / storageSettings.sectionNames.length)
      this._sections[name] = new StorageSection(capacity, percentageCapacity)
    }
  }

  add(amount){
    super.add(amount)
    this._updateCapacity()
  }

  remove(amount){
    super.remove(amount)
    this._updateCapacity()
  }

  getSectionNames(){
    return Object.keys(this._sections)
  }

  totalCapacity(){
    return this._capacity
  }

  getContentCount(key){
    return this._sections[key].getContents()
  }

  getCapacity(key){
    return this._sections[key].getCapacity()
  }

  getPercentageCapacity(key){
    return this._sections[key].getPercentageCapacity()
  }

  setCapacityPercentages(sections){

    for(let section of storageSettings.sectionNames){
      if(!sections[section]){
        throw new Error("All sections must be included when calculating the capacity")
      }
    }

    for(let section of storageSettings.sectionNames){
      const percentage = sections[section]
      this._sections[section].setPercentageCapacity(percentage)
      const sectionSize = this._capacity * (percentage/100)
      this._setSectionCapacity(section, sectionSize)
    }
  }

  _setSectionCapacity(key, capacityToSet){
    this._sections[key].setCapacity(Math.floor(capacityToSet))
  }

  addToSection(key, amount){
    this._sections[key].add(amount)
  }

  removeFromSection(key, amount){
    this._sections[key].remove(amount)
  }

  _updateCapacity(){
    this._capacity = this._calcCapacity()
    for(let key of Object.keys(this._sections)){
      const percentage = this._sections[key].getPercentageCapacity()
      const capacity = this._capacity*(percentage/100)
      this._setSectionCapacity(key, capacity)
    }
  }

  _calcCapacity(){
    return storageSettings.minimumCapacity * this.getAmount()
  }
}

export default StorageContainer
