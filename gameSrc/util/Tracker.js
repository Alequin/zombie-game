
class Tracker{
  constructor(input, minValue, maxValue){
    this.val = function(){
      let value = input
      let min = minValue
      let max = maxValue
      return (
        {
          get: () => {return value},
          inc: (amount) => {
            amount = amount || 1
            if(amount < 0) throw new Error("Input cannot be negative: " + amount)
            const result = amount + value
            if(result > max) {
              throw new Error(
                `Cannot increase value above the max:
                Max equals ${max} / Input equals ${amount}`
              )
            }
            value = result
            return value
          },
          dec: (amount) => {
            amount = amount || 1
            if(amount < 0) throw new Error("Input cannot be negative: " + amount)
            const result = value - amount
            if(result < min) {
              throw new Error(
                `Cannot decrease value below the min:
                Min equals ${min} / Input equals ${amount}`
              )
            }
            value = result
            return value
          },
        }
      )
    }()

  }
}

export default Tracker
