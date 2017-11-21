import ProductionBuildingGroup from "./ProductionBuildingGroup"

class InputProductionBuildingGroup extends ProductionBuildingGroup{

  constructor(
    productionRatio,
    productionPerEffort,
    singleBuildingEffortCapacity,
    singleBuildingSize,
    effortPerConstruction,
    materialsPerConstruction)
  {
    super(
      productionPerEffort,
      singleBuildingEffortCapacity,
      singleBuildingSize,
      effortPerConstruction,
      materialsPerConstruction)

    this._productionRatio = productionRatio
  }

  calcRequiredInput(){
    const maxOutput = this.calcProduction()
    return Math.ceil(maxOutput * this._productionRatio)
  }
}

export default InputProductionBuildingGroup
