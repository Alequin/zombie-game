import assert from "assert"
import Percentage from "./../../util/Percentage.js"

describe("Percentage", function(){

  let percentage

  beforeEach(() => {
    percentage = new Percentage(50)
  })

  it("can initialise", () => {
    assert.ok(percentage)
  })

  it("can get and set percentage", () => {
    let expected = 50
    let result = percentage.percentage()
    assert.strictEqual(result, expected)

    percentage.set(25)

    expected = 25
    result = percentage.percentage()
    assert.strictEqual(result, expected)
  })

  it("cannot pass set method an undefined value", () => {
    assert.throws(() => {
      percentage.set()
    })
  })
})
