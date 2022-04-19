// Question 8: Literal types
// Use `let` to create a variable called `pets`
//    which then has the literal types of:
//    Dog
//    Cat
//    Mouse
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

let pet: "Dog" | "Cat" | "Mouse" = "Dog";

// Do not change the below
pet = "Cat";
pet = "Hamster"; // This should have problems
