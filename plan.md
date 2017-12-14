# Zombie Game

## MVP

* Month / Turns
  * A month is the unit of time a single turn is considered to take.


* Resources
    * Food: feeds people
      * One person eats 60 per month
    * Materials: used to build and upgrade
    * lumber: used to make materials
    * Scrap: used to make materials


* Base
  * A base is where everyone lives and where buildings are built. A bases size can range from 1-10.
  * Base Size
    * size 1 = 500m<sup>2</sup>
    * size 2 = 1000m<sup>2</sup>
    * size 5 = 2500m<sup>2</sup>
    * size 10 = 5000m<sup>2</sup>


* Traps
  * Traps have a small chance to kill an attacker
  * A trap takes up 10m<sup>2</sup> space and can be placed a max of 100 meters away from the base. This means a base can have
  (distanceFromBase * baseSize/space) * 4 traps.<br>
  (10 * baseSize/10) * 4 || baseSize * 4


* Workers
  * These are the basic people in the base. They provide the player with an amount of effort that can be used monthly


* Effort
  * This measures how much work can be done each month


* Excursions
  * This is work that takes place outside of a base. They have a danger level.


* Locations
  * Locations are places. At the start the player will have knowledge about 2-4 places excluding their own location.
  Locations have a number of resources, a zombie count and a zombie capacity. These values are determined by the locations size.

* Actions
  * Actions use effort to complete tasks

  |Name|Purpose|
  |:-|:-|
  |Build|Use effort to make new buildings|
  |Farm|Work on the farm to produce food|
  |Scavenge|Search known areas for foo|
  |Scout|Search for unknown locations or update locations zombie count|
  |Recruit|Try to recruit free people to your base|

* Buildings
  |Name|Purpose|
  |:-|:-|
  |House|Increases total population|
  |Farm|Produces Food, requires at least 1 worker (has a max number of workers )|
  |lumber Yard|Turns lumber into materials|
  |Scrap Yard|Turns scrap into materials|
  |Storage|Stores resources. The play can control the max capacity of each resource. At the start each has an equal amount of space|
  |Wall|Increases defence percentage increase. The defence of the wall is determined by how many materials are provided to it and the base size. More materials == more defence, greater base size == less defence per material|
  |Traps|Each trap has a 25% chance of killing an enemy|

  * Wall defence equation
    defencePercentageIncrease = (materials^0.625)/((baseSize*0.75+0.25)/3.7)

## Past MVP

* Control multiple locations
* Zombies can move locations
* Workers have happiness which effects effort
