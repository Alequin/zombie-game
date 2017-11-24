
class Tracker{
  constructor(
    input,
    minValue = Number.MIN_SAFE_INTEGER,
    maxValue = Number.MAX_SAFE_INTEGER)
  {
    if(!areValuesValid(input, minValue, maxValue)){
      throw new Error(
        `Values are not valid.Input: ${input},
        Min: ${minValue}, Max: ${maxValue}`
      )
    }

    this.val = function(){
      let value = input
      let min = minValue
      let max = maxValue
      return (
        {
          get: () => {return value},
          min: (minValue) => {
            if(!isMinValid(value, minValue, max)){
              throw new Error("Min value is not valid")
            }
            min = minValue
          },
          max: (maxValue) => {
            if(!isMaxValid(value, min, maxValue)){
              throw new Error("Max value is not valid")
            }
            max = maxValue
          },
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

function areValuesValid(value, min, max){
  return (
    isMinValid(value, min, max) &&
    isMaxValid(value, min, max)
  )
}

function isMinValid(value, min, max){
  return min < max && min < value
}

function isMaxValid(value, min, max){
  return max > min && max > value
}

export default Tracker
