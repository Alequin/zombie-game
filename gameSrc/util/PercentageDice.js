const MIN_ROLL = 1
const MAX_ROLL = 100

class PercentageDice{
  constructor(probability){
    if(probability < 0 || probability > MAX_ROLL) throw new Error("Chance must be between 1 and 100 inclusivly")
    this._probability = Math.round(probability*MAX_ROLL)/MAX_ROLL
  }

  probability(){
    return this._probability
  }

  chance(){
    const roll = Math.random() * (MAX_ROLL - MIN_ROLL) + MIN_ROLL
    return roll <= this._probability
  }
}

export default PercentageDice
