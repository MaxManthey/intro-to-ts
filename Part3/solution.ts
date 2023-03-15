function petAge(age: number) {
  return "This animal is " + age + " years old."
}

function petGreeter(type: string, age: number) {
  console.log(petAge(age))

  if(type == "dog") {
    console.log("Woof")
  } else if(type == "cat") {
    console.log("Meow")
  } else {
    console.log("Hello?")
  }
}

petGreeter("dog", 1)
petGreeter("cat", 2)
petGreeter("human", 24)