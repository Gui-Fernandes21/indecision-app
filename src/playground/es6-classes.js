// set up constructor to take name and age (default is 0)
// set up method getDescription - return string with name and age

class Person {
	constructor(name = "steve", age = 0) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return "My name is " + this.name;
	}

	getDescription() {
		return `Hey my name is ${this.name} and i am ${this.age} years old`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) return description + ` and has a major in ${this.major}`;
    
    return description;
    
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getName() {
    const description = super.getName();

    if (!this.hasHomeLocation()) return description;
    
    return description + `. I am visiting from ${this.homeLocation}`;
  }
}

const me = new Traveler("Guilherme", 21, "Brussels, Belgium");
console.log(me.getName());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getName());
