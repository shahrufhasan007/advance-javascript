const students = [
    { id: 21, name: "Sunny" }, { id: 22, name: "Sadia" }, { id: 23, name: "Faiza" }
]

const names = students.map(s => s.name);
const bigger = students.filter(s => s.id < 22);
// console.log(names);
console.log(bigger);