


/* 1. Write the program to find odd and even number using while if(logic) inside the while*/
let count = 1
while(count<=20){
    if(count%2 == 0)
        console.log(count+ " is even")
    else
        console.log(count+ " is odd ")
    count++
}

/* 2. write the program to find the sum of first n natural number */

console.log("###### Sum of first n natural numbers ######")
let n = 1
let sum = 0
while(n<=5){
    sum += n
    n ++
}
 console.log(sum);

/* 3. Write the logic to find the ATM withdraw mechanism using while loop.*/
console.log("########### ATM ######")
let totalBalance = 10
let requestedAmount = 1
while(totalBalance >= requestedAmount){
    totalBalance = totalBalance - requestedAmount
    console.log("You have requested $" +requestedAmount+ " your remaining balance is now $" +totalBalance)
    if(totalBalance==0)
        console.log("Your balance is now $" +totalBalance+ " No more withdrawls")
}




/* Assignment on nested for loop.
1. Write the program to print the pattern in square format.
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * * 
    
*/
console.log("####### STAR PATTERN #####")
let pattern =" "
for(let i=0; i<=4;i++){
    for(let j=i; j>=i; j-- ){[]
        pattern = "* * * * *"
        console.log(pattern)  
    }
}

/* 2. For above examples print the number in place of start (1) - Also number should be  
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5   */
console.log("####### 12345 PATTERN #####")
let times= 1
while(times<=1){
for(let second=1; second<=5; second++)
    console.log(times, times+1, times+2, times+3, times+4)
    times++
}


