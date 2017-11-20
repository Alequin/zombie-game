import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"
import {
  farmSettings,
  lumberYardSettings,
  scrapYardSettings
} from "./../Settings.js"

export function buildFarms(count = 0){
  const farms = new ProductionBuildingGroup(
    farmSettings.productionPerEffort,
    farmSettings.singleBuildingEffortCapacity,
    farmSettings.singleBuildingSize,
    farmSettings.effortPerConstruction,
    farmSettings.materialsPerFarm
  )
  farms.add(count)
  return farms
}

export function buildLumberYards(count = 0){
  const lumberYards = new InputProductionBuildingGroup(
    lumberYardSettings.productionRatio,
    lumberYardSettings.productionPerEffort,
    lumberYardSettings.singleBuildingEffortCapacity,
    lumberYardSettings.singleBuildingSize,
    lumberYardSettings.effortPerConstruction,
    lumberYardSettings.materialsPerYard
  )
  lumberYards.add(count)
  return lumberYards
}

export function buildScrapYards(count = 0){
  const scrapYards = new InputProductionBuildingGroup(
    scrapYardSettings.productionRatio,
    scrapYardSettings.productionPerEffort,
    scrapYardSettings.singleBuildingEffortCapacity,
    scrapYardSettings.singleBuildingSize,
    scrapYardSettings.effortPerConstruction,
    scrapYardSettings.materialsPerYard
  )
  scrapYards.add(count)
  return scrapYards
}
