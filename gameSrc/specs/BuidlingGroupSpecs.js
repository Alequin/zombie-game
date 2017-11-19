import assert from "assert"
import BuildingGroup from "./../base/buildings/BuildingGroup.js"

describe("Building Group - basic", function(){

  let buildingGroup

  beforeEach(() => {
    buildingGroup = new BuildingGroup()
  })

  it("can initialise buildingGroup", () => {
    assert.ok(buildingGroup)
  })

})
