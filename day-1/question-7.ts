// Question 7: Type Assertions:
// Add the type assertion to the variable
// Use the HTMLDivElement type
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

function getDiv() {
  const rootDiv = document.getElementById("root") as HTMLDivElement;
  // const rootDiv = <HTMLDivElement>document.getElementById("root"); ===
  // const rootDiv: HTMLDivElement = document.getElementById("root"); !==
}

export {};
