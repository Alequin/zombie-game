import assert from "assert"
import TurnEffort from "./../../base/population/TurnEffort.js"

describe("Effort", function(){

  let effort

  beforeEach(() => {
    effort = new TurnEffort()
  })

  it("can initialise effort", () => {
    assert.ok(effort)
  })

  it("can use effort", () => {
    effort.prepareValuesForNextTurn(30)
    effort.use(10)
    const expected = 10
    const result = effort.getUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot use more that max effort * 2", () => {
    effort.prepareValuesForNextTurn(30)
    assert.throws(() => {
      effort.use(61)
    })
    assert.throws(() => {
      effort.use(600)
    })
    assert.throws(() => {
      effort.use(60000)
    })
  })

  it("can return effort", () => {
    effort.prepareValuesForNextTurn(30)
    effort.use(15)
    effort.return(10)
    let expected = 5
    let result = effort.getUsedThisTurn()
    assert.strictEqual(result, expected)
    effort.return(5)
    expected = 0
    result = effort.getUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot return more effort than has been used", () => {
    effort.prepareValuesForNextTurn(30)
    effort.use(10)
    assert.throws(() => {
      effort.return(11)
    })
    assert.throws(() => {
      effort.return(100)
    })
    assert.throws(() => {
      effort.return(1000)
    })
  })

  it("cannot use effort greater than the max", () => {
    effort.prepareValuesForNextTurn(30)
    assert.throws(() => {
      effort.return(31)
    })
    assert.throws(() => {
      effort.return(100)
    })
    assert.throws(() => {
      effort.return(1000)
    })
  })

})

describe("effort - initial values", function(){

  it("can set inital values manually", () => {
    let effort = new TurnEffort(2,3,4)
    assert.ok(effort._effort)
    assert.strictEqual(effort._effort.getMin(), -2)
    assert.strictEqual(effort.getTotalThisTurn(), 2)
    assert.strictEqual(effort._usedLastTurn, 3)
    assert.strictEqual(effort._totalLastTurn, 4)
  })
})
