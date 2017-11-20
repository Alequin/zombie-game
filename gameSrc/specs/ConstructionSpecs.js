import assert from "assert"
import Construction from "./../base/buildings/Construction.js"

describe("Construction", function(){

  let construction

  beforeEach(() => {
    construction = new Construction(10, () => {}, () => {})
  })

  it("can initialise", () => {
    assert.ok(construction)
    assert.strictEqual(construction._effortPerConstruction, 10)
    assert.ok(construction._add)
    assert.ok(construction._remove)
  })

})
