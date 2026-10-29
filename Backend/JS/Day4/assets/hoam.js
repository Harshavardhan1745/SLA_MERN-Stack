// function  createemp(){
//     let salary =20000
//     const updatedsalary = (amount) =>{
//         salary = salary + amount    
        
//     }

//     return updatedsalary
// }

// const updatedsalary = createemp ()  

// console.log(updatedsalary(5000));


// function add(a,b ,result){
//    result(a+b) 
// }
// function cal(ans){
//     console.log(`final answer : ${ans}` );
    
// }
// add(10,20,cal)

// function greet(name,callback){
      
//   callback(name)
// }
// function addname(name){
//     console.log(`Hello ${name}`);
// }
// greet("Harsha",addname)

// for (let i = 1; i <= 3; i++) {

//     for (let j = 1; j <= 4; j++) {
//         console.log("*");
//     }
// }

// function multi(a,b,result){
//     result (a*b)
// }
// function mul(ans){
//     console.log(`answer is ${ans}`);
    
// }
// multi(2,2,mul)

// function nextlevel(num , eo){
//      eo(num)
// }
// function evo(sum){
//     if(sum%2===0){
//         console.log(`${sum} is odd`);
//     }else{
//         console.log(`${sum} is odd`);
        
//     }
    
// }
// nextlevel(7,evo)

// function array(arr, callback){
//     for(let i=0; i<= arr.length ; i++){
//         callback(arr[i]);
        
//     }
// }
// function arrayprocess(loop){
//     if(loop%2===0){
//          console.log(`even number ${loop}`);
         
//     }
// }
// array([1,2,3,4,5],arrayprocess)

function calttl(num ,callback){
    let summ = 0
    for (let i=0 ; i<=num.length; i++){
        summ = summ + num[i]
    }
    callback(summ)
}
function total(sum){
    console.log(`Total is ${sum}`);
    
}
calttl([50,50],total)