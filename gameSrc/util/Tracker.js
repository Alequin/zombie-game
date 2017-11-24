
class Tracker{
  constructor(
    input,
    minValue = Number.MIN_SAFE_INTEGER,
    maxValue = Number.MAX_SAFE_INTEGER)
  {
    if(!areAllValuesValid(input, minValue, maxValue)){
      throw new Error(
        `Values are not valid.Input: ${input},
        Min: ${minValue}, Max: ${maxValue}`
      )
    }

    this.val = function(){
      let value = input
      let min = minValue
      let max = maxValue

      function changeBy(amount = 0){
        const result = value + amount
        if(!isValueValid(result, min, max)) {
          throw new Error(
            `Values are not valid.Input: ${input},
            Min: ${minValue}, Max: ${maxValue}`
          )
        }
        value = result
        return value
      }

      return (
        {
          get: () => {return value},
          min: (minValue) => {
            if(!isMinValid(value, minValue, max)){
              throw new Error("Min value is not valid")
            }
            min = minValue
          },
          getMin: () => {
            return min
          },
          max: (maxValue) => {
            if(!isMaxValid(value, min, maxValue)){
              throw new Error("Max value is not valid")
            }
            max = maxValue
          },
          getMax: () => {
            return max
          },
          inc: (amount = 1) => {
            if(amount < 0) throw new Error("Input cannot be negative: " + amount)
            changeBy(amount)
            return value
          },
          dec: (amount = 1) => {
            if(amount < 0) throw new Error("Input cannot be negative: " + amount)
            changeBy(-amount)
            return value
          },
          changeBy: changeBy
        }
      )
    }()
  }
}

function areAllValuesValid(value, min, max){
  return (
    isValueValid(value, min, max) &&
    isMinValid(value, min, max) &&
    isMaxValid(value, min, max)
  )
}

function isValueValid(value, min, max){
  return value >= min && value <= max
}

function isMinValid(value, min, max){
  return min < max && min <= value
}

function isMaxValid(value, min, max){
  return max > min && max >= value
}

export default Tracker
