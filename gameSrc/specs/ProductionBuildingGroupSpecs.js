import assert from "assert"
import ProductionBuildingGroup from "./../base/buildings/ProductionBuildingGroup.js"

describe("Building Group - basic", function(){

  let productionBuildingGroup

  beforeEach(() => {
    productionBuildingGroup = new ProductionBuildingGroup(1, 10, 2)
  })

  it("can initialise buildingGroup", () => {
    assert.ok(productionBuildingGroup)
    assert.strictEqual(productionBuildingGroup._productionPerEffort, 1)
    assert.strictEqual(productionBuildingGroup._singleBuildingEffortCapacity, 10)
    assert.strictEqual(productionBuildingGroup._singleBuildingSize, 2)
  })

})
