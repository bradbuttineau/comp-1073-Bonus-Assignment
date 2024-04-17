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
    occupation: 'Student',

    introSelf() {
        console.log(`Hello ${this.first}, ${this.last}, ${this.age}, ${this.occupation}`);
    }
};
// Reflect Construct//
function Person4(name, occupation, quote) {
    this.name = name;
    this.occupation = occupation;
    this.quote = quote;
}

const personName = Reflect.construct(Person4, ['Buzz Lightyear', 'Space Ranger', ' I protect the galaxy from the threat of invasion. I come in peace']);

console.log(personName.name, personName.occupation, personName.quote);