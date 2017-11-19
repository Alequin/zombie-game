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
    effort.prepareValuesForNextTurn(30)
    effort.use(10)
    const expected = 10
    const result = effort.getUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot use 0 or less effort", () => {
    assert.throws(() => {
      effort.use(0)
    })
    assert.throws(() => {
      effort.use(-10)
    })
    assert.throws(() => {
      effort.use(-100)
    })
  })

  it("cannot use effort greater than the max", () => {
    effort.prepareValuesForNextTurn(30)
    effort.use(10)
    effort.use(10)
    effort.use(10)
    assert.throws(() => {
      effort.use(1)
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

describe("effort - prepare effort values", function(){

  let effort

  beforeEach(() => {
    effort = new Effort()
  })

  function testEffortValues(
    thisTurnTotal, thisTurnUsed, lastTurnTotal, lastTurnUsed)
  {
    let expected = thisTurnTotal
    let result = effort.getTotalThisTurn()
    assert.strictEqual(result, expected)

    expected = thisTurnUsed
    result = effort.getUsedThisTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnTotal
    result = effort.getTotalLastTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnUsed
    result = effort.getUsedLastTurn()
    assert.strictEqual(result, expected)
  }

  it("can prepare effort for next turn", () => {
    effort.prepareValuesForNextTurn(30)
    testEffortValues(30,0,0,0)

    effort.prepareValuesForNextTurn(30)
    testEffortValues(30,0,30,0)
    effort.use(10)
    testEffortValues(30,10,30,0)

    effort.prepareValuesForNextTurn(30)
    testEffortValues(30,0,30,10)

    effort.prepareValuesForNextTurn(40)
    testEffortValues(40,0,30,0)
  })
})
