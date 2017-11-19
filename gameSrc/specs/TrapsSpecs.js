import assert from "assert"
import Traps from "./../base/defence/Traps.js"

describe("Traps", function(){

  let traps

  beforeEach(() => {
    traps = new Traps(10)
  })

  it("can initialise", () => {
    assert.ok(traps)
    assert.ok(traps.effort)
    assert.strictEqual(traps._input, 0)
    assert.strictEqual(traps._productionPerEffort, 10)
    assert.strictEqual(traps.effort._capacity, Number.MAX_SAFE_INTEGER)
  })
})
