import assert from "assert"
import Houses from "./../base/buildings/Houses.js"
import ProductionBuildingGroup from "./../base/buildings/ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./../base/buildings/InputProductionBuildingGroup.js"
import BaseBuildings from "./../base/buildings/BaseBuildings.js"

describe("Base Buildings", function(){

  let baseBuildings

  beforeEach(() => {
    const houses = new Houses(6, 1)
    const farms = new ProductionBuildingGroup(10, 100, 10)
    const lumbarYards = new InputProductionBuildingGroup(3, 3, 50, 3)
    const scrapYards = new InputProductionBuildingGroup(1.5, 3, 50, 3)
    baseBuildings = new BaseBuildings(houses, farms, lumbarYards, scrapYards)
  })

  it("can initialise base builings", () => {
    assert.ok(baseBuildings)
    assert.ok(baseBuildings.houses)
    assert.ok(baseBuildings.farms)
    assert.ok(baseBuildings.lumbarYards)
    assert.ok(baseBuildings.scrapYards)
  })

  it("can calculate overall size used", () => {
    baseBuildings.houses.add(10)
    baseBuildings.farms.add(10)
    baseBuildings.lumbarYards.add(10)
    baseBuildings.scrapYards.add(10)

    let expected = 10 + (10*10) + (10*3) + (10*3)
    let result = baseBuildings.totalSpaceUsed()
    assert.strictEqual(result, expected)
  })

})
