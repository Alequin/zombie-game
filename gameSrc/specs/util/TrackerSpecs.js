import assert from "assert"
import Tracker from "./../../util/Tracker.js"

describe("Tracker", function(){

  it("can initialise", () => {
    assert.ok(new Tracker(0))
  })

  it("can get the value", () => {
    const tracker = new Tracker(5)
    let expected = 5
    let result = tracker.val.get()
    assert.strictEqual(result, expected)
  })

  it("can increase the value", () => {
    const tracker = new Tracker(5)
    tracker.val.inc()
    let expected = 6
    let result = tracker.val.get()
    assert.strictEqual(result, expected)

    tracker.val.inc(4)
    expected = 10
    result = tracker.val.get()
    assert.strictEqual(result, expected)
  })

  it("cannot increase the value with a negative number", () => {
    const tracker = new Tracker(0)
    assert.throws(() => {
      tracker.val.inc(-1)
    })
    assert.throws(() => {
      tracker.val.inc(-100)
    })
    assert.throws(() => {
      tracker.val.inc(-10000)
    })
  })

  it("can decrease the value", () => {
    const tracker = new Tracker(5)
    tracker.val.dec()
    let expected = 4
    let result = tracker.val.get()
    assert.strictEqual(result, expected)

    tracker.val.dec(4)
    expected = 0
    result = tracker.val.get()
    assert.strictEqual(result, expected)
  })

  it("cannot increase the value with a negative number", () => {
    const tracker = new Tracker(0)
    assert.throws(() => {
      tracker.val.dec(-1)
    })
    assert.throws(() => {
      tracker.val.dec(-100)
    })
    assert.throws(() => {
      tracker.val.dec(-10000)
    })
  })

  it("can set a max and min value - on construction", () => {
    const tracker = new Tracker(0, -5, 5)

    tracker.val.inc(5)
    let expected = 5
    let result = tracker.val.get()
    assert.strictEqual(result, expected)

    assert.throws(() => {
      tracker.val.inc(1)
    })

    tracker.val.dec(10)
    expected = -5
    result = tracker.val.get()
    assert.strictEqual(result, expected)

    assert.throws(() => {
      tracker.val.dec(1)
    })
  })

})
