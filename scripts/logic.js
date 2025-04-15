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

// class BankAccount {
//   // o(1)
//   constructor(ownerName , initialBalance){
//     this.ownerName = ownerName;
//     this.balance = initialBalance;
//     this.history = [];
//   }
//   // o(1)
//   deposit(amount){
//     this.balance += amount;
//     this.history.push(`Deposited $${amount}`);
//   }
//   // 0(1)
//   withdraw(amount){
//     if (amount > this.balance){
//       console.log("Insufficient funds");
//     } else{
//       this.balance -= amount;
//       this.history.push(`Withdrew $ ${amount}`);
//     }
//   }
//   // o(1)
//   transferTo(anotherAccount, amount){
//     if (amount > this.balance){
//       console.log("Insufficient funds for transfer")
//     } else{
//       this.balance -= amount;
//       anotherAccount.deposit(amount);
//       this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);

//     }
//   }
//   // o(1)
//   getSummary() {
//     console.log(`${this.ownerName}'s balance is $${this.balance}`);

//   }
//   // o(1)
//   printHistory() {
//     if (this.history.length === 0){
//       console.log("No transaction yet.");
//     } else{
//       console.log(`${this.ownerName}'s transaction history:`);
//       this.history.forEach(transaction => { // o(n)
//         console.log(transaction);
//       });
//     }
//   }
// }
// // 0(1)
// const acc1 = new BankAccount("John", 500);
// const acc2 = new BankAccount("Sara", 300); 
// acc1.transferTo(acc2, 200);
 
// acc1.getSummary(); // John's balance is $300 
// acc2.getSummary(); // Sara's balance is $500 

// acc1.printHistory();
