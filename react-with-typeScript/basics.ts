//Primitives:number,string,boolean,null,undefined,symbol
let age: number;

age = 12;

let userName: string;
userName = "Stelko97";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[] = ['Sports', 'Cooking', 'Travelling'];


type Person = {
	name: string;
	age: number;
}



let person: Person = { name: "Peter", age: 24 };
console.log(person)

let people: Person[];



//type inference -> typeScript feature -> by default typeScript
// tries to infer as many types as possible
let course = 'React - The Complete Guide';
// course = 12341;

// its a good practice to embrace that type inferance feature
// so to not specify the type in addition, but is redundant


// union types -> type definiton that allows more than 1 type for a variable;
let course1: string | number = 'Learning React is Great!';
course1 = 44;


// Function && types
function addd(a: number, b: number) {
	return a + b;
};

// function thatreturns a number

function print(value: any) {
	console.log(value);
}
// void function 


//Generics

function insertAtBeginningg<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
};

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginningg(demoArray, -1);
const stringArray = insertAtBeginningg(['a', 'b', 'c'], 'd');
console.log(updatedArray);
