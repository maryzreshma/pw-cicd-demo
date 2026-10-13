//For Loop Assignment Questions:
//1.  Write the program to print numbers from 1 to 10 and 10 to 1
console.log("** Printing numbers from 1 to 10  ***")
for(let i=1; i<=10; i++){
    console.log(i)
}
console.log("** Printing numbers from 10 to 1 ***")
for(let j=10; j>=1; j--){
    console.log(j)
}

//2.  Write the program to print numbers from 5 to 50 with a gap of 3
console.log("####### Printing 5 to 50 with a gap of 3 ######")
for (let k=5; k<=50; k+=3){
    console.log(k)
}

//3. Print the multiplication table of 5
console.log("####### Printing multiplication table of 5 ######")
for (let table=1; table<=10; table++){
console.log("5 * " +table+ " = " + table*5);
}
//4. Print the sum of number from 1 to 5
console.log ("############ Sum of numbers foem 1 to 5 ########")
let sum = 0
for(b=0; b<=5; b++){
    sum += b
}
  console.log(sum)

//5. Find the factorial of 5
console.log("########### Printing Factorial of 5 ##########")
let fact = 1
for(let f=5; f>=1; f--){
    fact *= f 
}
console.log("5! = 5*4*3*2*1 =" +fact)
//6. Find all even and odd number between 1-30
console.log("#########  All even numbers from 1 to 30 ##### ")
for( let number = 1; number <=30; number ++){
    if(number % 2 == 0){
        console.log(number)
    }
}
console.log("#########  All odd numbers from 1 to 30 ##### ")
for( let number = 1; number <=30; number ++){
    if(number % 2 != 0){
        console.log(number)
    }
}
console.log( "########## star pattern ######################")
let pattern = " "
for(let str1=1; str1<=5; str1++){
    for (let str2=5; str2>=1; str2--){
        pattern += " * "
        console.log(pattern)
    }

}
let reverse = 5
while(reverse>=1){
    console.log(reverse)
    reverse --
}


