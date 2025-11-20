function divide(a,b){
    try{
        if(b === 0){
            throw new Error("Division by zero is not allowed.");
    }
    return a/b;
    }catch(e){
        return e.message;
    }

}


console.log(divide(10,2)); 
console.log(divide(10,0));