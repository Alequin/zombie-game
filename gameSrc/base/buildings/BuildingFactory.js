import Houses from "./Houses.js"
import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import InputProductionBuildingGroup from "./InputProductionBuildingGroup.js"
import {
  houseSettings,
  farmSettings,
  schoolSettings,
  lumberYardSettings,
  scrapYardSettings
} from "./../Settings.js"

export function buildHouses(count = 0){
  const houses = new Houses(
    houseSettings.singleHouseCapacity,
    houseSettings.singleHouseSize,
    houseSettings.effortPerConstruction,
    houseSettings.materialsPerHouse
  )
  houses.add(count)
  return houses
}

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

export function buildSchools(count = 0){
  const schools = new ProductionBuildingGroup(
    schoolSettings.productionPerEffort,
    schoolSettings.singleBuildingEffortCapacity,
    schoolSettings.singleBuildingSize,
    schoolSettings.effortPerConstruction,
    schoolSettings.materialsPerSchool
  )
  schools.add(count)
  return schools
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
