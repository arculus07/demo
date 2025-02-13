// // // let a = 123;
// // // console.log(a);
// // // console.log(typeof a);
// // // a = String(a)
// // // console.log(a);
// // // console.log(typeof a);

// // // let b = "false";
// // // console.log(typeof b);
// // // b = Boolean(b)
// // // console.log(typeof b);

// // // let z = "1 3 5 7"
// // // z = parseInt(z)
// // // console.log(z);

// // // let x = true
// // // x = Number(x)
// // // console.log(x);

// // // let y = Infinity
// // // y = Boolean(y)
// // // console.log(y);

// // // let y1 = null
// // // y1 = Boolean(y1)
// // // console.log(y1);

// // // let z1 = ""
// // // z1 = Boolean(z1)
// // // console.log(z1);

// // // let z2 = " "
// // // z2 = Boolean(z2)
// // // console.log(z2);



// // let age = 18;
// // console.log(age == 18);

// // let user_name = "Ayush";
// // console.log(user_name == "Anshu");

// // let id = "27";
// // console.log(id === 27);

// // let v = true;
// // console.log(v == 1);

// // let x = Infinity;
// // console.log(x == -Infinity);

// // let v1 = true;
// // console.log(v1 == 2);

// // console.log(v1=='1') 

// // console.log(null == undefined)
// // console.log(null === undefined);

// // console.log(''==0);
// // console.log(''===0);

// // console.log(null == false);

// // console.log(undefined == 0);

// // console.log(NaN == NaN);

// // console.log('true' == true);

// // console.log('001' == 1);
// // console.log('010' == 10);

// // console.log(0  == null);
// // console.log(0 == undefined);

// let age = 20;
// // if(age>=18){
// //     console.log("Valid age");
// // }

// switch(age){
//     case age>18:
//         console.log("Valid age");
//         break;
//     case age>12:
//         console.log("Partially valid");
//         break;
//     case age<12:
//         console.log("Not valid");
//         break;
//     default:
//         console.log("Access Denied");
// }

// let age = 10

// age>=18?age=age-5:age=age+10;
// console.log(age);

// let a = "*";
// let n = 5;
// for(let i =0;i<n;i++){
//     if(i == 0||i == n-1){
//         console.log("* * * * *");
//     }
//     else{
//         console.log("*   *");
//     }
// }

// let a = 100;
// let b = 200;

// // let c = add()
// // add()
// function add(x,y){
//     // console.log(x+y);
//     // return a+b;
//     return x-y;
// }
// // add()
// // console.log(add());
// // add(a,b)
// console.log(add(a,b));

// let s_marks = 90;
// let t_marks = 100;

// let grade = (s_marks/t_marks)*100;
// console.log((grade));

// function add(a,b){
//     return a*b;
// // }
// let add = function(a,b){
//     return a-b;
// }

// let s = (a,b)=>{
//     return a/b;
// }
// console.log(s(87,98));

// let fun = (x,y)=>{
//     return x*y-y;
// }
// console.log(fun(7,9));

// let fun = (a,b)=>a-b;
// console.log(fun(9,8));

//IIFE

// (function(){
//  console.log("Run it");
// })();

// console.log(a);
// var a = 100;

// let a;
// console.log(a);

// let a = {
//   name:"BMW",
//   cost:75,
//   mileage:8.6,
  
//   start: function(){
//     console.log("Car is Starting");
    
//   },
//   stops:function(){
//     console.log("Car is Stopping");
//   },
//   accelerate:function(){
//     console.log("Car is accelerating");
//   }
// };

// console.log(a.name);
// console.log(a.start);
// console.log(a.cost);
// console.log(a.stops);
// a.start();
// a.stops();


// let b = {
//     name:"Anshu",
//     skills:"Faltu bakwas",
//     man:'Ayush ji',

//     starts:function(){
//         console.log("Anshu is bakbakaying");
//     },
//     stops:function(){
//         console.log("stop bolne ke baad bhi bakbakaying");
//     },
//     fav_work:function(){
//         console.log("Ayush ji ko piyaar karing");  
//     }
// };

// console.log(b.name+" "+b.skills+"karing and his marad is"+b.man);
// b.starts();
// b.stops();
// b.fav_work();

// let a = {
//     name:"Ayush",
//     age:20,
//     skills:"Java"
// };

// console.log(a);
// let c = a;
// console.log(c);

function exmp(car){
console.log(car);
}
function add(a,b){
    console.log(a+b);
}

function exmp2(fun){
    fun(700,800);
}
let c1 = {
    name:"BMW",
    cost:75.6,
    mileage:8.9
 };

//  let exmp2;
//  exmp2 = exmp1;
//  exmp2(c1)
 exmp2(add)
