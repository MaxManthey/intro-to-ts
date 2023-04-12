class Car {
  brand: string;
  seats: number;
  color: string;

  constructor(givenBrand: string, givenSeats: number, givenColor: string) {
    this.brand = givenBrand
    this.seats = givenSeats
    this.color = givenColor
  }
}

const myCar = new Car("VW", 5, "black")
console.log(myCar)
console.log(myCar.brand)
console.log(myCar.color)


// functions can be called inside
class Car2 {
  brand: string
  seats: number
  color: string

  constructor(givenBrand: string, givenSeats: number, givenColor: string) {
    this.brand = givenBrand
    this.seats = givenSeats
    this.color = givenColor
  }

  //Does not need the "function" keyword
  honk() {
    console.log("I'm a " + this.brand + "! Honk, Honk.")
  }
}

const myCar2 = new Car2("VW", 5, "black")
myCar2.honk()
const myOtherCar2 = new Car2("BMW", 2, "red")
myOtherCar2.honk()


// Inheritance: Mammal(name, legs, move(distance)) -> Dog(bark())/Cat(isStray, meow())
class Mammal {
  name: string
  legs: number

  constructor(name: string, legs: number) {
    this.name = name
    this.legs = legs
  }

  move(distance: number) {
    console.log(this.name + " moved " + distance + " meters.")
  }
}

class Dog extends Mammal {
  constructor(name: string, legs: number) {
    super(name, legs)
  }

  bark() {
    console.log("I'm " + this.name + "! Woof, Woof!")
  }
}
const chili = new Dog("Chili", 4)
chili.bark()
chili.move(20)

//Extended class can have own values 
class Cat extends Mammal {
  isStray: boolean

  constructor(name: string, legs: number, isStray: boolean) {
    super(name, legs)
    this.isStray = isStray
  }

  meow() {
    console.log("I'm " + this.name + "! Meow, Meow!")
  }
}

const findus = new Cat("Findus", 4, true)
findus.meow()
findus.move(10)
// findus.bark() -> Doesn't work!





















































/***************
* LAST LECTURE *
***************/

// //This creates an infinite loop 
// // while(true) {
// //   console.log("Hello World!")
// // }

// let num = 0
// while(num < 5) {
//   console.log("Hello World!")
//   num = num + 1
// }
// //This works just fine but its a bit verbose

// //A for loop makes it easier
// for(let i = 0; i < 5; i = i + 1) {
//   console.log("My number is:", i)
// }
// // i++ makes the loop easier to read
// for(let i = 0; i < 5; i++) {
//   console.log("Howdy")
// }

// //There is a difference between i++ and ++i
// let num1 = 4
// let num2 = num1++
// console.log(num1, num2)
// let num3 = 4
// let num4 = ++num3
// console.log(num3, num4)
// //The same works with --
// console.log(--num4)


// //Arrays [] contain multiple values of any type
// const arrNums = [1, 5, 7, 8, 9, 10]
// const arrStr = ["Hello", "Hi", "Howdy"]

// //Accessing Array with index starting at 0!
// console.log(arrNums[0])
// console.log(arrNums[4])


// //looping over arrays
// for(let i = 0; i < arrNums.length; i++) {
//   console.log(arrNums[i])
// }
// for(let i = 0; i < arrNums.length; i++) {
//   arrNums[i] = i
// }
// console.log(arrNums)



// //SCOPE {}
// // Stuff declared in curly braces {} can only be used in the braces

// // const myVar = 3
// function test() {
//   const myVar = 3
// }
// // console.log(myVar) doesnt work because it's inside of test()
// // counts not only for functions but everything else
// if(true) {
//   const myVar = 3
// }
// for(let i = 0; i < 3; i++) {
//   const myVar = 3
// }
// //but can be used in nested curly braces
// function nested() {
//   const myVar = 3
//   for(let i = 0; i < 2; ++i) {
//     console.log(myVar) // Works!
//   }
// }