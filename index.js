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
// function login(msg,error){
//     if(error){
//      console.log("Error is "+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
//  function loginHandler(username,password,clbk){
//     if(username=="ptomer40"&& password=="12345"){
//         clbk("success",null);
//     }else{
//         clbk(null,"username or password is incorrect ")
//     }
//  }
//  loginHandler("ptomer40","12345",login)
// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 2000);

// console.log("three");





// settimeout(() => {
//     console.log("one");
//      settimeout(() => {
//         console.log("two");
//         settimeout(() => {
//             console.log("three");
//             settimeout(() => {
//                 console.log("four");
//                 settimeout(() => {
//                     console.log("five");
//                     settimeout(() => {
//                         console.log("six");
//                         settimeout(() => {
//                         console.log("seven");
                    

//             }, 2000);

//         }, 2000);

//     }, 2000);
//   },2000);
//  }, 2000);
// }, 2000);
// }, 2000);




const myPromise=new Promise((resolve,reject)=>{
    const username="ptomer40";
    const password="12345";
    if(username=="ptomer40"&& password=="12345"){
        resolve("login success");
    }
    else{
        reject("login failed");
    }
});

// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.error(msg);
// }).finally(()=>{
//     console.log("login process completed");
// })




// const myPromise=new Promise((resolve,reject)=>{
//     const a=10;
//     const b=11;
//     if(a%2==0 && b%2==0){
//         resolve("both are even");
//     }
//     else{
//         reject("one or both are odd");
//     }
// });




//  async function handleData(){
//     try{
//         await myPromise ;

//     }
//     catch (err){
//         console.log(err)
//     }
//     finally{
//         console.log("all done");
//     }
// }
// handleData();

const p1 = Promise.resolve("Data 1");
const p2 = Promise.resolve("Data 2");

Promise.all([p1, p2])
  .then((result) => {
    console.log(result); // ["Data 1", "Data 2"]
  })
  .catch((err) => {
    console.log(err);
  });