import assert from "assert"
import Worker from "./../base/workers/Worker.js"
import Workers from "./../base/workers/Workers.js"

describe("Workers", function(){

  let workers

  beforeEach(() => {
    workers = new Workers()
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
    workers.workers = [
      new Worker(1),
      new Worker(1),
      new Worker(1),
    ]

    const expected = 30
    const result = workers.getTotalEffort()
    assert.strictEqual(result, expected)
  })
})
