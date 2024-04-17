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

console.log(first, last, occupation);



//Reflect Set //
const person2 = {
    first: 'Scott',
    last: 'McCrindle',
    occupation: 'Javascript Instructor',

}
Reflect.set(person2, first, 'Scott', last, 'McCrindle', occupation, 'Javascript Instructor');

console.log(person2.first, person2.last, person2.occupation);

//Reflect Apply//
const person3 = {
    first: 'Brad',
    last: 'Buttineau',
    age: 36,
    occupation: 'Frontend developer',

    selfBio() {
        console.log(`Hello ${this.name}`);
    }
};