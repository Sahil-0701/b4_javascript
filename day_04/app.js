let fullName = 'Alex lee';
fullName = 'Donald Lee';

const surName = 'Lee';

var firstName = 'Alex';

let fisrtNum = 101;
let secondNum = 102;
let sum = fisrtNum + secondNum;
//let num1 = prompt('enter first number; ');
//let num2 = prompt('enter second number; ');
//alert(`Sum of ${num1} and ${num2} is: ${parseInt(num1) + parseInt(num2)}`);
const famousQuote = '"You only live once!"';

const bio = `Hi my name is Alex lee \n 
I am currently studying full-stack developnemt at skillup labs.`;
let nameLength = fullName.length;
console.log(fullName.charAt(fullName.length - 1));

console.log(firstName.concat(' ', surName));

console.log(fullName.indexOf(' '));
const fullNameWithMiddleName = 'Alex li chen';
let draft = fullNameWithMiddleName.indexOf(' ');
let draft1 = fullNameWithMiddleName.length;
let draft3 = fullNameWithMiddleName.lastIndexOf(' ');
console.log(fullNameWithMiddleName.substring(0, draft));
console.log(fullNameWithMiddleName.substring(draft, draft3));
console.log(fullNameWithMiddleName.substring(draft3, draft1));
