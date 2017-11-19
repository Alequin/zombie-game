import BuildingGroup from "./BuildingGroup"
import EffortHandler from "./../../util/EffortHandler.js"

class ProductionBuildingGroup extends BuildingGroup{
  constructor(productionPerEffort, singleBuildingEffortCapacity, singleBuildingSize){
    super(singleBuildingSize)
    this._productionPerEffort = productionPerEffort
    this._singleBuildingEffortCapacity = singleBuildingEffortCapacity
    this.effort = new EffortHandler(this.effortCapacity())
  }

  add(amount){
    super.add(amount)
    this.effort.setCapacity(this.effortCapacity())
  }

  remove(amount){
    super.remove(amount)
    this.effort.setCapacity(this.effortCapacity())
  }

  effortCapacity(){
    return this._singleBuildingEffortCapacity * this._count
  }

  calcProduction(){
    return this._productionPerEffort * this.effort.currentEffort()
  }

  produce(){
    const result = this.calcProduction()
    this.effort.reset()
    return result
  }
}

export default ProductionBuildingGroup
