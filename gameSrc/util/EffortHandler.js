
class EffortHandler{
  constructor(capacity){
    this._effort = 0
    this._capacity = capacity
  }

  getCapacity(){
    return this._capacity
  }

  setCapacity(capacity){
    this._capacity = capacity
  }

  currentEffort(){
    return this._effort
  }

  add(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    const result = this._effort + amount
    if(result > this._capacity) throw new Error("Amount cannot push effort over capacity")
    this._effort += result
  }

  remove(amount){
    if(amount < 0) throw new Error("Amount cannot be negative")
    const result = this._effort - amount
    if(result < 0) throw new Error("Cannot remove more effort than is within the building")
    this._effort = result
  }
}

export default EffortHandler
