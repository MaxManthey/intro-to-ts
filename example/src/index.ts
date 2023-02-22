// Making things easier:
// - Distinct folders for our TypeScript code and the created JavaScript code 
  // Create src folder and move code to it
  // add "outDir": "./dist", to tsconfig.json

// - Easier way to run our code with just one command instead of two
  // add script to package.json
    // "scripts": {
    //   "build": "npx tsc",
    //   "start": "node ./dist/index.js",
    //   "serve": "npm run build && npm run start"
    // }


// Diving deeper into TypeScript with: 🤿
  // - Boolean type
  // - Conditional statements (if/else/ifelse)

const isTrue = true
const isFalse = false

//if statement
if(isTrue == true) {
  console.log('Inside the if statement! :)')
}
if(isTrue != true) {console.log('Inside the if statement! :)')}

//comparison
const myNumber = 5
if(myNumber == 5) {console.log('Inside the if statement! :)')}
if(myNumber != 5) {console.log('Inside the if statement! :)')}

if(myNumber < 7) {console.log('Inside the if statement! :)')}
if(myNumber > 5) {console.log('Inside the if statement! :)')}

if(myNumber <= 9) {console.log('Inside the if statement! :)')}
if(myNumber >= 5) {console.log('Inside the if statement! :)')}


// else statement
if(!isTrue) {
  console.log('Inside the if statement! :)')
} else {
  console.log('Inside the else statement! :O')
}


//else if statement
if(myNumber < 3) {
  console.log('Inside the if statement! :)')
} else if (myNumber == 5) {
  console.log('Inside the else if statement! *_*')
} else {
  console.log('Inside the else statement! :O')
}
