//filter:The filter() method creates a new array filled with elements that pass a test functionality.
//filter() desired element na pailey 'empty array' dei
//Example-1.
const numbers=[5,8,7,1,0.5,6,99]

//way-1 of using filter method
const bigNumber=numbers.filter(number=>number>7)  //numbers array each element number niye number>7 check hobey and checking pass korley bigNumber a store hobey seita.
console.log(bigNumber)

//way-2 of using filter method
let findSmall=number=>number<8     //findSmall fucntion 
const smallNumber=numbers.filter(findSmall)
console.log(smallNumber)

//Example-2
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
//filter those products whose price greater then 100

const productPriceGreaterThen100=products.filter(product=>product.price>100) //products array each product niye tar price checking hoisey
console.log('product price greater then 100 those products array:',productPriceGreaterThen100)

const blackProducts=products.filter(product=>product.color=='pink')
console.log('Black colored products array:',blackProducts)

