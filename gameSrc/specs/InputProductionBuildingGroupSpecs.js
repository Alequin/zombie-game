import assert from "assert"
import InputProductionBuildingGroup from "./../base/buildings/InputProductionBuildingGroup.js"

describe("Input Production Building Group - basic", function(){

  let inputProductionBuildingGroup

  beforeEach(() => {
    inputProductionBuildingGroup = new InputProductionBuildingGroup(3, 3, 10, 2)
  })

  it("can initialise inputProductionBuildingGroup", () => {
    assert.ok(inputProductionBuildingGroup)
    assert.strictEqual(inputProductionBuildingGroup._productionRatio, 3)
    assert.strictEqual(inputProductionBuildingGroup._productionPerEffort, 3)
    assert.strictEqual(inputProductionBuildingGroup._singleBuildingEffortCapacity, 10)
    assert.strictEqual(inputProductionBuildingGroup._singleBuildingSize, 2)
  })

  it("can calculate required input", () => {
    inputProductionBuildingGroup.add(10)
    inputProductionBuildingGroup.addEffort(50)

    let expected = 450
    let result = inputProductionBuildingGroup.calcRequiredInput()
    assert.strictEqual(result, expected)
  })

  it("can calculate required input - floors decimal values", () => {
    inputProductionBuildingGroup = new InputProductionBuildingGroup(1.5, 1, 10, 2)
    inputProductionBuildingGroup.add(10)
    inputProductionBuildingGroup.addEffort(51)

    let expected = 77
    let result = inputProductionBuildingGroup.calcRequiredInput()
    assert.strictEqual(result, expected)
  })
})
