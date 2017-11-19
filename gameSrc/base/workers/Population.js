
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

  addToPopulation(amount, skillLevel){
    if(amount < 0) throw new Error("Amount cannot be negative")
    this._alterPopulation(amount, skillLevel)
  }

  removeFromPopulation(amount, skillLevel){
    if(amount < 0) throw new Error("Amount cannot be negative")
    this._alterPopulation(-amount, skillLevel)
  }

  _alterPopulation(amount, skillLevel){
    this._isSkillInCorrectRange(skillLevel)
    this._people[skillLevel - 1] += amount
  }

  countPopulation(skillLevel){
    return this._people[skillLevel - 1]
  }

  totalPopulation(){
    const count = this._people.reduce((total, nexVal) => {
      return total+=nexVal
    })
    return count
  }

  upgradeSkill(amount, from, to){
    this._isSkillInCorrectRange(from)
    this._isSkillInCorrectRange(to)
    this._people[from-1] -= amount
    this._people[to-1] += amount
  }

  getEffort(){
    let effort = 0
    for(let index in this.people){
      const multiplier = index+1
      effort += this.people[index] * multiplier
    }
    return effort
  }

  _isSkillInCorrectRange(skillLevel){
    if(skillLevel < 1 ||skillLevel > this._maxSkill) {
      throw new Error(`Skill level is set from
      1 to ${this._maxSkill}. Alterations must be in this range`)
    }
  }
}

export default Population
