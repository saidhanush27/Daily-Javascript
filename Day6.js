//mested arrays

var myPlants=[{
    type : "flowers",
    list :["rose","tulip","dandelion"]

},
{
type: "trees",
list: ["banyan", "mango","pine"]
},
];
var secondTree = myPlants[1].list[2];
console.log(secondTree)


//for loops
var ourArr=[];
for(var i =0 ;i <5;i++){
    ourArr.push(i);

}
console.log(ourArr);

//odd numbers with for loop

var oddArr=[];
for (var i = 1; i < 10; i += 2){
    oddArr.push(i);
}
console.log(oddArr);

//even numbers
var evenArr=[];
for (var i = 0; i < 10; i += 2){
    evenArr.push(i);
}
console.log(evenArr);


//descending order for even numbers
var des=[];
for(var i = 10; i>0;i -=2){
    des.push(i);
}
console.log(des);

var des1=[];
for(var i = 9; i>0;i -=2){
    des1.push(i);
}
console.log(des1);


//iterate through an array
var myarr=[9,10,11,];
var total=0;

 for(var i = 0; i <myarr.length;i++){
    total +=myarr[i];

 }
 console.log(total);

 //nested loops

 function multiply(arr){
    var product=1;
    for (var i = 0 ; i<arr.length; i ++){
        for (var j =0 ; j<arr[i].length; j ++)  {
            product *= arr[i][j]
        }
    }    
return product;
 }
 var product = multiply([[1,2],[3,4],[5,6,7]]);
 console.log(product);

 //do while loop
 var doArr=[];
 var i = 4;

 do{
 doArr.push(i);
 i++;
 }
 while(i<5)
console.log(i,doArr);

 //decimal number
 function randoms(){
    return Math.random();

 }
console.log(randoms());

//random wholel number
var  randomNumber = Math.floor(Math.random)* 20;
function randomwhole(){
    return Math.floor(Math.random()*10);
}
console.log(randomwhole());

//random numbers between range
function randomwho(ourMin,ourMax){
    return Math.floor(Math.random()* (ourMax - ourMin + 1)) + ourMin;

}
var myrandom =randomwho(1,9);
console.log(myrandom);