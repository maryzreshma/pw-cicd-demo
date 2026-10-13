//Check even or odd
console.log("*** CHECKING EVEN OR ODD NUMBER *** ")
function evenOrOdd(number){
    if(number%2==0){
        console.log(number+ " is even ")
    }
    else
        console.log(number+ " is odd")

}
evenOrOdd(7)
console.log("######################################################################################################")

//Find the largest of two number 
console.log("*** PRINTING LARGER NUMBER ***")
function findLarger(number2, number3){
    if(number2> number3)
        console.log(number2+ "  is greater than " +number3)
    else if(number2< number3)
         console.log(number3+ " is greater than " +number2)

    else
        console.log("Both numbers are equal")

}
findLarger(6,6)
console.log("######################################################################################################")
//Calculate square
console.log("*** CALCULATE SQUARE ***")
function sqaure(numberTobeSqaured){
    console.log((numberTobeSqaured *= numberTobeSqaured)+' is the square of' +numberTobeSqaured)

}
sqaure(2)

//Check positive, negative, or zero
console.log("######################################################################################################")
console.log("*** PRINTING POSITIVE OR NEGATIVE *** ")
function positiveOrNegative(integer){
    if(integer>0)
        console.log(integer+ " is positive")
    else if (integer<0)
        console.log(integer+ " is negative")
    else 
        console.log(integer+ " is neither positive nor negative")
}
positiveOrNegative(0)
console.log("######################################################################################################")
//Find the largest of 3 numbers
function largest(num1, num2, num3){
    if(num1>=num2){
        if(num1>=num3)
            console.log(num1+ ' which is the Number 1 is the greatest')
        else 
            console.log(num2+ ' which is the Number 3 is the greatest')
    }
    else{
        if(num2>=num3)
            console.log(num2+ ' which is the Number 2 is the greatest')
        else
            console.log(num3+' which is the Number 3 is the greatest')
    }
}
largest(9,10,15)
//Calculate percentage (apply the percentage logic)
console.log("######################################################################################################")
let Y = 1
function percentCalculator(percentOf, X){
   let Y = percentOf/100 * X
   console.log(percentOf+ '% of ' +X+ ' is ' +Y)

}
percentCalculator(5,10)

//Calculate factorial
console.log("######################################################################################################")

function fact(fact1){
    numfact = fact1
    let init = 1
    while(fact1>=1){
        init *= fact1
        fact1--
    }
    console.log(`Factorial of ` +numfact+ ` is ` +init)

}
fact(5)
//Check if a number is prime
let count = 0
let iter =1 
function primeCheck(no){
    while(iter <= no ){
        if(no % iter == 0){
            count++
            iter++
        } 
        else
            break
    }
    if(count>2)
        console.log("number is not prime")
    else
        console.log("number is prime")
}

primeCheck(6)

//Check palindrome


//Using function find the sum of first 10 number
function sumOf10(Sn){
    let total = 0
    total += (Sn * (Sn+1))/2
console.log(total)
}
sumOf10(10)