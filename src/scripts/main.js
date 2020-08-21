console.log("Welcome to the main module")

const planDetails = createPlan(yearlyPlan);
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from "./field.js";

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

addPlant(seed)
usePlants()
console.log()