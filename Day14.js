//prototyping

function Person(fName, lname){
    this.firstname = fName
    this.lastname =lname;

}
const person1 = new Person('Bruce','wayne')
const person2 = new Person('Sai','Dhanush')

person1.getFullname = function (){
    return this.firstname + ' ' + this.lastname
}

console.log(person1.getFullname())

//with prototyping

Person.prototype.getFullname = function (){
    return this.firstname + ' ' + this.lastname
} 

console.log(person1.getFullname())
console.log(person2.getFullname())

//inheritance 
function Person(fName, lname){
    this.firstname = fName
    this.lastname =lname;

}

Person.prototype.getFullname = function (){
    return this.firstname + ' ' + this.lastname
} 

function Superhero(fName,lname){
    Person.call(this , fName, lname )
     this.isSuperHero = true
}
Superhero.prototype.fightCrime = function(){
    console.log("fighting crime ")
}
Superhero.prototype = Object.create(Person.prototype)
const batman = new Superhero('bruce','wayne')
console.log(batman.getFullname())