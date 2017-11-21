export const baseSettings = {
  initialSize: 500
}

export const populationSettings = {
  maxSkill: 3
}

export const wallSettings = {
  effortPerConstruction: 1,
  materialsPerEffort: 1,
}

export const trapSettings = {
  effortPerConstruction: 10,
  materialsPerEffort: 1,
  chanceToKill: 20,
}

export const houseSettings = {
  effortPerConstruction: 20,
  materialsPerHouse: 30,
  singleHouseCapacity: 6,
  singleHouseSize: 10,
}

export const farmSettings = {
  effortPerConstruction: 15,
  materialsPerFarm: 20,
  productionPerEffort: 10,
  singleBuildingEffortCapacity: 100,
  singleBuildingSize: 100,
}

export const lumberYardSettings = {
  effortPerConstruction: 35,
  materialsPerYard: 50,
  productionRatio: 3,
  productionPerEffort: 5,
  singleBuildingEffortCapacity: 100,
  singleBuildingSize: 40,
}

export const scrapYardSettings = {
  effortPerConstruction: 35,
  materialsPerYard: 50,
  productionRatio: 1.5,
  productionPerEffort: 5,
  singleBuildingEffortCapacity: 100,
  singleBuildingSize: 40,
}

export const storageSettings = {
  initialCapacity: 1000,
  sectionNames: ["food", "materials", "lumber", "scraps"],
  effortPerConstruction: 200,
  materialsPerEffort: 1
}
