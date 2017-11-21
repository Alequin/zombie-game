import Population from "./population/Population.js"
import TurnEffort from "./population/TurnEffort.js"
import Wall from "./defence/Wall.js"
import Traps from "./defence/Traps.js"
import BaseBuildings from "./buildings/BaseBuildings.js"
import StorageContainer from "./storage/StorageContainer.js"
import { baseSettings } from "./Settings.js"

class Base{
  constructor(options = {}){
    this.population = new Population(options.people)

    if(!options.turnEffort){
      this.effort = new TurnEffort()
    }else{
      this.effort = new TurnEffort(
        options.turnEffort.usedThisTurn,
        options.turnEffort.totalThisTurn,
        options.turnEffort.usedLastTurn,
        options.turnEffort.totalLastTurn,
      )
    }

    this._size = options.size || baseSettings.initialSize

    this.wall = new Wall(options.wallMaterials || 0)
    
    this.traps = new Traps(options.totalTraps || 0)

    const buildings = options.baseBuildings
    if(!buildings){
      this.buildings = new BaseBuildings()
    }else{
      this.buildings = new BaseBuildings(
        buildings.houses,
        buildings.farms,
        buildings.lumberYards,
        buildings.scrapYards,
      )
    }

    if(!options.storage){
      this.storage = new StorageContainer()
    }else{
      this.storage = new StorageContainer(options.storage.input)
      if(options.storage.resources){
        const resources = options.storage.resources
        const sections = Object.keys(resources)

        const sectionCapacities = {}
        for(let section of sections){
          sectionCapacities[section] = resources[section].percentageCapacity
        }
        this.storage.setCapacityPercentages(sectionCapacities)

        for(let section of sections){
          this.storage.add(section, resources[section].amount)
        }
      }
    }

  }

  getSize(){
    return this._size
  }
}

export default Base
