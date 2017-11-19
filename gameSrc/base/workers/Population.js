
class Population{
  constructor(maxSkill){
    if(maxSkill <= 0) throw new Error("Max Skill cannot be less than 1")
    this._maxSkill = maxSkill
    this._people = []
    for(let j=0; j<maxSkill; j++){
      this._people.push(0)
    }
  }

  getMaxSkill(){
    return this._maxSkill
  }

  getEffort(){
    return this._skill * 10
  }
}

export default Population
