import StorageSection from "./StorageSection.js"
import Construction from "./../other/Construction.js"
import { storageSettings } from "./../Settings.js"

class StorageContainer extends Construction{
  constructor(){
    super(
      storageSettings.effortPerConstruction,
      storageSettings.materialsPerConstruction,
    )
    this._capacity = storageSettings.minimumCapacity * this.getAmount()
    this._sections = {}

    const capacity = this._capacity / storageSettings.sectionNames.length
    for(let name of storageSettings.sectionNames){
      this._sections[name] = {
        storage: new StorageSection(capacity),
        percentageCapacity: Math.floor(100 / storageSettings.sectionNames.length)
      }
    }
  }

  getSectionNames(){
    return storageSettings.sectionNames
  }

  totalCapacity(){
    return this._capacity
  }

  getContentCount(key){
    return this._sections[key].storage.contentCount
  }

  getCapacity(key){
    return this._sections[key].storage.capacity
  }

  getPercentageCapacity(key){
    return this._sections[key].percentageCapacity
  }

  setCapacityPercentages(sections){

    for(let section of storageSettings.sectionNames){
      if(!sections[section]){
        throw new Error("All sections must be included when calculating the capacity")
      }
    }

    for(let section of storageSettings.sectionNames){
      const percentage = sections[section]
      if(percentage < 1 || percentage > 99){
        throw new Error("Percentage must be between 1 and 99 inclusivly: " + percentage)
      }

      this._sections[section].percentageCapacity = percentage
      const sectionSize = this._capacity * (percentage/100)
      this._setSectionCapacity(section, sectionSize)
    }
  }

  _setSectionCapacity(key, capacityToSet){
    if(capacityToSet < this._sections[key].contentCount){
      throw new Error("Cannot set section capacity at less than the current contents")
    }
    this._sections[key].storage.capacity = Math.floor(capacityToSet)
  }

  addToSection(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")
    const result = this._sections[key].storage.contentCount + amount
    if(result > this._sections[key].storage.capacity){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
    this._sections[key].storage.contentCount = result
  }

  removeFromSection(key, amount){
    if(amount < 0) throw new Error("Cannot use negative values")
    const result = this._sections[key].storage.contentCount - amount
    if(result < 0){
      throw new Error("Cannot add to storage if the value increases the contents past the max capacity")
    }
    this._sections[key].storage.contentCount = result
  }

  add(amount){
    super.add(amount)
    this._updateCapacity()
  }

  remove(amount){
    super.remove(amount)
    this._updateCapacity()
  }

  _updateCapacity(){
    this._capacity = storageSettings.minimumCapacity * this.getAmount()

    for(let key of Object.keys(this._sections)){
      const percentage = this._sections[key].percentageCapacity
      const capacity = this._capacity*(percentage/100)
      this._setSectionCapacity(key, capacity)
    }
  }
}

export default StorageContainer
