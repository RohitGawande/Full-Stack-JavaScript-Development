// const  callback = (n)=>{
//     return n**2;
// }
// function cube(callback , n){
//     return callback*n;
// }
// console.log(cube(callback,2));
// const arr=["Rohit","Shikhar","Virat","Shreyas","Hardik"];
// arr.forEach((val)=>{
//     console.log(val);
// });
// console.log("")
// function myFunc(val){
//     console.log(val);
// }
//SetTimeOut
// setTimeout(()=>{
//     console.log("Rohit");
// },2000);
// setInterval(()=>{
//     console.log("Smile emoji");
// },3000)

//forEach
//Map
// filter 
// reduce 
// find 
// every 
// some 
// sort 
// const num=[1,2,3,4,5,6];
// const numSq=num.map((n)=>n*n);
// console.log(numSq);
// const countries=["India","England","Ireland","Finland"];
// const store= countries.filter((val)=>val.includes("land"));
// console.log(store);
// const num=[1,2,3,4,5,6];
// const sum=num.reduce((acc,curr)=>acc+curr,1);
// console.log(sum);

//Sort
const arr=["Rohit","Shikhar","Virat","Shreyas","Hardik"];
console.log(arr.sort());
console.log(arr.reverse());

// //Destructuring and spread and Rest 
// const sci=[2.72,3.14,9.81,37,100];
// let [e,pi,gravity,bodytemp,boiltemp]=sci;
// console.log(e,pi,gravity,bodytemp,boiltemp);
const arr1=[1,2,3];
let [val, , val1]=arr1;
console.log(val,val1);



