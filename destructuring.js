// Object destructuring
const student = {
    name: 'Rafee', 
    age: 22,
    varsity: "IUBAT",
    cgpa: 3.85
};

const { name, age} = student;
// console.log(name, age);
// console.log(student);

// Array Destructuring
const arr = [22, 3.85];
const [age1, cgpa] = arr;
console.log(age1, cgpa);

// Destructure array from returning value of fanction
// const hello = () => ['hey', 'whats up']; (not works)
// const [hey, up] = hello;
// console.log(hey, up);

function hello(){
    return ['hey', 'what up'];
}
const [hey, up] = hello();
console.log(hey, up);