//Primitives:number,string,boolean,null,undefined,symbol

let age: number;

age = 12;

let userName: string;
userName = "Stelko97";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[] = ['Sports', 'Cooking', 'Travelling'];

let person: { age: number, name: string }; // object definition type;

person = {
	name: 'Max',
	age: 32
}; // object


let people: {
	name: string;
	age: number;
}[];  // array of objects 



//type inference -> typeScript feature -> by default typeScript
// tries to infer as many types as possible
let course = 'React - The Complete Guide';
course = 12341;

// its a good practice to embrace that type inferance feature
// so to not specify the type in addition, but is redundant


// union types -> type definiton that allows more than 1 type for a variable;
let course1: string | number = 'Learning React is Great!';
course1 = 44;


//More complex types:arrays,objects






// Function types , parameters 