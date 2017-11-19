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
