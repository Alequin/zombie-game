import assert from "assert"
import Structure from "./../base/other/Structure.js"

describe("structure", function(){

  let structure

  beforeEach(() => {
    structure = new Structure(10, 10, 10000)
  })

  it("can initialise structure", () => {
    assert.ok(structure)
    assert.ok(structure.effort)
    assert.strictEqual(structure._input, 0)
    assert.strictEqual(structure._effortPerConstruction, 10)
    assert.strictEqual(structure._materialsPerConstruction, 10)
  })

  it("can get input count", () => {
    let expected = 0
    let result = structure.totalInput()
    assert.strictEqual(result, expected)
  })

  it("can add to input", () => {
    structure.addToInput(10)
    let expected = 10
    let result = structure.totalInput()
    assert.strictEqual(result, expected)
  })

  it("can remove from input", () => {
    structure.addToInput(10)
    structure.removeFromInput(5)
    let expected = 5
    let result = structure.totalInput()
    assert.strictEqual(result, expected)
  })

  it("cannot alter input with negative values", () => {
    assert.throws(() => {
      structure.addToInput(-1)
    })
    assert.throws(() => {
      structure.addToInput(-100)
    })
    assert.throws(() => {
      structure.addToInput(-10000)
    })
    assert.throws(() => {
      structure.removeFromInput(-1)
    })
    assert.throws(() => {
      structure.removeFromInput(-100)
    })
    assert.throws(() => {
      structure.removeFromInput(-10000)
    })
  })

  it("cannot reduce input to less than 0", () => {
    assert.throws(() => {
      structure.removeFromInput(1)
    })
    assert.throws(() => {
      structure.removeFromInput(100)
    })
    assert.throws(() => {
      structure.removeFromInput(10000)
    })
  })
})
