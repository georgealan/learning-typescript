// ========= Spread parameter =========
/*
A spread parameter uses the same ellipsis syntax as the rest parameter but is used inside the body
of a function. Let’s illustrate this with an example:
 */
const newItem = 3
const oldArray = [1, 2]
const newArray = [...oldArray, newItem]

// We can also use a spread parameter on objects:
const oldPerson = { name: 'George'}
const newPerson = {...oldPerson, age: 20}

// Template strings
let baseUrl = ''
let path_to_resource = ''
let parameter = ''

const url = `${baseUrl}/${path_to_resource}?param=${parameter}&param2={parameter2}`

// ========= Generics =========
/*
Generics are expression indicating a general code behavior that we can employ, regardless of the
data type.
 */
function method<T>(arg: T): T {
    return arg
}
method<number>(1)

/*
 You can make sure that it is an array type so that any value you pass must adhere to this:
 In the preceding case, we decide that T should be of Person or CustomPerson type and that the
 parameter needs to be of the array type. If we try to pass a single object, the compiler will complain:
 */
function methodTwo<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
class CustomPerson extends Array {}
class Person {}
const people: Person[] = []
const otherPerson = new CustomPerson()
methodTwo<Person>(people)
methodTwo<CustomPerson>(otherPerson)

// Alternatively, we can define that T should adhere to an interface like this:
interface Shape {
    area(): number
}

class Square implements Shape {
    area() { return 1 }
}

class Circle implements Shape {
    area() { return 2 }
}

function allAreas<T extends Shape>(...args: T[]): number {
    let total = 0
    args.forEach(x => {
        total += x.area()
    })
    return total
}
let result: number = allAreas(new Square(), new Circle(), new Circle())
console.log(result)

// ========= Optional chaining =========
const squareOne = new Square()

const area = squareOne?.area()

/*
The character ? after the square object ensures that the area method will be accessed only if the
object has a value. The case where optional chaining shines is in more complicated scenarios
with much more values to check, such as the following
 */
// const width = squareOne?.area()?.width

/*
In the preceding scenario, we assume that the area property is an optional object that contains
a width property. In that case, we would need to check values for both square and area.
 */

// Nullish coalescing
/*
The nullish coalescing feature in TypeScript looks similar to the optional chaining we learned
about in the previous section. However, it is more related to providing a default value when a
variable is not set. Consider the following example that assigns a value to the mySquare variable
only if the square object exists:
 */
const square3 = null
const mySquare = square3 ? square3 : new Square()
/*
The previous statement is called a ternary operator and operates like a conditional statement. If
the square object is undefined or null, the mySquare variable will take the default value of a new
square object. We can rewrite the previous expression using nullish coalescing:
 */
const mysquare2 = square3 ?? new Square() // This is Nullish coalescing
