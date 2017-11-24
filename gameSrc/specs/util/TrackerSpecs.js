import assert from "assert"
import Tracker from "./../../util/Tracker.js"

describe("Tracker", function(){

  it("can initialise", () => {
    let tracker = new Tracker(0)
    assert.ok(tracker)
    assert.strictEqual(
      tracker.val.get(), 0
    )
    assert.strictEqual(
      tracker.val.getMin(), Number.MIN_SAFE_INTEGER
    )
    assert.strictEqual(
      tracker.val.getMax(), Number.MAX_SAFE_INTEGER
    )
  })

  it("can initialise with max and min", () => {
    let tracker = new Tracker(0, -1000, 1000)
    assert.ok(tracker)
    assert.strictEqual(
      tracker.val.get(), 0
    )
    assert.strictEqual(
      tracker.val.getMin(), -1000
    )
    assert.strictEqual(
      tracker.val.getMax(), 1000
    )
  })

  it("can get the value", () => {
    const tracker = new Tracker(5)
    let expected = 5
    let result = tracker.val.get()
    assert.strictEqual(result, expected)
  })

  it("can get the min value", () => {
    const tracker = new Tracker(0, -5, 5)
    let expected = -5
    let result = tracker.val.getMin()
    assert.strictEqual(result, expected)
  })

  it("can get the max value", () => {
    const tracker = new Tracker(0, -5, 5)
    let expected = 5
    let result = tracker.val.getMax()
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

  function testMaxMinValues(tracker){
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
  }
  it("can set a max and min value - on construction", () => {
    testMaxMinValues(new Tracker(0, -5, 5))
  })

  it("can set a max and min value - with methods", () => {
    const tracker = new Tracker(0)
    tracker.val.max(5)
    tracker.val.min(-5)
    testMaxMinValues(tracker)
  })

  it("cannot set a min greater than the max", () => {
    assert.throws(() => {
      new Tracker(0, 5, 4)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.val.min(6)
    })
  })

  it("cannot set a min greater than the current value", () => {
    assert.throws(() => {
      new Tracker(1, 2, 10)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.val.min(1)
    })
  })

  it("cannot set a max less than the min", () => {
    assert.throws(() => {
      new Tracker(0, 6, 5)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.val.max(-6)
    })
  })

  it("cannot set a max to less than the current value", () => {
    assert.throws(() => {
      new Tracker(1, -10, 0)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.val.max(-1)
    })
  })

})
