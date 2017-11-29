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
    assert.strictEqual(zombies._count.get(), 0)
  })

  it("can initialise with intital zombie count", () => {
    zombies = new Zombies(100)
    assert.strictEqual(zombies._count.get(), 100)
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

})
