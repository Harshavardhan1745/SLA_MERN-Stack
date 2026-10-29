let salaries = [15000, 20000, 25000, 30000, 35000];

let add = salaries.map((e,i)=>{
    return e+2000
})
console.log("old salary",salaries);

console.log("updated salary",add);

let marks = [35, 78, 42, 90, 25, 67, 55];

let grade = marks.map((e,i)=>{
    return e > 50
    
})
console.log(grade);

let products = [

    { id: 101, name: "Laptop", price: 55000 },

    { id: 102, name: "Mouse", price: 800 },

    { id: 103, name: "Keyboard", price: 1500 },

    { id: 104, name: "Monitor", price: 12000 }

];

let pro = products.find((e,i)=>{
    return e.id === 103
})
console.log(pro);

let cart = [

    { name: "Shirt", price: 1200 },

    { name: "Shoes", price: 2500 },

    { name: "Watch", price: 3000 },

    { name: "Bag", price: 1500 }

];

let adds = cart.reduce((e,i)=>{
    return  e+i.price
},0)
console.log("total :",adds);

