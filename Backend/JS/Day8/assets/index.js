let name = "Harsha"
let unitconsumed = 400

if (unitconsumed <= 300){
    console.log(`${name} your Power bill for this month ${unitconsumed * 2}`);
}else if (unitconsumed <= 400){
    console.log(`${name} your Power bill for this month ${unitconsumed * 3}`);
}else if (unitconsumed <= 500){
    console.log(`${name} your Power bill for this month ${unitconsumed * 4}`);
}else{
    console.log(`${name} your no Power bill for this month`);
}

let balance = 15000 
let withdrawamount = 1000 


if(withdrawamount < 500 ){
    console.log("The max amount have to withdraw amount is 500 above");
    
}
else if (withdrawamount <= balance && balance > withdrawamount){
    console.log(`${balance-withdrawamount} this is the current balance `);
    
}else{
    console.log("insaffent balance");
    
}

let correctPin  = 1234 

for (let i = 1 ; i <= 3 ; i++){
    if(correctPin === correctPin ){
        console.log("successfully logined ");
        
    }else{
        console.log("You have have been crossed your limit so your amount have been blocked");
        
    }
}