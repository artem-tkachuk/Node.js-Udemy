const name  = 'Max';
let age = 29;               //variable
const hasHobbies = true;

age = 30;
//name = 'Maximilian';      //does not work. Error
//console.log(name);


//define some functions
const summarizeUser = (username, userAge, userHasHobby) => {
    //'this' is different in arrow functions
    return (
        'Name is ' +
        username +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};
const add = (a, b) => a + b;
const addOne = a => a + 1;      //parentheses can me omitted here
const addRandom = () => 1 + 2;
const subtract = (a, b) => a - b;


console.log('Subtraction result: ' + subtract(2, 3));

console.log(addRandom());



console.log(summarizeUser(name, age, hasHobbies));

//alternative ways of defining functions
/*
const add = (a, b) => {
    return a + b;
};

const summarizeUser = function(username, userAge, userHasHobby) {
    return (
        'Name is ' +
        username +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

function summarizeUser(username, userAge, userHasHobby) {
    return (
        'Name is ' +
        username +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
*/