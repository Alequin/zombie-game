import assert from "assert"
import Base from "./../base/Base.js"
import { baseSettings } from "./../base/Settings.js"

describe("Base", function(){

  let base

  beforeEach(() => {
    base = new Base()
  })

  it("can initialise", () => {

    assert.ok(base)
    assert.ok(base.population)
    assert.ok(base.effort)
    assert.strictEqual(base.getSize(), baseSettings.initialSize)
    assert.ok(base.wall)
    assert.ok(base.traps)
    assert.ok(base.buildings)
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
        totalLastTurn: 13,
      },
      size: 1500,
      wallMaterials: 100,
      totalTraps: 100,
      baseBuildings: {
        houses: 10,
        farms: 20,
        lumberYards: 30,
        scrapYards: 40,
      }
    }

    base = new Base(options)

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

    assert.strictEqual(base.getSize(), 1500)

    assert.ok(base.wall)
    assert.strictEqual(base.wall.totalInput(), 100)

    assert.ok(base.traps)
    assert.strictEqual(base.traps.totalTraps(), 100)

    assert.ok(base.buildings)
    assert.strictEqual(base.buildings.houses.count(), 10)
    assert.strictEqual(base.buildings.farms.count(), 20)
    assert.strictEqual(base.buildings.lumberYards.count(), 30)
    assert.strictEqual(base.buildings.scrapYards.count(), 40)

    // assert.ok(base.storage)
  })

  it("can get base size", () => {
    let expected = 500
    let result = base.getSize()
    assert.strictEqual(result, expected)
  })
})
