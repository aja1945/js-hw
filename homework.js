// Exercise 1
function displayFavoriteDishes(person) {
    for (const key in person) {
        if (Array.isArray(person[key])) {
            console.log(key + ":");
            for (const item of person[key]) {
                if (typeof item === "string") {
                    console.log("  " + item);
                }
            }
        } else if (typeof person[key] === "string") {
            console.log(key + ": " + person[key]);
        } else if (typeof person[key] === "object") {
            for (const innerKey in person[key][0]) {
                console.log(key + ": " + innerKey + " - " + person[key][0][innerKey]);
            }
        }
    }
}

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

displayFavoriteDishes(person3);

// Exercise 2
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    
    this.addAge = (years) => {
        this.age += years;
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();

// Exercise 3
function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello, World!")
    .then(result => console.log(result))
    .catch(error => console.log(error));

checkStringLength("Hi!")
    .then(result => console.log(result))
    .catch(error => console.log(error));


