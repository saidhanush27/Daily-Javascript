//parse int function
function convert(str){
    return parseInt(str);

}
console.log(convert("56"));

//parse int with radix
function converttoInteger(str){
    return parseInt(str,2)
}
console.log (converttoInteger("1000"))

//ternary operator
// condition ? statement true : statement false;

function check(a,b){
    return a===b ? true:false;
}
console.log (check(1,2))
 
//multiple ternary operator
function checks(num){
    return  num >0 ? "positive": num <0 ? "negative":zero;

}
console.log(checks(7))

//var allows
// let doesnt allow declaration more than once
//const cant be reassigned again later


//check scope of var and let

function checkscope(){
"use strict";
 let i = " function scope";
 if (true){
    let i = "block scope ";

    console.log("block scope i is :", i);
 }
 console.log("function scope  i is :", i);
return i;

}
checkscope();

//const 
function constname(str){
 'use strict';
 const sentence = str + ' is cool!';
 
 for (let i =0 ;i<str.length; i ++){
    console.log(sentence);
 }
}
constname("sai dhanush ");