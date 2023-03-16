// ========= Annotating types in functions =========
function sayHello(name: string): string {
    return 'Hello, ' + name;
}
console.log(sayHello('George'))

/*
Functions in TypeScript can also be represented as expressions of anonymous functions, where
we bind the function declaration to a variable:
 */
const cheers = function(name: string): string {
    return 'Hello, ' + name
}
/*
there is a downside to that approach. Although typing function expressions this way is allowed,
thanks to type inference, the compiler is missing the type definition of the declared variable.
We might assume that the inferred type of a variable that points to a function typed as
a string is a string. Well, it’s not. A variable that points to an anonymous function ought to be
annotated with a function type
 */

// ========= Function parameters in TypeScript =========
// Optional Parameters
/*
Parameters are a core part of the type checking applied by the TypeScript compiler. Parameters
are defined as optional by adding the character ? after the parameter name:
 */
function greetMe(name: string, greeting?: string): string {
    if (!greeting) {
        greeting = 'Welcome my friend'
    }
    return greeting + ', ' + name
}
console.log(greetMe('George'))
console.log(greetMe('Vera', 'It\'s a pleasure to meet you'))

/*
Both versions are valid. Be aware that optional parameters should be placed last in a function
signature. Consider the following function:
 */
// function add(optional?: number, mandatory: string) {}
// Remember, optional arguments are great, but place them last.

// ========= Default parameters =========
function greetMe2(name: string, greeting: string = 'Hello'): string {
    return `${greeting} ${name}`
}
console.log(greetMe2('George'))
console.log(greetMe2('George', 'Glad to meet you Mrs.'))
/*
Like optional parameters, default parameters must be put right after the required parameters in
the function signature.
 */

// ========= Rest parameters =========
/*
One of the significant advantages of JavaScript flexibility when defining functions is the ability
to accept an unlimited non-declared array of parameters. TypeScript can achieve the same behavior
using the rest syntax. Essentially, we can define an additional parameter at the end of the
arguments list prefixed by an ellipsis (…) and typed as an array:
 */
function greetPeople(greeting: string, ...names: string[]): string {
    return greeting + ', ' + names.join(' and ') + '!'
}
console.log(greetPeople('Hello all of you!', 'Vera', 'Carlos', 'George', 'Ayrton'))

// ========= Function overloading =========
/*
Method and function overloading are typical in other languages, such as C#. However, implementing
this functionality in TypeScript clashes with the fact that JavaScript, which TypeScript
is meant to compile to, does not implement any elegant way to integrate it out of the box. So, the
only workaround possible requires writing function declarations for each of the overloads and
then writing a general-purpose function that wraps the actual implementation, whose list of
typed arguments and return types are compatible with all the others:
 */
function hello(names: string): string
function hello(names: string[]): string
function hello(names: any, greeting?: string): string {
    let namesArray: string[]

    if (Array.isArray(names)) {
        namesArray = names
    } else {
        namesArray = [names]
    }

    if (!greeting) {
        greeting = 'Hello'
    }

    return greeting + ', ' + namesArray.join(' and ') + '!'
}
console.log(hello(['George', 'Vera', 'Carlos']))
console.log(hello('Carlos'))
/*
In the preceding example, we create three different function signatures, each of which features
different type annotations. We could even define different return types by annotating the wrapping
function with type any.
 */

// ========= Arrow functions =========
/*
The first thing we notice is its minimalistic syntax, where, most of the time,
we see arrow functions as single-line, anonymous expressions:
 */
const double = x => x * 2

// If the function signature contains more than one argument, we need to wrap them all between parentheses:
const add = (x, y) => x + y

// Arrow functions can also contain statements by wrapping the whole implementation in curly braces:
const addAndDouble = (x, y) => {
    const sum = x + y
    return sum * 2
}

function delayedGreeting(name): void {
    this.name = name
    this.greet = function() {
        setTimeout(() =>
            console.log('Hello ' + this.name)
        , 0)
    }
}
const greeting = new delayedGreeting('Ayrton Senna')
greeting.greet()



