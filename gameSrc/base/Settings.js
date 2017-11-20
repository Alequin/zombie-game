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
  materialsPerEffort: 30,
  singleHouseCapacity: 6,
  singleHouseSize: 10,
}

export const baseBuildingsSettings = {
  farms: {
    productionPerEffort: 10,
    singleBuildingEffortCapacity: 100,
    singleBuildingSize: 100,
  },
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
