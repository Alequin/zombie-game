import assert from "assert"
import Population from "./../base/workers/Population.js"

describe("Population", function(){

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
