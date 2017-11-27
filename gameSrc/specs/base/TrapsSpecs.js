import assert from "assert"
import Traps from "./../../base/defence/Traps.js"
import PercentageDice from "./../../util/PercentageDice.js"
import { trapSettings } from "./../../base/Settings.js"

describe("Traps", function(){

  let traps

  beforeEach(() => {
    traps = new Traps()
  })

  it("can initialise", () => {
    assert.ok(traps)
    assert.strictEqual(traps.getAmount(), 0)
    assert.strictEqual(traps._effortPerConstruction, trapSettings.effortPerConstruction)
    assert.strictEqual(traps._materialsPerConstruction, trapSettings.materialsPerConstruction)
  })

  it("can count traps", () => {
    let expected = 0
    let result = traps.totalTraps()
    assert.strictEqual(result, expected)

    traps.constructionEffort.add(10)
    traps.build()

    expected = 1
    result = traps.totalTraps()
    assert.strictEqual(result, expected)
  })

  it("can calculate number caught in traps", () => {
    traps.addToInput(10)

    let result = traps.calcNumberKilled()
    assert.ok(result >= 0 && result <= traps.totalTraps())
  })

  it(`can kill 100 with 100 trap if chance is 100%`, () => {
    traps.addToInput(100)

    const dice = new PercentageDice(100)
    let expected = 100
    let result = traps._rollForNumberkilled(dice)
    assert.strictEqual(result, expected)
  })

  it(`can kill 0 with 100 trap if chance is 0%`, () => {
    traps.addToInput(100)

    const dice = new PercentageDice(0)
    let expected = 0
    let result = traps._rollForNumberkilled(dice)
    assert.strictEqual(result, expected)
  })

  it(`can calculate max traps based on base size`, () => {
    let expected = 2000
    let result = traps.calcMaxTraps(500)
    assert.strictEqual(result, expected)
  })
})
