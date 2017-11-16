
class Worker{
  constructor(skill){
    this._maxSkill = 5
    this.setSkill(skill)
  }

  getSkill(){
    return this._skill
  }

  setSkill(skill){
    if(skill <= 0 || skill > this._maxSkill){
      throw new Error(`
        Skill must be greater than 0 and less
        than ${this._maxSkill}: currently ${skill}
      `)
    }
    this._skill = skill
  }
}

export default Worker
