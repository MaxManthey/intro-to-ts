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


//Arrays [] contain multiple values of any type
const arrNums = [1, 5, 7, 8, 9, 10]
const arrStr = ["Hello", "Hi", "Howdy"]

//Accessing Array with index starting at 0!
console.log(arrNums[0])
console.log(arrNums[4])


//looping over arrays
for(let i = 0; i < arrNums.length; i++) {
  console.log(arrNums[i])
}
for(let i = 0; i < arrNums.length; i++) {
  arrNums[i] = i
}
console.log(arrNums)



//SCOPE {}
// Stuff declared in curly braces {} can only be used in the braces

// const myVar = 3
function test() {
  const myVar = 3
}
// console.log(myVar) doesnt work because it's inside of test()
// counts not only for functions but everything else
if(true) {
  const myVar = 3
}
for(let i = 0; i < 3; i++) {
  const myVar = 3
}
//but can be used in nested curly braces
function nested() {
  const myVar = 3
  for(let i = 0; i < 2; ++i) {
    console.log(myVar) // Works!
  }
}









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
