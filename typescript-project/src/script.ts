function hello() {
  const name = "Stephan"
  console.log(name)
}
hello()

function getNumber() {
  return 5
}
const myNumber = getNumber()
console.log(myNumber)

function greeting(name: string) {
  console.log("Hello " + name)
}
greeting("Stephan")
greeting("Max")


function add(num1: number, num2: number) {
  return num1 * num2
}
console.log(add(17, 23))
console.log(add(17, 23))
console.log(add(17, 23))

function userInfo(username: string, age: number) {
  console.log("User " + username + " age: " + age)
  if(username == "Max" || age == 24) {
    console.log("HI MAX")
  } else {
    console.log("Not Max :(")
  }
}
userInfo("Stephan", 24)
userInfo("Maxi", 26)
userInfo("Andreas", 24)
userInfo("Christian", 24)














// const isTrue = true
// const isFalse = false
// const isStillTrue = true

// if(isTrue) {
//   if(isStillTrue == true) {
//     console.log("hi")
//   }
// }

// if(isTrue && isStillTrue) {
//   console.log("wow")
// }

// if(isTrue || isStillTrue) {
//   console.log("Hello")
// }



// if(true || false && isTrue) {
//   console.log("howdy")
// }


