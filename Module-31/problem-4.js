
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

const maxNumber = (arr1, arr2) =>{
    const arr = [...arr1, ...arr2];
    return Math.max(...arr);
}
console.log(maxNumber(arr1, arr2));