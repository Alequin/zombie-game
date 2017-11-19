import assert from "assert"
import Structure from "./../base/other/Structure.js"

describe("structure", function(){

  let structure

  beforeEach(() => {
    structure = new Structure(10, 10000)
  })

  it("can initialise structure", () => {
    assert.ok(structure)
    assert.ok(structure.effort)
    assert.strictEqual(structure._input, 0)
    assert.strictEqual(structure._productionPerEffort, 10)
    assert.strictEqual(structure.effort._capacity, 10000)
  })

  it("can get materials count", () => {
    let expected = 0
    let result = structure.totalInput()
    assert.strictEqual(result, expected)
  })

  it("can calculate materials required", () => {
    structure.effort.add(10)

    let expected = 100
    let result = structure.calcRequiredInput()
    assert.strictEqual(result, expected)
  })

  it("can produce (add input to the structure)", () => {
    structure.effort.add(10)

    let expected = 10
    let result = structure.effort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 0
    result = structure.totalInput()
    assert.strictEqual(result, expected)

    structure.produce()

    expected = 0
    result = structure.effort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 100
    result = structure.totalInput()
    assert.strictEqual(result, expected)
  })
})
