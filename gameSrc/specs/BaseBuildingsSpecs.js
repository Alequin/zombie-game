import assert from "assert"
import Houses from "./../base/buildings/Houses.js"
import ProductionBuildingGroup from "./../base/buildings/ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./../base/buildings/InputProductionBuildingGroup.js"
import BaseBuildings from "./../base/buildings/BaseBuildings.js"

describe("Base Buildings", function(){

  let houses
  let farms
  let lumberYards
  let scrapYards
  let baseBuildings

  beforeEach(() => {
    houses = new Houses(6, 1)
    farms = new ProductionBuildingGroup(10, 100, 10)
    lumberYards = new InputProductionBuildingGroup(3, 3, 50, 3)
    scrapYards = new InputProductionBuildingGroup(1.5, 3, 50, 3)
    baseBuildings = new BaseBuildings(houses, farms, lumberYards, scrapYards)
  })

  it("can initialise base builings", () => {
    assert.ok(baseBuildings)
    assert.ok(baseBuildings.houses)
    assert.ok(baseBuildings.farms)
    assert.ok(baseBuildings.lumberYards)
    assert.ok(baseBuildings.scrapYards)
  })


  it("cannot initialise with invalid objects", () => {
    assert.throws(() => {
      baseBuildings = new BaseBuildings(0, farms, lumberYards, scrapYards)
    })
    assert.throws(() => {
      baseBuildings = new BaseBuildings(houses, 0, lumberYards, scrapYards)
    })
    assert.throws(() => {
      baseBuildings = new BaseBuildings(houses, farms, 0, scrapYards)
    })
    assert.throws(() => {
      baseBuildings = new BaseBuildings(houses, farms, lumberYards, 0)
    })
  })

  it("can calculate overall size used", () => {
    baseBuildings.houses.add(10)
    baseBuildings.farms.add(10)
    baseBuildings.lumberYards.add(10)
    baseBuildings.scrapYards.add(10)

    let expected = houses.usedSpace() + farms.usedSpace() +
    lumberYards.usedSpace() + scrapYards.usedSpace()

    let result = baseBuildings.totalSpaceUsed()
    assert.strictEqual(result, expected)
  })

})
