
class Worker{
  constructor(skill){
    this.setSkill(skill)
  }

  static maxSkillValue(){
    return 5
  }

  getSkill(){
    return this._skill
  }

  setSkill(skill){
    const max = Worker.maxSkillValue()
    if(skill <= 0 || skill > max){
      throw new Error(`
        Skill must be greater than 0 and less
        than ${max}: currently ${skill}
      `)
    }
    
    this._skill = skill
  }
}

export default Worker
