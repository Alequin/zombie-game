
class Worker{
  constructor(skill){
    this.setSkill(skill)
  }

  getSkill(){
    return this._skill
  }

  setSkill(skill){
    if(skill <= 0) throw new Error("Skill must be greater than 0")
    this._skill = skill
  }
}

export default Worker
