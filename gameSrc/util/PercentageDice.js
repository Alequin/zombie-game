class PercentageDice{
  constructor(probability){
    if(probability < 0 || probability > 1000) throw new Error("Chance must be between 1 and 100 inclusivly")
    this.probability = probability*10
  }

  chance(){
    return Math.floor(Math.random() * ((1000-1)+1) + 1) <= this.probability
  }
}

export default PercentageDice
