import assert from "assert"
import Worker from "./../base/workers/Worker.js"

describe("Worker", function(){

  let worker

  beforeEach(() => {
    worker = new Worker(1)
  })

  it("can initialise a worker", () => {
    assert.ok(worker)
  })

})
