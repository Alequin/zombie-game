
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
}

export default Population
