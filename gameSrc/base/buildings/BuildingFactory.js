import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"
import {
  farmSettings,
  lumberYardSettings
} from "./../Settings.js"

export function buildFarms(){
  const farms = new ProductionBuildingGroup(
    farmSettings.productionPerEffort,
    farmSettings.singleBuildingEffortCapacity,
    farmSettings.singleBuildingSize,
    farmSettings.effortPerConstruction,
    farmSettings.materialsPerFarm
  )
  return farms
}

export function buildLumberYards(){
  const lumberYards = new InputProductionBuildingGroup(
    lumberYardSettings.productionRatio,
    lumberYardSettings.productionPerEffort,
    lumberYardSettings.singleBuildingEffortCapacity,
    lumberYardSettings.singleBuildingSize,
    lumberYardSettings.effortPerConstruction,
    lumberYardSettings.materialsPerYard
  )
  return lumberYards
}
