// ========= Strings =========
var brand = 'Ford';
var message = "Today is a happy day! because I just bought a new ".concat(brand, " car!");
console.log(message);
// ========= Consts =========
var obj = {
    a: 3
};
obj.a = 4;
console.log(obj);
/* If we declare the obj variable as a constant, it does not prevent the entire object from being edited
but rather its reference. So, the preceding code is valid.
*/
// ========= Numbers =========
var age = 4;
var height = 5.6;
// It defines a floating-point number and hexadecimal, decimal, binary, and octal literals.
// ========= Boolean =========
var isTrue = false;
// ========= Array =========
var brands = ['Ford', 'Ferrari', 'Corvet'];
var ages = [10, 25, 30, 40];
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
var distance;
distance = '1000km';
distance = 1000;
var distances = ['1000km', 1000];
console.log(distances);
// It is essentially a type with a finite number of allowed values. Let’s create a variable of this type:
var animal = 'Dolphin';
console.log(animal);
/*
The preceding code is perfectly valid as Cheetah is one of the allowed values and works as intended.
The interesting part happens when we give our variable a value it does not expect:
 */
// const animal2: Animal = 'Turtle' // Cause a compiler error, because Turtle isn't assigned to Animal type
// ========= Enum type =========
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Ferrari"] = 1] = "Ferrari";
    Brands[Brands["Porshe"] = 2] = "Porshe";
    Brands[Brands["Dodge"] = 3] = "Dodge";
})(Brands || (Brands = {}));
var myCar = Brands.Ferrari;
console.log(myCar); // we will see that it returns the value 1, which is the index of Ferrari
// we can also assign custom numeric values like the following:
var BrandsReduced;
(function (BrandsReduced) {
    BrandsReduced[BrandsReduced["Tesla"] = 1] = "Tesla";
    BrandsReduced[BrandsReduced["GMC"] = 2] = "GMC";
    BrandsReduced[BrandsReduced["Jeep"] = 3] = "Jeep";
})(BrandsReduced || (BrandsReduced = {}));
var myTruck = BrandsReduced.GMC;
console.log(myTruck);
// is the possibility to look up a member mapped to a given numeric value:
var Cars;
(function (Cars) {
    Cars[Cars["Ferrari"] = 0] = "Ferrari";
    Cars[Cars["Porshe"] = 1] = "Porshe";
    Cars[Cars["Dodge"] = 2] = "Dodge";
})(Cars || (Cars = {}));
var myCarsBrands = Cars[1];
console.log(myCarsBrands);
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
function test() {
    var a = 0;
}
