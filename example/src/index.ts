const isTrue = true
const isStillTrue = true
const isFalse = false

//logical operators
//This is an option
if(isTrue == true) {
  if(isStillTrue == true) {
    console.log("both are true")
  }
}
//But this is better
if(isTrue && isStillTrue) { console.log("I like TypeScript :)") }


if(isFalse && isTrue) { console.log("I like TypeScript :)") }

// ! operator
if(!isFalse && isTrue) { console.log("I like TypeScript :)") }

if(isFalse || isTrue) { console.log("I like TypeScript :)") }



// functions
//basic function
function hello() {
  // everything that we've done so far can also be done in a function
  // like console.logs, variable declarations, if else, etc.
  console.log("Hello")
  // variables declared inside of functions can't be used outside of them
  const inFunction = 3
}
// console.log(inFunction) doesnt work
//functions have to be called
hello()

// to get something back we can return the value
function getNum(): number {
  const inFunction = 3
  return inFunction
}
const outsideFunction = getNum()
console.log(outsideFunction)

//Parameters can be passed into the function
function greeting(name: string) {
  console.log("Hello " + name)
}
greeting("Max")


//multiple parameters can be passed
function userInfo(username: string, age: number) {
  console.log('User ' + username + ' is ' + age + ' years old')
  if(username == 'Max') {
    greeting(username)
  }
}
userInfo('Max', 24)






/***************
* LAST LECTURE *
***************/

//if statement
// if(isTrue == true) {
//   console.log('Inside the if statement! :)')
// }
// if(isTrue != true) {console.log('Inside the if statement! :)')}

// //comparison
// const myNumber = 5
// if(myNumber == 5) {console.log('Inside the if statement! :)')}
// if(myNumber != 5) {console.log('Inside the if statement! :)')}

// if(myNumber < 7) {console.log('Inside the if statement! :)')}
// if(myNumber > 5) {console.log('Inside the if statement! :)')}

// if(myNumber <= 9) {console.log('Inside the if statement! :)')}
// if(myNumber >= 5) {console.log('Inside the if statement! :)')}


// // else statement
// if(!isTrue) {
//   console.log('Inside the if statement! :)')
// } else {
//   console.log('Inside the else statement! :O')
// }


// //else if statement
// if(myNumber < 3) {
//   console.log('Inside the if statement! :)')
// } else if (myNumber == 5) {
//   console.log('Inside the else if statement! *_*')
// } else {
//   console.log('Inside the else statement! :O')
// }
