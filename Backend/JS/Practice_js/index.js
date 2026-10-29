
// let row; 
// let n = 16; 
// for (i = 0 ; i < n ; i++){
//   row = " " ;
//   for (j = 0 ; j < n ; j++){
//     if(i==0 || i==n-1 || j==0 || j==n-1 || j==Math.floor(n/2) || i==Math.floor(n/2) || i==j || i+j==n-1 || i+j==Math.floor(n/2)|| i-j==Math.floor(n/2) || i+j == (n-1)+Math.floor(n/2) || j-i ==Math.floor(n/2)) 
//     {
//       row = row + "*"
//     } else {
//       row = row + " " 
//     }
//   }
//   console.log(row);
// }


// let row

// for(let i=1; i<=5;i++){
//     row = " "
//     for(let j=1 ;j<=5;j++){
//     row = row + "*"
//     }
//     console.log(row);
// }

// function cal(product , qtn){
//     console.log(product*qtn);
    
// }
// cal(200,5)


// function check(age){
//     if(age >= 18){
//         console.log("Eligible");
        
//     }else{
//         console.log("not eligible");
        
//     }
// }
// check(12)


// function counts(){
//     let count = 0 
//     function innerfun (){
//         count ++
//         console.log(count);
        
//     }
//         return innerfun
// }
// out = counts()
//  out()
//  out()

// function account(){
   

// }


// let arr = [10,15,25,20]
// let lar = arr[0]
// let sec = arr[0]

// for(let i = 0 ; i<arr.length ; i++ ){
//     if(arr[i]< lar){
//         sec = lar
//         lar = arr[i] 
// }

//     if(arr[i]>sec && arr[i]<lar){
//         sec = arr[i]
//     }
// }

// console.log(lar);
// console.log(sec);/



// let str = "i love javascript";
// let word = "";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//         word += str[i];
//     } else {
//         result = word + " " + result;
//         word = "";
//     }
// }

// result = word + " " + result;

// console.log(result.trim());

// let num = [1,2,3,5,6,7]

// for (let a = 0 ; a < num.length ; a++ ){
//     if(num[a+1]-num[a] !==1){
//         console.log(num[a]+1);
//         break
//     }
// }

// let transactions = [
//     { type: "credit", amount: 2000, timestamp: "10:00" },
//     { type: "debit", amount: 1000, timestamp: "10:05" },
//     { type: "debit", amount: 7000, timestamp: "10:10" },
//     { type: "credit", amount: 3000, timestamp: "10:15" },
//     { type: "debit", amount: 2000, timestamp: "10:20" }
// ];

// let balance = 5000;
// let rejected = [];
// let result = [];

// for (let i = 0; i < transactions.length; i++) {
//     let transaction = transactions[i];

//     if (transaction.type === "credit") {
//         balance = balance + transaction.amount;

//         result.push({
//             ...transaction,
//             balance: balance,
//             status: "Accepted"
//         });

//     } else if (transaction.type === "debit") {

//         if (transaction.amount <= balance) {
//             balance = balance - transaction.amount;

//             result.push({
//                 ...transaction,
//                 balance: balance,
//                 status: "Accepted"
//             });

//         } else {
//             rejected.push(transaction);
//         }
//     }
// }

// console.log("Transaction History:", result);
// console.log("Final Balance:", balance);
// console.log("Rejected Transactions:", rejected);

// function data() {
// let num = 10 
// function getdata () {
//     setInterval(()=>{
// console.log(num);

//     },2000)
// }
// getdata()
// }
// data()


// const data = (a,b)=>{

//  const adds = () =>{
//    const datas = a+b
   
//    setInterval(()=>{
//     console.log(datas);
//    },2000)
   
//  }
//  adds()

// }
// data(10,20)




