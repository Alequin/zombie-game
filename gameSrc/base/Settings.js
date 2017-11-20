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
  effortPerConstruction: 50,
  materialsPerHouse: 30,
  singleHouseCapacity: 6,
  singleHouseSize: 10,
}

export const farmSettings = {
  effortPerConstruction: 50,
  materialsPerFarm: 30,
  productionPerEffort: 10,
  singleBuildingEffortCapacity: 100,
  singleBuildingSize: 100,
}

export const baseBuildingsSettings = {
  lumberYards: {
    productionRatio: 3,
    productionPerEffort: 5,
    singleBuildingEffortCapacity: 100,
    singleBuildingSize: 40,
  },
  scrapYards: {
    productionRatio: 1.5,
    productionPerEffort: 5,
    singleBuildingEffortCapacity: 100,
    singleBuildingSize: 40,
  },
}
