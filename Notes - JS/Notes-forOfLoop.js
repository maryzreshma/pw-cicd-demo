// For of loop, for in loop:
/*
For of loop :
1. Iterate through iterables/values 
2. Iterables are arryas, string, maps and set 
3. will not have any condition in it
4. syntax::
    for(varibales of iterables){
    //code of loop
    }
5. In Playwright it is used for testdata, exceldata, test parameterization etc

*/
/*const numbers = [10, 20, 30, 60, 90, 120]
let sum = 0 
    for(let number of numbers){
        sum += number  
    }
console.log(sum)*/

//for of loop on string
let text = 'JAvascript'
//let count = 0
let vowel = ['a', 'e', 'i', 'o', 'u']
for(let chars of text){
    if(vowel.includes(chars.toLowerCase())){
        console.log(chars)
    }
   
}

//For In loop is used to iterate through only object 
/*
1. It is used to iterate through properties  (keys) of an object 
2. syntax::

keywrds ObjName = {
key: value1
key : value2
    }



for(let keys in objName){
//body of loop
}
*/

let students = {
name: 'ABC', 
age : 20, 
city : 'XYZ'
}

for(let keys in students){
    console.log(keys)
    console.log(keys+ ":" +students[keys] )
}
/*
1. Write the program to find the even and odd number using for of loop 

2. Sum of an array using for loop 

3. Print the square of an array using for of loop

4. Print all the character of an string using for of loop 

5. Apply for in loop on object and print the key and value both 

6.*** Try for in loop on array/string
*/