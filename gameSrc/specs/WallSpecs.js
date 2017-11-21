import assert from "assert"
import Wall from "./../base/defence/Wall.js"
import { wallSettings } from "./../base/Settings.js"

describe("Wall", function(){

  let wall

  beforeEach(() => {
    wall = new Wall()
  })

  it("can initialise Wall", () => {
    assert.ok(wall)
    assert.ok(wall.effort)
    assert.strictEqual(wall._input, 0)
    assert.strictEqual(
      wall._effortPerConstruction, wallSettings.effortPerConstruction
    )
    assert.strictEqual(
      wall._materialsPerConstruction, wallSettings.materialsPerConstruction
    )
    assert.strictEqual(wall.effort._capacity, Number.MAX_SAFE_INTEGER)
  })

  it("can calculate defence", () => {
    wall._input = 100

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
describe("Wall", function(){

  it("can initialise Wall with materials", () => {
    let wall = new Wall(100)

    let expected = 100
    let result = wall.totalInput()
    assert.strictEqual(result, expected)
  })
})
