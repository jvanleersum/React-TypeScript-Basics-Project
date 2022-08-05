// primitives

let age: number;
age = 24;

let username: string;
let isInstructor: boolean;

// more complex types

let hobbies: string[];

type Person = {
  name: string,
  age: number
};

let person: Person;

let people: Person[];

// Type inference
let course = 'React course';

// Union
let myCourse: string | number = 'React course';
myCourse = 12345; 

// functions and parameters
function add(a: number, b:number) {
  return a + b
}    // returns a number => type inference

function printOutput(value: any) {
  console.log(value);
}   // returns nothing, type of the function is void


// generics
function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array]
  return newArray;
}