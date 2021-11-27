var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives:number,string,boolean,null,undefined,symbol
var age;
age = 12;
var userName;
userName = "Stelko97";
var isInstructor;
isInstructor = true;
var hobbies = ['Sports', 'Cooking', 'Travelling'];
var person = { name: "Peter", age: 24 };
console.log(person);
var people;
//type inference -> typeScript feature -> by default typeScript
// tries to infer as many types as possible
var course = 'React - The Complete Guide';
// course = 12341;
// its a good practice to embrace that type inferance feature
// so to not specify the type in addition, but is redundant
// union types -> type definiton that allows more than 1 type for a variable;
var course1 = 'Learning React is Great!';
course1 = 44;
// Function && types
function addd(a, b) {
    return a + b;
}
;
// function thatreturns a number
function print(value) {
    console.log(value);
}
// void function 
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
;
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
