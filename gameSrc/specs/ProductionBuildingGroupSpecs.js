import assert from "assert"
import ProductionBuildingGroup from "./../base/buildings/ProductionBuildingGroup.js"

describe("production Building Group - basic", function(){

  let productionBuildingGroup

  beforeEach(() => {
    productionBuildingGroup = new ProductionBuildingGroup(2, 10, 2)
  })

  it("can initialise ProductionBuildingGroup", () => {
    assert.ok(productionBuildingGroup)
    assert.strictEqual(productionBuildingGroup._productionPerEffort, 2)
    assert.strictEqual(productionBuildingGroup._singleBuildingEffortCapacity, 10)
    assert.strictEqual(productionBuildingGroup._singleBuildingSize, 2)
  })

  it("can calculate production", () => {
    productionBuildingGroup.add(10)
    productionBuildingGroup.effort.add(50)

    let expected = 100
    let result = productionBuildingGroup.calcProduction()
    assert.strictEqual(result, expected)
  })

  it("can produce", () => {
    productionBuildingGroup.add(10)
    productionBuildingGroup.effort.add(50)

    let expected = 100
    let result = productionBuildingGroup.produce()
    assert.strictEqual(result, expected)

    expected = 0
    result = productionBuildingGroup.effort.currentEffort()
    assert.strictEqual(result, expected)
  })
})
