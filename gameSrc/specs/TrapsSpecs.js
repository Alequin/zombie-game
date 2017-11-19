import assert from "assert"
import Traps from "./../base/defence/Traps.js"

describe("Traps", function(){

  let traps

  beforeEach(() => {
    traps = new Traps()
  })

  it("can initialise", () => {
    assert.ok(traps)
  })
})
