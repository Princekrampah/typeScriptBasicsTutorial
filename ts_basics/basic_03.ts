let channel: string = "Code With Prince"

let condition: boolean = false

let numberValue: Number = 89



// array
let myArray: number[] = [2, 4, 5, 76]

// generic array type
let genericArray: Array<Number> = [30, 50, 70]

// tuples allows you to create a collection in 
// which the size is fixed and the types are also known
let myTuple: [number, number, string]

// if you try to assign another data type to the string section
// you'll get an error
myTuple = [30, 50, "tuple"]

// just like arrays we can access elements using an index
console.log(myTuple[0])

// we can also assign elements to a given index
myTuple[1] = 80
console.log(myTuple)


// using enums, enums is a great add on to JS
enum Names{
    John,
    Jane,
    Doe
}

let n: Names = Names.Doe
console.log(n)

// enums start numbering their members start 
// from 0. You can change this behavour by 
// manually setting the number of the enum values as such
enum Names{
    Helen = 3,
    Thomas = 40
}

let q: Names = Names.Helen
console.log(q)


// knowing an index value from an enum, we can get the value it maps to
console.log(Names[3])


// unknown, used when we are not sure of the value a variable is gonna hold
// it's type can be changed anytime in the program
let z: unknown = "Hello"
z = 90
z = [20, 40]


// Any: Sometimes, you may need to store a value in a variable. But you 
// don’t know its type at the time of writing the program. And the unknown 
// value may come from a third party API or user input. In this case, you 
// want to opt-out of the type checking and allow the value to pass through 
// the compile-time check.
let y: any;

y = 60
y = "60"


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
function voidFunc(): void{
    console.log("I do not return anything")
}

voidFunc()


let unuseful: void;
// unuseful = null
unuseful = undefined


// never: used on functions that do not have a reachable endpoint or
// functions that raise an exception
function noEnd(): never{
    while(true){}
}


function throwExp(): never{
    throw new Error("Something went wrong in the code")
}



// type assertions: This is used when you know exactly the type of data you expect
// a given variable to be. In outer languages like C++ it's called type casting.
// only to be used when you are very sure the type of data type a given 
// variable will be. This is what we call type assertions. 
// Type assertions can be implemented in two main ways:
// 1. as syntax
// 2. angle brackets syntax

let random: unknown = "Hello world"
let strLen: number = (random as string).length
let strLen2: number = (<string>random).length
console.log(strLen)
console.log(strLen2)