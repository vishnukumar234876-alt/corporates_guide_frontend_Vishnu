const students = [
  { name: 'Anika', grade: 85, subject: 'Math' },
  { name: 'Bijoy', grade: 62, subject: 'Science' },
  { name: 'Chanda', grade: 91, subject: 'Math' },
  { name: 'Dipak', grade: 74, subject: 'English' },
  { name: 'Esha', grade: 55, subject: 'Science' },
  { name: 'Farhan', grade: 88, subject: 'Math' },
];

const names = students.map(s => s.name);


const passed = students.filter(s => s.grade >= 70);


const avgGrade =
  students.reduce((sum, s) => sum + s.grade, 0) /
  students.length;


const mathTopperNames = students
  .filter(s => s.subject === "Math" && s.grade > 80)
  .map(s => s.name)
  .sort();

console.log(names);
console.log(passed);
console.log(avgGrade);
console.log(mathTopperNames);