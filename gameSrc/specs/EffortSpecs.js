import assert from "assert"
import Effort from "./../base/workers/Effort.js"

describe("Effort", function(){

  let effort

  beforeEach(() => {
    effort = new Effort()
  })

  it("can initialise effort", () => {
    assert.ok(effort)
  })

  it("can use effort", () => {
    effort.prepareEffortValuesForNextTurn(30)
    effort.useEffort(10)
    const expected = 10
    const result = effort.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot use 0 or less effort", () => {
    assert.throws(() => {
      effort.useEffort(0)
    })
    assert.throws(() => {
      effort.useEffort(-10)
    })
    assert.throws(() => {
      effort.useEffort(-100)
    })
  })

  it("cannot use effort greater than the max", () => {
    effort.prepareEffortValuesForNextTurn(30)
    effort.useEffort(10)
    effort.useEffort(10)
    effort.useEffort(10)
    assert.throws(() => {
      effort.useEffort(1)
    })
  })

  it("can return effort", () => {
    effort.prepareEffortValuesForNextTurn(30)
    effort.useEffort(15)
    effort.returnEffort(10)
    let expected = 5
    let result = effort.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
    effort.returnEffort(5)
    expected = 0
    result = effort.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot return more effort than has been used", () => {
    effort.prepareEffortValuesForNextTurn(30)
    effort.useEffort(10)
    assert.throws(() => {
      effort.returnEffort(11)
    })
    assert.throws(() => {
      effort.returnEffort(100)
    })
    assert.throws(() => {
      effort.returnEffort(1000)
    })
  })

  it("cannot use effort greater than the max", () => {
    effort.prepareEffortValuesForNextTurn(30)
    assert.throws(() => {
      effort.returnEffort(31)
    })
    assert.throws(() => {
      effort.returnEffort(100)
    })
    assert.throws(() => {
      effort.returnEffort(1000)
    })
  })

})

describe("effort - prepare effort values", function(){

  let effort

  beforeEach(() => {
    effort = new Effort()
  })

  function testEffortValues(
    thisTurnTotal, thisTurnUsed, lastTurnTotal, lastTurnUsed)
  {
    let expected = thisTurnTotal
    let result = effort.getTotalEffortThisTurn()
    assert.strictEqual(result, expected)

    expected = thisTurnUsed
    result = effort.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnTotal
    result = effort.getTotalEffortLastTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnUsed
    result = effort.getEffortUsedLastTurn()
    assert.strictEqual(result, expected)
  }

  it("can prepare effort for next turn", () => {
    effort.prepareEffortValuesForNextTurn(30)
    testEffortValues(30,0,0,0)

    effort.prepareEffortValuesForNextTurn(30)
    testEffortValues(30,0,30,0)
    effort.useEffort(10)
    testEffortValues(30,10,30,0)

    effort.prepareEffortValuesForNextTurn(30)
    testEffortValues(30,0,30,10)

    effort.prepareEffortValuesForNextTurn(40)
    testEffortValues(40,0,30,0)
  })
})
