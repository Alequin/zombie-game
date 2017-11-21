import assert from "assert"
import PercentageDice from "./../util/PercentageDice.js"

describe("Percentage Dice", function(){

  it("can initialise", () => {
    assert.ok(new PercentageDice(50))
  })

  it("can get probability", () => {
    assert.strictEqual(new PercentageDice(50).probability(), 50)
  })

  it("can initialise with valid input", () => {
    for(let j=0; j<=1000; j++){
      let expected = j/100
      let result = new PercentageDice(j/100).probability()
      assert.strictEqual(result, expected)
    }
  })

  it("cannot initialise with invalid input", () => {
    assert.throws(() => {
      new PercentageDice(-0.01)
    })
    assert.throws(() => {
      new PercentageDice(100.01)
    })
    assert.throws(() => {
      new PercentageDice(-1000)
    })
    assert.throws(() => {
      new PercentageDice(1000)
    })
  })

})
