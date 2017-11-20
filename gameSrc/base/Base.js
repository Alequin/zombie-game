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

    let wallMaterials = options.wallMaterials || 0
    this.wall = new Wall(wallMaterials)

    const trapCount = options.totalTraps || 0
    this.traps = new Traps(trapCount)

    const buildings = options.baseBuildings
    if(buildings){
      this.buildings = new BaseBuildings(
        buildings.houses,
        buildings.farms,
        buildings.lumberYards,
        buildings.scrapYards,
      )
    }else{
      this.buildings = new BaseBuildings()
    }

    this.storage = new StorageContainer()
  }

  getSize(){
    return this._size
  }
}

export default Base
