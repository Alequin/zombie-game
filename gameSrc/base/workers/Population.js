
class Population{
  constructor(maxSkill){
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
