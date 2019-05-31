const name = 'Artem';
const hasHobbies = true;

let age = 18;
console.log(age);
age = 19;

//name = 'Art';     Doesn't work because const value cannot be changed

const summarizeUser = (userName, userAge, userHasHobby) => {
    //'this' behaves differently comparing with the usual function (if arrow function is used)
    return (
        'Name is '
        + userName +
        ', age is '
        + userAge +
        ', user has hobbies: '
        + userHasHobby
    );
};

console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => Math.random() * 100;

console.log(add(1,2));
console.log(addOne(1));
console.log(addRandom());


const person = {
    name: 'Artem',
    age: 19,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

person.greet();


const hobbies = ['Sports', 'Music', 555, true]; //this is a const reference ==> we can change the data it is POINTING to, but not the pointer itself

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

hobbies.push('Programming');
console.log(hobbies);