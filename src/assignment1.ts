// Problem 1:

// Design a TypeScript function that takes a parameter of a union type (e.g., string | number).
//  If it's a string, return its length. If it's a number, return the square of that number.

const giveLengthOrsquare = (param: string | number): number | string => {
  if (typeof param === "string") {
    return param.length;
  } else if (typeof param === "number") {
    return param * param;
  } else {
    return "Invalid input";
  }
};

// console.log(giveLengthOrsquare(8));

// Problem 2:

// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.
interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: string;
}
const getAddressCity = (person: Person): string | undefined => {
  return person?.address?.city;
};
// Problem 3:
// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
class Cat {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
  meow() {
    console.log("I am a cat. meow...");
  }
}
const mini = new Cat("persian");

const isCat = (obj: Cat) => {
  if (obj instanceof Cat) {
    console.log("yes, it's a cat.");
  } else {
    console.log("NO, it's not a cat.");
  }
};
// isCat(mini);

// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

const mixedData = [1, "two", 3, "four", 5];
const addNumbers = (data: (number | string)[]): number => {
  let totAL = 0;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (typeof element === "number") {
      totAL = totAL + element;
    }
  }
  return totAL;
};
console.log(addNumbers(mixedData));

// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

interface ICar {
  make: string;
  model: string;
  year: number;
}
interface IDriver {
  name: string;
  licenseNumber: string;
}
type ICombineDriverAndCar = ICar & IDriver;

const combineCarAndDriver = (
  car: ICar,
  driver: IDriver
): ICombineDriverAndCar => {
  return {
    ...car,
    ...driver,
  };
};
const myCar: ICar = { make: "Toyota", model: "Corolla", year: 2020 };
const myDriver: IDriver = { name: "John Doe", licenseNumber: "XYZ1234" };

const combined = combineCarAndDriver(myCar, myDriver);
console.log(combined);

// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

const findFirstOccurrence = <T>(paramArray: T[], value: T): number => {
  const index = paramArray.indexOf(value);
  return index;
};

// }
