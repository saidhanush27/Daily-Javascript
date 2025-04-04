//getters and setters in class and objects 
class book {
    constructor(author){
        this._author = author;

    }
    get writer(){
        return this._author;

    }
    set writer(updateAuthor){
        this._author = updateAuthor;

    }
}

//another example 
function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temprature(){
            return this._temp;

        }
        set temprature(updateTemp){
             this._temp = updateTemp;
        }
       }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(16);
let temp = thermos.temprature;
thermos.temprature = 26;
temp = thermos.temprature;
console.log(temp);


//import and require in javascript
import { capatilizeString } from "./Day11Export.js";
import { foo } from "./Day11Export.js";
//import only a variable 

import { bar } from "./Day11Export.js";
const cap = capatilizeString ("hello!");
console.log(foo);
console.log(bar);
//import all 
import * as capitalizeStrings from "./Day11Export.js";
console.log(capitalizeStrings);