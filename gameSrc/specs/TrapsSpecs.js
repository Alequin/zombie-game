import assert from "assert"
import Traps from "./../base/defence/Traps.js"
import Dice from "./../util/Dice.js"

describe("Traps", function(){

  let traps

  beforeEach(() => {
    traps = new Traps(10, 5, 20)
  })

  it("can initialise", () => {
    assert.ok(traps)
    assert.ok(traps.effort)
    assert.strictEqual(traps._input, 0)
    assert.strictEqual(traps._effortPerConstruction, 10)
    assert.strictEqual(traps.effort._capacity, Number.MAX_SAFE_INTEGER)
    assert.strictEqual(traps._chanceToKill, 20)
    assert.strictEqual(traps._materialsPerEffort, 5)
  })

  it("can count traps", () => {
    let expected = 0
    let result = traps.totalTraps()
    assert.strictEqual(result, expected)

    traps.effort.add(10)
    traps.build()

    expected = 1
    result = traps.totalTraps()
    assert.strictEqual(result, expected)
  })

  it("can calculate number caught in traps", () => {
    traps.effort.add(1000)
    traps.build()

    let result = traps.calcNumberKilled()
    assert.ok(result > 0 && result < traps.totalTraps())
  })

  it(`can kill 10 with 10 trap if dice roll is always
    less than or equal to 20`, () => {
    traps.effort.add(100)
    traps.build()

    const dice = new Dice(0,0)
    for(let j=1; j<=20; j++){
      dice.min = j
      dice.max = j
      let expected = 10
      let result = traps._rollForNumberkilled(dice)
      assert.strictEqual(result, expected)
    }
  })

  it(`can kill 0 with 10 trap if dice roll is always
    greater than 20`, () => {
    traps.effort.add(100)
    traps.build()

    const dice = new Dice(0,0)
    for(let j=21; j<=100; j++){
      dice.min = j
      dice.max = j
      let expected = 0
      let result = traps._rollForNumberkilled(dice)
      assert.strictEqual(result, expected)
    }
  })

  it(`can calculate max traps based on base size`, () => {
    let expected = 2000
    let result = traps.calcMaxTraps(500)
    assert.strictEqual(result, expected)
  })
})
