let s = 'Hello from Node:)';

console.log(s);

const fs = require('fs');

fs.writeFileSync('hello.txt', s);