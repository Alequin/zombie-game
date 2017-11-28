import EffortHandler from "./../../util/EffortHandler.js"
import { newMaxValueTracker } from "./../../util/TrackerFactory.js"

class Construction{
  constructor(effortPerConstruction, materialsPerConstruction){
    this.constructionEffort = new EffortHandler(Number.MAX_SAFE_INTEGER)
    this._input = newMaxValueTracker(0)
    this._effortPerConstruction = effortPerConstruction
    this._materialsPerConstruction = materialsPerConstruction
  }

  _calcAmountToConstruct(){
    return this.constructionEffort.currentEffort() / this._effortPerConstruction
  }

  getEffortPerProduction(){
    return this._effortPerConstruction
  }

  getAmount(){
    return this._input.get()
  }

  add(amount){
    this._input.inc(amount)
  }

  remove(amount){
    this._input.dec(amount)
  }

  build(){
    const toBuild = this._calcAmountToConstruct()
    this.add(toBuild)
    this.constructionEffort.reset()
  }

  calcMaterialsToBuild(){
    return this._calcAmountToConstruct() * this._materialsPerConstruction
  }

  tearDown(){
    const toRemove = this._calcAmountToConstruct()
    this.remove(toRemove)
    this.constructionEffort.reset()
  }

  calcMaterialsGainedFromTearDown(){
    return Math.floor((this._calcAmountToConstruct() * this._materialsPerConstruction)*0.75)
  }
}

export default Construction
