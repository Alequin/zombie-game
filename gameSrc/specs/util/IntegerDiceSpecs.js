import assert from "assert"
import { newIntegerDice } from "./../../util/IntegerDice.js"

describe("Integer Dice", function(){

  it("can roll 1 when min and max are 1", () => {
    const dice = newIntegerDice(1,1)
    let expected = 1
    let result = dice.roll()
    assert.strictEqual(result, expected)
  })

  it("cannot init with a decimal number", () => {
    assert.throws(() => {
      newIntegerDice(0.5,1)
    })
    assert.throws(() => {
      newIntegerDice(0,1.5)
    })
  })
})
