import assert from "assert"
import Wall from "./../../base/defence/Wall.js"
import { wallSettings } from "./../../base/Settings.js"

describe("Wall", function(){

  let wall

  beforeEach(() => {
    wall = new Wall()
  })

  it("can initialise Wall", () => {
    assert.ok(wall)
    assert.strictEqual(wall.getAmount(), 0)
    assert.strictEqual(
      wall._effortPerConstruction, wallSettings.effortPerConstruction
    )
    assert.strictEqual(
      wall._materialsPerConstruction, wallSettings.materialsPerConstruction
    )
    assert.ok(wall.constructionEffort)
  })

  it("can calculate defence", () => {
    wall.add(100)

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
