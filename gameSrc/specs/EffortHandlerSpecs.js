import assert from "assert"
import EffortHandler from "./../util/EffortHandler.js"

describe("test", function(){

  let effortHandler

  beforeEach(() => {
    effortHandler = new EffortHandler
  })

  it("can initialise EffortHandler", () => {
    assert.ok(effortHandler)
    assert.strictEqual(effortHandler._currentEffort, 0)
  })

})
