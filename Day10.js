//destructing with rest operator
const source= [1,2,3,4,5,6,7,8,9,10];
function removefirsttwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removefirsttwo(source);
console.log(arr);
console.log(source);


//desctucting operator as a function parameter to the object 
const stats = {
max : 56.78,
standard_deviation : 4.34,
median : 6.5,
mode :23.87,
min : -0.75,
average : 35.76
};
 const half=(function (){
return function half ({max, min }){
    return (max + min) /2.0;
};

 })();
 console.log(stats);
 console.log(half(stats)); 

 //create strings using template literals
const person={
    name : " sai dhanush",
    age : "21"
}


 const greeting = `hello, this is ${person.name}!
  i am ${person.age} years old`;

  console.log(greeting);

//consise object literal
const createPerson =(name, age, gender) =>({name, age, gender})
console.log(createPerson("zodiac",22,"male"));

//consise declarative functions 
const bicycle ={
    gear:2,
    setGear(newGear){
        "use strict";
        this.gear=newGear;

    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//class keyword  example 1
class SpaceShuttle {
    constructor(targerPlanet){
        this.targerPlanet = targerPlanet;
}
}
var zeus =new SpaceShuttle("jupiter");
console.log(zeus.targerPlanet);



//example 2
class marks {
    constructor(subject){
        this.subject = subject;
      
 }}

var maths = new marks ("pass");
console.log(maths.subject);

//another example to a vegtable class using a function 
function makeClass(){
    class vegetable{
        constructor(name){
            this.name = name ;
 }
}
 return vegetable;
}
const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);






