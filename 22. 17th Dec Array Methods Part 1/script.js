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
console.log(maths.pop());
console.log(maths);
console.log(maths.reverse());
console.log(maths.shift());
let arr5=['Egg','Fish','Gate','Horse','Apple','Ball','Cat','Dog'];
console.log(arr5.sort());
console.log(arr5.reverse(arr5.sort()));
let arr6=['Egg','Fish','Gate','Horse','Apple','Ball','Cat','Dog'];

console.log(arr6.unshift("Apple1","Bat1"));
let name3="Rohit";
let arr7=name3.split('');
console.log(arr7);

//for of
let UpperFr=[];
for(const UpperL of arr6){
    UpperFr.push(UpperL.toUpperCase());
}
console.log(UpperFr);
//Break and COntinue 
for (let index = 0; index <=5; index++) {
    if (index==3) {
        break;
    }
    console.log(index);
}
for (let index = 0; index <=5; index++) {
    if (index==3) {
        continue;
    }
    console.log(index+" ");
}