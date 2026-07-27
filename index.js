// console.log("hello ");
// console.log("using js");
// let a=34;
// console.log("a="+a)
// if(a>10){
//    let a=40;
//     console.log("hi a inside the block:"+a);
// }
// // console.log("hey... a is now outside"+a)
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))
// const sum=(a,b)=>{return a+b};
// console.log(sum(12,30));

 //   const data=function(msg){
//     return "Hello ,i am js"+msg
// }
// data("and node")
//IIFE
//(()=>{console.log("Hi.. using and calling by IIFE")})();

// callback
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(2,6);
//     console.log("Hey, your result ="+result+"!! Well Done "+msg)
// }
// sumWithMsg(sum,"Alok")
function login(msg,error){
    if(error){
     console.log("Error is "+error)
    }
    else{
        console.log(msg)
    }
}
 function loginHandler(username,password,clbk){
    if(username=="ptomer40"&& password=="12345"){
        clbk("success",null);
    }else{
        clbk(null,"username or password is incorrect ")
    }
 }
 loginHandler("ptomer40","12345",login)