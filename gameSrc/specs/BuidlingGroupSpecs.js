import assert from "assert"
import BuildingGroup from "./../base/buildings/BuildingGroup.js"

describe("Building Group - basic", function(){

  let buildingGroup

  beforeEach(() => {
    buildingGroup = new BuildingGroup(2)
  })

  it("can initialise buildingGroup", () => {
    assert.ok(buildingGroup)
    assert.strictEqual(buildingGroup._singleBuildingSize, 2)
  })

  it("can count number of buildings", () => {
    let expected = 0
    let result = buildingGroup.count()
    assert.strictEqual(result, expected)
  })

  it("can add to number of buildings", () => {
    buildingGroup.add(10)

    let expected = 10
    let result = buildingGroup.count()
    assert.strictEqual(result, expected)
  })

  it("can remove buildings from total count", () => {
    buildingGroup.add(10)
    buildingGroup.remove(5)

    let expected = 5
    let result = buildingGroup.count()
    assert.strictEqual(result, expected)
  })

})
