// alert("Welcome");
let players=["Rohit","Shikhar","Virat"]
let characteristic={
    postion:"UpperOrder",
    mode:"Attacking",
    getNum:function(){
        console.log(`Jersey No. is ${this.Rohit}`);
    }
}
Object.prototype.rohit=function(){
    console.log(`Rohit is a Student `);
}
players.rohit();

const user={
    name:"Name",
    email:"username@gmail.com"
}
const Teacher={
    makeVideos:true
}
const TeachingSupport={
    isAvailable:false
}

const TAssistant={
    makeassistant:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=user
Object.setPrototypeOf(TeachingSupport,Teacher)
 