// https://nodejs.org/api/assert.html
import assert from "assert"
import Zombies from "./../../location/Zombies.js"

describe("test", function(){

  let zombies

  beforeEach(() => {
    zombies = new Zombies()
  })

  it("can initialise", () => {
    assert.ok(zombies)
  })

})
