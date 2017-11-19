
class Population{
  constructor(maxSkill){
    if(maxSkill <= 0) throw new Error("Max Skill cannot be less than 1")
    this._people = []
    for(let j=0; j<maxSkill; j++){
      this._people.push(0)
    }
  }

  getMaxSkill(){
    return 3
  }

  getEffort(){
    return this._skill * 10
  }
}

export default Population
