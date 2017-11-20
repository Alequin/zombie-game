import assert from "assert"
import {
  farmSettings,
  lumberYardSettings,
  scrapYardSettings,
} from "./../base/Settings.js"
import {
  buildFarms,
  buildLumberYards,
  buildScrapYards,
} from "./../base/buildings/BuildingFactory.js"

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
      farms.construction._effortPerConstruction,
      farmSettings.effortPerConstruction
    )
    assert.strictEqual(
      farms.construction._materialsPerEffort,
      farmSettings.materialsPerFarm
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
      lumberYards.construction._effortPerConstruction,
      lumberYardSettings.effortPerConstruction
    )
    assert.strictEqual(
      lumberYards.construction._materialsPerEffort,
      lumberYardSettings.materialsPerYard
    )
    console.log(lumberYards._productionRatio);
    console.log(lumberYardSettings.productionRatio);
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
      scrapYards.construction._effortPerConstruction,
      scrapYardSettings.effortPerConstruction
    )
    assert.strictEqual(
      scrapYards.construction._materialsPerEffort,
      scrapYardSettings.materialsPerYard
    )
    assert.strictEqual(
      scrapYards._productionRatio,
      scrapYardSettings.productionRatio,
    )
  })

})
