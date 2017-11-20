
class Population{
  constructor(maxSkill, people){
    if(maxSkill <= 0) throw new Error("Max Skill cannot be less than 1")
    this._maxSkill = maxSkill
    if(people){
      this._people = people
    }else{
      this._people = {}
      for(let j=1; j<=maxSkill; j++){
        this._people[j] = 0
      }
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
    this._people[skillLevel] += amount
  }

  countPopulation(skillLevel){
    this._isSkillInCorrectRange(skillLevel)
    return this._people[skillLevel]
  }

  totalPopulation(){
    let count = 0
    for(let key of Object.keys(this._people)){
      count += this._people[key]
    }
    return count
  }

  upgradeSkill(amount, from, to){
    this._isSkillInCorrectRange(from)
    this._isSkillInCorrectRange(to)
    if(this._people[from] < amount) throw new Error("Not enough people to upgrade")

    this._people[from] -= amount
    this._people[to] += amount
  }

  getEffort(){
    let effort = 0
    for(let key of Object.keys(this._people)){
      const multiplier = parseInt(key)
      effort += this._people[key] * multiplier
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
