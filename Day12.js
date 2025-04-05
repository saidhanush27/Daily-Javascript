//nested functions of global,local scope (lexical scopes)
let a = 10;
function outer(){
    let b = 20;
    function inner (){
        let c = 30;
        console.log(a,b,c)
    }
    inner()
}
outer()

//closures  
function outer11(){
    let counter = 0;
    function inner1(){
        counter++;
        console.log(counter)
    }
    inner1()
}
outer11();

//invoking outer functions
function outer2(){
    let counter2 = 0;
    function inner2(){
        counter2++;
        console.log(counter2)
    }
    return inner2;
    
}
const fn = outer2();
fn ()
fn ()

//function currying - transforms one function to another 
function sum (a,b,c){
    return a+b+c
}
console.log(sum(2,3,4))

//another example - nested functions
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
               return fn(a,b,c)     
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5));
const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)