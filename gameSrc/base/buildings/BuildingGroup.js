
class BuildingGroup{
  constructor(singleBuildingSize){
    this._count = 0
    this._singleBuildingSize = singleBuildingSize
  }

  count(){
    return this._count
  }

  add(amount){
    this._count += amount
  }

  remove(amount){
    this._count -= amount
  }
}

export default BuildingGroup
