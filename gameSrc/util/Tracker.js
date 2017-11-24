
class Tracker{
  constructor(input){
    if(input < 0) throw new Error("Values cannot be less than 0")

    this.val = function(){
      let value = input
      return (
        {
          get: () => {return value},
          inc: (amount) => {
            amount = amount || 1
            value += amount
            return amount
          },
        }
      )
    }()

  }
}

export default Tracker
