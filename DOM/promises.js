                   // Promise

/* let promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB call, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve();
    }, 2000)
});

promiseOne.then(function(){
    console.log("Promise is consumed");
}) */



/* new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is compelete');
        resolve();
    }, 2000)
}).then(function(){
    console.log("Async 2 is resolved");
}) */ 



/* let promiseThree = new Promise(function (resolve, reject){
    setTimeout(() => {
        // console.log("Async task 3 is completeded");
        
        resolve({userName: "Abdul Rahim Khan", password: "1233445"});
    }, 2000);
})
promiseThree.then(function(user){
    console.log(user);  
}) */ 



/* let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({userName: "Abdul Rahim Khan", password: "1233445"})
        } else {
            reject('ERROR: Something went wrong') 
        }
    }, 2000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.userName
}).then((userName) => {
console.log(userName);
 }).catch( (error) => {
    console.log(error);
 }).finally(() => {
    console.log("Promise is either resolved or rejected");
 }) */ 



let PromiseFive = new Promise( (resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({userName: "JavaScript", password: "1233445"})
        } else {
            reject('ERROR: JS went wrong') 
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        let  response = await PromiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

