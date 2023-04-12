class Superhero {
  name: string
  superpower: string

  constructor(name: string, superpower: string) {
    this.name = name
    this.superpower = superpower
  }

  sayHello() {
    console.log("I, the mighty " + this.name + " am here to save you!")
  }
}

class MarvelHero extends Superhero {
  isAvenger: boolean

  constructor(name: string, superpower: string, isAvenger: boolean) {
    super(name, superpower)
    this.isAvenger = isAvenger
  }
}

const thor = new MarvelHero("Thor", "lightning", true)
const ironMan = new MarvelHero("IronMan", "iron suit", true)
