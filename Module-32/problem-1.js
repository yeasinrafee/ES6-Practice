
const odds =  [ 1, 3, 5, 7, 9 ];

const evenForLoop = [];
for(let odd of odds){
    evenForLoop.push(odd + 1);
}
console.log(evenForLoop);

const evenMap = odds.map( odd => odd + 1);
console.log(evenMap);