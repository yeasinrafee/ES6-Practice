
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15}, 
    {name: 'Suchorita', age: 22}
];
let sum = 0;
for(let age of people){
    sum += age.age;
}
console.log(sum);

const ageSum = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(ageSum);