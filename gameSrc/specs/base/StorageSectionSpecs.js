
import assert from "assert"
import StorageSection from "./../../base/storage/StorageSection.js"

describe("Storage Section", function(){

  let storageSection

  beforeEach(() => {
    storageSection = new StorageSection(10, 20)
  })

  it("can initialise a storage section", () => {
    assert.ok(storageSection)
    assert.ok(storageSection.content)
    assert.strictEqual(storageSection.content.get(), 0)
    assert.strictEqual(storageSection.content.getMax(), 10)
    assert.strictEqual(storageSection.percentageCapacity, 20)
  })
})
