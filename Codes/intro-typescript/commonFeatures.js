var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ========= Spread parameter =========
/*
A spread parameter uses the same ellipsis syntax as the rest parameter but is used inside the body
of a function. Let’s illustrate this with an example:
 */
var newItem = 3;
var oldArray = [1, 2];
var newArray = __spreadArray(__spreadArray([], oldArray, true), [newItem], false);
// We can also use a spread parameter on objects:
var oldPerson = { name: 'George' };
var newPerson = __assign(__assign({}, oldPerson), { age: 20 });
// Template strings
var baseUrl = '';
var path_to_resource = '';
var parameter = '';
var url = "".concat(baseUrl, "/").concat(path_to_resource, "?param=").concat(parameter, "&param2={parameter2}");
// ========= Generics =========
/*
Generics are expression indicating a general code behavior that we can employ, regardless of the
data type.
 */
function method(arg) {
    return arg;
}
method(1);
/*
 You can make sure that it is an array type so that any value you pass must adhere to this:
 In the preceding case, we decide that T should be of Person or CustomPerson type and that the
 parameter needs to be of the array type. If we try to pass a single object, the compiler will complain:
 */
function methodTwo(arg) {
    console.log(arg.length);
    return arg;
}
var CustomPerson = /** @class */ (function (_super) {
    __extends(CustomPerson, _super);
    function CustomPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomPerson;
}(Array));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var people = [];
var otherPerson = new CustomPerson();
methodTwo(people);
methodTwo(otherPerson);
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.area = function () { return 1; };
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.area = function () { return 2; };
    return Circle;
}());
function allAreas() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    args.forEach(function (x) {
        total += x.area();
    });
    return total;
}
var result = allAreas(new Square(), new Circle(), new Circle());
console.log(result);
// ========= Optional chaining =========
var squareOne = new Square();
var area = squareOne === null || squareOne === void 0 ? void 0 : squareOne.area();
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
var square3 = null;
var mySquare = square3 ? square3 : new Square();
/*
The previous statement is called a ternary operator and operates like a conditional statement. If
the square object is undefined or null, the mySquare variable will take the default value of a new
square object. We can rewrite the previous expression using nullish coalescing:
 */
var mysquare2 = square3 !== null && square3 !== void 0 ? square3 : new Square(); // This is Nullish coalescing
