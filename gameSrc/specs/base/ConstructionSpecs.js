import assert from "assert"
import Construction from "./../../base/other/Construction.js"

describe("Construction", function(){

  let construction

  beforeEach(() => {
    construction = new Construction(10, 10)
  })

  it("can initialise", () => {
    assert.ok(construction)
    assert.ok(construction.constructionEffort)
    assert.strictEqual(construction._effortPerConstruction, 10)
    assert.strictEqual(construction._materialsPerConstruction, 10)
    assert.ok(construction._input)
  })

  it("can calculate amount to construct", () => {
    construction.constructionEffort.add(10)
    let expected = 1
    let result = construction._calcAmountToConstruct()
    assert.strictEqual(result, expected)
  })

  it("can get value of amount", () => {
    let expected = 0
    let result = construction.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can add to amount", () => {
    construction.add(10)

    let expected = 10
    let result = construction.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can remove from amount", () => {
    construction.add(10)
    construction.remove(5)

    let expected = 5
    let result = construction.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can build", () => {
    construction.constructionEffort.add(10)
    construction.build()

    let expected = 0
    let result = construction.constructionEffort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 1
    result = construction.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can calculate required materials to build", () => {
    construction.constructionEffort.add(100)

    let expected = 100
    let result = construction.calcMaterialsToBuild()
    assert.strictEqual(result, expected)
  })

  it("can tearDown", () => {
    construction.constructionEffort.add(100)
    construction.build()
    construction.constructionEffort.add(100)
    construction.tearDown()

    let expected = 0
    let result = construction.constructionEffort.currentEffort()
    assert.strictEqual(result, expected)

    expected = 0
    result = construction.getAmount()
    assert.strictEqual(result, expected)
  })

  it("can calculate materials gained from tearing down", () => {
    construction.constructionEffort.add(100)

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
