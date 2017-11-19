import assert from "assert"
import Wall from "./../base/defence/Wall.js"

describe("Wall", function(){

  let wall

  beforeEach(() => {
    wall = new Wall(10)
  })

  it("can initialise Wall", () => {
    assert.ok(wall)
    assert.ok(wall.effort)
    assert.strictEqual(wall._materials, 0)
    assert.strictEqual(wall._productionPerEffort, 10)
    assert.strictEqual(wall.effort._capacity, Number.MAX_SAFE_INTEGER)
  })

  it("can get materials count", () => {
    let expected = 0
    let result = wall.countMaterials()
    assert.strictEqual(result, expected)
  })

  it("can produce (add materials to the wall)", () => {
    wall.effort.add(10)

    let expected = 10
    let result = wall.effort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 0
    result = wall.countMaterials()
    assert.strictEqual(result, expected)

    wall.produce()

    expected = 0
    result = wall.effort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 100
    result = wall.countMaterials()
    assert.strictEqual(result, expected)


  })
})
