import assert from "assert"
import Tracker from "./../../util/Tracker.js"

describe("Tracker", function(){

  it("can initialise", () => {
    assert.ok(new Tracker(0))
  })

  it("cannot initialise with value less than 0", () => {
    assert.throws(() => {
      new Tracker(-1)
    })
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

})
