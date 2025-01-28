let userName={
    firstName:'Rohit',
    lastName:'Gawande',
    age:20,
    role:'Admin'
};
console.log(userName);
console.log(userName.role);
userName.age=21;
console.log(userName.age);
for (let  key in userName) {
    console.log(userName);
}