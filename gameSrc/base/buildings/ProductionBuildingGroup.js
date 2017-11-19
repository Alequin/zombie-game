import buildingGroup from "./buildingGroup"

class ProductionBuildingGroup extends buildingGroup{
  constructor(productionPerEffort, singleBuildingEffortCapacity, singleBuildingSize){
    super(singleBuildingSize)
    this._productionPerEffort = productionPerEffort
    this._effort = 0
    this._singleBuildingEffortCapacity = singleBuildingEffortCapacity
  }

  effortCapacity(){
    return this._singleBuildingEffortCapacity * this._count
  }

  currentEffort(){
    return this._effort
  }

  addEffort(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    this._effort += amount
  }

  removeEffort(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    const result = this._effort - amount
    if(result < 0) throw new Error("Cannot remove more effort than is within the building")
    this._effort = result
  }
}

export default ProductionBuildingGroup
