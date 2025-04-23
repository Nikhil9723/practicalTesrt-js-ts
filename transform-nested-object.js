// Write a function transformNestedObject(obj, path, transformFn) that:

// - Accesses a nested property using the given path (dot-separated string).
// - Applies a transformation function transformFn to the value at that path.
// - If any part of the path does not exist, create the missing parts (either empty objects or arrays, depending on the context).
// - If the path points to a value, apply the transformation in place.
// - If the value at the path is an array, apply the transformation function to each item inside the array.
// - Throws an error if the path is malformed (e.g., empty path or path containing spaces).

// Example
const user = {
  name: "John",
  address: {
    city: "New York",
    postalCode: "10001",
  },
  hobbies: ["reading", "traveling"],
};


function transformNestedObject(obj, path, func) {
    if(path === ' ' || path !== "string") {
        throw new Error("wrong path");
    }
    let key = path.split(".");
    let currObj = obj[0]
    for(let i = 1; i<=key.length-1; i++) {
        if(currObj[key[i]] === 'object') {
            transformNestedObject(currObj[key[i]],key, func)
        } else {
            
        }
        currObj = currObj[key[i]];
    }
}

// Transformation function to capitalize the value
const capitalize = (value) => value.toUpperCase();

transformNestedObject(user, "address.city", capitalize);
console.log(user.address.city); // Expected output: "NEW YORK"

transformNestedObject(user, "hobbies", capitalize);
console.log(user.hobbies); // Expected output: ["READING", "TRAVELING"]

transformNestedObject(user, "profile.age", (val) => val + 5);
console.log(user.profile.age); // Expected output: 5