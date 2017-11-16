import assert from "assert"
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


})
