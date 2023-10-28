/* // Javascript console API
//  console.log("Hell world");
//  document.write("This is document write");
//  console.error("This is error");
//  console.warn("This is warning");
 var number1=34;
 var number2=56;
 console.log(number1+number2);
// Numbers
var num1=455;
var num2=56.67;
//  4.Datatypes in jaavscript
var str1="This is a string";
var str2="This is also a string";
// objects
var marks ={
    ravi:34,
    shubam:56,
    mayank:67
}
console.log(marks)
// Booleans
var a=true;
var b=false;
console.log(a,b)
var und;
console.log(und)
var n=null;
console.log(null)
*/
/*At a very high level there are mainly two types of data types in javascript
1.Primitive data types: Undefined,Null,Number,String,Boolean,symbol
2.Reference  data types: Arrays,Objects
*/
var arr=[1,2,3,4,5]
// Operators in javascript
// Arithmetic opertors
/*var a=34;
var b=56;
console.log("the value of a+b is",a+b);
console.log("the value of a-b is",a-b);
console.log("the value of a*b is",a*b);
console.log("the value of a/b is",a/b);
console.log("the value of a%b is",a%b);
// Assignment operators
var c=b;
// c+=2;
c-=2;
c*=2;
c/=2;
console.log(c)
// comparision operators
var x=34;
var y=56;
/*console.log(x==y)
console.log(x>=y)
console.log(x<=y)
*/
// Logical operators

// console.log(true && true)
/*
console.log(true && false)
console.log(false && true)
console.log(false && false)
// functions in javascript

function avg(a,b){
    return(a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);
// Conditons in javascript
var age=14;
if(age>8)
{

console.log("you are not a kid");

}
else{

    console.log("youa are a kid");
}

var arr=[1,2,3,4,5,6,7];
*/
/*
for(var i=0;i<arr.length;i++)
{

    console.log(arr[i]);
}
arr.forEach(function(element)
{

    console.log(element);
})
*/
/*
let j=0;
while(i<arr.length)
{
        console.log(arr[j]);
        j++;

}
// Array methdos
*/
/*
let myArr=["fan","Camera",34,null,true];
console.log(myArr.length);
myArr.pop();
myArr.push("Hatim");
myArr.shift();


console.log(myArr);
*/
// String methods in javascript
/*
let myLovelyString="Hatim is a good boy";
console.log(myLovelyString.length)
console.log(myLovelyString.indexOf("good"))
console.log(myLovelyString.slice(0,3))
d=myLovelyString.replace("Hatim","Virat");
d=d.replace("good","Bad");
console.log(d,myLovelyString)
*/
// Date functions in javascript
// let myDate=new Date();
// console.log(myDate);
// DOM Manipulation

/*let elem=document.getElementById('click');
console.log(elem);
let elemclass=document.getElementsByClassName("container");
console.log(elemclass);
// elemclass[0].style.background="yellow";
// elemclass[0].classList.add("bg-primary");
tn=document.getElementsByTagName('div')
console.log(tn);
CreatedElement=document.createElement('p');
CreatedElement.innerText="This is a created para";
tn[0].appendChild(CreatedElement);
CreatedElement2=document.createElement('b');
CreatedElement2.innerText="This is created bold";
tn[0].replaceChild(CreatedElement2,CreatedElement);
// removeChild(element);
sel=document.querySelector('.container')
console.log(sel);
console.log*/
// Events in javascript
/*function clicked(){
    console.log('The button was clicked')
}
window.onload = function(){
    console.log('The document was loaded')
}
firstcontainer.addEventListener('click',function(){
    console.log("Click hua")
})
firstcontainer.addEventListener('mouseover',function(){
    console.log("Moused on container")
})
firstcontainer.addEventListener('mouseout',function(){
    console.log("Mouse out of container")
})

firstcontainer.addEventListener('mouseup',function(){
    console.log("Mouse up of container")
})
firstcontainer.addEventListener('mousedown',function(){
    console.log("Mouse down of container")
})
firstcontainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b> We have clicked </b>"
    console.log("Clicked on  container")
})
*/
// Arrow functions
/*summ=(a,b)=>{
    return a+b;
}
virat=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired </b>" 
        console.log("I love virat");
}
setTimeout(virat,2000);*/
// JSON
obj={name:"hatim",length:1}
jso=JSON.stringify(obj);
console.log(jso);
parsed=JSON.parse('{"name":"Taher","length":1,"a":{"this":"that"}}')
console.log(parsed);
