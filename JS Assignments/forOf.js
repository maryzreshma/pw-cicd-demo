//1. Write program to ifnd the even and odd using for of loop
let numArray = [20, 13, 15, 42, 2]

function isEvenOrOdd(evenOdd){
    for(let nums of evenOdd){
        if(nums % 2 == 0)
            console.log(`${nums} is even`)
        else
            console.log(`${nums} is odd`)

    }

}

isEvenOrOdd(numArray)
//2. Sum of array using for loop - 92
 sum = 0
function sumofArray(numArray){
    for(nums of numArray)
        sum += nums
    return sum

}
let ans = sumofArray(numArray)
console.log(`sum of the array is ${ans}`)


//3. Print square of an array using for loop
let newNumArray = []
function squareOfArray(numArray){
    for(nums of numArray){
        let ognum = nums
        nums *= nums
        console.log(`Square of ${ognum} is ${nums} `)
    }
  
        
}
squareOfArray(numArray)

//4. Print all charavters of string using for of loop
str1= "Pancake Waffle"
function printAllChars(str1){
    for (strs of str1)
        console.log(strs)

}
printAllChars(str1)
//5. Apply for in loop on Object an print key and value both
//6. Try for in loop on arrys and string