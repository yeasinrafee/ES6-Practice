
const arr = [ 1, 9, 17, 22 ];
let sum = 0;

for(let num of arr){
    sum += num;
}
console.log(sum);

const sumReduce = arr.reduce((curr, prev) => curr + prev, 0);
console.log(sumReduce);