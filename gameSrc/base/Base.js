import Population from "./population/Population.js"
import TurnEffort from "./population/TurnEffort.js"
import Traps from "./defence/Traps.js"
import BaseBuildings from "./buildings/BaseBuildings.js"
import StorageContainer from "./storage/StorageContainer.js"
import { baseSettings, populationSettings} from "./Settings.js"
import {
  buildWall,
  buildTraps,
  buildStorageContainer
} from "./buildings/ConstructionFactory.js"

class Base{
  constructor(options = {}){
    this.population = new Population(
      populationSettings.maxSkill, options.people
    )

    if(!options.turnEffort){
      this.effort = new TurnEffort()
    }else{
      this.effort = new TurnEffort(
        options.turnEffort.total,
        options.turnEffort.usedLastTurn,
        options.turnEffort.totalLastTurn,
      )
    }

    this._size = options.size || baseSettings.initialSize

    this.wall = buildWall(options.wallMaterials || 0)

    this.traps = buildTraps(options.totalTraps || 0)

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
      this.storage = buildStorageContainer()
    }else{
      this.storage = buildStorageContainer(options.storage.input)
      if(options.storage.resources){
        const resources = options.storage.resources
        const sections = Object.keys(resources)

        const sectionCapacities = {}
        for(let section of sections){
          sectionCapacities[section] = resources[section].percentageCapacity
        }
        this.storage.setCapacityPercentages(sectionCapacities)

        for(let section of sections){
          this.storage.addToSection(section, resources[section].amount)
        }
      }
    }

  }

  getSize(){
    return this._size
  }
}

export default Base
