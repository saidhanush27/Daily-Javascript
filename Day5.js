console.log("Day 5 of Javascript!")

//build objects is JS
var Dog = {
    "name" :"camper",
    "legs" : "4",
    "tails" : "1",
    "friends": ["everyone!"]

}
console.log(Dog)


//access properties with dot

var prop={
    "hat": "round",
    "shirt": "jersey",
    "pant": "jeans"
};

var hatValue = prop.hat;
var shirtValue = prop.shirt;
console.log(hatValue);

//access properties with bracket 
var prop1={
    "hat": "round",
    "shirt": "jersey",
    "pant": "jeans"
};

var hatValue = prop1["hat"];
var shirtValue = prop1["shirt"];
console.log(hatValue);

//access object with variables
var prop2={
    "12": "round",
    "13": "jersey",
    "14": "jeans"
};

var player = "12";
var play = prop2[player];
console.log(player);

//update object properties
var ourDog ={
    "name":"cody",
    "age": "12",
    "legs":"4",

}
ourDog.name= "ramu";
console.log(ourDog);

//delete object properties
var ourDog2 ={
    "name":"cody",
    "age": "12",
    "legs":"4",

}
delete ourDog2.age ;
console.log(ourDog2);


//object methods
var myObj ={
    gift :"pony",
    pet   :"kitten",
    bed:"sleigh"
};
function checkObj(prop){
    if(myObj.hasOwnProperty(prop)){
        return myObj[prop];
    
    }else{
        return "not found"
    }
}

console.log(checkObj("gift"))

//manipulating complex objects

var myMusic= [{
    "artist": "rahaman ",
    "music": "romance",
    "oscars":"2",
    "formats":["cd","online", "lp"],
    "gold":"true"
},
{
  "artist": "anirudh ",
    "music": "rock",
    "oscars":"0",
    "formats":["cd","online", "lp"],
    "gold":"false"  
}
  
]

//nested object 
var Dogs ={
    "animal":"dog",
    "legs":" 4",
    "puppies":{"name":"shiru" ,   "age":"1"}

}
var getDogs =Dogs.puppies["age"];
console.log(getDogs);
