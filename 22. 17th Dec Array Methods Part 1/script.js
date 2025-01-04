let names=['Rohit','Shikhar','Virat','Yuvraj','Dhoni'];
// console.log(names);
// console.log(names.length);
// console.log(names[3]);
// console.log(names[names.length-1]);
// names[3]='Hardik';
// console.log(names);
let name=new Array('Name1','Name2');
console.log(name);
name.push('Bumrah');
console.log(name);
console.log(names.slice(1,4));
name.splice(2,0,'Shreyas','Sanju');
console.log(name);

//Concatinate

let arr1=['Apple','Ball','Cat','Dog'];
let arr2=['Egg','Fish','Gate','Horse'];
let arr3=[1,2,3,4];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2,arr3));
let arr4=[1,2,3,4,5,6];
arr4.fill('Rohit',2,5);
console.log(arr4);

console.log(arr1.includes('Apple'));
console.log(arr4.includes(4,3));
console.log(arr1.indexOf('Apple'));
console.log(Array.isArray(arr4));

console.log(arr1.join(' Rohit '));
console.log(typeof arr1);
let maths=[1,4,9,16];
console.log(maths.map(Math.sqrt));
