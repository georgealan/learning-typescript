// ========= Strings =========
let brand: string = 'Ford'
let message: string = `Today is a happy day! because I just bought a new ${brand} car!`
console.log(message)

// ========= Consts =========
const obj = {
    a: 3
}
obj.a = 4
console.log(obj)

/* If we declare the obj variable as a constant, it does not prevent the entire object from being edited
but rather its reference. So, the preceding code is valid.
*/

// ========= Numbers =========
const age: number = 4
const height: number = 5.6
// It defines a floating-point number and hexadecimal, decimal, binary, and octal literals.

// ========= Boolean =========
const isTrue: boolean = false

// ========= Array =========
const brands: string[] = ['Ford', 'Ferrari', 'Corvet']
const ages: number[] = [10, 25, 30, 40]
/*
If we try to add a new item to the ages array with a type other than a number, the runtime
type-checker will complain, making sure our typed members remain consistent and that our
code is error-free.
 */

// ========= Any Type =========
/*
Sometimes, it is hard to infer the data type from the information we have at any given point, especially
when we are porting legacy code to TypeScript or integrating loosely typed third-party
libraries and modules. TypeScript supplies us with a convenient type for these cases. The any
type is compatible with all the other existing types, so we can type any data value with it and
assign any value to it later:
 */
let distance: any
distance = '1000km'
distance = 1000
const distances: any[] = ['1000km', 1000]
console.log(distances)
/*
However, this great power comes with great responsibility. If we bypass the convenience of static
type checking, we are opening the door to type errors when piping data through our modules. It
is up to us to ensure type safety throughout our application.
 */

// ========= Custom Types =========
// In TypeScript, you can come up with your own type if you need to by using the type keyword in the following way:
type Animal = 'Dolphin' | 'Tiger'
// It is essentially a type with a finite number of allowed values. Let’s create a variable of this type:
const animal: Animal = 'Dolphin'
console.log(animal)
/*
The preceding code is perfectly valid as Cheetah is one of the allowed values and works as intended.
The interesting part happens when we give our variable a value it does not expect:
 */
// const animal2: Animal = 'Turtle' // Cause a compiler error, because Turtle isn't assigned to Animal type

// ========= Enum type =========
enum Brands {Chevrolet, Ferrari, Porshe, Dodge}
const myCar: Brands = Brands.Ferrari
console.log(myCar) // we will see that it returns the value 1, which is the index of Ferrari

// we can also assign custom numeric values like the following:
enum BrandsReduced { Tesla = 1, GMC, Jeep}
const myTruck: BrandsReduced = BrandsReduced.GMC
console.log(myTruck)

// is the possibility to look up a member mapped to a given numeric value:
enum Cars {Ferrari, Porshe, Dodge}
const myCarsBrands: string = Cars[1]
console.log(myCarsBrands)

/*
It should also be mentioned that from TypeScript 2.4 and onward, it is possible to assign string
values to enums. It is a technique preferred in Angular projects because of its extended support
in template files.
 */

// ========= Void type =========
/*
The void type represents the absence of a type, and its use is constrained to annotating functions
that do not return an actual value:
 */
function test(): void {
    const a = 0
}
