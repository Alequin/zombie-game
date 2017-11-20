import assert from "assert"
import Base from "./../base/Base.js"

describe("Base", function(){

  it("can initialise", () => {
    const base = new Base()

    assert.ok(base)
    assert.ok(base.population)
    assert.ok(base.effort)
    // assert.ok(base.size)
    // assert.ok(base.wall)
    // assert.ok(base.traps)
    // assert.ok(base.buildings)
    // assert.ok(base.storage)
  })

  it("can initialise with options", () => {
    const people = {}
    people[1] = 5
    people[2] = 10
    people[3] = 0
    people[4] = 0

    const options = {
      people: people,
      turnEffort: {
        usedThisTurn: 10,
        totalThisTurn: 11,
        usedLastTurn: 12,
        totalLastTurn: 13
      }
    }

    const base = new Base(options)

    assert.ok(base)

    assert.ok(base.population)
    assert.strictEqual(base.population.countPopulation(1), 5)
    assert.strictEqual(base.population.countPopulation(2), 10)
    assert.strictEqual(base.population.countPopulation(3), 0)

    assert.ok(base.effort)
    assert.strictEqual(base.effort._usedThisTurn, 10)
    assert.strictEqual(base.effort._totalThisTurn, 11)
    assert.strictEqual(base.effort._usedLastTurn, 12)
    assert.strictEqual(base.effort._totalLastTurn, 13)

    // assert.ok(base.size)
    // assert.ok(base.wall)
    // assert.ok(base.traps)
    // assert.ok(base.buildings)
    // assert.ok(base.storage)
  })
})
