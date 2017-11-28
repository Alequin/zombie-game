import assert from "assert"
import Structure from "./../../base/other/Structure.js"

describe("structure", function(){

  let structure

  beforeEach(() => {
    structure = new Structure(0, 10, 10, 10000)
  })

  it("can initialise structure", () => {
    assert.ok(structure)
    assert.strictEqual(structure.getAmount(), 0)
    assert.strictEqual(structure._effortPerConstruction, 10)
    assert.strictEqual(structure._materialsPerConstruction, 10)
  })

  it("can get input count", () => {
    let expected = 0
    let result = structure.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can add to input", () => {
    structure.add(10)
    let expected = 10
    let result = structure.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can remove from input", () => {
    structure.add(10)
    structure.remove(5)
    let expected = 5
    let result = structure.getAmount()
    assert.strictEqual(result, expected)
  })

  it("cannot alter input with negative values", () => {
    assert.throws(() => {
      structure.add(-1)
    })
    assert.throws(() => {
      structure.add(-100)
    })
    assert.throws(() => {
      structure.add(-10000)
    })
    assert.throws(() => {
      structure.remove(-1)
    })
    assert.throws(() => {
      structure.remove(-100)
    })
    assert.throws(() => {
      structure.remove(-10000)
    })
  })

  it("cannot reduce input to less than 0", () => {
    assert.throws(() => {
      structure.remove(1)
    })
    assert.throws(() => {
      structure.remove(100)
    })
    assert.throws(() => {
      structure.remove(10000)
    })
  })
})
