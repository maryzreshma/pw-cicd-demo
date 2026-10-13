//1. Create an object acess the properties using diff methods
let car = {
    make: "2022",
    model: "XC40 ", 
    carName: " Volvo ", 
    color: "Fusion Red ",

    start:function (){
        
        console.log(` Hi! ${car.carName} ${car.model} has started`)
    }

}

car.start()

console.log("##############################################################################################################")
//2. create an object using new keywords
let student = new Object()
student.name = "Sam"
student.age= 20
student.department = "CS"

console.log(`student name is ${student.name}, is aged ${student.age} and is from ${student.department} department`)

console.log("##############################################################################################################")
//3. Update an object value
student.name = "Riya"
console.log(`sudent name updated to ${student.name}`)

console.log("##############################################################################################################")
//4. Delete teh object value
delete student.age

for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}
console.log(`Student age value deleted`)
//5. Create nested object and function */

let cities = {
    city1 : "New York",
    city2: "Chicago",
    city3: "Sydney",
    city4: "Melborne",

   countries: {
        country1: "USA", 
        country2: "Australia"

    },

countryOfcity :function(){
    console.log(`${cities.city1} and ${cities.city2} are in ${cities.countries.country1} and
    ${cities.city3}, ${cities.city4} are in ${cities.countries.country2}`)

}
}

cities.countryOfcity()