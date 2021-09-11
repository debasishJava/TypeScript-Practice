interface Json{
    toJson():string;
}
class Person implements Json{
    constructor(private firstName:string, private lastName:string){}

    toJson():string{
        return JSON.stringify(this);
    }
}

let person= new Person('Debasish','Lipsa');
console.log(person.toJson());
