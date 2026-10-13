// template or structure for object - defines teh structure of an object 
/* 
1. Using interface, we needto define the properties to be used and their type

without interface: 

keyword objName = {
key: value 1
key value 2
}

with interface::

interface employee {
id: number
age: number
name: string }

*/

interface Car{
    brand : string
    model : string
    year: number
    type: string
}

const cars: Car = {
    brand : 'Volvo',
    model : 'XC40',
    year: 2020,
    type: 'SUV'

}