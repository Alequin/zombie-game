import BuildingGroup from "./BuildingGroup"
import EffortHandler from "./../../util/EffortHandler.js"

class ProductionBuildingGroup extends BuildingGroup{

  constructor(productionPerEffort, singleBuildingEffortCapacity,
    singleBuildingSize, effortPerConstruction, materialsPerConstruction)
  {
    super(singleBuildingSize, effortPerConstruction, materialsPerConstruction)
    this._productionPerEffort = productionPerEffort
    this._singleBuildingEffortCapacity = singleBuildingEffortCapacity
    this.productionEffort = new EffortHandler(this.effortCapacity())
  }

  add(amount){
    super.add(amount)
    this._updateEffortCapacity()
  }

  remove(amount){
    super.remove(amount)
    this._updateEffortCapacity()
  }

  _updateEffortCapacity(){
    this.productionEffort.setCapacity(this.effortCapacity())
  }

  getMinimumPossibleEffortInput(){
    if(this._productionPerEffort >= 1) return 1
    else return 1/this._productionPerEffort
  }

  effortCapacity(){
    return this._singleBuildingEffortCapacity * this.getAmount()
  }

  calcProduction(){
    return this._productionPerEffort * this.productionEffort.currentEffort()
  }

  produce(){
    const result = this.calcProduction()
    this.productionEffort.reset()
    return result
  }
}

export default ProductionBuildingGroup
