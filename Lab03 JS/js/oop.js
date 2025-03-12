const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const carInfo = document.getElementById('carInfo');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;

    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(', ')}.`;
    };

    obj.greeting = function () {
        alert(`Hello ${this.name.firstName} ${this.name.lastName}, How are you?`);
    };

    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
console.log(person1.greeting());

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions -
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests.join(', ')}.`;
    };
    this.greeting = function () {
        alert(`Hello ${this.name.firstName} ${this.name.lastName}, How are you?`);
    };
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword,
and again invoking the .greeting() method for each person */
let person2 = new Person("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
let person3 = new Person("Swet", "Agnes", 20, "Female", ["reading", "traveling", "singing"]);

console.log(person2.greeting());
console.log(person3.greeting());

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        first: firstName,
        last: lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function () {
        return `${this.name.first} ${this.name.last} is ${this.age} years old and loves ${this.interests.join(', ')}.`;
    };

    this.greeting = function () {
        return `Hi, I'm ${this.name.first} ${this.name.last}.`;
    };
}

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person1 = new Person('Charles', 'William', 30, 'Male', ['reading', 'travelling', 'sports']);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
console.log(person1['age']); // Accessing age using bracket notation
console.log(person1.interests[1]); // Accessing the second interest
console.log(person1.bio()); // Calling the bio function

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Chrysler";
car.model = "Pacifica";

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.fun = function () {
        return `This ${this.year} ${this.make} ${this.model} is so fun to drive!`;
    };
}

// Instantiate the car object
let car1 = new Car('Toyota', 'Camry', 2020);

/* STEP 5a: Yet another approach is to use the create() method.
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car1);
anotherCar.make = "Honda";  // Override some properties for testing
anotherCar.model = "Civic";
anotherCar.year = 2022;

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
if (carInfo) {
    carInfo.innerHTML = `Brand: ${anotherCar.make}, Model: ${anotherCar.model}, Year: ${anotherCar.year}`;
    console.log("Car info updated");
}

console.log(car1.fun());  // Should print "This 2020 Toyota Camry is so fun to drive!"
console.log(anotherCar.fun()); // Should print "This 2022 Honda Civic is so fun to drive!"

// Now on to Lab 3...

// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes,
    assortments of cheeses,
    specialty sauces,
    different meat patties(beef, chicken, vegetarian),
    single, double, or triple patty,
    Pickles, hot peppers, olives etc.
*/
function Hamburger(bun, vegetables, cheeses, sauce, pattyType, pattyCount, extras) {
    this.bun = bun;               // Type of bun (e.g., sesame, whole wheat)
    this.vegetables = vegetables; // Array of vegetables (e.g., lettuce, tomato)
    this.cheeses = cheeses;       // Array of cheeses (e.g., cheddar, swiss)
    this.sauce = sauce;           // Type of sauce (e.g., ketchup, mustard)
    this.pattyType = pattyType;   // Type of patty (e.g., beef, chicken)
    this.pattyCount = pattyCount; // Single, double, or triple patty
    this.extras = extras;         // Array of extras (e.g., pickles, hot peppers)

    this.describeHamburger = function () {
        let description = `This hamburger has a ${this.bun} bun, `;
        description += `with ${this.pattyCount} ${this.pattyType} patties, `;
        description += `topped with ${this.vegetables.join(", ")} and ${this.cheeses.join(", ")} cheese. `;
        description += `It also includes ${this.sauce} sauce, `;
        description += `and extras like ${this.extras.join(", ")}.`;

        return description;
    };
}

// Example of creating a hamburger object
let myHamburger = new Hamburger(
    'sesame',
    ['lettuce', 'tomato', 'onion'],
    ['cheddar', 'swiss'],
    'ketchup',
    'beef',
    'double',
    ['pickles', 'hot peppers']
);

// Output the description of the hamburger
console.log(myHamburger.describeHamburger());

// Fix the duplicated Hamburger example using the correct constructor (createHamburger to Hamburger)
let myHamburger2 = new Hamburger(
    'sesame',
    ['lettuce', 'tomato', 'onion'],
    ['cheddar', 'swiss'],
    'ketchup',
    'beef',
    'double',
    ['pickles', 'hot peppers']
);

// Output the description of the hamburger
console.log(myHamburger2.describeHamburger());

// Optionally add more extras if you want
// You can modify the object and call describeHamburger again to get an updated description
