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
console.log(result); // Example Output: "WorlJavaScript"

// 6."hello there , how are you " find the index of are word in the sentence
let sentence = "hello there, how are you";

// Find index of "are"
let index = sentence.indexOf("are");
console.log(index); // Output: 17
