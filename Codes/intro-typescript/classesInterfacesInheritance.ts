// Anatomy of a class
class Car {
    private distanceRun: number = 0
    private color: string

    constructor(private isHybrid: boolean, color: string = 'red') {
        this.color = color
    }

    getGasConsumption(): string {
        return this.isHybrid ? 'Very low' : 'Too high!'
    }

    drive(distance: number): void {
        this.distanceRun += distance
    }

    /*
    Static members are not accessible from the object instances, which means they cannot access
    other class members using the this keyword. These members are usually included in the class
    definition as helper or factory methods to provide a generic functionality unrelated to any
    specific object instance.
     */
    static honk(): string {
        return 'HOOONK!'
    }

    /*
    Property accessors: A property accessor is defined by prefixing a typed method with the
    name of the property we want to expose using the set (to make it writable) and get (to
    make it readable) keywords.
     */
    get distance(): number {
        return this.distanceRun
    }
}

// Constructor parameters with accessors
class Car2 {
    constructor(public make: string, public model: string) {}
    // TypeScript will create the respective public fields and make the assignment automatically for us.
}

// Interfaces
interface Vehicle {
    make: string
}

class Car3 implements Vehicle {
    make: string;
}

// An interface may contain optional members as well.
interface Exception {
    message: string
    id?: number // Optional member
}

// define the contract for our future class with a method
interface ErrorHandle {
    exceptions: Exception[]
    logException(message: string, id?: number): void
}

/*
We can also define interfaces for standalone object types, which is quite useful when we need to
define templated constructors or method signatures
*/
interface ExceptionHandlerSettings {
    logAllExceptions: boolean
}

// Let’s bring them all together by creating a custom error handler class
class CustomErrorHandler implements ErrorHandle {
    exceptions: Exception[] = [];
    logAllExceptions: boolean

    constructor(settings: ExceptionHandlerSettings) {
        this.logAllExceptions = settings.logAllExceptions
    }

    logException(message: string, id?: number): void {
        this.exceptions.push({ message, id })
    }
}













