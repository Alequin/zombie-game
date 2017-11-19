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
    assert.strictEqual(wall._input, 0)
    assert.strictEqual(wall._productionPerEffort, 10)
    assert.strictEqual(wall.effort._capacity, Number.MAX_SAFE_INTEGER)
  })

  it("can calculate defence", () => {
    wall.effort.add(10)
    wall.produce()

    let expected = 65
    let result = wall.calcDefence(1)
    assert.strictEqual(result, expected)

    expected = 37
    result = wall.calcDefence(2)
    assert.strictEqual(result, expected)

    expected = 26
    result = wall.calcDefence(3)
    assert.strictEqual(result, expected)
  })
})
