//global scope vs local scope

var outerwear = "pants";
function myfunc(){
    var mywear= "tshirt";
    return mywear;
}

console.log(myfunc());
console.log(outerwear);


//return a value from func with return statement
function func(num){
    return num -7 ;
}
console.log(func(10));


//undefined value for a return statement
var sum =0;
function func1(){
    sum += 5;
}

//assign a return value to a number

var changed = 0 ;
function change(num ){
    return (num +5)/3;

}
changed = change(10);
console.log(changed);

//stand in line
 function nextInline(arr, item){
    arr.push(item);
    return arr.shift();

}
var testArr= [1,2,3,4,5];
console.log("before:" + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("after:" + JSON.stringify(testArr));

//if statement
 function trueorfalse(isItTrue){
    if(isItTrue){
        return "yes is true";
    }
    return " no its not true";
 }
console.log(trueorfalse(true));

//comparison operators ==
function testEqual(val){
 if (val == 12){
    return "equal"
 }
 return "not equal"
}
console.log(testEqual(10));

//strict equality ===
// will not convert
function testEqual(val){
    if (val === 12){
       return "equal"
    }
    return "not equal"
   }
   console.log(testEqual('12'));


 //comparison with inequality operators
    
 function testEqual(val){
    if (val != 12){
       return "not equal"
    }
    return "equal"
   }
   console.log(testEqual(99));

   //strict inequality
   function testEqual(val){
    if (val !== 12){
       return "not equal"
    }
    return "equal"
   }
   console.log(testEqual("3"));

   //logical AND operator
   function age(val){
    if (val >100){
       return "over 100"
    }
    if(val = 100){
    return "exact 100"
    }
    return "less than 100"

   }
console.log(age(100));


//comparison with logical AND
 function compare(val){
    if(val <= 50 && val>=25){
        return "inside"
    }
    return "outside"
 }
console.log(compare(36))


//logical OR

function Orstat(val){
    if (val <10|| val >20){
    return  "outside box"
    }
    return "inside box"
}
console.log(Orstat(13))
console.log(Orstat(23))

//else sttements
function ifElse(val){
    if (val <10){
    return  "out!"
    } 
    else{
    return "in!"
    }
}
console.log(ifElse(13))

//else if

function elseIf(val){
    if (val>10){
        return "he is greater than 10!"
    }
    else if (val<5){
        return "he is lesser than 5!"

    }
    else  {}
        return "somwhere between 5 to 10 "
    
   
}
console.log(elseIf(10));
