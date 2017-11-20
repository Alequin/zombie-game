class PercentageDice{
  constructor(probability){
    if(probability < 0 || probability > 100) throw new Error("Chance must be between 1 and 100 inclusivly")
    this.probability = probability
  }

  chance(){
    return Math.floor(Math.random() * ((100-1)+1) + 1) <= this.probability
  }
}

export default PercentageDice
