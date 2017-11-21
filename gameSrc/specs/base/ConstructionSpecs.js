import assert from "assert"
import Construction from "./../../base/other/Construction.js"

describe("Construction", function(){

  let construction

  beforeEach(() => {
    construction = new Construction(10, 10, () => {}, () => {})
  })

  it("can initialise", () => {
    assert.ok(construction)
    assert.strictEqual(construction._effortPerConstruction, 10)
    assert.strictEqual(construction._materialsPerConstruction, 10)
    assert.ok(construction._add)
    assert.ok(construction._remove)
  })

  it("can calculate amount to construct", () => {
    construction.effort.add(10)

    let expected = 1
    let result = construction._calcAmountToConstruct()
    assert.strictEqual(result, expected)
  })

  it("can build", () => {
    construction.effort.add(10)
    construction.build()

    let expected = 0
    let result = construction.effort.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("can calculate required materials to build", () => {
    construction.effort.add(100)

    let expected = 100
    let result = construction.calcMaterialsToBuild()
    assert.strictEqual(result, expected)
  })

  it("can tearDown", () => {
    construction.effort.add(100)
    construction.build()

    let expected = 0
    let result = construction.effort.currentEffort()
    assert.strictEqual(result, expected)
  })

  it("can calculate materials gained from tearing down", () => {
    construction.effort.add(100)

    let expected = 75
    let result = construction.calcMaterialsGainedFromTearDown()
    assert.strictEqual(result, expected)
  })

  it("can get effort per production", () => {
    let expected = 10
    let result = construction.getEffortPerProduction()
    assert.strictEqual(result, expected)
  })
})
