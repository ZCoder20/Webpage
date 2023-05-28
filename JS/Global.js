// Assuming you have a JSON object or structure

// Create an empty JSON object
const jsonObject = {};

// Add properties to the JSON object
jsonObject.name = 'John';
jsonObject.age = 30;
jsonObject.email = 'john@example.com';

// Convert the JSON object to a string
const jsonStringstrng = JSON.stringify(jsonObject);

// Output the JSON string
console.log(jsonStringstrng);



const myData = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

// Convert the JSON structure to a string
const jsonString = JSON.stringify(myData);

// Save the JSON string in localStorage
localStorage.setItem('myData', jsonString);


// Retrieve the JSON string from localStorage
const jsonString1 = localStorage.getItem('myData');

// Convert the JSON string back to a JavaScript object
const myData1 = JSON.parse(jsonString1);

// Access the data within the JSON object
console.log(myData.name);  // Output: John
console.log(myData.age);   // Output: 30
console.log(myData.email); // Output: john@example.com


// Retrieve the JSON string from localStorage
const jsonString2 = localStorage.getItem('myData');

// Convert the JSON string back to a JavaScript object
const myData2 = JSON.parse(jsonString2);

// Update the data within the JSON object
myData2.name = 'Jane';
myData2.age = 35;

// Convert the updated JSON object back to a string
const updatedJsonString = JSON.stringify(myData);

// Save the updated JSON string back to localStorage
localStorage.setItem('myData', updatedJsonString);

//localStorage.clear();
