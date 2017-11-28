import assert from "assert"
import BaseBuildings from "./../../base/buildings/BaseBuildings.js"
import {
  houseSettings,
  farmSettings,
  lumberYardSettings,
  scrapYardSettings,
  schoolSettings,
} from "./../../base/Settings.js"

describe("Base Buildings", function(){

  let baseBuildings

  beforeEach(() => {
    baseBuildings = new BaseBuildings()
  })

  it("can initialise base builings", () => {
    assert.ok(baseBuildings)
    assert.ok(baseBuildings.houses)
    assert.ok(baseBuildings.farms)
    assert.ok(baseBuildings.lumberYards)
    assert.ok(baseBuildings.scrapYards)
    assert.ok(baseBuildings.schools)
  })

  it("can calculate overall size used", () => {
    baseBuildings.houses.add(10)
    baseBuildings.farms.add(10)
    baseBuildings.lumberYards.add(10)
    baseBuildings.scrapYards.add(10)
    baseBuildings.schools.add(10)

    let expected = 10*houseSettings.singleHouseSize +
    10*farmSettings.singleBuildingSize +
    10*lumberYardSettings.singleBuildingSize +
    10*scrapYardSettings.singleBuildingSize +
    10*schoolSettings.singleBuildingSize

    let result = baseBuildings.totalSpaceUsed()
    assert.strictEqual(result, expected)
  })
})
