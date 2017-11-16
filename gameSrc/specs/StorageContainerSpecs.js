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

  it("can add to section contents", () => {
    storageContainer.add("one", 10)
    let expected = 10
    let result = storageContainer._sections["one"].contentCount
    assert.strictEqual(result, expected)
  })

  it("cannot add negative values to section contents", () => {
    assert.throws(() => {
      storageContainer.add("one", -1)
    })
  })

  it("cannot add a value to section contents that takes it over its capacity", () => {
    const amount = storageContainer._sections["one"].capacity+1
    assert.throws(() => {
      storageContainer.add("one", amount)
    })
  })
})
