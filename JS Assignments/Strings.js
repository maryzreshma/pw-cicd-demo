//Assignment on string in Javascript:
//1. Write the program to reverse the string value.
console.log("#################################### STRING REVERSAL #############################################")
function stringRev(str1){
    len = str1.length
    let str2=[]
    for(let i=len-1; i>=0 ; i--)
         str2 += str1[i]
   return str2
    
}
let rev = stringRev("test")
console.log(rev)

//2. Reverse the string without inbuilt methods
//3. Write the program to check if the number is palindrome or not. (121 ,  MadaM)
console.log("#################################### PALLINDROME CHECK  #############################################")
function checkPallindrome(pal){
if((typeof(pal))!="string"){
    pal = pal.toString().toLowerCase()
}
else{
    pal = pal.toLocaleLowerCase()
}
    let pal2 = stringRev(pal)
    console.log(pal2)
    if(pal == pal2)
    console.log(pal+ " is palindrome " )
    else
    console.log(pal+ " is not pallindrome")
}
checkPallindrome("Malayalam")

//4. Check if the vowel is present in the string (a e i o u)
console.log("#################################### VOWEL CHECK #############################################")
function isVowel(vowelcheck){
if((typeof(vowelcheck))!="string"){
    console.log(" Input is not string - exiting")
}
else{
    vowelcheck = vowelcheck.toLowerCase()
    if(vowelcheck.includes("a" || "e" || "i" || "o" || "u"))
        console.log("vowels present")
    else
        console.log("no vowels")

}}
isVowel("123a")

function isString(input){

}
console.log("#################################### DUPLICATE IN STRING CHECK #############################################")
//5. Find the duplicate value from the string. **
function findDuplicate(strVal){
    if((typeof(strVal))!="string"){
         console.log(" Input is not string - exiting")
    }
    else{
        strVal = strVal.toLowerCase()
        count = 1
        let dupl1= []
        let dupl2 = []
        for(let i=0; i<strVal.length; i++){
    
            if(!dupl1.includes(strVal[i])){
                dupl1 += strVal[i]
    
            }
            else{
               count++
                if(!dupl2.includes(strVal[i])){
               
                dupl2 += strVal[i]
     
                
            }
            }
        }
     
        console.log(dupl2+ ' is a duplicated value in ' +strVal+' and it ouccues ' +count+ ' times')
    } 
}
findDuplicate("appple")
console.log("#################################### DUPLICATE IN ARRAY CHECK #############################################")


//6. Find the duplicate value from an array *
function arrayduplicate(arr1){
    let arr2= []
    let dupl1= []
    for(let i=0; i<arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            arr2.push(arr1[i])
        }
        else if(!dupl1.includes(arr1[i])){
            dupl1.push(arr1[i])
        }
    }
  
      console.log(`Array2 : ${arr2} and Duplicted values ${dupl1}` )
}

let arr1 = ['Apple', 'Oraange', 'Grapes', 'Apple', 'Grapes', 'Apple']
arrayduplicate(arr1)


//7. Remove the duplicate value from string/array and print the output - done as 5
//8. Count the total number of duplicate value present in the string/array

//9. write the program to replace the character in the string

function replaceChar(word, toReplace, replacement){
     let newWord= word.replaceAll(toReplace,replacement)
     console.log(newWord)

    /*for(let i=0; i<word.length; i++){
        if(toReplace.toLowerCase() == word[i].toLowerCase()){
            newWord +=  replacement
        }
        else
            newWord += word[i]
    }*/
}

replaceChar("Pifpgp","P","F")

//10. Write the program to print each character (for loop)
//11. Count the number of character present in the string. 
function printEachchar(op){
    let count = 1
    op= op.trim(" ")
    for(let i=0; i<op.length; i++){
         console.log(op[i])
         if(op[i] == " ")
            count++


    }
       
    console.log(`Number of characters in ${op} is ${op.length-1}.\nNumber of words in ${op} is ${count}`)



}
printEachchar("Mango is sweet ")




//12. Remove the space from the string
function removeSpaces(spacedWord){
    let output = spacedWord.replaceAll(" ", "")
    console.log(output)
}
removeSpaces(" A ppl e")