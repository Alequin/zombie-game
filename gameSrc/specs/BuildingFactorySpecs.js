import assert from "assert"
import { farmSettings } from "./../base/Settings.js"
import { buildFarms } from "./../base/buildings/BuildingFactory.js"

describe("Building Factory", function(){

  it("can build farms", () => {
    const farms = buildFarms()
    console.log("-----------------", farmSettings);
    assert.strictEqual(
      farms._productionPerEffort,
      farmSettings.productionPerEffort
    )
    assert.strictEqual(
      farms._singleBuildingEffortCapacity,
      farmSettings.singleBuildingEffortCapacity
    )
    assert.strictEqual(
      farms._singleBuildingEffortSize,
      farmSettings.singleBuildingEffortSize
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

})
