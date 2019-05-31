var name = 'Max';
var age = 29;
console.log(name);

var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is '
        + userName +
        ', age is '
        + userAge +
        ', user has hobbies: '
        + userHasHobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));