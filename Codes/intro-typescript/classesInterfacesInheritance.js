// Anatomy of a class
var Car = /** @class */ (function () {
    function Car(isHybrid, color) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distanceRun = 0;
        this.color = color;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'Very low' : 'Too high!';
    };
    Car.prototype.drive = function (distance) {
        this.distanceRun += distance;
    };
    /*
    Static members are not accessible from the object instances, which means they cannot access
    other class members using the this keyword. These members are usually included in the class
    definition as helper or factory methods to provide a generic functionality unrelated to any
    specific object instance.
     */
    Car.honk = function () {
        return 'HOOONK!';
    };
    Object.defineProperty(Car.prototype, "distance", {
        /*
        Property accessors: A property accessor is defined by prefixing a typed method with the
        name of the property we want to expose using the set (to make it writable) and get (to
        make it readable) keywords.
         */
        get: function () {
            return this.distanceRun;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
// Constructor parameters with accessors
var Car2 = /** @class */ (function () {
    function Car2(make, model) {
        this.make = make;
        this.model = model;
    }
    return Car2;
}());
// Interfaces
