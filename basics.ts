// primitives

let age: number;
age = 24;

let username: string;
let isInstructor: boolean;

// more complex types

let hobbies: string[];

let person: {
  name: string,
  age: number
};

let people: {
  name: string,
  age: number
}[];

// Type inference
let course = 'React course';

// Union
let myCourse: string | number = 'React course';
myCourse = 12345; 