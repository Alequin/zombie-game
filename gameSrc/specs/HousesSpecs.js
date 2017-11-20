import assert from "assert"
import Houses from "./../base/buildings/Houses.js"
import { houseSettings } from "./../base/Settings.js"

describe("Houses", function(){

  let houses

  beforeEach(() => {
    houses = new Houses()
  })

  it("can initialise houses", () => {
    assert.ok(houses)
    assert.strictEqual(houses._singleBuildingSize, houseSettings.singleHouseSize)
    assert.strictEqual(houses.construction._effortPerConstruction, houseSettings.effortPerConstruction)
    assert.strictEqual(houses.construction._materialsPerEffort, houseSettings.materialsPerHouse)
  })

  it("can get total Population capacity of houses", () => {
    houses.add(10)

    let expected = 60
    let result = houses.totalPopulationCapacity()
    assert.strictEqual(result, expected)
  })
})
