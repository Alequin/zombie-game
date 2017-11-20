import assert from "assert"
import Base from "./../base/Base.js"

describe("Base", function(){

  let base

  beforeEach(() => {
    base = new Base()
  })

  it("can initialise", () => {
    assert.ok(base)
    assert.ok(base.population)
    // assert.ok(base.effort)
    // assert.ok(base.size)
    // assert.ok(base.wall)
    // assert.ok(base.traps)
    // assert.ok(base.buildings)
    // assert.ok(base.storage)
  })

})
