function calculateCartPrice(...num1) {
     return num1
}

console.log(calculateCartPrice(100, 200, 300, 400));



let user = {
     username: "Abdul Rahim Khan",
     price: 200
}

function handleObject (anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);     
}

// handleObject(user)
handleObject({
     username: "Rahim",
     price: 500
})



let myHeroes = ["Ironman", "Captain America", "Hulk", "Dr Srange", "Spiderman", "Antman", "Deadpool"]

function returnSecondValue (getArray){
return getArray[2]
}

// console.log(returnSecondValue(myHeroes));
console.log(returnSecondValue(["Ironman", "Captain America", "Hulk", "Dr Srange", "Spiderman", "Antman", "Deadpool"]));




