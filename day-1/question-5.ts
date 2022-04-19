// Question 5: Union
// Create a union for id so that it is either a
//    string or number

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId("id");
printId(123);

export {};
