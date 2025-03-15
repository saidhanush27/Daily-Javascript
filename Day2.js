//find length of string
var str1 = "hello";
str1 = str1.length
console.log(str1); 

//bracket to find the specific index(n) of a string 
var string = "sai dhanush";
string = string[0];
console.log(string);

//string immutables
var str2= "jello";
str2 = "hello";
console.log(str2);

//last index without knowing the length
var firstname = "sai"
firstname = firstname[firstname.length-1];
console.log(firstname);

//word blanks
function word(myNoun, myAdj, myVerb, myAdverb){
    var result=""
    result +=" the "+ myAdj +  myNoun  + myVerb + " to the store"+ myAdverb
    return result;
     
}
console.log(word("dog", "big "," ran", " quickly"));


//store mulitple values to the arrays
var array=["john",23];
console.log(array);

//nested array
var myArr =[["john",23],["sai",24]];
console.log(myArr);

//find length of an array
var myArr1 =[50,60,70];
myArr1= myArr1[0];
console.log(myArr1);

//wordblanks
var myArray = [18,63,55];
myArray[1] = 45;
console.log(myArray);


//mutlidimensonal arrays
var multi=[[11,22],[33,44,55],[[123,234,345],456,567]]
var mydata= multi[0][1];
console.log(mydata);


//manipulate array with push()
var ourArr =["sai","dhanush"]
ourArr.push(["is","happy"]);
console.log(ourArr);

//pop array()
var ourarr2 = [1,2,3];
var removeourarr2 = ourarr2.pop();
console.log(ourarr2);

//shift()
 var ourarr3 = ["sai","dhanush",["happy"]];
 var removeourarr3 = ourarr3.shift();
 console.log(ourarr3);

//unshift()
var ourarr4 = ["sai","dhanush",["happy"]];
ourarr4.shift();
ourarr4.unshift("happy");
console.log(ourarr4);

//function as reusable code
function ourReuse(){
    console.log("hello jello !");

}
ourReuse();
ourReuse();


//passing values to functions with arguments
function ourFunc(a,b){
    console.log(a-b);
}
ourFunc(10,5);


//global scope and functions
var myGlobal =10;
function f1(){
oopsGlobal =5;


}
function f2(){
    var output ="";
    if(typeof myGlobal!= "undefined"){
        output += "myGlobal " + myGlobal;
    }
    if(typeof oopsGlobal!= "undefined"){
        output += "oopsGlobal " + oopsGlobal;
    }
    console.log(output);
}
f1();
f2();


////local scope and functions

function localScope(){
    var myfunc =5;
    console.log(myfunc);
}
localScope();

