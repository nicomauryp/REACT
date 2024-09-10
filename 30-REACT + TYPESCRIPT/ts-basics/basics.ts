// PRIMITIVES: NUMBER, STRING, BOOL
// COMPLEX: ARRAYS, OBJECTS, FUNCTION TYPES, PARAMETERS

// PRIMITIVES

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// COMPLEX

let hobbies: string[];
//let hobbies: number[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// TYPE INFERENCE

let course: string | number = "React - The Complete Guide";

course = 1234;

// FUNCTIONS AND TYPES

function add(a: number, b: number) {
  return a + b;
}

// function add(a: number, b: number): number | string {
//   return a + b;
// }

function print(value: any) {
  console.log(value);
}

// GENERICS

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
