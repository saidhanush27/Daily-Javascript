//nested else if

function testsize(num){
    if (num < 5){
        return "tiny"
    }
    else if(num <10) {
     return "average"
    }
    else if (num <15){
        return "above average"
    }
    else if (num <20){
        return "good"
    }else{
        return "huge"
    }
}
console.log (testsize(7));

//cricket code
var names= ["Wicket", "six","four", "thats out !", "LBW"]
function scores(man,score){
   if( score = 1){
    return names[4];
} else if (score = 4){
    return names[3];
}else if (score = 6 ){
    return names [2];
} else if (score = 0){
    return names[0];
} else {
 return "change me " ;
}}
console.log(scores(4,5));


//chaining ifelse
function sizes(num){
    if (num< 5){
        return "tiny"
    }
    else if (num <10){
            return "small"
        }
    }
    console.log(sizes(7));


//switch case and default
function switchcase(num){
    var answer ="";

switch (num){
    case 1:
     answer = "alpha";
     break;  
     
    case 2:
    answer ="beta";
    break;

    case 3:
    answer ="Gama";
    break;
    
    case 4:
    answer ="delta";
    break;
   

    default:
    answer = "badboy";
    break;

}
return answer;
}    
console.log(switchcase(5));


//mutliple statements in switchcase
function sequential(val){
    var answer ="";

    switch (val){
        case 1:
        case 2:
        case 3:
        answer= "low";
        break;

        case 4:
        case 5:
        case 6:
        answer= "high";
        break;
        
        
    }
    return answer;
}
console.log(sequential(5));

//return a function to boolean value as ture or false
function isless(a,b){
    return a<b;

}
console.log(isless(10,15));

//return early pattern from functions
function abtest(a,b){
    if(a<0 || b<0){
      return "undefined";

    }
    return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
}
console.log(abtest(-2,2));
