//install typescript::
/*
npm install -g typescript
js - executed by node 
in ts - code executed by tsx
npm install -g tsx


to execute teh file in ts: 
tsx filename

Variables in TS: ertime you  decclare variable in ts, the type of variable 
keywords varibaleName:type = varibaleValue

Variables in JS : keyword varibaleName = variableValue -> let a = 10

Data types in TS :
1. number -> let n :number = 10
2. string  -> let m: string = 'test'
3. boolena ->  let bool: boolean = false
4. any -> let value: any -> value van be 10, 'test' or boolean
5. unknown
6. void -> when function returns nothing 
function functionname(){
}

function functionname(): void
unknown 


*/
let myAge: number =21
console.log(myAge)

//ControlFlow :: conditional check - only diff is here in the declaration part 
let age1 : number = 21
if(age1 >= 18){
    console.log("Eligible to drive")
}
//Switch case ::
let weekDay: number = 4


switch (weekDay){
    case 1: console.log("Monday - Thursday")
    case 2: console.log("Weekend")
    default: console.log("Friday")
}

// looping concept : 
let fruits: string[] = ["Apple", "Orange", "Mango"]
for (let i=0; i<fruits.length; i++){
    console.log(`The fruit in the ${i+1} location of the array is ${fruits[i]}`)
}

let numbers: number = 5
for (let i=1; i<=numbers; i++){
    console.log(` ${i}`)
}

// Arrays in ts
let newArray: number[] = [10,20, 30]
let newstrArray: string[] = ['A','b', 'C']

let newArrays:Array<number> = [30,40,50]
let newstrArrays:Array<string> = ['A', 'B', 'C']

let newArrays1:any = [1, "striing", 0]