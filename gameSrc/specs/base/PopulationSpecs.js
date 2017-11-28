import assert from "assert"
import Population from "./../../base/population/Population.js"
import { populationSettings } from "./../../base/Settings.js"

describe("Population - basic", function(){

  let population

  beforeEach(() => {
    population = new Population(populationSettings.maxSkill)
  })

  it("can initialise a population", () => {
    assert.ok(population)

    const expected = {}
    for(let j=1; j<=populationSettings.maxSkill; j++){
      expected[j] = 0
    }

    const result = population._people
    assert.deepEqual(result, expected)
  })

  it("can get max skill", () => {
    const expected = populationSettings.maxSkill
    const result = population.getMaxSkill()
    assert.strictEqual(result, expected)
  })

  it("can get total effort", () => {
    let expected = 0
    let result = population.getTotalEffort()
    assert.strictEqual(result, expected)

    expected = 0
    for(let j=1; j<=populationSettings.maxSkill; j++){
      population.addToPopulation(100, j)
      expected += 100*j*10
    }
    result = population.getTotalEffort()
    assert.strictEqual(result, expected)
  })

  it("can get population count", () => {
    let expected = 0
    let result = population.countPopulationOfSkill(1)
    assert.strictEqual(result, expected)
  })

  it("can add to population", () => {
    population.addToPopulation(10, 1)

    let expected = 10
    let result = population.countPopulationOfSkill(1)
    assert.strictEqual(result, expected)

    population.addToPopulation(20, populationSettings.maxSkill)

    expected = 20
    result = population.countPopulationOfSkill(populationSettings.maxSkill)
    assert.strictEqual(result, expected)
  })

  it("can get total population", () => {
    let expected = 0
    for(let j=1; j<=populationSettings.maxSkill; j++){
      population.addToPopulation(100, j)
      expected += 100
    }
    let result = population.totalPopulation()
    assert.strictEqual(result, expected)
  })

  it("can upgrade population", () => {
    population.addToPopulation(100, 1)
    population.upgradeSkill(25, 1, populationSettings.maxSkill)

    let expected = 75
    let result = population.countPopulationOfSkill(1)
    assert.strictEqual(result, expected)
    expected = 25
    result = population.countPopulationOfSkill(populationSettings.maxSkill)
    assert.strictEqual(result, expected)
  })

  it("can remove from population", () => {

    for(let j=1; j<=populationSettings.maxSkill; j++){
      population.addToPopulation(100, j)
      population.removeFromPopulation(50, j)
    }

    let expected = 50

    let result = population.countPopulationOfSkill(1)
    assert.strictEqual(result, expected)
    result = population.countPopulationOfSkill(populationSettings.maxSkill)
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
      population.countPopulationOfSkill(-10)
    })
    assert.throws(() => {
      population.countPopulationOfSkill(0)
    })
    assert.throws(() => {
      population.countPopulationOfSkill(4)
    })
    assert.throws(() => {
      population.countPopulationOfSkill(100)
    })
  })
})

describe("Population - input people", function(){

  it("can provide an array of people", () => {
    const people = [5, 10]

    const population = new Population(2, people)

    let expected = 5
    let result = population.countPopulationOfSkill(1)
    assert.strictEqual(result, expected)

    expected = 10
    result = population.countPopulationOfSkill(2)
    assert.strictEqual(result, expected)
  })
})
