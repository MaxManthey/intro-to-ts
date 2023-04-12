function superheroes(heroList: string[]) {
  for(let i = 0; i < 3; ++i) {
    console.log(heroList[i])
  }
}

const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash"]
superheroes(dcHeroes)
const marvelHeroes = ["Thor", "Ironman"]
superheroes(marvelHeroes)
