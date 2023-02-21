// Problem: 1
const odds =  [ 1, 3, 5, 7, 9 ];

const evenForLoop = [];
for(let odd of odds){
    evenForLoop.push(odd + 1);
}
// console.log(evenForLoop);

const evenMap = odds.map( odd => odd + 1);
// console.log(evenMap);

//Problem: 2
const arr = [33, 50, 79, 78, 90, 101, 30 ];

const divisibleBy10 = arr.filter( num => num % 10 === 0);
console.log(divisibleBy10);