
const numbers = [2, 3, 4, 5, 6, 7];

const avg = (arr) => {
    let sum = 0;
    for(let number of arr){
        let square = number * number;
        sum += square;
    }
    return sum / arr.length;
}
console.log(avg(numbers));