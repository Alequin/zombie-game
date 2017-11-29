// https://nodejs.org/api/assert.html
import assert from "assert"
import Zombies from "./../../location/Zombies.js"

describe("test", function(){

  let zombies

  beforeEach(() => {
    zombies = new Zombies()
  })

  it("can initialise", () => {
    assert.ok(zombies)
    assert.strictEqual(zombies.count(), 0)
  })

  it("can initialise with intital zombie count", () => {
    zombies = new Zombies(100)
    assert.strictEqual(zombies.count(), 100)
  })

  it("cannot initialise with negative zombie count", () => {
    assert.throws(() => {
      zombies = new Zombies(-1)
    })
    assert.throws(() => {
      zombies = new Zombies(-100)
    })
    assert.throws(() => {
      zombies = new Zombies(-10000)
    })
  })

  it("can get zombie count", () => {
    let expected = 0
    let result = zombies.count()
    assert.strictEqual(result, expected)
  })

  //TODO test for getting zombies after some have being added

  it("can add to zombie count", () => {
    zombies.add(10)
    let expected = 10
    let result = zombies.count()
    assert.strictEqual(result, expected)
  })

})
