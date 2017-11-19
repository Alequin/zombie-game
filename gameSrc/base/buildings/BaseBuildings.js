
class BaseBuildings{
  constructor(houses, farms, lumberYards, scrapYards){
    if(houses.constructor.name != "Houses")
      throw new Error("houses must be a Houses object")
    if(farms.constructor.name != "ProductionBuildingGroup")
      throw new Error("farms must be a ProductionBuildingGroup object")
    if(lumberYards.constructor.name != "InputProductionBuildingGroup")
      throw new Error("lumberYards must be a inputProductionBuildingGroup object")
    if(scrapYards.constructor.name != "InputProductionBuildingGroup")
      throw new Error("scrapYards must be a inputProductionBuildingGroup object")

    this.houses = houses
    this.farms = farms
    this.lumberYards = lumberYards
    this.scrapYards = scrapYards
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
