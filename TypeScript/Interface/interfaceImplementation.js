var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Person;
}());
var person = new Person('Debasish', 'Lipsa');
console.log(person.toJson());
