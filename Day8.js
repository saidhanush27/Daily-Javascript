//mutate an const if its an array with index 
const s = [5,6,7];
function editArr(){
    "use strict";

    s[0] = 1;
    s [1] =2;
    s [2] =3;
    
}
editArr();
console.log (s);


//prevent obj mutation in const 

function freezeobj(){
    "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14 
  };
    
  //Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
}catch (ex){
    console.log(ex);
 }
return MATH_CONSTANTS.PI;

}
const PI = freezeobj() ;

//arrow keyword
var myconcat = (arr1,arr2) =>  arr1.concat(arr2);
console.log(myconcat([1,2],[3,4]));


//default paramenter 
const increment = (function (){
    return function increment (number, value = 1){
        return number + value;
    };
}) ();
console.log(increment(5,2));
console.log (increment(5));

//rest operator
const sum = (function(){
    return function sum (...args){
    //return function sum (x,y,z){
       //const args = [x,y,z];
       return args.reduce((a,b) => a+b ,0);

    };
})  ();
console.log(sum(1,2,3,4));


//spread operator
//expands or spreads an array
const arr1 = ['jan','feb','mar','april','june'];
let arr2;
(function(){
    arr2= [...arr1];
    arr1[0]= 'potato';

}) ();
console.log(arr2);