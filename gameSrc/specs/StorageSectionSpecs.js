
import assert from "assert"
import StorageSection from "./../base/storage/StorageSection.js"

describe("Storage Section", function(){

  let storageSection

  beforeEach(() => {
    storageSection = new StorageSection(10)
  })

  it("can initialise a storage section", () => {
    assert.ok(storageSection)
    assert.strictEqual(storageSection.contentCount, 0)
    assert.strictEqual(storageSection.capacity, 10)
  })
})
