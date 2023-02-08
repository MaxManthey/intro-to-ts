// console.log()
console.log("test")

// commenting
// console.log("test")

// Show variables
const firstName = "Max"
const lastName = "Mustermann"
let age = 24

console.log(firstName + lastName + age)
// Expected: "Max Mustermann 24" -> Actual: "MaxMustermann24"
console.log(firstName + " " + lastName + " " + age)

age = 25
console.log(firstName, lastName, age)

//Basic Types
console.log(typeof firstName)
console.log(typeof age)

const nickname: string = "Maxi"
let level: number = 24
level = 25
// level = "test" -> does not work

const username = "my_username"

let hoursLearningTypeScript = 0.5

console.log(typeof hoursLearningTypeScript)

hoursLearningTypeScript += 1

console.log(username, hoursLearningTypeScript)
