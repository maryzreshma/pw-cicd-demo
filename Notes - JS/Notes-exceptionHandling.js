/*
There are few exception handling keywords
1. try  - it will have error prone code
2. catch - it will catch the weeror generated in try block
3. throw - used to generate teh custom error message
4. finally - it will execute everytime irrespective of the failure

Playwright used try and catch - throw and fincally not used

*/
try{
console.log(a)
}
catch(error){ //will execute only when an error is present in try block
    console.log('found an eror: ' +error.message) // or we can also say console.log(error.message)
    
}

//finally will get executed irrespective of anything 
/*
syntax::
try {
//try block
}

catch(){}

finally{
//fianlly block of code
}

*/
try{
console.log(x)
}
catch(error){ //will execute only when an error is present in try block
    console.log('found an eror: ' +error.message) // or we can also say console.log(error.message)
    
}
finally{
    console.log('finally block is executed')
}

let x= 10
try{
console.log(10)
}
catch(error){ //will execute only when an error is present in try block
    console.log('found an eror: ' +error.message) // or we can also say console.log(error.message)
    
}
finally{
    console.log('finally block is executed even when there is no error')
}


console.log('############################')
