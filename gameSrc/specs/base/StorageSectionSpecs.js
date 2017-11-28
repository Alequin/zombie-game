
import assert from "assert"
import StorageSection from "./../../base/storage/StorageSection.js"

describe("Storage Section", function(){

  let storageSection

  beforeEach(() => {
    storageSection = new StorageSection(10, 20)
  })

  it("can initialise a storage section", () => {
    assert.ok(storageSection)
    assert.ok(storageSection._content)
    assert.strictEqual(storageSection._content.get(), 0)
    assert.strictEqual(storageSection._content.getMax(), 10)
    assert.ok(storageSection._percentageCapacity)
    assert.strictEqual(storageSection._percentageCapacity.percentage(), 20)
  })

  it("can get sections contents", () => {
    let expected = 0
    let result = storageSection.getContents()
    assert.strictEqual(result, expected)
  })

  it("can add to a section", () => {
    storageSection.add(5)

    let expected = 5
    let result = storageSection.getContents()
    assert.strictEqual(result, expected)
  })

  it("can remove from a section", () => {
    storageSection.add(7)
    storageSection.remove(2)

    let expected = 5
    let result = storageSection.getContents()
    assert.strictEqual(result, expected)
  })

  it("can get storage capacity", () => {
    let expected = 10
    let result = storageSection.getCapacity()
    assert.strictEqual(result, expected)
  })

  it("can set storage capacity", () => {
    storageSection.setCapacity(20)

    let expected = 20
    let result = storageSection.getCapacity()
    assert.strictEqual(result, expected)
  })

  it("can get storage capacity percentage", () => {
    let expected = 20
    let result = storageSection.getPercentageCapacity()
    assert.strictEqual(result, expected)
  })

  it("can set storage capacity percentage", () => {
    storageSection.setPercentageCapacity(5)

    let expected = 5
    let result = storageSection.getPercentageCapacity()
    assert.strictEqual(result, expected)
  })
})
