import assert from "assert"
import Houses from "./../../base/buildings/Houses.js"
import { houseSettings } from "./../../base/Settings.js"

describe("Houses", function(){

  let houses

  beforeEach(() => {
    houses = new Houses(10, 20, 30, 40)
  })

  it("can initialise houses", () => {
    assert.ok(houses)
    assert.strictEqual(houses._singleHouseCapacity, 10)
    assert.strictEqual(houses._singleBuildingSize, 20)
    assert.strictEqual(houses._effortPerConstruction, 30)
    assert.strictEqual(houses._materialsPerConstruction, 40)
  })

  it("can get total Population capacity of houses", () => {
    houses.add(10)

    let expected = 100
    let result = houses.totalPopulationCapacity()
    assert.strictEqual(result, expected)
  })

  it("can calculate population capacity when given values", () => {
    let expected = 200
    let result = Houses.calcPossiblePopulationCapacity(50, 4)
    assert.strictEqual(result, expected)
  })
})
