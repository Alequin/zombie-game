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
    const result = worker.getSkill()
    assert.strictEqual(result, expected)
  })

  it("can set a workers skill", () => {
    const max = Worker.maxSkillValue()
    for(let num=1; num <= max; num++){
      worker.setSkill(num)
      const expected = num
      const result = worker.getSkill()
      assert.strictEqual(result, expected)
    }
  })

  it("cannot set a workers skill at 0 or below", () => {
    assert.throws(() => {
      worker.setSkill(0)
    })
    assert.throws(() => {
      worker.setSkill(-10)
    })
    assert.throws(() => {
      worker.setSkill(-100)
    })
  })

  it("cannot set a workers skill above max", () => {
    const max = 5
    assert.throws(() => {
      worker.setSkill(max+1)
    })
    assert.throws(() => {
      worker.setSkill(max+10)
    })
    assert.throws(() => {
      worker.setSkill(max+100)
    })
  })

  it("can get correct effort", () => {
    const max = Worker.maxSkillValue()
    for(let num=1; num <= max; num++){
      worker.setSkill(num)
      const expected = num*10
      const result = worker.getEffort()
      assert.strictEqual(result, expected)
    }
  })
})
