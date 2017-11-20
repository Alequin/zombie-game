import ProductionBuildingGroup from "./ProductionBuildingGroup.js"
import { farmSettings } from "./../Settings.js"

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
