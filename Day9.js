//constructor in javascript
class person {
    constructor(name, age){
        this.name = name;
        this.age = age ;

    }
    calling(){
        console.log(`Name is ${this.name} and age is ${this.age}`)

    }

}
const person1 = new person("tom ", 22);
const person2 = new person("john ", 18);
const person3 = new person("sai ",21);
person1.calling();
person2.calling();
person3.calling();

//destructing an assigment operator
var voxel = {x:36, y:7.4,z :6.5};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
const {x:a, y:b, z:c } = voxel;// use this instead of full statement
console.log(a,b,c);

//another example 
const avg_temp = {
    today :35, tommorow :40
};

function getTempOfTmrw (TEMP){
    "use strict";
    const {tommorow: tempOfTmrw } = TEMP;
    return tempOfTmrw;
}
console.log(getTempOfTmrw(avg_temp));

//destructiong with nested objects 
const LOCAL_FORECAST = {
  today :{ min : 72, max : 75},
  tommorow: { min :45, max :55}
};

function getmaxoftmrw(forecast){
    "use strict";
    const {tommorow: {max:maxoftmrw}}= forecast;
    return maxoftmrw;
}
console.log(getmaxoftmrw(LOCAL_FORECAST));

//destructiong in arrays

const [l,m, ,n] = [1,2,3,4,5,6];
console.log(l, m, n);

let A = 8, B = 6;
(()=>{
    "use strict";
    [A,B] = [B,A] 
})();
console.log (A);
console.log (B);