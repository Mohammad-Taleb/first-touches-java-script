// function generateReports(students){
//   // o(n)
//   return students.map(student => {
//     // o(n)
//     const total = student.scores.reduce((sum,score) => sum + score,0);
//     // on(1)
//     const average = Math.round(total / student.scores.length);

//     let grade;
//     // o(1)
//     if (average >= 90) grade = 'A';
//     else if (average >= 80) grade = 'B';
//     else if (average >= 70) grade = 'C';
//     else if (average >= 60) grade = 'D';
//     else grade = 'F';
//     // 0(1)
//     return {
//       name: student.name,
//       average,
//       grade
//     };
//   });
// }
// // o(1)
// const students = [
//   {name: "Alice", scores: [90,85,92]},
//   {name: "Bob", scores: [70,68,72]},
//   {name: "Charlie", scores: [100,100,100]}

// ];
// // 0(1)
// console.log(generateReports(students));

//************BANK ACCOUNT************** */