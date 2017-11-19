import assert from "assert"
import Houses from "./../base/buildings/Houses.js"

describe("Houses", function(){

  let houses

  beforeEach(() => {
    houses = new Houses(4)
  })

  it("can initialise houses", () => {
    assert.ok(houses)
    assert.strictEqual(houses._singleHouseCapacity, 4)
    assert.strictEqual(houses._singleBuildingSize, 2)
  })

  it("can get total capacity of houses", () => {
    houses.add(10)

    let expected = 40
    let result = houses.totalCapacity()
    assert.strictEqual(result, expected)
  })
})
