// Annotating types in functions
function sayHello(name) {
    return 'Hello, ' + name;
}
console.log(sayHello('George'));
/*
Functions in TypeScript can also be represented as expressions of anonymous functions, where
we bind the function declaration to a variable:
 */
var cheers = function (name) {
    return 'Hello, ' + name;
};
/*
there is a downside to that approach. Although typing function expressions this way is allowed,
thanks to type inference, the compiler is missing the type definition of the declared variable.
We might assume that the inferred type of a variable that points to a function typed as
a string is a string. Well, it’s not. A variable that points to an anonymous function ought to be
annotated with a function type
 */
// Function parameters in TypeScript
// Optional Parameters
/*
Parameters are a core part of the type checking applied by the TypeScript compiler. Parameters
are defined as optional by adding the character ? after the parameter name:
 */
function greetMe(name, greeting) {
    if (!greeting) {
        greeting = 'Welcome my friend';
    }
    return greeting + ', ' + name;
}
console.log(greetMe('George'));
console.log(greetMe('Vera', 'It\'s a pleasure to meet you'));
/*
Both versions are valid. Be aware that optional parameters should be placed last in a function
signature. Consider the following function:
 */
// function add(optional?: number, mandatory: string) {}
// Remember, optional arguments are great, but place them last.
// Default parameters
function greetMe2(name, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return "".concat(greeting, " ").concat(name);
}
console.log(greetMe2('George'));
console.log(greetMe2('George', 'Glad to meet you Mrs.'));
/*
Like optional parameters, default parameters must be put right after the required parameters in
the function signature.
 */
// Rest parameters
/*
One of the significant advantages of JavaScript flexibility when defining functions is the ability
to accept an unlimited non-declared array of parameters. TypeScript can achieve the same behavior
using the rest syntax. Essentially, we can define an additional parameter at the end of the
arguments list prefixed by an ellipsis (…) and typed as an array:
 */
function greetPeople(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ', ' + names.join(' and ') + '!';
}
console.log(greetPeople('Hello all of you!', 'Vera', 'Carlos', 'George', 'Ayrton'));
function hello(names, greeting) {
    var namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}
console.log(hello(['George', 'Vera', 'Carlos']));
console.log(hello('Carlos'));
/*
In the preceding example, we create three different function signatures, each of which features
different type annotations. We could even define different return types by annotating the wrapping
function with type any.
 */
// Arrow functions
/*
The first thing we notice is its minimalistic syntax, where, most of the time,
we see arrow functions as single-line, anonymous expressions:
 */
var double = function (x) { return x * 2; };
// If the function signature contains more than one argument, we need to wrap them all between parentheses:
var add = function (x, y) { return x + y; };
// Arrow functions can also contain statements by wrapping the whole implementation in curly braces:
var addAndDouble = function (x, y) {
    var sum = x + y;
    return sum * 2;
};
function delayedGreeting(name) {
    this.name = name;
    this.greet = function () {
        var _this = this;
        setTimeout(function () {
            return console.log('Hello ' + _this.name);
        }, 0);
    };
}
var greeting = new delayedGreeting('Ayrton Senna');
greeting.greet();
