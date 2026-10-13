/*
Objects - store properties values in key and value pairs
In Js, objects and JSOn are the only oncelts that store value in key and value pair

syntax: 
keyword objectName = {
key1: value1, 
key2: value2
}

eg - */
let students ={
name: 'Testing',
age: 25,
grade: "A", 
schoolName: "XYZ", 
standard: 10
}

// let - keyword
// objName = students
// keys: name, age, grade.. 
//values:Testing, 25, A...


/* teh values can be accessed isng 2 ways:
1. using dot (.)
2. using brackets []
*/
console.log(students.name)
console.log(students['grade'])

/* Object can be created using the new keyword as well
new keyword - refers to obeject creation 
keyword objRef = new object()
objRef.key = value1
objRef.key = value2
objRef.key = value3

*/

let person = new Object()
    person.name = 'Robin'
    person.age = 35

/* Object value updation
objName.key = 'value'
*/

/* dlete teh object value 
delete objName.key
eg 
delete students.standard
*/


/* Function declaration in Object
1. function can be stored in an object it is called "method"
2. function will be stored in inside an object in key and value pair 
3. In order o access teh function, we must call the function
4. called using objectName.functionName()
5. ti access teh key of an object, use Object.keys()
Object.keys(objectname)




*/
let ObjName ={
    name: 'Roy', 
    role : 'Tutor', 
greet : function(){
console.log("Hello")
}
}

console.log(Object.keys(ObjName));