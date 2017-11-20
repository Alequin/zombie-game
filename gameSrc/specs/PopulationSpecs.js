import assert from "assert"
import Population from "./../base/population/Population.js"

describe("Population - basic", function(){

  let population

  beforeEach(() => {
    population = new Population()
  })

  it("can initialise a population", () => {
    assert.ok(population)

    const expected = {1: 0, 2: 0, 3: 0}
    const result = population._people
    assert.deepEqual(result, expected)
  })

  it("can get max skill", () => {
    const expected = 3
    const result = population.getMaxSkill()
    assert.strictEqual(result, expected)
  })

  it("can get total effort", () => {
    let expected = 0
    let result = population.getEffort()
    assert.strictEqual(result, expected)

    population.addToPopulation(100, 1)
    population.addToPopulation(200, 2)
    population.addToPopulation(300, 3)

    expected = 14000
    result = population.getEffort()
    assert.strictEqual(result, expected)
  })

  it("can get population count", () => {
    let expected = 0
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)
  })

  it("can add to population", () => {
    population.addToPopulation(10, 1)

    let expected = 10
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)

    population.addToPopulation(20, 3)

    expected = 20
    result = population.countPopulation(3)
    assert.strictEqual(result, expected)
  })

  it("can get total population", () => {
    population.addToPopulation(100, 1)
    population.addToPopulation(200, 2)
    population.addToPopulation(300, 3)

    let expected = 600
    let result = population.totalPopulation()
    assert.strictEqual(result, expected)
  })

  it("can upgrade population", () => {
    population.addToPopulation(100, 1)
    population.upgradeSkill(25, 1, 3)

    let expected = 75
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)
    expected = 25
    result = population.countPopulation(3)
    assert.strictEqual(result, expected)
  })

  it("can remove from population", () => {
    population.addToPopulation(100, 1)
    population.addToPopulation(200, 2)
    population.removeFromPopulation(75, 1)
    population.removeFromPopulation(110, 2)

    let expected = 25
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)
    expected = 90
    result = population.countPopulation(2)
    assert.strictEqual(result, expected)
  })

  it("cannot use negative values to modify the population", () => {
    assert.throws(() => {
      population.addToPopulation(-1, 1)
    })
    assert.throws(() => {
      population.addToPopulation(-100, 1)
    })
    assert.throws(() => {
      population.addToPopulation(-10000, 1)
    })
    assert.throws(() => {
      population.removeFromPopulation(-1, 1)
    })
    assert.throws(() => {
      population.removeFromPopulation(-100, 1)
    })
    assert.throws(() => {
      population.removeFromPopulation(-10000, 1)
    })
  })

  it("cannot modify the population with non existant skill values", () => {
    assert.throws(() => {
      population.addToPopulation(10, -10)
    })
    assert.throws(() => {
      population.addToPopulation(10, 0)
    })
    assert.throws(() => {
      population.addToPopulation(10, 4)
    })
    assert.throws(() => {
      population.addToPopulation(10, 100)
    })
    assert.throws(() => {
      population.removeFromPopulation(10, -10)
    })
    assert.throws(() => {
      population.removeFromPopulation(10, 0)
    })
    assert.throws(() => {
      population.removeFromPopulation(10, 4)
    })
    assert.throws(() => {
      population.removeFromPopulation(10, 100)
    })
  })

  it("cannot upgrade skill if to or from arguments are invalid", () => {
    assert.throws(() => {
      population.upgradeSkill(10, -10)
    })
    assert.throws(() => {
      population.upgradeSkill(10, 0)
    })
    assert.throws(() => {
      population.upgradeSkill(10, 4)
    })
    assert.throws(() => {
      population.upgradeSkill(10, 100)
    })
  })

  it("cannot upgrade skill there are not enough people", () => {
    population.addToPopulation(100, 1)
    assert.throws(() => {
      population.upgradeSkill(101, 1,2)
    })
  })

  it("cannot count population with invalid skill level", () => {
    assert.throws(() => {
      population.countPopulation(-10)
    })
    assert.throws(() => {
      population.countPopulation(0)
    })
    assert.throws(() => {
      population.countPopulation(4)
    })
    assert.throws(() => {
      population.countPopulation(100)
    })
  })
})

describe("Population - input people", function(){

  it("can provide a hashTable of people", () => {
    const people = {}
    people[1] = 5
    people[2] = 10

    const population = new Population(people)

    let expected = 5
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)

    expected = 10
    result = population.countPopulation(2)
    assert.strictEqual(result, expected)
  })
})
