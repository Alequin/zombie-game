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
