//This creates an infinite loop 
// while(true) {
//   console.log("Hello World!")
// }

let num = 0
while(num < 5) {
  console.log("Hello World!")
  num = num + 1
}
//This works just fine but its a bit verbose

//A for loop makes it easier
for(let i = 0; i < 5; i = i + 1) {
  console.log("My number is:", i)
}
// i++ makes the loop easier to read
for(let i = 0; i < 5; i++) {
  console.log("Howdy")
}

//There is a difference between i++ and ++i
let num1 = 4
let num2 = num1++
console.log(num1, num2)
let num3 = 4
let num4 = ++num3
console.log(num3, num4)
//The same works with --
console.log(--num4)


//Arrays []


//looping over arrays


//SCOPE {}












/***************
* LAST LECTURE *
***************/

// const isTrue = true
// const isStillTrue = true
// const isFalse = false

// //logical operators
// //This is an option
// if(isTrue == true) {
//   if(isStillTrue == true) {
//     console.log("both are true")
//   }
// }
// //But this is better
// if(isTrue && isStillTrue) { console.log("I like TypeScript :)") }


// if(isFalse && isTrue) { console.log("I like TypeScript :)") }

// // ! operator
// if(!isFalse && isTrue) { console.log("I like TypeScript :)") }

// if(isFalse || isTrue) { console.log("I like TypeScript :)") }



// // functions
// //basic function
// function hello() {
//   // everything that we've done so far can also be done in a function
//   // like console.logs, variable declarations, if else, etc.
//   console.log("Hello")
//   // variables declared inside of functions can't be used outside of them
//   const inFunction = 3
// }
// // console.log(inFunction) doesnt work
// //functions have to be called
// hello()

// // to get something back we can return the value
// function getNum(): number {
//   const inFunction = 3
//   return inFunction
// }
// const outsideFunction = getNum()
// console.log(outsideFunction)

// //Parameters can be passed into the function
// function greeting(name: string) {
//   console.log("Hello " + name)
// }
// greeting("Max")


// //multiple parameters can be passed
// function userInfo(username: string, age: number) {
//   console.log('User ' + username + ' is ' + age + ' years old')
//   if(username == 'Max') {
//     greeting(username)
//   }
// }
// userInfo('Max', 24)
