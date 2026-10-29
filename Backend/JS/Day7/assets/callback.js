function add(a,b,result){
    let callback = a+b
    result(callback)
}
add(10,20,(ans)=>{
    console.log(`Sum : ${ans}`);
    
})