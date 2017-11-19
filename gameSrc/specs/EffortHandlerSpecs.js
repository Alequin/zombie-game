import assert from "assert"
import EffortHandler from "./../util/EffortHandler.js"

describe("test", function(){

  let effortHandler

  beforeEach(() => {
    effortHandler = new EffortHandler(100)
  })

  it("can initialise EffortHandler", () => {
    assert.ok(effortHandler)
    assert.strictEqual(effortHandler._effort, 0)
    assert.strictEqual(effortHandler._capacity, 100)
  })

  it("can get effort capacity", () => {
    let expected = 100
    let result = effortHandler.getCapacity()
    assert.strictEqual(result, expected)
  })

  it("can set effort capacity", () => {
    effortHandler.setCapacity(150)
    let expected = 150
    let result = effortHandler.getCapacity()
    assert.strictEqual(result, expected)
  })

  it("can get current effort", () => {
    let expected = 0
    let result = effortHandler.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("can add and remove effort", () => {
    effortHandler.add(10)

    let expected = 10
    let result = effortHandler.currentEffort()
    assert.strictEqual(result, expected)

    effortHandler.remove(5)

    expected = 5
    result = effortHandler.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("cannot use negative values to modify the effort", () => {
    assert.throws(() => {
      effortHandler.add(-1)
    })
    assert.throws(() => {
      effortHandler.add(-100)
    })
    assert.throws(() => {
      effortHandler.add(-10000)
    })
    assert.throws(() => {
      effortHandler.remove(-1)
    })
    assert.throws(() => {
      effortHandler.remove(-100)
    })
    assert.throws(() => {
      effortHandler.remove(-10000)
    })
  })

  it("cannot remove more effort than exists", () => {
    effortHandler.add(10)
    assert.throws(() => {
      effortHandler.remove(11)
    })
    assert.throws(() => {
      effortHandler.remove(100)
    })
    assert.throws(() => {
      effortHandler.remove(10000)
    })
  })

  it("cannot add an amount of effort greater than the capacity", () => {
    effortHandler.add(90)
    assert.throws(() => {
      effortHandler.add(11)
    })
    assert.throws(() => {
      effortHandler.add(100)
    })
    assert.throws(() => {
      effortHandler.add(10000)
    })
  })
})
