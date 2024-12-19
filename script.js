// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string
let string1 = "   hello";
let string2 = "world   ";

// Remove spaces
string1 = string1.trim();
string2 = string2.trim();

// Concatenate and convert to uppercase
let Result = (string1 + string2).toUpperCase();
console.log(Result); 


// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase
let stri = "ExampleString";

// Extract the middle portion
let middleIndex = Math.floor(stri.length / 2);
let midPortion = stri.substring(middleIndex - 1, middleIndex + 2);

// Get the last index of a character in the extracted portion
let lastIndex = midPortion.lastIndexOf(midPortion[midPortion.length - 1]);

// Convert the portion to lowercase
let stringresult = midPortion.toLowerCase();
console.log(stringresult, lastIndex); 


// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 
let singleChar = "x";
let str = "hello";

// Concatenate and convert to uppercase
let combin = (singleChar + str).toUpperCase();

// Extract the second-to-last character
let secondLastChar = combin.charAt(combin.length - 2);
console.log(secondLastChar); 


// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase
let stringa = "JavaScript";
let stringb = "Language";

// Extract first 3 chars of str1 and last 3 chars of str2
let part1 = stringa.substring(0, 3);
let part2 = stringb.slice(-3);

// Concatenate
let combined = part1 + part2;

// Capitalize first and last characters
let sresult = combined.charAt(0).toUpperCase() + combined.slice(1, -1) + combined.charAt(combined.length - 1).toUpperCase();
console.log(sresult);

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string
let str1 = "   Hello World   ";
let str2 = "JavaScript";

// Trim spaces
str1 = str1.trim();

// Modify first and last characters to uppercase
let modifiedStr = str1.charAt(0).toUpperCase() + str1.slice(1, -1) + str1.charAt(str1.length - 1).toUpperCase();

// Extract a specific part of the string
let extracted = modifiedStr.substring(6, 10);

// Concatenate with another string
let result = extracted + str2;
console.log(result); 

// 6."hello there , how are you " find the index of are word in the sentence
let sentence = "hello there, how are you";

// Find index of "are"
let index = sentence.indexOf("are");
console.log(index); 
//  task2
//1. Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
// Create an object `person` with properties `firstName`, `lastName`, and `age`
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Access and print the `firstName` property
console.log(person.firstName); 

// Add a new property `city` with the value "New York"
person.city = "New York";

// Print the updated object
console.log(person);
//2. Output: { firstName: 'John', lastName: 'Doe', age: 30, city: 'New York' }
// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
// Create an object `product` with properties `name`, `price`, and `inStock`
let product = {
    name: "Laptop",
    price: 1000,
    inStock: true
};

// Modify the `price` property to a new value
product.price = 1200;

// Delete the `inStock` property from the object
delete product.inStock;

// Print the updated object
console.log(product);
// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.
// Create an object `library` with nested genres
let library = {
    fantasy: {
        books: ["The Hobbit", "Harry Potter"]
    },
    mystery: {
        books: ["Sherlock Holmes", "Gone Girl"]
    }
};

// Add a new genre `scienceFiction` with a list of two books
library.scienceFiction = {
    books: ["Dune", "Ender's Game"]
};

// Access and print the first book in the `fantasy` genre
console.log(library.fantasy.books[0]); 

// Delete the `mystery` genre from the object
delete library.mystery;

// Print the updated object
console.log(library);

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
// Create an object `user` with nested address
let user = {
    username: "johndoe123",
    email: "johndoe@example.com",
    address: {
        city: "New York",
        state: "NY",
        zip: "10001"
    }
};

// Freeze the user object
Object.freeze(user);

// Try to change the `email` property
user.email = "newemail@example.com";
console.log(user.email); 

// Check if the object is frozen
console.log(Object.isFrozen(user)); 

// Attempt to add a new property `phone`
user.phone = "123-456-7890";
console.log(user.phone);

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()

// Create an object `car` with properties
let car = {
    make: "Toyota",
    model: "Corolla",
    price: 20000
};

// Seal the object
Object.seal(car);

// Try to delete the `make` property
delete car.make;
console.log(car.make); 

// Check if the object is sealed
console.log(Object.isSealed(car)); 

// Modify the `price` property
car.price = 22000;
console.log(car.price); 

// Check if the object is still extensible
console.log(Object.isExtensible(car)); 

