import Houses from "./Houses.js"
import {
  buildHouses,
  buildFarms,
  buildLumberYards,
  buildScrapYards,
  buildSchools
} from "./ConstructionFactory.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"

class BaseBuildings{
  constructor(houses = 0, farms = 0, lumberYards = 0, scrapYards = 0, schools = 0){
    this.houses = buildHouses(houses)
    this.farms = buildFarms(farms)
    this.lumberYards = buildLumberYards(lumberYards)
    this.scrapYards = buildScrapYards(scrapYards)
    this.schools = buildSchools(schools)
  }

  totalSpaceUsed(){
    let space = 0
    for(let key of Object.keys(this)){
      space += this[key].usedSpace()
    }
    return space
  }
}

export default BaseBuildings
