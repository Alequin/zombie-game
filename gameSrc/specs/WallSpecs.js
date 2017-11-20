import assert from "assert"
import Wall from "./../base/defence/Wall.js"

describe("Wall", function(){

  let wall

  beforeEach(() => {
    wall = new Wall(1, 1)
  })

  it("can initialise Wall", () => {
    assert.ok(wall)
    assert.ok(wall.effort)
    assert.strictEqual(wall._input, 0)
    assert.strictEqual(wall._effortPerProduction, 1)
    assert.strictEqual(wall._materialsPerEffort, 1)
    assert.strictEqual(wall.effort._capacity, Number.MAX_SAFE_INTEGER)
  })

  it("can calculate defence", () => {
    wall.effort.add(100)
    wall.produce()

    let expected = 65
    let result = wall.calcCurrentDefence(500)
    assert.strictEqual(result, expected)

    expected = 37
    result = wall.calcCurrentDefence(1000)
    assert.strictEqual(result, expected)

    expected = 26
    result = wall.calcCurrentDefence(1500)
    assert.strictEqual(result, expected)
  })

  it("can calculate defence with custom material input", () => {
    let expected = 65
    let result = Wall.calcDefence(500, 100)
    assert.strictEqual(result, expected)

    expected = 37
    result = Wall.calcDefence(1000, 100)
    assert.strictEqual(result, expected)

    expected = 26
    result = Wall.calcDefence(1500, 100)
    assert.strictEqual(result, expected)
  })
})
