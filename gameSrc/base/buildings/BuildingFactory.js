import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"
import {
  farmSettings,
  lumberYardSettings,
  scrapYardSettings
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

export function buildScrapYards(){
  const scrapYards = new InputProductionBuildingGroup(
    scrapYardSettings.productionRatio,
    scrapYardSettings.productionPerEffort,
    scrapYardSettings.singleBuildingEffortCapacity,
    scrapYardSettings.singleBuildingSize,
    scrapYardSettings.effortPerConstruction,
    scrapYardSettings.materialsPerYard
  )
  return scrapYards
}
