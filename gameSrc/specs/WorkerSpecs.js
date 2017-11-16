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

  it("can get a workers skill", () => {
    const expected = 1
    const result = worker.skill
    assert.ok(result, expected)
  })

  it("can set a workers skill", () => {
    worker.setSkill(3)
    const expected = 1
    const result = worker.skill
    assert.ok(result, expected)
  })

})
