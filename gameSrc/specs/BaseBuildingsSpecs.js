import assert from "assert"
import BaseBuildings from "./../base/buildings/BaseBuildings.js"

describe("Base Buildings", function(){

  let baseBuildings

  beforeEach(() => {
    const buildings = {
      houses: {
        singleHouseCapacity: 6,
        singleHouseSize: 1,
      },
      farms: {
        productionPerEffort: 10,
        singleBuildingEffortCapacity: 100,
        singleBuildingSize: 10,
      },
      lumberYards: {
        productionRatio: 3,
        productionPerEffort: 3,
        singleBuildingEffortCapacity: 50,
        singleBuildingSize: 3,
      },
      scrapYards: {
        productionRatio: 1.5,
        productionPerEffort: 3,
        singleBuildingEffortCapacity: 50,
        singleBuildingSize: 3,
      },
    }
    baseBuildings = new BaseBuildings(buildings)
  })

  it("can initialise base builings", () => {
    assert.ok(baseBuildings)
    assert.ok(baseBuildings.houses)
    assert.ok(baseBuildings.farms)
    assert.ok(baseBuildings.lumberYards)
    assert.ok(baseBuildings.scrapYards)
  })

  it("can calculate overall size used", () => {
    baseBuildings.houses.add(10)
    baseBuildings.farms.add(10)
    baseBuildings.lumberYards.add(10)
    baseBuildings.scrapYards.add(10)

    let expected = 10 + (10*10) + (10*3) + (10*3)
    let result = baseBuildings.totalSpaceUsed()
    assert.strictEqual(result, expected)
  })
})
