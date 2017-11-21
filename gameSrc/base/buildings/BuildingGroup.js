import Construction from "./../other/Construction.js"

class BuildingGroup{
  constructor(singleBuildingSize, effortPerConstruction, materialsPerConstruction){
    if(singleBuildingSize < 1) throw new Error("Single size must be at least 1")

    this._count = 0
    this._singleBuildingSize = singleBuildingSize

    this.construction = new Construction(
      effortPerConstruction,
      materialsPerConstruction,
      this.add.bind(this),
      this.remove.bind(this)
    )
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
