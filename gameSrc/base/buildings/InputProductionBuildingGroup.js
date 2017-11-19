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

}

export default InputProductionBuildingGroup
