class superhero {
  name: string
  superpower: string

  constructor (name: string, superpower: string) {
    this.name = name
    this.superpower = superpower
  }

  sayHello () {
    console.log ("Hello I am " + this.name)
  }
}

const iSEVEN = new superhero ("iSEVEN", "Cleverness")
const alvee = new superhero ("Alveeman" , "Sleeping all day")

iSEVEN.sayHello ()
alvee.sayHello ()

class MarvelHero extends superhero {
  isAvenger: boolean

  constructor (name: string, superpower: string, isAvenger: boolean) {
    super (name, superpower)
    this.isAvenger = isAvenger
  }
}

const Hawkeye = new MarvelHero ("Hawkeye", "sight", true)

Hawkeye.sayHello()