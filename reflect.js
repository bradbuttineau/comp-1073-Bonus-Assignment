//Reflect Get //
const person1 = {
    first: 'Brad',
    last: 'Buttineau',
    age: 36,
    occupation: 'Frontend developer',
};
const first = Reflect.get(person1, 'first');
const last = Reflect.get(person1, 'last');
const occupation = Reflect.get(person1, 'occupation');

console.log(Reflect.get(person1, 'name', 'last', age, 'occupation'));

//Reflect Set //
const person2 = {};
Reflect.set(person2, 'name', 'Scott', 'last', 'McCrindle', 'occupation', 'Javascript Instructor');

console.log(person2.name, person2.last, person2.occupation);

//Reflect DefineProperty()//
const object1 = {};

if (Reflect.defineProperty(object1, 'property1', { value: 777 })) {
    console.log('property1 created!');
    // Expected output: "property1 created!"
} else {
    console.log('problem creating property1');
}

console.log(object1.property1);
// Expected output: 777


// Reflect DeleteProperty()//
const object2 = {
    property1: 42,
};

Reflect.deleteProperty(object1, 'two');

console.log(object1.property1);
// Expected output: undefined//

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Reflect.deleteProperty(array2, '7');

console.log(array2);
// Expected output: Array [1, 2, 3, 4, 5, 6, 8, 9, 10]//






