import assert from "assert"
import InputProductionBuildingGroup from "./../base/buildings/InputProductionBuildingGroup.js"

describe("Input Production Building Group - basic", function(){

  let inputProductionBuildingGroup

  beforeEach(() => {
    inputProductionBuildingGroup = new InputProductionBuildingGroup(0.3, 1, 10, 2)
  })

  it("can initialise inputProductionBuildingGroup", () => {
    assert.ok(inputProductionBuildingGroup)
    assert.strictEqual(inputProductionBuildingGroup._productionRatio, 0.3)
    assert.strictEqual(inputProductionBuildingGroup._productionPerEffort, 1)
    assert.strictEqual(inputProductionBuildingGroup._singleBuildingEffortCapacity, 10)
    assert.strictEqual(inputProductionBuildingGroup._singleBuildingSize, 2)
  })
})
