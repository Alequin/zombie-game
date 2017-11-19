import buildingGroup from "./buildingGroup"

class ProductionBuildingGroup extends buildingGroup{
  constructor(productionPerEffort, singleBuildingEffortCapacity, singleBuildingSize){
    super(singleBuildingSize)
    this._productionPerEffort = productionPerEffort
    this._currentEffort = 0
    this._singleBuildingEffortCapacity = singleBuildingEffortCapacity
  }
}

export default ProductionBuildingGroup
