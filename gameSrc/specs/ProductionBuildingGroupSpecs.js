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

  it("can get effort capacity", () => {
    productionBuildingGroup.add(10)

    let expected = 100
    let result = productionBuildingGroup.effortCapacity()
    assert.strictEqual(result, expected)
  })

  it("can get current effort", () => {
    let expected = 0
    let result = productionBuildingGroup.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("can add and remove effort", () => {
    productionBuildingGroup.addEffort(10)

    let expected = 10
    let result = productionBuildingGroup.currentEffort()
    assert.strictEqual(result, expected)

    productionBuildingGroup.removeEffort(5)

    expected = 5
    result = productionBuildingGroup.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("cannot use negative values to modify the effort", () => {
    assert.throws(() => {
      productionBuildingGroup.addEffort(-1)
    })
    assert.throws(() => {
      productionBuildingGroup.addEffort(-100)
    })
    assert.throws(() => {
      productionBuildingGroup.addEffort(-10000)
    })
    assert.throws(() => {
      productionBuildingGroup.removeEffort(-1)
    })
    assert.throws(() => {
      productionBuildingGroup.removeEffort(-100)
    })
    assert.throws(() => {
      productionBuildingGroup.removeEffort(-10000)
    })
  })

  it("cannot remove more effort than exists", () => {
    productionBuildingGroup.addEffort(10)
    assert.throws(() => {
      productionBuildingGroup.removeEffort(11)
    })
    assert.throws(() => {
      productionBuildingGroup.removeEffort(100)
    })
    assert.throws(() => {
      productionBuildingGroup.removeEffort(10000)
    })
  })

})
