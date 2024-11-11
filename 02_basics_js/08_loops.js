                                                                         //  Filter

/* let programming = ["js", "py", "cpp", "rb", "java"]

let values = programming.forEach( (items) => {
    console.log(items);
});
console.log(values); */

/* let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNum = myNums.filter( (num) => num > 4 );
console.log(newNum); */

// let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNum = myNums.filter( (num) => {
    //   return num > 4 })
    // console.log(newNum);
    
    
/* let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNum = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum); */


                                                                                   //Map

/* let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNum = myNums.map( (num) => num + 10 )
console.log(newNum); */


                                                                              //  Chaining 

/* let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNum = myNums
             .map( (num) => num * 10 )
             .map( (num) => num + 1 ) 
             .filter( (num) => num >= 40 )   
console.log(newNum); */


                                                                                    //  reduce

/* let myNums = [1, 2, 3, 4];
let initialValue = 0;

let total = myNums.reduce( function (acc, currentValue) {
    console.log(`acc: ${acc} and currentValue: ${currentValue}`);
    return acc + currentValue
    }, initialValue );
    
    console.log(total); */
    
    
   /* let myNums = [1, 2, 3, 4];

let total = myNums.reduce( (acc, currentValue) => acc + currentValue, 0 );
console.log(total); */


let shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "pthon course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 3999
    }, 
]

let totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log(totalPrice);
