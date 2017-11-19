import assert from "assert"
import Population from "./../base/workers/Population.js"

describe("Population - basic", function(){

  let population

  beforeEach(() => {
    const maxSkillLevel = 4
    population = new Population(maxSkillLevel)
  })

  it("can initialise a population", () => {
    assert.ok(population)

    const expected = [0,0,0,0]
    const result = population._people
    assert.deepEqual(result, expected)
  })

  it("can get max skill", () => {
    const expected = 4
    const result = population.getMaxSkill()
    assert.strictEqual(result, expected)
  })

  it("can get total effort", () => {
    const expected = 0
    const result = population.getEffort()
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
    population.addToPopulation(400, 4)

    let expected = 1000
    let result = population.totalPopulation()
    assert.strictEqual(result, expected)
  })

  it("can upgrade population", () => {
    population.addToPopulation(100, 1)
    population.upgradeSkill(25, 1, 4)

    let expected = 75
    let result = population.countPopulation(1)
    assert.strictEqual(result, expected)
    expected = 25
    result = population.countPopulation(4)
    assert.strictEqual(result, expected)
  })

  it("can remove from population population", () => {
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
      population.addToPopulation(10, 5)
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
      population.removeFromPopulation(10, 5)
    })
    assert.throws(() => {
      population.removeFromPopulation(10, 100)
    })
  })
})

describe("Population - max skill 3", function(){

  let population

  beforeEach(() => {
    const maxSkillLevel = 3
    population = new Population(maxSkillLevel)
  })

  it("can use different numbers of maxSkill", () => {
    const expected = [0,0,0]
    const result = population._people
    assert.deepEqual(result, expected)
  })
})

describe("Population - negative skill", function(){

  it("cannot have max skill less than 1", () => {
    assert.throws(() => {
      new Population(-10)
    })
    assert.throws(() => {
      new Population(0)
    })
  })
})
