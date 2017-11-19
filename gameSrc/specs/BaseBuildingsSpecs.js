import assert from "assert"
import BaseBuildings from "./../base/buildings/BaseBuildings.js"

describe("Base Buildings", function(){

  let baseBuildings

  beforeEach(() => {
    baseBuildings = new BaseBuildings()
  })

  it("can initialise base builings", () => {
    assert.ok(baseBuildings)
    assert.ok(baseBuildings.houses)
    assert.ok(baseBuildings.farms)
    assert.ok(baseBuildings.lumbarYards)
    assert.ok(baseBuildings.scrapYards)
  })

})
