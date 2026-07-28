
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
