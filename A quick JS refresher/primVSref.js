var name = 'Artem';
console.log(name);

var secondName = name;
console.log(secondName);

name = 'Art';
console.log(secondName);

var person = {
    age: 19,
    name: 'Artem',
    hobbies: ['Programming', 'Sports', 'Music']
};
console.log(person);


var thirdPerson = {
    age: 19,
    name: 'Artem',
    hobbies: ['Programming', 'Sports', 'Music']
};

//var secondPerson = person;
var secondPerson = Object.assign({}, person);
console.log(secondPerson);

person.name = 'Chris';

var myHobbies = person.hobbies.slice();


person.hobbies.push('Reading');
console.log(secondPerson);

console.log(thirdPerson);


console.log(myHobbies);