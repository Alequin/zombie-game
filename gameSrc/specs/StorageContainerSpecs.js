import assert from "assert"
import StorageContainer from "./../base/storage/StorageContainer.js"

describe("Storage Container", function(){

  let storageContainer

  beforeEach(() => {
    storageContainer = new StorageContainer(["one", "two", "three", "four"])
  })

  it("can initialise a storage container", () => {
    assert.ok(storageContainer)

    let expected = 100
    let result = storageContainer._capacity
    assert.strictEqual(result, expected)

    expected = 4
    result = Object.keys(storageContainer._sections).length
    assert.strictEqual(result, expected)

    expected = 25
    result = storageContainer._sections["one"].capacity
    assert.strictEqual(result, expected)
  })
})
