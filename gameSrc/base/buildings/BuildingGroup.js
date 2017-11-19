
class BuildingGroup{
  constructor(singleBuildingSize){
    this._count = 0
    this._singleBuildingSize = singleBuildingSize
  }

  count(){
    return this._count
  }

  add(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    this._count += amount
  }

  remove(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    const result = this._count - amount
    if(result < 0) throw new Error("Cannot remove more buildings than exist")
    this._count = result
  }

  usedSpace(){
    return this._count * this._singleBuildingSize
  }
}

export default BuildingGroup
