import assert from "assert"
import Tracker from "./../../util/Tracker.js"
import { newMaxValueTracker } from "./../../util/TrackerFactory.js"

describe("Tracker", function(){

  it("can initialise", () => {
    let tracker = new Tracker(0)
    assert.ok(tracker)
    assert.strictEqual(
      tracker.get(), 0
    )
    assert.strictEqual(
      tracker.getMin(), Number.MIN_SAFE_INTEGER
    )
    assert.strictEqual(
      tracker.getMax(), Number.MAX_SAFE_INTEGER
    )
  })

  it("can initialise with max and min", () => {
    let tracker = new Tracker(0, -1000, 1000)
    assert.ok(tracker)
    assert.strictEqual(
      tracker.get(), 0
    )
    assert.strictEqual(
      tracker.getMin(), -1000
    )
    assert.strictEqual(
      tracker.getMax(), 1000
    )
  })

  it("can get the value", () => {
    const tracker = new Tracker(5)
    let expected = 5
    let result = tracker.get()
    assert.strictEqual(result, expected)
  })

  it("can get the min value", () => {
    const tracker = new Tracker(0, -5, 5)
    let expected = -5
    let result = tracker.getMin()
    assert.strictEqual(result, expected)
  })

  it("can get the max value", () => {
    const tracker = new Tracker(0, -5, 5)
    let expected = 5
    let result = tracker.getMax()
    assert.strictEqual(result, expected)
  })

  it("can increase the value", () => {
    const tracker = new Tracker(5)
    tracker.inc()
    let expected = 6
    let result = tracker.get()
    assert.strictEqual(result, expected)

    tracker.inc(4)
    expected = 10
    result = tracker.get()
    assert.strictEqual(result, expected)
  })

  it("cannot increase the value with a negative number", () => {
    const tracker = new Tracker(0)
    assert.throws(() => {
      tracker.inc(-1)
    })
    assert.throws(() => {
      tracker.inc(-100)
    })
    assert.throws(() => {
      tracker.inc(-10000)
    })
  })

  it("can decrease the value", () => {
    const tracker = new Tracker(5)
    tracker.dec()
    let expected = 4
    let result = tracker.get()
    assert.strictEqual(result, expected)

    tracker.dec(4)
    expected = 0
    result = tracker.get()
    assert.strictEqual(result, expected)
  })

  it("cannot increase the value with a negative number", () => {
    const tracker = new Tracker(0)
    assert.throws(() => {
      tracker.dec(-1)
    })
    assert.throws(() => {
      tracker.dec(-100)
    })
    assert.throws(() => {
      tracker.dec(-10000)
    })
  })

  function testMaxMinValues(tracker){
    tracker.inc(5)
    let expected = 5
    let result = tracker.get()
    assert.strictEqual(result, expected)

    assert.throws(() => {
      tracker.inc(1)
    })

    tracker.dec(10)
    expected = -5
    result = tracker.get()
    assert.strictEqual(result, expected)

    assert.throws(() => {
      tracker.dec(1)
    })
  }
  it("can set a max and min value - on construction", () => {
    testMaxMinValues(new Tracker(0, -5, 5))
  })

  it("can set a max and min value - with methods", () => {
    const tracker = new Tracker(0)
    tracker.max(5)
    tracker.min(-5)
    testMaxMinValues(tracker)
  })

  it("can set a max and min values to be equal", () => {
    const tracker = new Tracker(0)
    tracker.max(0)
    tracker.min(0)

    let expected = 0
    let result = tracker.getMin()
    assert.strictEqual(result, expected)

    expected = 0
    result = tracker.getMax()
    assert.strictEqual(result, expected)
  })

  it("cannot set a min greater than the max", () => {
    assert.throws(() => {
      new Tracker(0, 5, 4)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.min(6)
    })
  })

  it("cannot set a min greater than the current value", () => {
    assert.throws(() => {
      new Tracker(1, 2, 10)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.min(1)
    })
  })

  it("cannot set a max less than the min", () => {
    assert.throws(() => {
      new Tracker(0, 6, 5)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.max(-6)
    })
  })

  it("cannot set a max to less than the current value", () => {
    assert.throws(() => {
      new Tracker(1, -10, 0)
    })
    const tracker = new Tracker(0, -5, 5)
    assert.throws(() => {
      tracker.max(-1)
    })
  })

  it("cannot set a value less than the min", () => {
    assert.throws(() => {
      new Tracker(0, 1, 2)
    })
    const tracker = new Tracker(1, 1, 2)
    assert.throws(() => {
      tracker.dec()
    })
  })

  it("cannot set a value greater than the max", () => {
    assert.throws(() => {
      new Tracker(3, 1, 2)
    })
    const tracker = new Tracker(2, 1, 2)
    assert.throws(() => {
      tracker.inc()
    })
  })

  it(`can use changeBy method to alter the value
    using negative and positive values`, () => {
    const tracker = new Tracker(0)

    let expected = 5
    let result = tracker.changeBy(5)
    assert.strictEqual(result, expected)

    expected = 2
    result = tracker.changeBy(-3)
    assert.strictEqual(result, expected)
  })

  it(`cannot use changeBy method to alter the value
    below the min`, () => {
    const tracker = new Tracker(5, 0, 10)
    assert.throws(() => {
      let result = tracker.changeBy(-6)
    })
  })

  it(`cannot use changeBy method to alter the value
    above the max`, () => {
    const tracker = new Tracker(5, 0, 10)
    assert.throws(() => {
      let result = tracker.changeBy(6)
    })
  })

  it(`can reset value to original`, () => {
    const tracker = new Tracker(0)
    tracker.changeBy(5)
    tracker.reset()

    let expected = 0
    let result = tracker.get()
    assert.strictEqual(result, expected)
  })

  it(`can set value to min and max`, () => {
    const tracker = new Tracker(0, -10, 10)
    tracker.setToMin()
    let expected = -10
    let result = tracker.get()
    assert.strictEqual(result, expected)

    tracker.setToMax()
    expected = 10
    result = tracker.get()
    assert.strictEqual(result, expected)
  })
})

describe("Tracker - factory functions", function(){

  it("can initialise max value tracker", () => {
    const maxValueTracker = newMaxValueTracker(10)

    let expected = 10
    let result = maxValueTracker.get()
    assert.strictEqual(result, expected)

    expected = 0
    result = maxValueTracker.getMin()
    assert.strictEqual(result, expected)

    expected = Number.MAX_SAFE_INTEGER
    result = maxValueTracker.getMax()
    assert.strictEqual(result, expected)

  })

})
