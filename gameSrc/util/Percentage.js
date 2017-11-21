class Percentage{
  constructor(percentage){
    this.set(percentage)
  }

  percentage(){
    return this._percentage
  }

  set(percentage){
    if(percentage < 0 || percentage > 100) throw new Error("Percentage must be between 1 and 100 inclusivly")
    this._percentage = percentage
  }

}

export default Percentage
