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
    workersNonEmpty.prepareEffortValuesForNextTurn()
    workersNonEmpty.useEffort(10)
    const expected = 10
    const result = workersNonEmpty.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot use 0 or less effort", () => {
    assert.throws(() => {
      workersNonEmpty.useEffort(0)
    })
    assert.throws(() => {
      workersNonEmpty.useEffort(-10)
    })
    assert.throws(() => {
      workersNonEmpty.useEffort(-100)
    })
  })

  it("cannot use effort greater than the max", () => {
    workersNonEmpty.prepareEffortValuesForNextTurn()
    workersNonEmpty.useEffort(10)
    workersNonEmpty.useEffort(10)
    workersNonEmpty.useEffort(10)
    assert.throws(() => {
      workersNonEmpty.useEffort(1)
    })
  })

  it("can return effort", () => {
    workersNonEmpty.prepareEffortValuesForNextTurn()
    workersNonEmpty.useEffort(15)
    workersNonEmpty.returnEffort(10)
    let expected = 5
    let result = workersNonEmpty.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
    workersNonEmpty.returnEffort(5)
    expected = 0
    result = workersNonEmpty.getEffortUsedThisTurn()
    assert.strictEqual(result, expected)
  })

  it("cannot return more effort than has been used", () => {
    workersNonEmpty.prepareEffortValuesForNextTurn()
    workersNonEmpty.useEffort(10)
    assert.throws(() => {
      workersNonEmpty.returnEffort(11)
    })
    assert.throws(() => {
      workersNonEmpty.returnEffort(100)
    })
    assert.throws(() => {
      workersNonEmpty.returnEffort(1000)
    })
  })

  it("cannot use effort greater than the max", () => {
    assert.throws(() => {
      workersNonEmpty.returnEffort(0)
    })
    assert.throws(() => {
      workersNonEmpty.returnEffort(-1)
    })
    assert.throws(() => {
      workersNonEmpty.returnEffort(-100)
    })
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

    workers.prepareEffortValuesForNextTurn()
    testEffortValues(30,0,0,0)
    workers.prepareEffortValuesForNextTurn()
    testEffortValues(30,0,30,0)
    workers.useEffort(10)
    testEffortValues(30,10,30,0)
    workers.prepareEffortValuesForNextTurn()
    testEffortValues(30,0,30,10)
  })
})
