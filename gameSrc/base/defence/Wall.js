import EffortHandler from "./../../util/EffortHandler.js"

class Wall{
  constructor(){
    this._materials = 0
    this.effort = new EffortHandler(Number.MAX_SAFE_INTEGER)
  }

}

export default Wall
