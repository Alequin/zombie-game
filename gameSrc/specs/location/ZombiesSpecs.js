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
    assert.strictEqual(zombies._fluctuation.percentage(), 20)
  })

  it("can initialise with intital zombie count and fluctuation percentage", () => {
    zombies = new Zombies(100, 50)
    assert.strictEqual(zombies.count(), 100)
    assert.strictEqual(zombies._fluctuation.percentage(), 50)
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

  it("can add to zombie count and find out how many their are", () => {
    zombies.add(10)
    let expected = 10
    let result = zombies.count()
    assert.strictEqual(result, expected)
  })

  it("can remove from zombie count and find out how many their are", () => {
    zombies.add(10)
    zombies.remove(5)

    let expected = 5
    let result = zombies.count()
    assert.strictEqual(result, expected)
  })

  it("can get fluctuation percentage", () => {
    let expected = 20
    let result = zombies.getFluctuationPercentage()
    assert.strictEqual(result, expected)
  })

  it("can set fluctuation percentage", () => {
    zombies.setFluctuationPercentage(50)
    let expected = 50
    let result = zombies.getFluctuationPercentage()
    assert.strictEqual(result, expected)
  })

  it("can set fluctuation percentage", () => {
    zombies.setFluctuationPercentage(50)
    let expected = 50
    let result = zombies.getFluctuationPercentage()
    assert.strictEqual(result, expected)
  })

  it("can change zombie count by a random amount (based on fluctuation percentage)", () => {
    zombies.add(1000)
    zombies.setFluctuationPercentage(20)
    zombies.changeCountRandomly()
    let num = zombies.count()
    assert.ok(num >= 800 && num <= 1200)
    assert.ok(num % 1 === 0)
  })

  it("can change zombie count by a random negative amount", () => {
    zombies.add(1000)
    zombies.setFluctuationPercentage(20)
    zombies.changeCountRandomly(0)
    let num = zombies.count()
    assert.ok(num >= 800 && num <= 1000)
    assert.ok(num % 1 === 0)
  })

  it("can change zombie count by a random positive amount", () => {
    zombies.add(1000)
    zombies.setFluctuationPercentage(20)
    zombies.changeCountRandomly(100)
    let num = zombies.count()
    assert.ok(num >= 100 && num <= 1200)
    assert.ok(num % 1 === 0)
  })
})
