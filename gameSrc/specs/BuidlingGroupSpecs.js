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

  it("can get space used by all buildings in group", () => {
    buildingGroup.add(10)

    let expected = 20
    let result = buildingGroup.usedSpace()
    assert.strictEqual(result, expected)

    const buildingGroup2 = new BuildingGroup(10)
    buildingGroup2.add(10)
    expected = 100
    result = buildingGroup2.usedSpace()
    assert.strictEqual(result, expected)
  })

  it("cannot alter count with negative values", () => {
    assert.throws(() => {
      buildingGroup.add(-1)
    })
    assert.throws(() => {
      buildingGroup.add(-100)
    })
    assert.throws(() => {
      buildingGroup.add(-10000)
    })
    assert.throws(() => {
      buildingGroup.remove(-1)
    })
    assert.throws(() => {
      buildingGroup.remove(-100)
    })
    assert.throws(() => {
      buildingGroup.remove(-10000)
    })
  })

  it("cannot remove more buildings than are available", () => {
    assert.throws(() => {
      buildingGroup.remove(1)
    })
    assert.throws(() => {
      buildingGroup.remove(100)
    })
    assert.throws(() => {
      buildingGroup.remove(10000)
    })
  })

  it("single building size cannot 0 or less", () => {
    assert.throws(() => {
      new BuildingGroup(0)
    })
    assert.throws(() => {
      new BuildingGroup(-100)
    })
    assert.throws(() => {
      new BuildingGroup(-10000)
    })
  })
})
