var channel = "Code With Prince";
var condition = false;
var numberValue = 89;
// array
var myArray = [2, 4, 5, 76];
// generic array type
var genericArray = [30, 50, 70];
// tuples allows you to create a collection in 
// which the size is fixed and the types are also known
var myTuple;
// if you try to assign another data type to the string section
// you'll get an error
myTuple = [30, 50, "tuple"];
// just like arrays we can access elements using an index
console.log(myTuple[0]);
// we can also assign elements to a given index
myTuple[1] = 80;
console.log(myTuple);
// using enums, enums is a great add on to JS
var Names;
(function (Names) {
    Names[Names["John"] = 0] = "John";
    Names[Names["Jane"] = 1] = "Jane";
    Names[Names["Doe"] = 2] = "Doe";
})(Names || (Names = {}));
var n = Names.Doe;
console.log(n);
// enums start numbering their members start 
// from 0. You can change this behavour by 
// manually setting the number of the enum values as such
(function (Names) {
    Names[Names["Helen"] = 3] = "Helen";
    Names[Names["Thomas"] = 40] = "Thomas";
})(Names || (Names = {}));
var q = Names.Helen;
console.log(q);
// knowing an index value from an enum, we can get the value it maps to
console.log(Names[3]);
// unknown, used when we are not sure of the value a variable is gonna hold
// it's type can be changed anytime in the program
var z = "Hello";
z = 90;
z = [20, 40];
// Any: Sometimes, you may need to store a value in a variable. But you 
// don’t know its type at the time of writing the program. And the unknown 
// value may come from a third party API or user input. In this case, you 
// want to opt-out of the type checking and allow the value to pass through 
// the compile-time check.
var y;
y = 60;
y = "60";
// difference btn any and unknown is that, any type supports all operations while unknown type does not suppot
// any operations on unknown types
// ######### any, unknown: ########
// allow assigning any type
// ####### any #######
// allows being assigned to any type
// allows calling any method
// ########### unknown ###########
// doesn't allow being assigned to any type
// doesn't allow calling any method
// void: this is the opposite of any, its used in the absence
// of a type, typically used in functions. Can also be used with
// variables but, can only be assigned a null 
// value(if '--strictNullChecks` is not given) or undefined
function voidFunc() {
    console.log("I do not return anything");
}
voidFunc();
var unuseful;
// unuseful = null
unuseful = undefined;
// never: used on functions that do not have a reachable endpoint or
// functions that raise an exception
function noEnd() {
    while (true) { }
}
function throwExp() {
    throw new Error("Something went wrong in the code");
}
// type assertions: This is used when you know exactly the type of data you expect
// a given variable to be. In outer languages like C++ it's called type casting.
// only to be used when you are very sure the type of data type a given 
// variable will be. This is what we call type assertions. 
// Type assertions can be implemented in two main ways:
// 1. as syntax
// 2. angle brackets syntax
var random = "Hello world";
var strLen = random.length;
var strLen2 = random.length;
console.log(strLen);
console.log(strLen2);
