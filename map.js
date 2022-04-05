/*//1.normal array and function
//fat arrow function
let doubleIt=(number)=> number*2

const numbers=[1,2,3,4]
const doubledResult=[]

for(let element of numbers){
    doubledResult.push(doubleIt(element))
}
// console.log(doubledResult)

//now oporey normal array and function diye jei kaj ta kora hoisey seita 1 line a map use korey kora jay
//oporer kaj ta silo basically:-
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an Result array

//now using map :-
//a. const Result=numbers.map(doubleIt)
//b. const output = numbers.map(number => number * 2);
//c. (a,b,c all same result dibey)
const output = numbers.map(x => x * 2);
console.log(output)*/  //output:[1,4,6,8] 

//example-2: let in an array each friend ar name length ber kora lagbey using map
/*const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const lenghtOfEachFriendArray=friends.map(friend=>friend.length) //friends array each element hisabey friend nibey and tader length find korbey

console.log(lenghtOfEachFriendArray)*/

//example-3
//products arraay tey onk gula object
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
//now loop through all product name
const productName=products.map(product=>product.name)  //productName is a array type hobey
console.log(productName)
//loop through all product prices
// const productPrice=products.map(product=>product.price)
// console.log(productPrice)

//map ar sathey kichota mil asey foreach ar but difference holo foreach return korey na but map kicho retuern korey
products.forEach(product=>console.log(product)) //products array protita object console korbey


//remember map for loop ar moto kaj korey
//example-4
const arr=[1,2,3,4]

//multiple line code work using map()
arr.map(element=>{
    if(element>2){
        console.log(element) 
    }
    
})

//example-5
const numbers=[9,4]
//single line
const number=numbers.map(num=>Math.sqrt(num))  //single line a korley {} its not needed but multiline a korley {} mendatory
console.log(number)