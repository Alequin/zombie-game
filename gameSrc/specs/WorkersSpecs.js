import assert from "assert"
import Worker from "./../base/workers/Worker.js"
import Workers from "./../base/workers/Workers.js"

describe("Workers", function(){

  let workers
  let workersNonEmpty

  beforeEach(() => {
    workers = new Workers()
    workersNonEmpty = new Workers()
    workersNonEmpty.workers = [
      new Worker(1),
      new Worker(1),
      new Worker(1),
    ]
  })

  it("can initialise workers", () => {
    assert.ok(workers)
  })

  it("can get array of workers", () => {
    const expected = []
    const result = workers.workers
    assert.deepEqual(result, expected)
  })

  it("can get total effort of all workers", () => {
    const expected = 30
    const result = workersNonEmpty.getTotalEffort()
    assert.strictEqual(result, expected)
  })

  it("can use effort", () => {
    workersNonEmpty.useEffort(10)
    const expected = 10
    const result = workersNonEmpty.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
  })
})

describe("Workers - prepare effort values", function(){

  let workers

  beforeEach(() => {
    workers = new Workers()
  })

  function testEffortValues(
    thisTurnTotal, thisTurnUsed, lastTurnTotal, lastTurnUsed)
  {
    let expected = thisTurnTotal
    let result = workers.getTotalEffortThisTurn()
    assert.strictEqual(result, expected)

    expected = thisTurnUsed
    result = workers.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnTotal
    result = workers.getTotalEffortLastTurn()
    assert.strictEqual(result, expected)

    expected = lastTurnUsed
    result = workers.getEffortUsedLastTurn()
    assert.strictEqual(result, expected)
  }

  it("can prepare effort for next turn", () => {
    workers.workers = [
      new Worker(1),
      new Worker(1),
      new Worker(1),
    ]

    workers.prepareEffortValues()
    testEffortValues(30,0,0,0)
    workers.prepareEffortValues()
    testEffortValues(30,0,30,0)
  })
})
