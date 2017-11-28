import assert from "assert"
import StorageContainer from "./../../base/storage/StorageContainer.js"
import { storageSettings } from "./../../base/Settings.js"

describe("Storage Container", function(){

  let storageContainer
  let sections

  beforeEach(() => {
    sections = storageSettings.sectionNames
    storageContainer = new StorageContainer(
      storageSettings.effortPerConstruction,
      storageSettings.materialsPerConstruction,
      storageSettings.sectionNames
    )
    storageContainer.add(1)
  })

  it("can initialise a storage container", () => {
    assert.ok(storageContainer)

    let expected = storageSettings.minimumCapacity
    let result = storageContainer._capacity
    assert.strictEqual(result, expected)

    expected = storageSettings.sectionNames.length
    result = Object.keys(storageContainer._sections).length
    assert.strictEqual(result, expected)

    expected = storageSettings.minimumCapacity/storageSettings.sectionNames.length
    result = storageContainer._sections[sections[0]].storage.capacity
    assert.strictEqual(result, expected)

    assert.strictEqual(
      storageContainer._effortPerConstruction,
      storageSettings.effortPerConstruction
    )

    assert.strictEqual(
      storageContainer._materialsPerConstruction,
      storageSettings.materialsPerConstruction
    )
  })

  it("can add to section contents", () => {
    storageContainer.addToSection(sections[0], 10)
    let expected = 10
    let result = storageContainer.getContentCount(sections[0])
    assert.strictEqual(result, expected)
  })

  it("can get sections name", () => {
    let expected = storageSettings.sectionNames
    let result = storageContainer.getSectionNames()
    assert.deepEqual(result, expected)
  })

  it("cannot add negative values to section contents", () => {
    assert.throws(() => {
      storageContainer.add(sections[0], -1)
    })
    assert.throws(() => {
      storageContainer.add(sections[0], -10)
    })
    assert.throws(() => {
      storageContainer.add(sections[0], -100)
    })
  })

  it("cannot add a value to section contents that takes it over its capacity", () => {
    const amount = storageContainer.getCapacity(sections[0]) + 1
    assert.throws(() => {
      storageContainer.add(sections[0], amount)
    })
  })

  it("can remove from section contents", () => {
    storageContainer.addToSection(sections[0], 15)
    storageContainer.removeFromSection(sections[0], 10)
    let expected = 5
    let result = storageContainer.getContentCount(sections[0])
    assert.strictEqual(result, expected)
  })

  it("cannot remove negative values from section contents", () => {
    assert.throws(() => {
      storageContainer.remove(sections[0], -1)
    })
    assert.throws(() => {
      storageContainer.remove(sections[0], -10)
    })
    assert.throws(() => {
      storageContainer.remove(sections[0], -100)
    })
  })

  it("cannot remove a value from section contents that reduces it to less than 0", () => {
    assert.throws(() => {
      storageContainer.remove(sections[0], 1)
    })
  })

  it("can get a sections content count", () => {
    let expected = 0
    let result = storageContainer.getContentCount(sections[0])
    assert.strictEqual(result, expected)

    storageContainer.addToSection(sections[0], 10)
    expected = 10
    result = storageContainer.getContentCount(sections[0])
    assert.strictEqual(result, expected)
  })

  it("can get a sections capacity", () => {
    let expected = storageSettings.minimumCapacity / storageSettings.sectionNames.length
    let result = storageContainer.getCapacity(sections[0])
    assert.strictEqual(result, expected)
  })

  it("can get a sections percentage capacity", () => {
    let capacity = storageSettings.minimumCapacity / storageSettings.sectionNames.length
    let expected = capacity/storageSettings.minimumCapacity*100
    let result = storageContainer.getPercentageCapacity(sections[0])
    assert.strictEqual(result, expected)
  })

  it("can set section capacities", () => {

    const sectionCapacities = {}

    let count = 0
    const capacities = []
    for(let j=1; j<=sections.length; j++){
      if(j === sections.length){
        capacities.push(100-count)
      }else{
        capacities.push(j*2)
        count += j*2
      }
    }

    for(let j in sections){
      sectionCapacities[sections[j]] = capacities[j]
    }

    storageContainer.setCapacityPercentages(sectionCapacities)

    for(let j=0; j<sections.length; j++){
      if(j === sections.length-1){
        let expected = storageSettings.minimumCapacity*((100-count)/100)
        let result = storageContainer.getCapacity(sections[j])
        assert.strictEqual(result, expected)
        expected = 100-count
        result = storageContainer.getPercentageCapacity(sections[j])
        assert.strictEqual(result, expected)
      }else{
        let expected = storageSettings.minimumCapacity*((j+1)*2/100)
        let result = storageContainer.getCapacity(sections[j])
        assert.strictEqual(result, expected)
        expected = (j+1)*2
        result = storageContainer.getPercentageCapacity(sections[j])
        assert.strictEqual(result, expected)
      }
    }
  })

  it("cannot set section capacities if any sections are missing", () => {
    const sections = storageSettings.sectionNames
    const length = sections.length

    for(let toSkip=0; toSkip<length; toSkip++){
      const sectionCapacities = {}
      for(let j in sections){
        if(toSkip = j) continue
        sectionCapacities[sections[j]] = 100/length-1
      }
      assert.throws(() => {
        storageContainer.setCapacityPercentages(sectionsCapacities)
      })
    }
  })

  it("Can get max capacity", () => {
    let expected = storageSettings.minimumCapacity
    let result = storageContainer.totalCapacity()
    assert.strictEqual(result, expected)
  })

  it("Can calculate capacity", () => {
    let expected = storageSettings.minimumCapacity * storageContainer.getAmount()
    let result = storageContainer._calcCapacity()
    assert.strictEqual(result, expected)
  })

  it("On call of build and tearDown capacity changes", () => {

    function testCapacity(key, capacity){
      let expected = capacity
      let result = storageContainer.getCapacity(key)
      assert.strictEqual(result, expected)
    }

    storageContainer.constructionEffort.add(200)
    storageContainer.build()

    let capacity = storageSettings.minimumCapacity*2
    let result = storageContainer.totalCapacity()
    assert.strictEqual(result, capacity)

    let toTest = {}
    for(let j=0; j<sections.length; j++){
      toTest[sections[j]] = Math.floor(capacity/storageSettings.sectionNames.length)
    }
    for(let section of sections){
      testCapacity(section, toTest[section])
    }

    storageContainer.constructionEffort.add(200)
    storageContainer.tearDown()

    capacity = storageSettings.minimumCapacity
    result = storageContainer.totalCapacity()
    assert.strictEqual(result, capacity)

    toTest = {}
    for(let j=0; j<sections.length; j++){
      toTest[sections[j]] = Math.floor(capacity/storageSettings.sectionNames.length)
    }
    for(let section of sections){
      testCapacity(section, toTest[section])
    }
  })
})
