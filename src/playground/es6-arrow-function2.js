// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
}

console.log(add(1,2))

// this keyword - no longer bound

const user = {
  name: 'Gui',
  cities: ['Brussels','Orlando', 'Natal'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach((city) => {
      console.log(this.name + ' lived in ' + city)
    })
  }
}

user.printPlacesLived()

// Challenge Area

const multiplier = {
  //numbers - array of numbers
  // multiply by - single Int
  numbers: [1,2,3,4,5,6,7,8],
  multiplyBy: 2,

  //method multiply - return a new array with the multiplied numbers
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());