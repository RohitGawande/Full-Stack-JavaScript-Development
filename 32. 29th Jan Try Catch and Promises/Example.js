
// // function sum(x,y){
// //     return x+y;
// // }
// // let var=[5, 4];
// // console.log(sum(...var));//Spread into smaller chunks 
// //rest
// function sumAll(...ar){
//     console.log(ar);
    
//     sum=0;
//     for (const element of ar) {
//         sum=sum+element;
//     }
//    return sum;
// }
// console.log(sumAll(1,2,3,4,5));

// // 
// try {
//     console.log(Rohit)
// } catch (error) {
//     console.log(error.name);
    
// }finally{
// console.log("Executed");

// }
// const userOne=()=>{
//     console.log("User One");
// }
// const userSec=()=>{
//     setTimeout(()=>{
//         console.log("Inside UserSec");
        
//     },3000);
//     console.log("User Second");
// }
// const userThird=()=>{
//     console.log("User Third");
// }
// userOne();
// userSec();
// userThird();
// const one=()=>{
//     return "I am One";
// }
// const Second=()=>{
//     return new Promise((resolve,reject) =>{
//         resolve("Credential Correct");
//     },3000);
// }
// const third=()=>{
//     return "I am Third";
// }
// const callMe = ()=>{
// let valOne=one();
// console.log(valOne);
// let valTwo=Second();
// console.log(valOne);
// let valThird=third();
// console.log(valOne);
// }