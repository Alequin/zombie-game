import assert from "assert"
import {
  farmSettings,
  schoolSettings,
  lumberYardSettings,
  scrapYardSettings,
} from "./../../base/Settings.js"
import {
  buildFarms,
  buildSchools,
  buildLumberYards,
  buildScrapYards,
} from "./../../base/buildings/BuildingFactory.js"

describe("Building Factory", function(){

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

})
