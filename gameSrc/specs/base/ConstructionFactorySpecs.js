import assert from "assert"
import {
  farmSettings,
  schoolSettings,
  lumberYardSettings,
  scrapYardSettings,
  wallSettings,
  trapSettings,
  storageSettings,
} from "./../../base/Settings.js"
import {
  buildFarms,
  buildSchools,
  buildLumberYards,
  buildScrapYards,
  buildWall,
  buildTraps,
  buildStorageContainer,
} from "./../../base/buildings/ConstructionFactory.js"

describe("Construction Factory", function(){

  it("can build farms", () => {
    const farms = buildFarms()
    assert.strictEqual(
      farms._productionPerEffort,
      farmSettings.productionPerEffort
    )
    assert.strictEqual(
      farms._singleBuildingEffortCapacity,
      farmSettings.singleBuildingEffortCapacity
    )
    assert.strictEqual(
      farms._singleBuildingSize,
      farmSettings.singleBuildingSize
    )
    assert.strictEqual(
      farms._effortPerConstruction,
      farmSettings.effortPerConstruction
    )
    assert.strictEqual(
      farms._materialsPerConstruction,
      farmSettings.materialsPerFarm
    )
  })

  it("can build schools", () => {
    const schools = buildSchools()
    assert.strictEqual(
      schools._productionPerEffort,
      schoolSettings.productionPerEffort
    )
    assert.strictEqual(
      schools._singleBuildingEffortCapacity,
      schoolSettings.singleBuildingEffortCapacity
    )
    assert.strictEqual(
      schools._singleBuildingSize,
      schoolSettings.singleBuildingSize
    )
    assert.strictEqual(
      schools._effortPerConstruction,
      schoolSettings.effortPerConstruction
    )
    assert.strictEqual(
      schools._materialsPerConstruction,
      schoolSettings.materialsPerSchool
    )
  })

  it("can build lumberYards", () => {
    const lumberYards = buildLumberYards()
    assert.strictEqual(
      lumberYards._productionPerEffort,
      lumberYardSettings.productionPerEffort
    )
    assert.strictEqual(
      lumberYards._singleBuildingEffortCapacity,
      lumberYardSettings.singleBuildingEffortCapacity
    )
    assert.strictEqual(
      lumberYards._singleBuildingSize,
      lumberYardSettings.singleBuildingSize
    )
    assert.strictEqual(
      lumberYards._effortPerConstruction,
      lumberYardSettings.effortPerConstruction
    )
    assert.strictEqual(
      lumberYards._materialsPerConstruction,
      lumberYardSettings.materialsPerYard
    )
    assert.strictEqual(
      lumberYards._productionRatio,
      lumberYardSettings.productionRatio,
    )
  })

  it("can build scrapYards", () => {
    const scrapYards = buildScrapYards()
    assert.strictEqual(
      scrapYards._productionPerEffort,
      scrapYardSettings.productionPerEffort
    )
    assert.strictEqual(
      scrapYards._singleBuildingEffortCapacity,
      scrapYardSettings.singleBuildingEffortCapacity
    )
    assert.strictEqual(
      scrapYards._singleBuildingSize,
      scrapYardSettings.singleBuildingSize
    )
    assert.strictEqual(
      scrapYards._effortPerConstruction,
      scrapYardSettings.effortPerConstruction
    )
    assert.strictEqual(
      scrapYards._materialsPerConstruction,
      scrapYardSettings.materialsPerYard
    )
    assert.strictEqual(
      scrapYards._productionRatio,
      scrapYardSettings.productionRatio,
    )
  })

  it("can build wall", () => {
    const wall = buildWall()
    assert.strictEqual(
      wall._effortPerConstruction,
      wallSettings.effortPerConstruction
    )
    assert.strictEqual(
      wall._materialsPerConstruction,
      wallSettings.materialsPerConstruction
    )
    assert.strictEqual(
      wall.getAmount(),
      0
    )
  })

  it("can build traps", () => {
    const traps = buildTraps()
    assert.strictEqual(
      traps._effortPerConstruction,
      trapSettings.effortPerConstruction
    )
    assert.strictEqual(
      traps._materialsPerConstruction,
      trapSettings.materialsPerConstruction
    )
    assert.strictEqual(
      traps.getAmount(),
      0
    )
  })

  it("can build Storage Container", () => {
    const storage = buildStorageContainer()
    assert.strictEqual(
      storage._effortPerConstruction,
      storageSettings.effortPerConstruction
    )
    assert.strictEqual(
      storage._materialsPerConstruction,
      storageSettings.materialsPerConstruction
    )
    assert.strictEqual(
      storage.getAmount(),
      1
    )
  })
})
