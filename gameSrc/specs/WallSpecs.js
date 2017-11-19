import assert from "assert"
import Wall from "./../base/defence/Wall.js"

describe("Wall", function(){

  let wall

  beforeEach(() => {
    wall = new Wall()
  })

  it("can initialise Wall", () => {
    assert.ok(wall)
    assert.ok(wall.effort)
    assert.strictEqual(wall._materials, 0)
    assert.strictEqual(wall.effort._capacity, Number.MAX_SAFE_INTEGER) 
  })
})
