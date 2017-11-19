import ProductionBuildingGroup from "./ProductionBuildingGroup"

class InputProductionBuildingGroup extends ProductionBuildingGroup{

  constructor(
    productionRatio,
    productionPerEffort,
    singleBuildingEffortCapacity,
    singleBuildingSize)
  {
    super(productionPerEffort, singleBuildingEffortCapacity, singleBuildingSize)
    this._productionRatio = productionRatio
  }

  calcRequiredInput(){
    const maxOutput = this.calcProduction()
    return maxOutput * this._productionRatio
  }
}

export default InputProductionBuildingGroup
