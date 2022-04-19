// Question 6: Extending
// Extend the type and the interface
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// Extend the interface:
// Extend the Animal interface with a Cat interface that
//    has a `purrs` boolean
interface Animal {
  name: string;
}

interface Cat extends Animal {
  purrs: boolean;
}

// Extend the type:
// Extend the Vehicle type alias with a Car intersection
//    that has a `hasWheels` boolean
type Vehicle = {
  name: string;
};

type Car = Vehicle & {
  hasWheels: boolean;
};

export {};
