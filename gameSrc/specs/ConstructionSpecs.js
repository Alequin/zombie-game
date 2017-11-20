import assert from "assert"
import Construction from "./../base/buildings/Construction.js"

describe("Construction", function(){

  let construction

  beforeEach(() => {
    construction = new Construction(10, () => {}, () => {})
  })

  it("can initialise", () => {
    assert.ok(construction)
    assert.strictEqual(construction._effortPerConstruction, 10)
    assert.ok(construction._add)
    assert.ok(construction._remove)
  })

  it("can calculate amount to construct", () => {
    construction.effort.add(10)

    let expected = 1
    let result = construction._calcAmountToConstruct()
    assert.strictEqual(result, expected)
  })

  it("can build", () => {
    construction.effort.add(10)
    construction.build()

    let expected = 0
    let result = construction.effort.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("can tearDown", () => {
    construction.effort.add(10)
    construction.build()

    let expected = 0
    let result = construction.effort.currentEffort()
    assert.strictEqual(result, expected)
  })
})
