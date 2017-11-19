
class BaseBuildings{
  constructor(houses, farms, lumbarYards, scrapYards){
    this.houses = houses
    this.farms = farms
    this.lumbarYards = lumbarYards
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
